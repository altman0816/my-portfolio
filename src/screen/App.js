import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import { motion } from "framer-motion";
import HomePage from "../pages/HomePage";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2400);
		return () => clearTimeout(timer);
	}, []);

	const loadText = {
		hidden: { opacity: 0, y: 8 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.9, delay: 0.3 },
		},
	};

	if (loading) {
		return (
			<div className="loader">
				<div className="svg-wrapper">
					<svg height="72" width="340" xmlns="http://www.w3.org/2000/svg">
						<rect className="shape" height="72" width="340" rx="36" />
					</svg>
					<motion.div
						variants={loadText}
						initial="hidden"
						animate="visible"
						className="loader-text">
						<span className="loader-name">Sato Haruto</span>
						<span className="loader-role">Senior Full Stack Web &amp; Mobile Developer · AI Engineer</span>
					</motion.div>
				</div>
			</div>
		);
	}

	return (
		<div className="App">
			<Router>
				<HomePage />
			</Router>
		</div>
	);
}

export default App;
