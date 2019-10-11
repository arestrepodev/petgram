import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import "regenerator-runtime/runtime";

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search);
	const detailId = urlParams.get("detail");
	console.log(detailId);

	return (
		<>
			<Logo />
			<GlobalStyles />
			{detailId ? (
				<h1>Detail Id</h1>
			) : (
				<>
					<ListOfCategories />
					<ListOfPhotoCards categoryId={1} />
				</>
			)}
		</>
	);
};
