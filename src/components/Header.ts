import { Component } from './base/Component';

export interface IHeaderData<T> {
	counter: number;
}

export class Header<T> extends Component<IHeaderData<T>> {
	basketButton: HTMLButtonElement;
	counterElement: HTMLElement;

}