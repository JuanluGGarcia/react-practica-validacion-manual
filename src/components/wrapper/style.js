import styled from 'styled-components';

const StyledWrapper = styled.div`
	width: 80%;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	text-align: center;

	@media screen and (min-width: 50rem) {
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		background-image: url('/assets/images/bg-intro-desktop.png');
	}
`;

export { StyledWrapper };
