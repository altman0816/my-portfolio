import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { HiOutlineEnvelope, HiOutlineArrowUpRight, HiOutlineCheckBadge } from "react-icons/hi2";

const CHANNELS = [
	{
		icon: <HiOutlineEnvelope />,
		label: "Email",
		value: "satoharuto961@gmail.com",
		hint: "Best for project briefs and proposals",
		href: "mailto:satoharuto961@gmail.com",
		external: false,
	},
	{
		icon: <BsWhatsapp />,
		label: "WhatsApp",
		value: "+81 70-9437-3585",
		hint: "Quick questions and calls",
		href: "https://wa.me/817094373585",
		external: true,
	},
	{
		icon: <BsTelegram />,
		label: "Telegram",
		value: "@binary816",
		hint: "Fast async chat across time zones",
		href: "https://t.me/binary816",
		external: true,
	},
];

const FIT = [
	"A senior engineer who can own web, mobile, backend, cloud and AI end to end",
	"A technical lead to review architecture and mentor your team",
	"An AI engineer to add LLM features, RAG or agents to an existing product",
	"A partner for long-term product development, not just a one-off build",
];

const Contact = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 36 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
		}),
	};

	return (
		<section className="contact" id="contact">
			<div className="container">
				<motion.div
					className="heading"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}>
					<p className="heading-sub-text">Hire me</p>
					<p className="heading-text">
						Let&apos;s build something <span className="gradient-text">great</span> together
					</p>
				</motion.div>

				<div className="contact-grid">
					<motion.div
						className="contact-intro"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}>
						<p className="contact-lead">
							Looking for a <strong>Senior Full Stack Web &amp; Mobile Developer and AI Engineer</strong>{" "}
							to lead your next product? I&apos;m currently open to senior roles, long-term
							contracts and freelance projects. Reach out for collaborations, consulting or
							just to say hello.
						</p>

						<p className="contact-fit-title">I&apos;m a great fit if you need</p>
						<ul className="contact-fit">
							{FIT.map((f) => (
								<li key={f}>
									<HiOutlineCheckBadge aria-hidden="true" />
									<span>{f}</span>
								</li>
							))}
						</ul>

						<div className="contact-availability">
							<span className="contact-availability-dot" />
							Typically replies within 24 hours · Tokyo (JST, UTC+9)
						</div>
					</motion.div>

					<div className="contact-channels">
						{CHANNELS.map((c, i) => (
							<motion.a
								key={c.label}
								href={c.href}
								target={c.external ? "_blank" : undefined}
								rel={c.external ? "noopener noreferrer" : undefined}
								className="contact-card glass-card"
								custom={i}
								variants={fadeUp}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.3 }}
								whileHover={{ y: -6 }}>
								<span className="contact-card-icon">{c.icon}</span>
								<div className="contact-card-body">
									<small>{c.label}</small>
									<strong>{c.value}</strong>
									<span>{c.hint}</span>
								</div>
								<HiOutlineArrowUpRight className="contact-card-arrow" aria-hidden="true" />
							</motion.a>
						))}

						<motion.a
							href="mailto:satoharuto961@gmail.com?subject=Project%20enquiry"
							className="btn btn-primary contact-main-cta"
							custom={3}
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}>
							Start a project <HiOutlineArrowUpRight />
						</motion.a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
