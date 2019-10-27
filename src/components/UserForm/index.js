import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, FormTitle, Error } from './styles';

export const UserForm = ({ onSubmit, title, disabled, error }) => {
	const email = useInputValue('');
	const password = useInputValue('');
	const handleSubmit = event => {
		event.preventDefault();
		onSubmit({ email: email.value, password: password.value });
	};
	return (
		<>
			<Form
				onSubmit={handleSubmit}
				autoComplete='autocomplete'
				disabled={disabled}
			>
				<FormTitle>{title}</FormTitle>
				<Input
					type='email'
					placeholder='Email'
					{...email}
					required
					disabled={disabled}
				/>
				<Input
					type='password'
					placeholder='Password'
					{...password}
					required
					disabled={disabled}
				/>
				<Button type='submit' disabled={disabled}>
					{title}
				</Button>
				{error && <Error>{error}</Error>}
			</Form>
		</>
	);
};
