import React from "react";
import { Helmet } from "react-helmet";
import ListOfFavs from "../components/ListOfFavs";

export const Favs = () => (
	<section>
		<Helmet>
			<title>Petgram - Tus Favoritos</title>
			<meta
				name="description"
				content="Tus fotos favoritas en un solo lugar"
			></meta>
		</Helmet>
		<h1>Favorites</h1>
		<ListOfFavs />
	</section>
);
