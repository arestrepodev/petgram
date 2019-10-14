import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const LIKE_PHOTO = gql`
	mutation likeAnonymousPhoto($input: LikePhoto!) {
		likeAnonymousPhoto(input: $input) {
			id
			liked
			likes
		}
	}
`;

const DEFAULT_IMAGE =
	"https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const key = `like-${id}`;
	const [liked, setLiked] = useLocalStorage(key, false);
	const [show, element] = useNearScreen();
	const [toggleLike] = useMutation(LIKE_PHOTO, {
		variables: { input: { id } }
	});

	const handleFavClick = () => {
		!liked && toggleLike();
		setLiked(!liked);
	};

	return (
		<Article ref={element}>
			{show && (
				<>
					<a href={`/?detail=${id}`}>
						<ImgWrapper>
							<Img src={src} alt="User" />
						</ImgWrapper>
					</a>
					<FavButton liked={liked} likes={likes} onClick={handleFavClick} />
				</>
			)}
		</Article>
	);
};
