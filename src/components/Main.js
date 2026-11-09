import React from "react";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Services from "./Services";
import Experience from "./Experience";
import Works from "./Works";
import Footer from "./Footer";

const Main = ({ nav, handleNav, closeNav }) => {
	return (
		<div onClick={closeNav} className="main">
			<HeroSection nav={nav} handleNav={handleNav} />
			<About />
			<Services />
			<Skills />
			<Experience />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
};

export default Main;
