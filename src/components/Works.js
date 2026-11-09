import React from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { WorksData } from "../data/WorksData";
import WorkShowcaseItem from "./works/WorkShowcaseItem";

const Works = () => {
	return (
		<section className="works" id="works">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="heading">
					<p className="heading-sub-text">Selected work</p>
					<p className="heading-text">
						Live products I have <span className="gradient-text">designed, built and shipped</span>
					</p>
					<p className="heading-lead">
						E-commerce, Web3, SaaS, AI and HealthTech platforms built with my full stack and
						mobile skills, each one in production and used by real customers today.
					</p>
				</motion.div>

				<div className="works-showcase">
					{WorksData.map((work, index) => (
						<WorkShowcaseItem
							key={work.id}
							work={work}
							index={index}
							reversed={index % 2 !== 0}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Works;
