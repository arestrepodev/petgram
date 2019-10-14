import React from "react";
import { useGetSinglePhoto } from "../hooks/useSinglePhoto";
import { PhotoCard } from "../components/PhotoCard";

const renderSinglePhoto = (data, loading, error) => {
	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Error...</p>;
	const { photo = {} } = data;
	return <PhotoCard {...photo} />;
};

export const Detail = ({ detailId }) => {
	const { data, loading, error } = useGetSinglePhoto(detailId);
	return renderSinglePhoto(data, loading, error);
};
