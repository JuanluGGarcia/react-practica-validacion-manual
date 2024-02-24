import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
    color: ${COLORS.WHITE};
    /* text-align: center; */
`;
const StyledTitle = styled.h1`
	margin-top: 2rem;
	margin-bottom: 1rem;
	font-size: 1.75rem;
	font-weight: bold;
`;

const StyledSubTitle = styled.p`
	margin-bottom: 2rem;
`;

export { StyledHeader, StyledTitle, StyledSubTitle };
