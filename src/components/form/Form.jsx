import { useState } from 'react';
import Offer from '../offer/Offer';
import {
	StyledFormContainer,
	StyledInputContainer,
	StyledIconError,
	StyledInput,
	StyledInputButton,
	StyledTextTerms,
	StyledSpanTerms,
	StyledErrorContainer,
	StyledErrorMessage,
	StyledHeroForm
} from './style';

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
			name: {
				empty: false,
				wrong: false
			},
			lastname: {
				empty: false,
				wrong: false
			},
			email: {
				empty: false,
				wrong: false
			},
			password: {
				empty: false,
				wrong: false
			}
		}
	});

	return (
		<StyledHeroForm>
			<Offer />
			<StyledFormContainer>
				<form onSubmit={handleSubmit}>
					<StyledInputContainer>
						{(formValues.errors.name.empty || formValues.errors.name.wrong) && (
							<StyledIconError src='/assets/images/icon-error.svg' />
						)}
						<StyledInput
							type='text'
							name='name'
							id='name'
							placeholder='Name'
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>

						<StyledErrorContainer>
							{formValues.errors.name.empty && (
								<StyledErrorMessage>
									First Name cannot be empty
								</StyledErrorMessage>
							)}
							{formValues.errors.name.wrong && (
								<StyledErrorMessage>Invalid First Name</StyledErrorMessage>
							)}
						</StyledErrorContainer>
					</StyledInputContainer>

					<StyledInputContainer>
						{(formValues.errors.lastname.empty ||
							formValues.errors.lastname.wrong) && (
							<StyledIconError src='/assets/images/icon-error.svg' />
						)}
						<StyledInput
							type='text'
							name='lastname'
							id='lastname'
							placeholder='Last Name'
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>

						<StyledErrorContainer>
							{formValues.errors.lastname.empty && (
								<StyledErrorMessage>
									Last Name cannot be empty
								</StyledErrorMessage>
							)}
							{formValues.errors.lastname.wrong && (
								<StyledErrorMessage>Invalid Last Name</StyledErrorMessage>
							)}
						</StyledErrorContainer>
					</StyledInputContainer>

					<StyledInputContainer>
						{(formValues.errors.email.empty ||
							formValues.errors.email.wrong) && (
							<StyledIconError src='/assets/images/icon-error.svg' />
						)}

						<StyledInput
							type='email'
							name='email'
							id='email'
							placeholder='Email Address'
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>
						<StyledErrorContainer>
							{formValues.errors.email.empty && (
								<StyledErrorMessage>Email cannot be empty</StyledErrorMessage>
							)}
							{formValues.errors.email.wrong && (
								<StyledErrorMessage>Invalid Email</StyledErrorMessage>
							)}
						</StyledErrorContainer>
					</StyledInputContainer>

					<StyledInputContainer>
						{(formValues.errors.password.empty ||
							formValues.errors.password.wrong) && (
							<StyledIconError src='/assets/images/icon-error.svg' />
						)}

						<StyledInput
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							onChange={event =>
								changeFormValues(event.target, formValues, setFormValues)
							}
						/>
						<StyledErrorContainer>
							{formValues.errors.password.empty && (
								<StyledErrorMessage>Password cannot be empty</StyledErrorMessage>
							)}
							{formValues.errors.password.wrong && (
								<StyledErrorMessage>Invalid Password</StyledErrorMessage>
							)}
						</StyledErrorContainer>
					</StyledInputContainer>

					<StyledInputContainer>
						<StyledInputButton
							type='submit'
							value='CLAIM TOUR FREE TRIAL'
							font
							disabled={
								!Object.values(formValues.errors).every(error => !error)
							}
						/>
					</StyledInputContainer>
					<StyledTextTerms>
						By clicking the button, you are agreeing to our
						<StyledSpanTerms> Terms and Services</StyledSpanTerms>
					</StyledTextTerms>
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
				name: {
					...formValues.errors.name,
					wrong: isValidName && formatedValue,
					empty: !formatedValue
				}
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
				lastname: {
					...formValues.errors.lastname,
					wrong: isValidLastName && formatedValue,
					empty: !formatedValue
				}
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
				email: {
					...formValues.errors.email,
					wrong: isValidEmail && formatedValue,
					empty: !formatedValue
				}
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
				password: {
					...formValues.errors.password,
					wrong: isValidPassword && formatedValue,
					empty: !formatedValue
				}
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
