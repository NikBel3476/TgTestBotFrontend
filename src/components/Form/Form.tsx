import {useEffect} from 'react';
import {useTelegram} from "../../hooks/useTelegram.ts";

const Form = () => {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Send data'
		});
	}, [tg]);

	return (
		<div>
			form
		</div>
	);
};

export default Form;