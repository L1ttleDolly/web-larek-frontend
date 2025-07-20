import { Component } from './base/Component';


export interface ICard<T> {
	title: string;
	price: number;
}

export class Card<T> extends Component<ICard<T>> {

}

class CardCatalog<T> extends Card<T> {

}

class CardBasket<T> extends Card<T> {

}

class cardModal<T> extends Card<T> {

}