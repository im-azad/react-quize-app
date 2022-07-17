import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateOutlet from './PrivateOutlet';
import PublicOutlet from './PublicOutlet';

function App() {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/' element={<PublicOutlet />}>
						<Route path='/signup' element={<Signup />} />
						<Route path='/login' element={<Login />} />
					</Route>

					<Route path='/' element={<PrivateOutlet />}>
						<Route path='/quiz/:id' element={<Quiz />} />
						<Route path='/result' element={<Result />} />
					</Route>
				</Routes>
			</Layout>
		</AuthProvider>
	);
}

export default App;
