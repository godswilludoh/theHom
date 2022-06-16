import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/service' element={<Service />} />
					<Route path='/blog' element={<Blog />} />
					<Routes path='/contact' element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
