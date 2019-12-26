import React from "react";
import { Helmet } from "react-helmet";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";

export const Home = ({ categoryId }) => {
	return (
		<>
			<Helmet>
				<title>Petgram - Tu App de Fotos de Mascotas</title>
				<meta
					name="description"
					content="En Petgram puedes encontrar fotos de animales domesticos muy bonitos"
				></meta>
			</Helmet>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={categoryId} />
		</>
	);
};
