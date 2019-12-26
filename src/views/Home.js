import React from "react";
import Layout from "../components/Layout";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";

export const Home = ({ categoryId }) => {
	return (
		<Layout
			title="Tu App de Fotos de Mascotas"
			subtitle="En Petgram puedes encontrar fotos de animales domesticos muy bonitos"
		>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={categoryId} />
		</Layout>
	);
};
