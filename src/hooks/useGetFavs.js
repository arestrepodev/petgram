import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_FAVS = gql`
	query getFavs {
		favs {
			id
			categoryId
			src
			likes
			userId
		}
	}
`;

export const useGetSinglePhoto = () => {
	const { laoding, data, error } = useQuery(GET_FAVS);
	return { laoding, data, error };
};
