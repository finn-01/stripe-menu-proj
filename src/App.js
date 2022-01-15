import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const App = () => {
	return (
		<div>
			Hello App
			<Navbar />
			<Hero />
			<Sidebar />
			<Submenu />
		</div>
	);
};

export default App;
