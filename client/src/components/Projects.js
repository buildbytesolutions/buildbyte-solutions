import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const projects = [
		{
			title: "BuildByte Store",
			description:
				"Your one-stop online store for fashion, electronics, and more, with secure payments and fast delivery",
			imgUrl: projImg1,
			sourCode: "",
			siteURL: "https://buildbytesolutions.github.io/buildbyte-store/",
		},
		{
			title: "Explore Sri Lanka",
			description:
				" Discover the beauty of Sri Lanka’s beaches, wildlife, and heritage with tailored tours and unforgettable experiences.",
			imgUrl: projImg2,
			sourCode: "",
			siteURL: "https://buildbytesolutions.github.io/tourism-site/",
		},
		{
			title: "Byte Tv",
			description:
				"Stream magical movies, shows, and stories—where every moment is pure enchantment. ✨",
			imgUrl: projImg3,
			sourCode: "",
			siteURL: "https://buildbytesolutions.github.io/buildbyte-disney/",
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<h2>Our Recent Projects</h2>
									<br />
									<br />
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
