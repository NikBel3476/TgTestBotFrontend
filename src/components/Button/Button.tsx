import {EventHandler, FC, ReactNode, SyntheticEvent} from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
	className?: string;
	children?: ReactNode;
	onClick?: EventHandler<SyntheticEvent>;
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
	return (
		<button className={cn(className, styles.buttonMain)} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;