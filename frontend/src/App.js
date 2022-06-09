import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Category from './pages/category';
import Content from './pages/content';
import Navbar from './components/Navbar';



function App() {
	const user = localStorage.getItem("token");

	return (
		<>
		
		
		{user && <Navbar></Navbar>}
		<Routes>
		{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{user && <Route path="/pages/category" exact element={<Category />} />}
			{user && <Route path="/pages/content" exact element={<Content />} />}

			<Route path="/" element={<Navigate replace to="/login" />} />
			
			
		</Routes>
		</>

	);
}

export default App;