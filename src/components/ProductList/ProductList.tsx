import cn from "classnames";
import styles from './ProductList.module.css';
import ProductItem from "../ProductItem";
import {Product} from "../ProductItem/ProductItem.tsx";
import {useState} from "react";
import {useTelegram} from "../../hooks/useTelegram.ts";

const products: Product[] = [
	{ id: '1', title: 'Рубашка', price: 100, description: 'Рубашка'},
	{ id: '2', title: 'Штаны', price: 200, description: 'Штаны'},
	{ id: '3', title: 'Футболка', price: 50, description: 'Футболка'},
	{ id: '4', title: 'Кроссовки', price: 300, description: 'Кроссовки'},
]

const getTotalPrice = (products: Product[]) =>
	products.reduce((totalPrice, product) =>
		totalPrice + product.price
	, 0)


const ProductList = () => {
	const [addedItems, setAddedItems] = useState<Product[]>([]);

	const addItemHandler = (product: Product) => {
		const { tg } = useTelegram();
		const alreadyAdded = addedItems.find(item => item.id === product.id);
		let newItems: Product[] = [];
		if (alreadyAdded) {
			newItems = addedItems.filter(item => item.id !== product.id);
		} else {
			newItems = [...addedItems, product];
		}

		setAddedItems(newItems);

		if (newItems.length === 0) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Всего: ${getTotalPrice(newItems)}`
			})
		}
	}

    return (
        <div className={cn(styles.list)}>
					{products.map(product => (
						<ProductItem
							product={product}
							addItemHandler={addItemHandler}
							className={styles.item}
						/>
					))}
        </div>
    );
};

export default ProductList;