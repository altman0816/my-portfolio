import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer-inner">
				<div className="footer-brand">
					<strong>Sato Haruto</strong>
					<span>Senior Full Stack Web &amp; Mobile Developer · AI Engineer</span>
				</div>
				<ul className="footer-links">
					<li>
						<Link to="services" smooth={true} duration={500} href="#services">
							Services
						</Link>
					</li>
					<li>
						<Link to="works" smooth={true} duration={500} href="#works">
							Works
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500} href="#contact">
							Contact
						</Link>
					</li>
				</ul>
				<small>© {year} Sato Haruto. Built with React &amp; Framer Motion.</small>
			</div>
		</footer>
	);
};

export default Footer;
