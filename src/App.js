import React, { createContext, useState } from "react";
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
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import CheckOut from "./pages/CheckOut/CheckOut";
import AddService from "./pages/AddService/AddService";
import ManageService from "./pages/ManageService/ManageService";

export const AuthUser = createContext();

function App() {
	const [user, setUser] = useState({});
	return (
		<>
			<AuthUser.Provider value={[user, setUser]}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/addService' element={<AddService />} />
					<Route path='/manage' element={<ManageService />} />
					<Route path='/service/:serviceId' element={<ServiceDetails />} />
					<Route path='/login' element={<Login />} />
					<Route path='/singup' element={<Singup />} />
					<Route
						path='/checkout'
						element={
							<RequireAuth>
								<CheckOut />
							</RequireAuth>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</AuthUser.Provider>
		</>
	);
}

export default App;
