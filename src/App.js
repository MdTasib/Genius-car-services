import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/service/:serviceId' element={<ServiceDetails />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
