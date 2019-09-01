import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyles } from "./GlobalStyles";

export const App = () => {
	return (
		<div>
			<GlobalStyles />
			<ListOfCategories />
		</div>
	);
};
