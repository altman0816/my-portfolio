import React from "react";
import "../styles/Experience.css";
import { motion } from "framer-motion";
import { ExperienceData } from "../data/ExperienceData";
import { HiOutlineBriefcase, HiOutlineCalendarDays } from "react-icons/hi2";

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<div className="container">
				<motion.div
					className="heading"
					initial={{ opacity: 0, y: 36 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
					<p className="heading-sub-text">Where I&apos;ve worked</p>
					<p className="heading-text">
						From junior to <span className="gradient-text">senior</span>, six years of shipping
					</p>
					<p className="heading-lead">
						A steady progression through every layer of the stack, culminating in a senior
						role that owns web, mobile, backend, cloud and AI delivery.
					</p>
				</motion.div>

				<div className="timeline">
					{ExperienceData.map((exp, idx) => {
						const side = idx % 2 === 0 ? "left" : "right";
						return (
							<motion.article
								className={`timeline-item ${side}${exp.current ? " current" : ""}`}
								key={exp.company}
								initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
								<span className="timeline-dot" aria-hidden="true" />
								<motion.div className="timeline-card glass-card" whileHover={{ y: -6 }}>
									<div className="exp-top">
										<span className={`exp-level level-${exp.level.toLowerCase().replace(/[^a-z]/g, "")}`}>
											{exp.level}
										</span>
										{exp.current && <span className="exp-current">Latest role</span>}
									</div>
									<h3 className="exp-title">{exp.title}</h3>
									<div className="exp-meta">
										<span>
											<HiOutlineBriefcase /> {exp.company}
										</span>
										<span>
											<HiOutlineCalendarDays /> {exp.date}
										</span>
									</div>
									<ul className="exp-bullets">
										{exp.bullets.map((b) => (
											<li key={b}>{b}</li>
										))}
									</ul>
									<ul className="exp-tech">
										{exp.tech.map((t) => (
											<li key={t}>{t}</li>
										))}
									</ul>
								</motion.div>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience;
