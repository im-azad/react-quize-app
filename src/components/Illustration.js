import React from 'react';
import signupImage from '../assets/images/signup.svg';
import classes from '../styles/Illustration.module.css';

const Illustration = () => {
	return (
		<div>
			<div className={classes.illustration}>
				<img src={signupImage} alt='Signup' />
			</div>
		</div>
	);
};

export default Illustration;
