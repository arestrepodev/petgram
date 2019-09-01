import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyles } from "./GlobalStyles";
import { PhotoCard } from "./components/PhotoCard";

export const App = () => {
	return (
		<div>
			<GlobalStyles />
			<ListOfCategories />
			<PhotoCard />
		</div>
	);
};
