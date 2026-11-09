import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";
import { DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import {
	FaReact,
	FaPython,
	FaShoppingCart,
	FaListAlt,
	FaDatabase,
	FaMobileAlt,
	FaTools,
	FaNodeJs,
	FaAws,
	FaGitAlt,
	FaRobot,
	FaBrain,
} from "react-icons/fa";
import {
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiMui,
	SiRedux,
	SiExpress,
	SiNestjs,
	SiDjango,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiRedis,
	SiFlutter,
	SiAndroid,
	SiApple,
	SiShopify,
	SiWoocommerce,
	SiGraphql,
	SiSocketdotio,
	SiStripe,
	SiDocker,
	SiGithubactions,
	SiVercel,
	SiOpenai,
	SiAnthropic,
	SiLangchain,
	SiAppstore,
} from "react-icons/si";
import { TbBrandReactNative, TbVector } from "react-icons/tb";
import { FiServer } from "react-icons/fi";
import {
	HiOutlineCodeBracketSquare,
	HiOutlineServerStack,
	HiOutlineDevicePhoneMobile,
	HiOutlineSparkles,
	HiOutlineShoppingCart,
	HiOutlineCircleStack,
	HiOutlineCloudArrowUp,
	HiOutlineMagnifyingGlass,
	HiOutlineCheckBadge,
} from "react-icons/hi2";

const CATEGORY_ICONS = {
	"front-end": <HiOutlineCodeBracketSquare />,
	"back-end": <HiOutlineServerStack />,
	"mobile-development": <HiOutlineDevicePhoneMobile />,
	"ai-engineering": <HiOutlineSparkles />,
	"e-commerce-development": <HiOutlineShoppingCart />,
	databases: <HiOutlineCircleStack />,
	"cloud-devops": <HiOutlineCloudArrowUp />,
};

const SKILL_ICONS = {
	"react.js": <FaReact />,
	"react native": <TbBrandReactNative />,
	"next.js": <SiNextdotjs />,
	typescript: <SiTypescript />,
	"javascript (es6+)": <DiJavascript1 />,
	html5: <DiHtml5 />,
	css3: <DiCss3 />,
	"tailwind css": <SiTailwindcss />,
	"material ui": <SiMui />,
	redux: <SiRedux />,
	zustand: <FaTools />,
	"node.js": <FaNodeJs />,
	"express.js": <SiExpress />,
	nestjs: <SiNestjs />,
	python: <FaPython />,
	django: <SiDjango />,
	"rest apis": <FiServer />,
	graphql: <SiGraphql />,
	websockets: <SiSocketdotio />,
	flutter: <SiFlutter />,
	"android development": <SiAndroid />,
	"ios development": <SiApple />,
	"mobile ui/ux": <FaMobileAlt />,
	"app store & play release": <SiAppstore />,
	"openai api": <SiOpenai />,
	"anthropic claude api": <SiAnthropic />,
	langchain: <SiLangchain />,
	"rag pipelines": <HiOutlineMagnifyingGlass />,
	"vector databases": <TbVector />,
	"ai agents & tool use": <FaRobot />,
	"prompt engineering": <FaBrain />,
	"llm evaluation": <HiOutlineCheckBadge />,
	"custom e-commerce platforms": <FaShoppingCart />,
	"shopify integration": <SiShopify />,
	"woocommerce integration": <SiWoocommerce />,
	"shopping cart development": <FaShoppingCart />,
	"product catalog management": <FaListAlt />,
	"stripe & paypal payments": <SiStripe />,
	postgresql: <SiPostgresql />,
	mysql: <SiMysql />,
	mongodb: <SiMongodb />,
	redis: <SiRedis />,
	"database design & optimization": <FaDatabase />,
	aws: <FaAws />,
	docker: <SiDocker />,
	"ci/cd pipelines": <SiGithubactions />,
	"github actions": <SiGithubactions />,
	"vercel & netlify": <SiVercel />,
	git: <FaGitAlt />,
};

const slugify = (s) =>
	s
		.toLowerCase()
		.replace(/&/g, "")
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "")
		.replace(/-+/g, "-");

const Skills = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 36 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.65, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] },
		}),
	};

	return (
		<section className="skills" id="skills">
			<div className="container">
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					className="heading">
					<p className="heading-sub-text">What I work with</p>
					<p className="heading-text">
						A complete, <span className="gradient-text">production-tested</span> toolkit
					</p>
					<p className="heading-lead">
						Frontend, backend, mobile, AI, data and infrastructure. These are the technologies
						I use daily to take products from idea to App Store and cloud.
					</p>
				</motion.div>

				<div className="skills-box">
					{SkillsData.map((group, idx) => {
						const slug = slugify(group.category);
						return (
							<motion.div
								className={`skill-category ${slug}`}
								key={group.category}
								custom={idx}
								variants={fadeUp}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}>
								<div className="category-head">
									<span className="category-icon">{CATEGORY_ICONS[slug] || <FaTools />}</span>
									<h3 className="category-title">{group.category}</h3>
									<span className="category-count">{group.skills.length}</span>
								</div>
								<div className="category-list">
									{group.skills.map((s) => (
										<div className="skill-chip" key={`${slug}-${s}`}>
											<span className="chip-icon">{SKILL_ICONS[s.toLowerCase()] || <FaTools />}</span>
											<span className="chip-text">{s}</span>
										</div>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
