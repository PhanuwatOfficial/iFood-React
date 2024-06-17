import './navbar.css'

const Navbar =() => {

    return (
    <div>
    <nav>
    <div className="nav-con">
        <div className="logo">
            <a href="#">
                <img src="src\assets\img\Logo.png" alt="img"/>
                <div className="logo-text">iFOOD</div>
            </a>
        </div>
        <ul className="menu">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#con-footer">Contact</a></li>
        </ul>
        <div className="search-bar">
            <input type="text" placeholder='Seach foods'/>
        </div>
    </div>
    </nav>
    </div>
)
}

export default Navbar;