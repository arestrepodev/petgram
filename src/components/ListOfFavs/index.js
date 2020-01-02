import React from "react";
import PropTypes from "prop-types";
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

ListOfFavs.propTypes = {
	favs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			src: PropTypes.string.isRequired
		})
	)
};
export default ListOfFavs;
