import React from "react";
import { useGetFavs } from "../../hooks/useGetFavs";
import { Grid, Img, Link } from "./style";

const ListOfFavs = () => {
	const { loading, error, data } = useGetFavs();
	if (loading) return <p>Cargando Favoritos...</p>;
	return (
		<Grid>
			{data?.favs.map(fav => (
				<Link key={fav.id} to={`/detail/${fav.id}`}>
					<Img src={fav.src} />
				</Link>
			))}
		</Grid>
	);
};

export default ListOfFavs;
