import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <div className="name">
          My name is <span>ADITYA SHRIVASTAV</span>
        </div>
        <div className="des">
      Proactive MCA student with strong skills in Java, JavaScript, and full-stack (MERN) development.
Hands-on project and internship experience at DataNutts IT Solutions and IOTA Informatics.
Certified in C, Java, and MERN; passionate about building impactful, user-focused solutions.
        </div>


        <a href="./AdityaShrivastavResume.pdf"target="_blank" rel="noopener noreferrer" download>Download My Resume</a>
      </div>
      <div className="avatar">
        <div className="card">
            <img src="./Aditya_pic-removebg-preview.png"></img>
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
