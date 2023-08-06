import React, {EventHandler, useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram.ts";
import styles from './Form.module.css';
import cn from "classnames";

const Form = () => {
	const {tg} = useTelegram();
	const [country, setCountry] = useState<string>('');
	const [street, setStreet] = useState<string>('');
	const [subjectType, setSubjectType] = useState<string>('');

	const handleCountryInputChange: EventHandler<React.ChangeEvent> = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCountry(event.target.value);
	}

	const handleStreetInputChange: EventHandler<React.ChangeEvent> = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStreet(event.target.value);
	}

	const handleSubjectTypeInputChange: EventHandler<React.ChangeEvent> = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSubjectType(event.target.value);
	}

	const handleTgMainButtonClick = useCallback(() => {
		const data = {
			country,
			street,
			subjectType
		}
		tg.sendData(JSON.stringify(data));
	}, [country, street, subjectType, tg]);

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Отправить данные'
		});
	}, [tg]);

	useEffect(() => {
		if (!street || !country) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}, [tg, country, street]);

	useEffect(() => {
		tg.onEvent('mainButtonClicked', handleTgMainButtonClick);
		return () => {
			tg.offEvent('mainButtonClicked', handleTgMainButtonClick);
		}
	}, [tg, handleTgMainButtonClick]);

	return (
		<form className={cn(styles.form)}>
			<h3>Введите данные</h3>
			<input
				className={cn(styles.input)}
				type="text"
				placeholder="Старана"
				value={country}
				onChange={handleCountryInputChange}
			/>
			<input
				className={cn(styles.input)}
				type="text"
				placeholder="Улица"
				value={street}
				onChange={handleStreetInputChange}
			/>
			<select
				className={cn(styles.select)}
				value={subjectType}
				onChange={handleSubjectTypeInputChange}
			>
				<option value="physical">Физ. лицо</option>
				<option value="legal">Юр. лицо</option>
			</select>
		</form>
	);
};

export default Form;