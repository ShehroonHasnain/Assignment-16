import "./footer.css"
import email from "../../assets/email.png"
import insta from "../../assets/insta.png"
import fb from "../../assets/fb.png"
import yt from "../../assets/yt.png"
export default function Footer() {
    return <footer id="contact" className="footercontainer">
        <div className="footertext"> 
            <h2>Contact me</h2>
            <p>Feel free to contact me</p>
        </div>
      <ul className="footerlists">
            <li className="footerlist">
                <img src={email} alt="emailicon" id="fimg" />
                <a href="#">myemail@gmail.com</a>
            </li>
            <li className="footerlist">
                <img src={insta} alt="instaicon" id="fimg" />
                <a href="#">myInstapage.com</a>
            </li>
            <li className="footerlist">
                <img src={fb} alt="fbicon"  id="fimg"/>
                <a href="#">myFBpage.com</a>
            </li><li className="footerlist" >
                <img src={yt} alt="yticon" id="fimg" />
                <a href="#">myYTchannel.com</a>
            </li>
        </ul>
    </footer>
} 