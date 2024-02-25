import Form from './components/form/Form';
import Header from './components/header/Header';
import Wrapper from './components/wrapper/Wrapper';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	return (
		<Wrapper>
			<GlobalStyles />
			<Header />
			<Form />
		</Wrapper>
	);
};

export default App;
