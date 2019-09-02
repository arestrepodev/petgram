import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";

export const App = () => {
	return (
		<>
			<Logo />
			<GlobalStyles />
			<ListOfCategories />
			<ListOfPhotoCards />
		</>
	);
};
