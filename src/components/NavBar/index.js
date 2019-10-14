import React from "react";
import { Nav, Link } from "./style";
import { MdPersonOutline, MdFavoriteBorder, MdHome } from "react-icons/md";

export const NavBar = () => {
	const SIZE = "30";
	return (
		<Nav>
			<Link to="/">
				<MdHome size={SIZE} title="Home" />
			</Link>
			<Link to="/favs">
				<MdFavoriteBorder size={SIZE} title="Favorites" />
			</Link>
			<Link to="/user">
				<MdPersonOutline size={SIZE} title="User" />
			</Link>
		</Nav>
	);
};
