import React from 'react';
import Answers from './Answers';
import classes from '../styles/Question.module.css';
const Question = () => {
	return (
		<div>
			<div className={classes.question}>
				<div className={classes.questionTitle}>
					<span className='material-icons-outlined'>
						{' '}
						help_outline{' '}
					</span>
					Here goes the question from Learn with Sumit?
				</div>

				<Answers></Answers>
			</div>
		</div>
	);
};

export default Question;
