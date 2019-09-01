import styled from "styled-components";

export const ImgWrapper = styled.div`
	width: 100%;
	height: 0;
	display: block;
	overflow: hidden;
	padding: 56.25% 0 0 0;
	top: 10px;
	position: relative;
	border-radius: 8px;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
	object-fit: cover;
	position: absolute;
	top: 0;
	cursor: pointer;
`;

export const Button = styled.button`
	padding: 1rem 0;
	display: flex;
	align-items: center;
	& svg {
		margin-right: 4px;
	}
	& span {
		font-size: 18px;
	}
`;
