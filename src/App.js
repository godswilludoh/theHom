import './App.css';
import Navbar from './components/navbar/Navbar';
import SectionOne from './components/sectionone/SectionOne';
import SectionTwo from './components/sectiontwo/SectionTwo';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<SectionOne />
			<SectionTwo />
		</div>
	);
}

export default App;
