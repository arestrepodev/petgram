import React from "react";
import PropTypes from "prop-types";
import { Button } from "./style";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const FavButton = ({ liked, likes, onClick }) => {
	const Icon = liked ? MdFavorite : MdFavoriteBorder;
	return (
		<Button onClick={onClick}>
			<Icon size="24px" />
			<span>{likes} likes</span>
		</Button>
	);
};

FavButton.propTypes = {
	liked: PropTypes.bool.isRequired,
	likes: PropTypes.number.isRequired,
	handleClick: PropTypes.func.isRequired
};
