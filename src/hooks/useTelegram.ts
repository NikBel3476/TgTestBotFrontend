import {TelegramWebApps} from "telegram-webapps-types";

// eslint-disable-next-line
// @ts-ignore
const tg: TelegramWebApps.WebApp = window.Telegram.WebApp;

export const useTelegram = () => {
	const onClose = () => {
		tg.close();
	}

	const onButtonToggle = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}

	return {
		tg,
		user: tg.initDataUnsafe?.user,
		onClose,
		onButtonToggle
	}
}