import React, {EventHandler, useEffect} from 'react';
import './App.css'
import {TelegramWebApps} from "telegram-webapps-types";

// eslint-disable-next-line
// @ts-ignore
const tg: TelegramWebApps.WebApp = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const handleCloseButtonClick: EventHandler<React.MouseEvent> = () => {
        tg.close();
    }

  return (
    <div>
        <p>Привет</p>
        <button onClick={handleCloseButtonClick}>Закрыть</button>
    </div>
  )
}

export default App
