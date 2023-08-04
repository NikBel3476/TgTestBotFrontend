import {createBrowserRouter} from "react-router-dom";
import ProductList from "../components/ProductList";
import Form from "../components/Form";

const BASE_URL = "/TgTestBotFrontend";

export const router = createBrowserRouter([
	{
		path: `${BASE_URL}/`,
		element: <ProductList />
	},
	{
		path: `${BASE_URL}/form`,
		element: <Form />
	}
]);