import React from 'react';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';
import { Link } from 'react-router-dom';

const LoginForm = () => {
	return (
		<>
			<Form style={{ height: '330px' }}>
				<TextInput
					type='text'
					placeholder='Enter email'
					icon='alternate_email'
				/>
				<TextInput
					type='password'
					placeholder='Enter password'
					icon='lock'
				/>

				<Button>
					<span>Submit now</span>
				</Button>
				<div class='info'>
					Don't have an account? <Link to='/signup'>Signup</Link>{' '}
					instead.
				</div>
			</Form>
		</>
	);
};

export default LoginForm;
