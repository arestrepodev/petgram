import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			let response = await fetch(
				"https://petgram-server-arnold.restrepoarnold.now.sh/categories"
			);
			response = await response.json();
			setCategories(response);
		};
		getCategories();
	}, []);

	return (
		<List>
			{categories.map(category => (
				<Item key={category.id}>
					<Category {...category} />
				</Item>
			))}
		</List>
	);
};
