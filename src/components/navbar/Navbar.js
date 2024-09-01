import "./navbar.css"
export default function Navbar() {
    return <nav className="navbar">
        <a className="title" href="./">Portfolio</a>
        <div className="menu">
            <ul className="menuitems">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#expertise">Expertise</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        
    </nav>

}