
import { Component } from '../base/Component';

interface IFormState<T> {
	valid: boolean;
	errors: string[];
}

export class Form<T> extends Component<IFormState<T>>{

}

export class FormContacts<T> extends Form<T> {

}

export class FormOrder<T> extends Form<T> {

}