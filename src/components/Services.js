import React from "react";
import "../styles/Services.css";
import { motion } from "framer-motion";
import { ServicesData } from "../data/ServicesData";
import {
	HiOutlineCodeBracketSquare,
	HiOutlineDevicePhoneMobile,
	HiOutlineServerStack,
	HiOutlineShoppingCart,
	HiOutlineCloudArrowUp,
	HiOutlineCircleStack,
	HiOutlinePaintBrush,
	HiOutlineBolt,
	HiOutlineUserGroup,
	HiOutlineArrowPath,
	HiOutlineArrowRight,
	HiOutlineSparkles,
} from "react-icons/hi2";
import { Link } from "react-scroll";

const ICONS = {
	web: <HiOutlineCodeBracketSquare />,
	mobile: <HiOutlineDevicePhoneMobile />,
	ai: <HiOutlineSparkles />,
	api: <HiOutlineServerStack />,
	cart: <HiOutlineShoppingCart />,
	cloud: <HiOutlineCloudArrowUp />,
	database: <HiOutlineCircleStack />,
	design: <HiOutlinePaintBrush />,
	performance: <HiOutlineBolt />,
	leadership: <HiOutlineUserGroup />,
	refresh: <HiOutlineArrowPath />,
};

const Services = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 36 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] },
		}),
	};

	return (
		<section className="services" id="services">
			<div className="container">
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					className="heading">
					<p className="heading-sub-text">What I can do for you</p>
					<p className="heading-text">
						Senior-level services, <span className="gradient-text">web to mobile to AI</span>
					</p>
					<p className="heading-lead">
						Whether you need a complete product built from scratch, a mobile companion for an
						existing platform, an AI assistant trained on your data, or a senior engineer to
						steady a growing team, I cover the full stack so you don&apos;t have to coordinate
						three specialists.
					</p>
				</motion.div>

				<div className="services-grid">
					{ServicesData.map((s, i) => (
						<motion.article
							key={s.id}
							custom={i}
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.25 }}
							whileHover={{ y: -8 }}
							className="services-card">
							<span className="services-index">{String(i + 1).padStart(2, "0")}</span>
							<span className="services-icon">{ICONS[s.icon]}</span>
							<h3 className="services-title">{s.title}</h3>
							<p className="services-desc">{s.description}</p>
							<ul className="services-tags">
								{s.deliverables.map((d) => (
									<li key={d}>{d}</li>
								))}
							</ul>
						</motion.article>
					))}
				</div>

				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="services-cta glass-card">
					<div>
						<p className="services-cta-title">Need something that isn&apos;t on the list?</p>
						<p className="services-cta-text">
							Every project is different. Tell me about yours and I&apos;ll propose the
							architecture, stack and timeline that fit.
						</p>
					</div>
					<Link
						to="contact"
						smooth={true}
						duration={600}
						href="#contact"
						className="btn btn-primary">
						Let&apos;s talk <HiOutlineArrowRight />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
