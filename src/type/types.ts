import cardapio from 'data/cardapio.json';
import filtros from '../pages/Cardapio/Filtros/filtros.json';

export type Cardapio = typeof cardapio;

export type Prato = (typeof cardapio)[0];

export type Filtro = typeof filtros;
