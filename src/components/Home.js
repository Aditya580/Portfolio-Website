import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <div className="name">
          My name is <span>ADITYA SHRIVASTAV</span>
        </div>
        <div className="des">
        Recent BCA graduate from Rabindranath Tagore University, Bhopal, with a 9.4 SGPA. Proficient in Java and MERN stack development, with project experience and internships at DataNutts IT Solutions and IOTA Informatics. Certified in C, Java, and MERN Stack Development. Active in college events, mentoring, and winning competitions, showcasing strong technical and leadership skills.
        </div>


        <a href="./Aditya_Shrivastav_Resume (2).pdf"target="_blank" rel="noopener noreferrer" download>Download My Resume</a>
      </div>
      <div className="avatar">
        <div className="card">
            <img src="./mypic.png"></img>
            <div className="info">
              <div>Developer</div>
              <div>Indian</div>
              <div>Deboniar</div>
              <div>Male</div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
