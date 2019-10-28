import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { useLoginMutation } from '../hooks/useLoginMutation';

export const NotRegisteredUser = () => {
	const { activateAuth } = useContext(Context);
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

	const handleRegister = ({ email, password }) => {
		register(email, password)
			.then(({ data }) => {
				const { signup } = data;
				console.log(signup);
				activateAuth();
			})
			.catch(error => console.error(error));
	};

	const handleLogin = ({ email, password }) => {
		login(email, password)
			.then(({ data }) => {
				const { login } = data;
				activateAuth(login);
			})
			.catch(error => console.error(error));
	};

	const errorMsgRegister =
		errorRegister && 'El usuario ya existe o hay algún problema.';

	const errorMsgLogin = errorLogin && 'El email o la contraseña son inválidos.';

	return (
		<>
			<UserForm
				onSubmit={handleRegister}
				title='Registarse'
				disabled={loadingRegister}
				error={errorMsgRegister}
				loading={loadingRegister}
			/>
			<UserForm
				onSubmit={handleLogin}
				title='Iniciar Sesión'
				disabled={loadingLogin}
				error={errorMsgLogin}
				loading={loadingLogin}
			/>
		</>
	);
};
