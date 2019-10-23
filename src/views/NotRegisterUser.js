import React from 'react';
import styled from 'styled-components';
import Context from '../Context';
import { UserForm } from '../components/UserForm';

const ErrorMessage = styled.p`
	padding: 0 1rem;
`;

export const NotRegisteredUser = () => {
	return (
		<Context.Consumer>
			{({ isAuth, activateAuth }) => {
				return (
					<>
						<UserForm onSubmit={activateAuth} title='Registarse' />
						<UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
					</>
				);
			}}
		</Context.Consumer>
	);
};
