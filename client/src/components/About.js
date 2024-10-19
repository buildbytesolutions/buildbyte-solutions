import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
	return (
		<section className="about" id="about">
			<Container>
				<h2>About Us</h2>
				<br />
				<br />
				<div className="about-row">
					<p>
						BuildByte Solutions is a full-service web development agency
						dedicated to creating stunning and functional websites. With a focus
						on user experience and cutting-edge technology, we are committed to
						delivering results-driven solutions.
						<br />
						<br />
						<h3>Our Mission</h3>
						<p>
							Empowering businesses with innovative web solutions that drive
							growth and inspire engagement.
						</p>
						<br />
						<h3>Our Vision</h3>
						<p>
							To be a trusted global leader in the web development industry,
							creating meaningful digital experiences.
						</p>
						<br />
						<h3>Core Values</h3>
						<p>
							Core Values Client-Centric
							<br />
							Approach Innovation and Excellence
							<br />
							Transparency and Integrity
						</p>
					</p>
					<img className="about-img" src="about-section.svg" alt="about" />
				</div>
			</Container>
		</section>
	);
};

export default About;
