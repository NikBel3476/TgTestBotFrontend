import React, {FC} from 'react';
import styles from './ProductItem.module.css';
import cn from "classnames";
import Button from "../Button";

export type Product = {
	id: string,
	title: string,
	description: string,
	price: number
}

type ProductItemProps = {
	product: Product,
	className?: string,
	addItemHandler: (product: Product) => void
}

const ProductItem: FC<ProductItemProps> = ({product, className, addItemHandler}) => {
	return (
		<div className={cn(className, styles.product)}>
			<div className={cn(styles.img)}/>
			<div className={cn(styles.title)}>{product.title}</div>
			<div className={cn(styles.description)}>{product.description}</div>
			<div className={cn(styles.price)}>
				<span>
					Стоимость: <b>{product.price}</b>
				</span>
			</div>
			<Button className={styles.addBtn} onClick={() => addItemHandler(product)}>
				Добавить в корзину
			</Button>
		</div>
	);
};

export default ProductItem;