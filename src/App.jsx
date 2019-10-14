import React from "react";
import "regenerator-runtime/runtime";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useGetSinglePhoto } from "./hooks/useSinglePhoto";
import { Logo } from "./components/Logo";
import { PhotoCard } from "./components/PhotoCard";
import { Home } from "./views/Home";
import { Router } from "@reach/router";

const renderSinglePhoto = (data, loading, error) => {
	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Error...</p>;
	const { photo = {} } = data;
	return <PhotoCard {...photo} />;
};

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search);
	const detailId = urlParams.get("detail");
	const { data, loading, error } = useGetSinglePhoto(detailId);

	return (
		<>
			<Logo />
			<GlobalStyles />
			{detailId ? (
				renderSinglePhoto(data, loading, error)
			) : (
				<Router>
					<Home path="/" />
					<Home path="/pet/:id" />
				</Router>
			)}
		</>
	);
};
