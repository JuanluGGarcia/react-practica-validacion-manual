import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledContainer = styled.div`
	padding: 1rem 3rem;
	background-color: ${COLORS.FUCSIA};
	color: ${COLORS.WHITE};
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.2);
`;
const StyledSpan = styled.span`
    font-size: .9375rem;
    font-weight: bold;
`;
const StyledText = styled.p`
    font-size: .9375rem;
`;
 
export { StyledContainer, StyledText, StyledSpan };
