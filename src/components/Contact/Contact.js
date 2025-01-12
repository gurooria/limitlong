import React from "react";
import "./Contact.css";
import vincent from "../../assets/vincent.jpg";
import linkedin from "../../assets/linkedin_white.png";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-col">
				<h3>Get in Contact</h3>
				<img src={vincent} alt="" />
				<p>
					Feel free to shoot me a message through the form, or connect with me
					on LinkedIn!
				</p>
				<ul>
					<a href="https://www.linkedin.com/in/vincent-vis-6a8a8217/">
						<li>
							<img src={linkedin} alt="" />
						</li>
					</a>
				</ul>
			</div>
			<div className="contact-col">
				<form>
					<label htmlFor="name">Your Name*</label>
					<input type="text" id="name" name="name" placeholder="" required />
					<label htmlFor="email">Email*</label>
					<input type="email" id="email" name="email" placeholder="" required />
					<label htmlFor="phone">Phone</label>
					<input type="tel" id="phone" name="phone" placeholder="" />
					<label htmlFor="message">Write your message here*</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						placeholder="Enter your message"
						required
					/>
					<button type="submit" className="btn-white-blue">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
