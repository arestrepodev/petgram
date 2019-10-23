import React from 'react';
import styled from 'styled-components';
import Context from '../Context';

const ErrorMessage = styled.p`
	padding: 0 1rem;
`;

export const NotRegisteredUser = () => {
	return (
		<Context.Consumer>
			{({ isAuth, activateAuth }) => {
				return (
					<form onSubmit={activateAuth}>
						<button>Activar Usario</button>
					</form>
				);
			}}
		</Context.Consumer>
	);
};
