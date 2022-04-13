import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login/Login";
import Singup from "./pages/Login/Singup/Singup";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/service/:serviceId' element={<ServiceDetails />} />
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singup />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
