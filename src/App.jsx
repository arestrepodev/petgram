import "regenerator-runtime/runtime";
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from "@reach/router";
import { Logo } from "./components/Logo";
import { Home } from "./views/Home";
import { Detail } from "./views/Detail";
import { NavBar } from "./components/NavBar";
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
			<NavBar />
		</>
	);
};
