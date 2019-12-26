import styled from "styled-components";

export const Button = styled.button`
	background: #8d00ff;
	border-radius: 3px;
	color: #fff;
	height: 32px;
	padding: 0.5rem 1rem;
	display: block;
	text-align: center;
	cursor: pointer;
	&[disabled] {
		opacity: 0.6;
	}
`;
