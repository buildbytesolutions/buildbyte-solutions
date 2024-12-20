import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ToastContainer } from "react-toastify";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Development", "App Development", "UI/UX Design"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<ToastContainer />
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<span className="tagline">
										Crafting Digital Excellence, One Website at a Time.
									</span>
									<h1>
										{`BuildByte Solutions`}
										<br />
										<span
											className="txt-rotate"
											dataPeriod="1000"
											data-rotate='[ "Web Development", "App Development", "UI/UX Design" ]'
										>
											<span className="wrap">{text}</span>
										</span>
									</h1>
									<p>
										Welcome to BuildByte Solutions Where Websites Come to Life
										with Stunning Design, Seamless Development, and Exceptional
										UI/UX!
									</p>
									<a href="#connect">
										Let’s Connect <ArrowRightCircle size={25} />
									</a>
									{/* <button onClick={() =>  }>
										Let’s Connect <ArrowRightCircle size={25} />
									</button> */}
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__zoomIn" : ""
									}
								>
									<img
										src={headerImg}
										style={{ borderRadius: "40px" }}
										alt="Header Img"
									/>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
