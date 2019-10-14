import React from "react";
import { Image, Link } from "./styles.js";

const DEFAULT_IMAGE = "https:/i.imgur.com/dJa0Hpl.jpg";

export const Category = ({
	cover = DEFAULT_IMAGE,
	path = "#",
	emoji = "?"
}) => (
	<Link to={path}>
		<Image src={cover} alt="" />
		{emoji}
	</Link>
);
