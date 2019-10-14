import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/Animation";

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 55px;
	max-width: 500px;
	position: fixed;
	margin: 0 auto;
	z-index: 999;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fcfcfc;
	border-top: 1px solid #e0e0e0;
`;

export const Link = styled(LinkRouter)`
	width: 100%;
	height: 100%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: #888;
	text-decoration: none;
	&[aria-current] {
		color: #000;
		&::after {
			${fadeIn({ time: "0.1s" })}
			content: "•";
			position: absolute;
			bottom: 0;
			font-size: 2rem;
			line-height: 26px;
		}
	}
`;
