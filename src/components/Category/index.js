import React from "react";
import { Anchor, Image, Editor } from "./styles.js";

const DEFAULT_IMAGE = "https:/i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
	<Anchor href={path}>
		<Image src={cover} alt="" />
		{emoji}
	</Anchor>
);