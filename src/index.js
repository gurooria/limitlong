import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// components & pages
import NavBar from "./components/NavBar/NavBar";
import App from "./pages/App";
import MyMission from "./pages/MyMission";
import AboutMe from "./pages/AboutMe";
import Books from "./pages/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<NavBar />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/my-mission" element={<MyMission />} />
			<Route path="/about-me" element={<AboutMe />} />
			<Route path="/books" element={<Books />} />
		</Routes>
	</Router>,
	document.getElementById("root"),
);

//root.render(
//<React.StrictMode>
//<App />
//</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
