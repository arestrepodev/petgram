import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
	"https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const key = `like-${id}`;
	const [liked, setLiked] = useLocalStorage(key, false);
	const [show, element] = useNearScreen();

	const Icon = liked ? MdFavorite : MdFavoriteBorder;

	return (
		<Article ref={element}>
			{show && (
				<>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt="User" />
						</ImgWrapper>
					</a>
					<Button onClick={() => setLiked(!liked)}>
						<Icon size="24px" />
						<span>{likes} likes</span>
					</Button>
				</>
			)}
		</Article>
	);
};
