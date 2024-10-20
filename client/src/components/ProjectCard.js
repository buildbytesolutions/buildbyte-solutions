import { Col } from "react-bootstrap";
import codeIcon from "../assets/img/code.png";
import viewIcon from "../assets/img/view.png";

export const ProjectCard = ({
	title,
	description,
	imgUrl,
	sourCode,
	siteURL,
}) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className="proj-imgbx">
				<img className="proj-img" src={imgUrl} />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
					<div className="project-btn">
						{/* <a className="source-code-btn" href={sourCode} target="_blank">
							<img src={codeIcon} alt="source code" />
						</a> */}
						<a className="visit-site-btn" href={siteURL} target="_blank">
							<img src={viewIcon} alt="view site" />
						</a>
					</div>
				</div>
			</div>
		</Col>
	);
};
