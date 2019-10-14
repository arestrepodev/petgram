import React from "react";
import "regenerator-runtime/runtime";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useGetSinglePhoto } from "./hooks/useSinglePhoto";
import { Logo } from "./components/Logo";
import { PhotoCard } from "./components/PhotoCard";
import { Home } from "./views/Home";
import { Detail } from "./views/Detail";
import { Router } from "@reach/router";

export const App = () => {
	return (
		<>
			<Logo />
			<GlobalStyles />
			<Router>
				<Home path="/" />
				<Home path="/pet/:categoryId" />
				<Detail path="/detail/:detailId" />
			</Router>
		</>
	);
};
