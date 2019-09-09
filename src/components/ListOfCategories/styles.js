import styled from "styled-components";

export const List = styled.ul`
	display: flex;
	overflow-y: hidden;
	overflow-x: auto;
	width: 100%;
	list-style: none;
	&.fixed {
		background: #fff;
		border-radius: 60px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		/* left: 0; */
		max-width: 500px;
		z-index: 99;
		padding: 8px;
		position: fixed;
		top: -20px;
		transform: scale(0.5);
	}
`;

export const Item = styled.li`
	padding: 0 8px;
`;
