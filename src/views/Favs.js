import React from "react";
import Layout from "../components/Layout";
import ListOfFavs from "../components/ListOfFavs";

export const Favs = () => (
	<Layout title="Tus Favoritos" subtitle="Tus fotos favoritas en un solo lugar">
		<section>
			<ListOfFavs />
		</section>
	</Layout>
);
