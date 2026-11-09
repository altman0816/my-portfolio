import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import { HiOutlineCubeTransparent, HiOutlineUserGroup, HiOutlineDevicePhoneMobile, HiOutlineSparkles } from "react-icons/hi2";
import { FiMapPin, FiBriefcase, FiClock, FiGlobe } from "react-icons/fi";

const HIGHLIGHTS = [
	{
		icon: <HiOutlineCubeTransparent />,
		title: "Architecture & system design",
		text: "I design the whole system, not just screens: data models, API contracts, auth, caching, CI/CD and AWS deployment topology that stay maintainable as products grow.",
	},
	{
		icon: <HiOutlineDevicePhoneMobile />,
		title: "One developer, every platform",
		text: "Web with React and Next.js, native-quality iOS and Android with React Native and Flutter, and the Node.js / NestJS services behind them.",
	},
	{
		icon: <HiOutlineUserGroup />,
		title: "Technical leadership",
		text: "Senior on cross-functional teams: leading code reviews, mentoring junior developers, defining standards and unblocking delivery.",
	},
	{
		icon: <HiOutlineSparkles />,
		title: "AI & LLM engineering",
		text: "LLM-powered features with the OpenAI and Anthropic APIs, retrieval-augmented generation over your own data, and AI agents shipped into real products with evaluation and guardrails.",
	},
];

const FACTS = [
	{ icon: <FiBriefcase />, label: "Role", value: "Senior Full Stack Web & Mobile Developer · AI Engineer" },
	{ icon: <FiClock />, label: "Experience", value: "6+ years in production" },
	{ icon: <FiMapPin />, label: "Location", value: "Tokyo, Japan" },
	{ icon: <FiGlobe />, label: "Working with", value: "Remote teams worldwide" },
];

const About = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 36 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
		}),
	};

	return (
		<section className="about" id="about">
			<div className="container">
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					className="heading">
					<p className="heading-sub-text">Who I am</p>
					<p className="heading-text">
						A senior engineer who ships <span className="gradient-text">end to end</span>
					</p>
				</motion.div>

				<div className="about-grid">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						className="about-content">
						<p>
							I&apos;m <strong>Sato Haruto</strong>, a <strong>Senior Full Stack Web and Mobile
							Developer</strong> based in Tokyo with six-plus years of experience building
							scalable, high-performance applications for e-commerce, SaaS, Web3, HealthTech
							and marketing-technology companies.
						</p>
						<p>
							I specialise in modern frontend frameworks like <strong>React</strong> and{" "}
							<strong>Next.js</strong>, backend development with <strong>Node.js</strong> and{" "}
							<strong>NestJS</strong>, and cross-platform mobile development with{" "}
							<strong>React Native</strong> and <strong>Flutter</strong>. That breadth lets me
							own a product from the database schema to the App Store listing.
						</p>
						<p>
							As an <strong>AI Engineer</strong> I integrate large language models into those
							products: chat assistants and copilots built on the OpenAI and Anthropic APIs,
							retrieval-augmented generation over company data with vector databases, and
							tool-using agents that automate real workflows, all with evaluation, cost
							control and guardrails in place.
						</p>
						<p>
							Beyond writing code, I lead code reviews, mentor junior developers and work
							closely with designers, QA and stakeholders to turn complex requirements into
							simple, elegant solutions that are a pleasure to use and to maintain.
						</p>

						<ul className="about-facts">
							{FACTS.map((f) => (
								<li key={f.label}>
									<span className="about-fact-icon">{f.icon}</span>
									<div>
										<small>{f.label}</small>
										<span>{f.value}</span>
									</div>
								</li>
							))}
						</ul>
					</motion.div>

					<div className="about-highlights">
						{HIGHLIGHTS.map((h, i) => (
							<motion.article
								key={h.title}
								custom={i}
								variants={fadeUp}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								whileHover={{ y: -6 }}
								className="about-highlight glass-card">
								<span className="about-highlight-icon">{h.icon}</span>
								<h3>{h.title}</h3>
								<p>{h.text}</p>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
