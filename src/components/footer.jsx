import './footer.css'

const   Footer =() => {

    return (
        <footer>
            
            <div className="con-footer" id='con-footer'>
            <div className="logo-footer">
            <a href="#">
                <img src="src\assets\img\Logo.png" alt="img"/>
                <div className="logo-text">iFOOD</div>
            </a>
             </div>
                <div className="ig">
                    <img src="src\assets\img\ig.png" alt="" />
                </div>
                <div className="fb">
                    <img src="src\assets\img\fb.png" alt="" />
                </div>
                <div className="ytb">
                    <img src="src\assets\img\ytb.png" alt="" />
                </div>
            </div>
        </footer>

    )
}

export default Footer;