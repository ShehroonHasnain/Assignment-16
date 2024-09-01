import"./expertise.css"
import html from "../../assets/html.png"
import js from "../../assets/js.png"
import css from "../../assets/css.png"
import rjs from "../../assets/rjs.png"
export default function Expertise() {
    return <section id="expertise" className="expertisecontainer">
        <div className="expertiseitem">
            <h2> Expertise in:</h2>
            <div className="eximg">
                <img src={html} alt="htmlicon" className="eximgimg"/>
                
                <img src={css} alt="Cssicon" className="eximgimg"/>
                <img src={js} alt="Jsicon" className="eximgimg"/>
                <img src={rjs} alt="Reactjsicon" className="eximgimg"/>
            </div>
            
            <p>
                With experience in web development, I have honed my skills in HTML, CSS, JavaScript, and React.js, enabling me to build responsive and dynamic web applications. My proficiency in HTML and CSS allows me to create well-structured and visually appealing layouts, while my knowledge of JavaScript enables me to add interactivity and functionality to web pages. Leveraging React.js, I can develop component-based applications that are efficient, maintainable, and scalable. This combination of skills empowers me to craft seamless user experiences and deliver high-quality web solutions tailored to meet the needs of modern users.
            </p>
        </div>
     
    </section>
}