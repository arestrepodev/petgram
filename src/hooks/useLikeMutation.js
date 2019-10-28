import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LIKE_PHOTO = gql`
	mutation likePhoto($input: LikePhoto!) {
		likePhoto(input: $input) {
			id
			liked
			likes
		}
	}
`;
export const useLikeMutation = id => {
	const [mutation, { data, error, loading }] = useMutation(LIKE_PHOTO);
	const likePhoto = id => {
		mutation({ variables: { input: id } });
	};

	return { likePhoto, data, error, loading };
};
