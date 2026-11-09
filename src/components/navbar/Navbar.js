import { AnimatePresence, motion } from "framer-motion";
import { BiBookContent, BiEnvelope, BiBriefcase, BiServer } from "react-icons/bi";
import { FaHome, FaLaptop } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import "../../styles/Navbar.css";
import NavLinks from "./NavLinks";

const NAV_ITEMS = [
	{ to: "home", label: "Home", icon: <FaHome className="mid-icon" /> },
	{ to: "about", label: "About", icon: <FiUser className="mid-icon" /> },
	{ to: "services", label: "Services", icon: <BiServer className="mid-icon" /> },
	{ to: "skills", label: "Skills", icon: <FaLaptop className="mid-icon" /> },
	{ to: "experience", label: "Experience", icon: <BiBriefcase className="mid-icon" /> },
	{ to: "works", label: "Works", icon: <BiBookContent className="mid-icon" /> },
	{ to: "contact", label: "Contact", icon: <BiEnvelope className="mid-icon" /> },
];

const navVariants = {
	hidden: {
		opacity: 0,
		transition: { delay: 0.5, staggerChildren: 0.2, staggerDirection: -1 },
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.5, staggerChildren: 0.2, staggerDirection: 1 },
	},
};

const Navbar = ({ nav, handleNav }) => {
	const year = new Date().getFullYear();

	return (
		<AnimatePresence>
			<motion.nav
				initial={{ width: "0" }}
				animate={nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }}
				className={nav ? "navbar active" : "navbar"}>
				<motion.div
					initial="hidden"
					whileInView={nav ? "visible" : "hidden"}
					variants={navVariants}
					exit="hidden"
					className="navbar-container">
					<div className="top-details">
						<span className="profile-avatar" aria-hidden="true">
							SH
						</span>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={handleNav}
							to="home"
							className="profile-name">
							Sato Haruto
						</Link>
						<span className="profile-role">Senior Full Stack Web &amp; Mobile Dev · AI Engineer</span>
						<NavLinks handleNav={handleNav} />
					</div>
					<ul className="mid-details">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.to}
								activeClass="active"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								to={item.to}
								className="mid-links">
								{item.icon}
								<li className="mid-link" onClick={handleNav}>
									{item.label}
								</li>
							</Link>
						))}
					</ul>
					<div className="copy">
						<small className="copyright">© {year} Sato Haruto. All rights reserved.</small>
					</div>
				</motion.div>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Navbar;
