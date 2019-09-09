import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([]);
	const [showFixed, setShowFixed] = useState(false);

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

	useEffect(() => {
		const onScroll = event => {
			const newShowFixed = window.scrollY > 200;
			showFixed !== newShowFixed && setShowFixed(newShowFixed);
		};
		document.addEventListener("scroll", onScroll);
		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, [showFixed]);

	const renderList = fixed => (
		<List className={fixed ? "fixed" : ""}>
			{categories.map(category => (
				<Item key={category.id}>
					<Category {...category} />
				</Item>
			))}
		</List>
	);

	return (
		<>
			{renderList()} {showFixed && renderList(true)}
		</>
	);
};
