import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.div`
    color: ${COLORS.WHITE};
	width: 50%;
    /* text-align: center; */

	@media screen and (max-width: 50rem) {
		width: 100%;
	}
`;
const StyledTitle = styled.h1`
	margin-top: 2rem;
	margin-bottom: 1rem;
	font-size: 1.75rem;
	font-weight: bold;

	@media screen and (min-width: 50rem) {
		font-size: 3.125rem;
		line-height: 1.3;
		text-align: left;
	}
`;

const StyledSubTitle = styled.p`
	margin-bottom: 2rem;

	@media screen and (min-width: 50rem) {
		text-align: left;
	}
`;

export { StyledHeader, StyledTitle, StyledSubTitle };
