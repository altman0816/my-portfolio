import React, { useEffect, useState } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { HiOutlineArrowDown, HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2";
import { animateScroll as scroll, Link } from "react-scroll";
import { motion } from "framer-motion";

const ROTATING_ROLES = [
	"React & Next.js web platforms",
	"React Native & Flutter mobile apps",
	"Node.js / NestJS backend architecture",
	"LLM-powered features, RAG & AI agents",
	"Cloud-native delivery on AWS",
	"E-commerce & SaaS products",
];

const TECH_STRIP = [
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
	"NestJS",
	"React Native",
	"Flutter",
	"PostgreSQL",
	"MongoDB",
	"AWS",
	"Docker",
	"OpenAI API",
	"Anthropic Claude",
	"LangChain",
	"RAG / Vector DBs",
	"Python",
	"Redis",
	"Tailwind CSS",
	"Django",
];

const STATS = [
	{ value: "6+", label: "Years of experience" },
	{ value: "3", label: "Platforms: Web · iOS · Android" },
	{ value: "7+", label: "Live products shipped" },
	{ value: "AI", label: "LLM features, RAG & agents in production" },
];

const useTypewriter = (words, typingSpeed = 60, deletingSpeed = 32, pause = 1700) => {
	const [index, setIndex] = useState(0);
	const [text, setText] = useState("");
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const current = words[index % words.length];
		let timeout;

		if (!deleting && text === current) {
			timeout = setTimeout(() => setDeleting(true), pause);
		} else if (deleting && text === "") {
			setDeleting(false);
			setIndex((i) => (i + 1) % words.length);
		} else {
			timeout = setTimeout(
				() => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
				deleting ? deletingSpeed : typingSpeed
			);
		}

		return () => clearTimeout(timeout);
	}, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

	return text;
};

const HeroSection = ({ nav, handleNav }) => {
	const [visible, setVisible] = useState(false);
	const typed = useTypewriter(ROTATING_ROLES);

	useEffect(() => {
		const toggleVisible = () => {
			setVisible(document.documentElement.scrollTop > 300);
		};
		window.addEventListener("scroll", toggleVisible, { passive: true });
		return () => window.removeEventListener("scroll", toggleVisible);
	}, []);

	const scrollToTop = () => scroll.scrollToTop({ smooth: "easeInOutQuad", duration: 600 });

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.14, delayChildren: 0.2 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 28 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const menuVariants = {
		hidden: { opacity: 0, scale: 0.6 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, delay: 0.4 },
		},
	};

	return (
		<header className="hero-section" id="home">
			<div className="hero-bg" aria-hidden="true">
				<div className="hero-overlay" />
				<div className="hero-grid" />
				<span className="hero-orb hero-orb-1" />
				<span className="hero-orb hero-orb-2" />
				<span className="hero-orb hero-orb-3" />
			</div>

			<motion.button
				type="button"
				aria-label={nav ? "Close navigation" : "Open navigation"}
				variants={menuVariants}
				initial="hidden"
				animate="visible"
				onClick={handleNav}
				className="menu-icon">
				{nav ? <FaTimes /> : <FaBars />}
			</motion.button>

			<button
				type="button"
				aria-label="Back to top"
				className={visible ? "to-top-icon show" : "to-top-icon hide"}
				onClick={scrollToTop}>
				<AiOutlineArrowUp />
			</button>

			<motion.div
				variants={container}
				initial="hidden"
				animate="visible"
				className="hero-content">
				<motion.div variants={item} className="hero-badge">
					<span className="hero-badge-dot" />
					Available for senior roles &amp; freelance projects
				</motion.div>

				<motion.p variants={item} className="hero-greeting">
					Hi, I&apos;m <span className="hero-name">Sato Haruto</span>
				</motion.p>

				<motion.h1 variants={item} className="hero-title">
					Senior Full Stack
					<span className="hero-title-line">
						<span className="gradient-text">Web &amp; Mobile</span> Developer
					</span>
					<span className="hero-title-ai">
						<HiOutlineSparkles aria-hidden="true" /> &amp; AI Engineer
					</span>
				</motion.h1>

				<motion.p variants={item} className="hero-typed" aria-live="polite">
					<span className="hero-typed-label">Specialising in</span>
					<span className="hero-typed-text">
						{typed}
						<span className="hero-cursor" aria-hidden="true" />
					</span>
				</motion.p>

				<motion.p variants={item} className="hero-desc">
					Six-plus years designing, building and leading production software end to
					end: pixel-perfect React and Next.js interfaces, native-feeling React Native
					and Flutter apps, scalable Node.js / NestJS APIs, and AI features powered by
					large language models, RAG pipelines and autonomous agents. Based in Tokyo,
					working with teams worldwide.
				</motion.p>

				<motion.div variants={item} className="hero-actions">
					<Link
						to="works"
						smooth={true}
						duration={600}
						offset={-10}
						href="#works"
						className="btn btn-primary">
						View my work <HiOutlineArrowRight />
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={700}
						href="#contact"
						className="btn btn-ghost">
						Hire me
					</Link>
				</motion.div>

				<motion.ul variants={item} className="hero-stats">
					{STATS.map((s) => (
						<li key={s.label}>
							<strong>{s.value}</strong>
							<span>{s.label}</span>
						</li>
					))}
				</motion.ul>
			</motion.div>

			<div className="hero-marquee" aria-hidden="true">
				<div className="hero-marquee-track">
					{[...TECH_STRIP, ...TECH_STRIP].map((t, i) => (
						<span key={`${t}-${i}`}>{t}</span>
					))}
				</div>
			</div>

			<Link
				to="about"
				smooth={true}
				duration={600}
				href="#about"
				className="hero-scroll-hint"
				aria-label="Scroll to about section">
				<HiOutlineArrowDown />
			</Link>
		</header>
	);
};

export default HeroSection;
