import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LOGIN = gql`
	mutation login($input: UserCredentials!) {
		login(input: $input)
	}
`;

export const useLoginMutation = (email, password) => {
	const [mutation, { data, error, loading }] = useMutation(LOGIN);

	const login = (email, password) => {
		return mutation({ variables: { input: { email, password } } });
	};

	return { login, data, error, loading };
};
