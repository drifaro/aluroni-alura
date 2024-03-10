import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'type/types';

export const Inicio = () => {
  const pratosRecomendados = [...cardapio];
  const pratosRecomendadosSort = pratosRecomendados.sort(() => Math.random() - 0.5).splice(0, 3);
  const navigate = useNavigate();

  const redirectDetails = (prato: Prato) => {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  };

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendadosSort.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <button className={styles.recomendado__botao} onClick={() => redirectDetails(item)}>
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do alurone" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro,3185. <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};
