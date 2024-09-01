
import "./hero.css"
import homeicon from "../../assets/home-icon.png"
export default function Hero(){
    return<section className="container" id="home"> 
        <div className="content">
            <h1 className="hometitle">Hi! I am Shehroon</h1>
            <p className="homedes">As a full stack developer with expertise in React, HTML, and CSS, I bring a strong understanding of both front-end and back-end technologies to my projects. My skills allow me to create dynamic, responsive, and user-friendly web applications, ensuring a seamless experience from design to deployment.</p>
        <a href="mailto:hasnainshehroon@gmail.com" className="home-btn">Contact me</a>
        
        </div>
        <img src={homeicon} alt="image" className="homeicon" />
    </section>
}