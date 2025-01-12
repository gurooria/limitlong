import React from "react";
import Title from "../components/Title/Title";
import "./MyMission.css";
import dubai from "../assets/Dubai1.jpg";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const MyMission = () => {
	return (
		<div className="my-mission">
			<Title title="My Mission" />
			<div className="container">
				<div className="my-mission-container">
					<div className="my-mission-left">
						<img src={dubai} alt="" />
					</div>
					<div className="my-mission-right">
						<p>
							Ever since I entered the trading industry, I experienced an
							unnecessary sense of secrecy. Sure, these firms rely on their
							intellectual property, yet all basics are uniform. In my opinion,
							these should be shared and explained well - in order to educate
							the lesser known. All improved during the past decade, as firms
							noticed the importance of sector awareness, especially as
							sometimes (HFT) trading and market making popped up in the news in
							a negative fashion. Still the field remains quite niche and
							unknown, which is a pity. The world is full of talented people and
							a great number of them isn’t even aware of their potential in this
							area.
						</p>
						<p>
							Although preparing for a trading job can be done through searching
							materials on Investopedia, Quora and/or Reddit, there isn’t really
							one place where you can find a reliable and rather complete
							package of what it takes to be a successful trader. Books exist
							(see References), but oftentimes I find them either too wordy or
							too mathematical. Also, these books aim at a particular audience
							which might make them too hard (or too easy) to read for you.
						</p>
						<p>
							During my role as educator in three market leading firms, I saw it
							as my mission to organize and explain these basics to whoever
							requires them professionally, but also to people unfamiliar to the
							business and even just the curious individual. I spent years
							developing and hosting trading courses; for market makers and
							other prop firms, but also at universities and investment
							associations. I developed a structured road map that doesn't
							require any background in finance and accessible without a strong
							mathematical background. Still it would be surprisingly new to the
							majority of any audience. I started this initiative in 2023,
							mainly to promote and explain the industry to a wide audience. In
							the coming years, I will host a variety of webinars and live
							sessions on different topics. Later on, the materials I developed
							will culminate into a book as well!
						</p>
					</div>
				</div>
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default MyMission;
