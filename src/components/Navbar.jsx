import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <h1 className="logo">My Portfolio</h1>
        <ul className="nav-links">
          <li><a href="/About">About</a></li>
          <li><a href="https://github.com/mukundmadhavsharma23140-sudo/MMShop.git">Projects</a></li>
          <li><a href="https://drive.google.com/file/d/1ZNo_lJkuux-cNghplQv6UlW4ulHIoRDQ/view?usp=sharing">Resume</a></li>
          <li><a href="https://www.linkedin.com/in/mukundms170804">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
