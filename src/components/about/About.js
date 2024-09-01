import "./about.css"
import sck from "../../assets/sck.png"
import uni from "../../assets/uni.png"
import cls from "../../assets/cls.png"
export default function About (){
    return <section id="about" className="aboutcontainer">
        <div className="aboutitem">
            <h2>About me:</h2>
            <div className="abimg">
                <img src={sck} alt="sckicon" className="abimgimg"/>
                
                <img src={uni} alt="Cssicon" className="abimgimg"/>
                <img src={cls} alt="Jsicon" className="abimgimg"/>
               
            </div>
            <p>
                Learn Full Stack Development From SMIT <br/>
                Currently Student of BS(Software Engineering) <br/>I have done my schooling from Faisalabad <br/>I pursued my education through schooling and college with a focus on building a strong technical foundation. Throughout my academic journey, I discovered a deep passion for coding, which has been a driving force in my personal and professional growth. My love for problem-solving and creating innovative solutions continues to inspire my learning and development.
            
            </p>
           
        </div>
    </section>
}