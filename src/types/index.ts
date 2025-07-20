type TPaymentMethod = 'online' | 'on_delivery';

export interface IUserData {
	payment: TPaymentMethod; //два варианта
	email: string;
	phone: string;
	address: string;
}

export interface IProduct { //карточка товара
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | null;
}

export interface IProductsData { //каталог всех карточек
	products: IProduct[];
	preview: string | null;
}

export interface  IProductsCatalog {
	fillCatalog(item: IProduct): void;
	getCatalog(): IProductsData;
}

export interface IUserBasket {
	addItem(item: IProduct): void;
	deleteItem(cardId: string): void; //может быть понадобиться функция
	clearBasket(): void; //очистка всех карточек из корзины
	getItemsList(): TBasketItem[]; //получения списка карточек
	checkedAllItems(): number;
}
/*export interface IOrderResult {
	id: string; // результат для успешного подтверждения покупки
}*/


export type TPayment = Pick<IUserData, 'payment' | 'address'>;
export type TContactInfo = Pick<IUserData, 'email' | 'phone'>;

export type  TBasketItem = Pick<IProduct, 'id' | 'title' | 'price'>;
export  type TProductCardPage = Pick<IProduct, 'image' | 'title' | 'category' | 'price'>

export  type TProductsCardsPage = Pick<IProductsData, 'products'> //массив картчоек на главной странице