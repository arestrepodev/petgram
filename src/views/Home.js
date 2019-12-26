import React from "react";
import Layout from "../components/Layout";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";

const HomePage = ({ categoryId }) => {
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

export const Home = React.memo(HomePage, (prevProps, props) => {
	return prevProps.id === props.id;
});
