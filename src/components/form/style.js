import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeroForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	@media screen and (max-width: 50rem) {
		width: 100%;
		margin-bottom: 2rem;
	}
`;

const StyledFormContainer = styled.div`
	background-color: ${COLORS.WHITE};
	border-radius: 8px;
	padding-block: 1rem;
	box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.2);
	
	`;

const StyledInputContainer = styled.div`
	position: relative;
	width: 90%;
	margin-bottom: .5rem;
	margin-left: auto;
	margin-right: auto;
	font-size: 0.875rem;
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 0.5rem 0.9rem;
	border-radius: 8px;
	font-size: 0.9375rem;
	border: none;
	border: 1px solid ${COLORS.BLUEGREY};
`;

const StyledInputButton = styled.input`
	width: 100%;
	padding: 0.5rem 0.9rem;
	border-radius: 8px;
	font-size: 0.9375rem;
	background-color: ${COLORS.GREEN};
	color: ${COLORS.WHITE};
	border:none;
	cursor: pointer;
`;

const StyledIconError = styled.img`
	position: absolute;
	right: 1rem;
	top: .5rem;
	width: 20px;
	height: 20px;
`;

const StyledErrorContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const StyledErrorMessage = styled.span`
	margin-bottom: .5rem;
	color: ${COLORS.LIGHTRED};
	margin-left: auto;
	font-size: 0.6875rem;
`;

const StyledTextTerms = styled.p`
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	font-size: 11px;
	color: ${COLORS.BLUEGREY};

	@media screen and (min-width: 50rem) {
		font-size: 10px;
	}
`;

const StyledSpanTerms = styled.span`
	font-weight: bold;
	color: ${COLORS.LIGHTRED};
	cursor: pointer;
`;

export {
	StyledHeroForm,
	StyledFormContainer,
	StyledInputContainer,
	StyledIconError,
	StyledInput,
	StyledInputButton,
	StyledTextTerms,
	StyledSpanTerms,
	StyledErrorContainer,
	StyledErrorMessage
};
