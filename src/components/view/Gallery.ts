import { Component } from '../base/Component';
import { IEvents } from '../base/events';

export interface IGalleryData {
	catalog: HTMLElement[];
}

export class Gallery extends Component<IGalleryData> {
	catalog: HTMLElement[];

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);
	}

	setCatalog(items: HTMLElement[]) {
		this.container.append(...items);
	}
}