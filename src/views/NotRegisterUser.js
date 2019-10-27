import React from 'react';
import styled from 'styled-components';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { useLoginMutation } from '../hooks/useLoginMutation';

export const NotRegisteredUser = () => {
	// Register Mutation Hook
	const {
		register,
		data: dataRegister,
		error: errorRegister,
		loading: loadingRegister
	} = useRegisterMutation();

	// Login Mutation Hook
	const {
		login,
		data: dataLogin,
		error: errorLogin,
		loading: loadingLogin
	} = useLoginMutation();

	return (
		<Context.Consumer>
			{({ isAuth, activateAuth }) => {
				const handleRegister = ({ email, password }) => {
					register(email, password)
						.then(activateAuth)
						.catch(error => console.error(error));
				};

				const handleLogin = ({ email, password }) => {
					login(email, password)
						.then(activateAuth)
						.catch(error => console.error(error));
				};

				const errorMsgRegister =
					errorRegister && 'El usuario ya existe o hay algún problema.';

				const errorMsgLogin =
					errorLogin && 'El email o la contraseña son inválidos.';

				return (
					<>
						<UserForm
							onSubmit={handleRegister}
							title='Registarse'
							disabled={loadingRegister}
							error={errorMsgRegister}
						/>
						<UserForm
							onSubmit={handleLogin}
							title='Iniciar Sesión'
							disabled={loadingLogin}
							error={errorMsgLogin}
						/>
					</>
				);
			}}
		</Context.Consumer>
	);
};
