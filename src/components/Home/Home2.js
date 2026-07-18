import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/od_avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <i><b className="purple"> I wrote my first code in 2015. </b></i> Between 2017
              and 2019, I worked on frontend and backend development in the Mobile App and Web fields. 
              Towards the end of 2019, I was introduced to Game Development and have been actively developing games since then. 
              I started my first professional job in the game industry in 2020. I have been a <i><b className="purple"> Professional Game Developer </b></i> for about <i><b className="purple"> 5 years </b></i> now.
              <br/>
              <br/>I am fluent in
              <i><b className="purple"> C#, Unity </b></i>
              <br />
              <br />
              I have been actively involved in dozens of game projects so far. While I mostly took on roles as a programmer, I have also assumed the role of team leader in many teams.
              <i><b className="purple"> Project Management </b></i>, <i><b className="purple"> Strong Communication </b></i> and <i><b className="purple"> Being a Good Teammate </b></i> are the qualities I am proud of.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
    
      </Container>
    </Container>
  );
}
export default Home2;
