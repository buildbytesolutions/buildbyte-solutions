import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Our Services</h2>
							<br />
							<br />
							<Carousel
								responsive={responsive}
								infinite={true}
								swipeable={true}
								autoPlay={true}
								autoPlaySpeed={2000}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={meter1} alt="Image" />
									<h4>Custom Website Development</h4>
									<p>
										We build bespoke websites from scratch, tailored to your
										business goals and brand identity
									</p>
								</div>
								<div className="item">
									<img src={meter2} alt="Image" />
									<h4>Mobile App Development</h4>
									<p>
										We create customized Android/IOS applications designed to
										meet the specific needs of your business
									</p>
								</div>
								<div className="item">
									<img src={meter3} alt="Image" />
									<h4>Maintenance & Support</h4>
									<p>
										Enjoy peace of mind with our ongoing maintenance and support
										packages.
									</p>
								</div>
								<div className="item">
									<img src={meter1} alt="Image" />
									<h4>SEO & Digital Marketing</h4>
									<p>
										Boost your website’s visibility and traffic with advanced
										SEO and marketing strategies.
									</p>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	);
};
