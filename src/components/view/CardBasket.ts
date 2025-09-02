import { Card } from './Card';
import { IEvents } from '../base/events';
import { ensureElement } from '../../utils/utils';

export class CardBasket extends Card  {

	protected titleCard: HTMLElement;
	protected indexCard: HTMLElement;
	protected deleteButton: HTMLButtonElement;

	constructor(container: HTMLElement, events: IEvents) {
		super(container, events);

		this.titleCard = ensureElement<HTMLElement>('.card__title', container);
		this.indexCard = ensureElement<HTMLElement>('.basket__item-index', container)
		this.deleteButton = ensureElement<HTMLButtonElement>('.basket__item-delete', container);

		this.deleteButton.addEventListener('click', () => {
			this.events.emit('basket-card:delete',  { id: this.id });
		})
	}

	protected set title(value: string){
		this.setText(this.titleCard, value);
	};

	protected set index(value: number) {
		this.setText(this.indexCard, value);
	};

}