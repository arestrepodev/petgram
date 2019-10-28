import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import gql from 'graphql-tag';

const LIKE_PHOTO = gql`
	mutation likePhoto($input: LikePhoto!) {
		likePhoto(input: $input) {
			id
			liked
			likes
		}
	}
`;

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, element] = useNearScreen();
	const [toggleLike] = useMutation(LIKE_PHOTO, {
		variables: { input: { id } }
	});

	const handleFavClick = () => {
		toggleLike();
	};

	return (
		<Article ref={element}>
			{show && (
				<>
					<Link to={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt='User' />
						</ImgWrapper>
					</Link>
					<FavButton liked={liked} likes={likes} onClick={handleFavClick} />
				</>
			)}
		</Article>
	);
};
