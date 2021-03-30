import { Carousel } from "react-bootstrap";
import "./HomePage.scss";
import firstImage from "../../assets/images/img-1.jpg";
import secondImage from "../../assets/images/img-2.jpg";
import thirdImage from "../../assets/images/img-3.jpg";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={firstImage} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={secondImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={thirdImage} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-container">
        <h1 className="text-heading">Connect here and work from anywhere</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
