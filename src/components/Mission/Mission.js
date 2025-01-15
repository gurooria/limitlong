import React from "react";
import "./Mission.css";
import teacher from "../../assets/Teacher1.jpg";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

const Mission = () => {
	return (
		<div className="mission container">
			<div className="mission-left">
				<img src={teacher} alt="" className="mission-img" />
			</div>
			<div className="mission-right">
				<Title title="My Mission" />
				<p>
					During my role as educator in three market leading firms, I saw it as
					my mission to organize and explain these basics to whoever requires
					them professionally, but also to people unfamiliar to the business and
					even just the curious individual. I spent years developing and hosting
					trading courses; for market makers and other prop firms, but also at
					universities and investment associations. I developed a structured
					road map that doesn't require any background in finance and accessible
					without a strong mathematical background. Still it would be
					surprisingly new to the majority of any audience. I started this
					initiative in 2023, mainly to promote and explain the industry to a
					wide audience. In the coming years, I will host a variety of webinars
					and live sessions on different topics. Later on, the materials I
					developed will culminate into a book as well!
				</p>
				<Link to="/my-mission" className="btn-blue">
					Read more
				</Link>
			</div>
		</div>
	);
};

export default Mission;
