import {useEffect} from 'react';
import './App.css'
import {useTelegram} from "./hooks/useTelegram.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import Header from "./components/Header";

function App() {
	const {tg} = useTelegram();

	useEffect(() => {
		tg.ready();
	}, [tg]);

	return (
		<div>
			<Header/>
			<RouterProvider router={router}/>
		</div>
	)
}

export default App
