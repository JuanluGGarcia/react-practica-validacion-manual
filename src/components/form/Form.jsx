import { useState } from 'react';
import Offer from '../offer/Offer';
import { StyledFormContainer, StyledInputContainer, StyledInput, StyledTextTerms, StyledSpanTerms, StyledErrorMessage, StyledHeroForm } from './style';

const Form = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		lastname: '',
		email: '',
		password: '',
		isDirty: {
			name: false,
			lastname: false,
			email: false,
			password: false
		},
		errors: {
			name: false,
			lastname: false,
			email: false,
			password: false
		}
	});

	return (
		<StyledHeroForm>
			<Offer />
			<StyledFormContainer>
			

			
				<form onSubmit={handleSubmit}>
					<StyledInputContainer>
						<StyledInput
							type='text'
							name='name'
							id='name'
							placeholder='Name'		
							
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>
					</StyledInputContainer>	
					{formValues.isDirty.name && formValues.errors.name && <StyledErrorMessage>El nombre no es correcto</StyledErrorMessage>}
					
					<StyledInputContainer>
						<StyledInput
							type='text'
							name='lastname'
							id='lastname'
							placeholder='Last Name'
							
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>

					</StyledInputContainer>
					
					{formValues.isDirty.lastname && formValues.errors.lastname && <StyledErrorMessage>El apellido no es correcto</StyledErrorMessage>}
					
					<StyledInputContainer>
						<StyledInput
							type='email'
							name='email'
							id='email'
							placeholder='Email Address'
							
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>
					</StyledInputContainer>
					
					{formValues.isDirty.email && formValues.errors.email && <StyledErrorMessage>El email no es correcto</StyledErrorMessage>}
					
					<StyledInputContainer>
						<StyledInput
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>
					</StyledInputContainer>
					
					{formValues.isDirty.password && formValues.errors.password && <StyledErrorMessage>El password no es correcto</StyledErrorMessage>}
					
					<StyledInputContainer>
						<StyledInput
							type='submit'
							value='CLAIM TOUR FREE TRIAL'
							font
							
							disabled={!Object.values(formValues.errors).every(error => !error)}
						/>

					</StyledInputContainer>
					<StyledTextTerms>By clicking the button, you are agreeing to our<StyledSpanTerms> Terms and Services</StyledSpanTerms></StyledTextTerms>
				</form>
			
			</StyledFormContainer>
		</StyledHeroForm>
	);
};

const validateForm = (name, value, formValues, setFormValues) => {
	const formatedValue = value.trim();
	const regexName = /^[a-z]+$/gi;
	const regexEmail =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	const regexPassword =
		/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

	if (name === 'name') {
		const isValidName = !regexName.test(formatedValue);

		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				name: isValidName
			},
			isDirty: {
				...formValues.isDirty,
				name: true
			}
		});
	}

	if (name === 'lastname') {
		const isValidLastName = !regexName.test(formatedValue);

		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				lastname: isValidLastName
			},
			isDirty: {
				...formValues.isDirty,
				lastname: true
			}
		});
	}

	if (name === 'email') {
		const isValidEmail = !regexEmail.test(formatedValue);

		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				email: isValidEmail
			},
			isDirty: {
				...formValues.isDirty,
				email: true
			}
		});
	}

	if (name === 'password') {
		const isValidPassword = !regexPassword.test(formatedValue);

		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				password: isValidPassword
			},
			isDirty: {
				...formValues.isDirty,
				password: true
			}
		});
	}
};

const changeFormValues = (input, formValues, setFormValues) => {
	const { name, value } = input;

	setFormValues({ ...formValues, [name]: value });

	validateForm(name, value, formValues, setFormValues);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default Form;
