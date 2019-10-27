import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const REGISTER = gql`
	mutation signup($input: UserCredentials!) {
		signup(input: $input)
	}
`;

export const useRegisterMutation = (email, password) => {
	const [mutation, { data, error, loading }] = useMutation(REGISTER);
	const register = (email, password) => {
		return mutation({ variables: { input: { email, password } } });
	};

	return { register, data, error, loading };
};
