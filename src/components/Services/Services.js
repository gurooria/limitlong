import React from "react";
import "./Services.css";
import program from "../../assets/services/Program.png";
import webinar from "../../assets/services/Webinar.jpg";
import tilburg from "../../assets/services/Tilburg.jpg";

const Services = () => {
	return (
		<div className="services">
			<div className="service">
				<img src={webinar} alt="" />
				<div className="caption">
					<p>Webinars</p>
				</div>
			</div>
			<div className="service">
				<img src={program} alt="" />
				<div className="caption">
					<p>Program Format</p>
				</div>
			</div>
			<div className="service">
				<img src={tilburg} alt="" />
				<div className="caption">
					<p>Past Events</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
