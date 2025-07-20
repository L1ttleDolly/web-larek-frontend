import { Component } from './base/Component';

export interface IGalleryData<T> {
	catalog: HTMLElement[ ]
}

export class Gallery<T> extends Component<IGalleryData<T>> {
	catalog: HTMLElement[ ]

}