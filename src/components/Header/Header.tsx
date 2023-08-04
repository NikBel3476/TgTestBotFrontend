import {FC} from 'react';
import cn from "classnames";
import styles from './Header.module.css';
import Button from "../Button";
import {useTelegram} from "../../hooks/useTelegram.ts";

type HeaderProps = {
	className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
	const { user, onClose, onButtonToggle } = useTelegram();

	return (
		<header className={cn(className, styles.header)}>
			<Button onClick={onClose}>Закрыть</Button>
			<Button onClick={onButtonToggle}>Toggle</Button>
			{/* eslint-disable-next-line */}
			{/* @ts-ignore */}
			<span className="username">{user?.username}</span>
		</header>
	);
};

export default Header;