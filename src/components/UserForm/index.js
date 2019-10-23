import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, FormTitle } from './styles';

export const UserForm = ({ onSubmit, title }) => {
	const email = useInputValue('');
	const password = useInputValue('');

	return (
		<>
			<FormTitle>{title}</FormTitle>
			<Form onSubmit={onSubmit}>
				<Input type='email' placeholder='Email' {...email} />
				<Input type='password' placeholder='Password' {...password} />
				<Button>{title}</Button>
			</Form>
		</>
	);
};
