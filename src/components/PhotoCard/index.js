import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
	"https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const element = useRef(null);

	const [show, setShow] = useState(false);

	useEffect(() => {
		Promise.resolve(
			typeof window.IntersectionObserver !== "undefined"
				? window.IntersectionObserver
				: import("intersection-observer")
		).then(() => {
			const observer = new window.IntersectionObserver(
				entries => {
					const { isIntersecting } = entries[0];
					if (isIntersecting) {
						setShow(true);
						observer.disconnect();
					}
				},
				{
					threshold: 0.5
				}
			);

			observer.observe(element.current);
		});
	}, [element]);

	return (
		<Article ref={element}>
			{show && (
				<>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt="User" />
						</ImgWrapper>
					</a>
					<Button>
						<MdFavoriteBorder size="24px" />
						<span>{likes} likes</span>
					</Button>
				</>
			)}
		</Article>
	);
};
