import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyles } from "./GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

export const App = () => {
	return (
		<div>
			<GlobalStyles />
			<ListOfCategories />
			<ListOfPhotoCards />
		</div>
	);
};
