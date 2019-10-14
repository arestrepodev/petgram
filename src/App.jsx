import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import {useGetSinglePhoto} from "./hooks/useSinglePhoto"
import {PhotoCard} from "./components/PhotoCard"
import "regenerator-runtime/runtime";

const renderSinglePhoto = (data, loading, error) => {
	if(loading) return <p>Cargando...</p>
	if(error) return <p>Error...</p>
	const { photo = {} } = data;	
	return <PhotoCard {...photo} />
}

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search);
	const detailId = urlParams.get("detail");
	const {data, loading, error} = useGetSinglePhoto(detailId);
	
	return (
		<>
			<Logo />
			<GlobalStyles />
			{detailId ? (
				renderSinglePhoto(data,loading,error)
			) : (
				<>
					<ListOfCategories />
					<ListOfPhotoCards categoryId={3} />
				</>
			)}
		</>
	);
};
