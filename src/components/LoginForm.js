import React from 'react';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

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
					Don't have an account? <a href='signup.html'>Signup</a>{' '}
					instead.
				</div>
			</Form>
		</>
	);
};

export default LoginForm;
