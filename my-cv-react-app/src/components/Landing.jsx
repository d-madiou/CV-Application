import { RiAddCircleFill, RiImage2Fill } from "@remixicon/react";
import { Link } from 'react-router-dom';
import "../styles/landing.css";

function Landing() {
    return (
        <>
            <div className="landing">
                <div className="container">
                    <div className="row">
                        <h1>RapidCV</h1>
                        <ul className="header-menu">
                            <li>
                                <Link to="/preview">Preview<RiImage2Fill className="svg" /></Link>
                            </li>
                            <li>
                                <Link to="/first">Create New <RiAddCircleFill className="svg" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="landing-text">Hey there! Welcome to RapidCV, where you can build your professional CV in just a minute. 
                    You can print and download it once you're done.

Note: Do not close or refresh the browser while building your CV, or you’ll have to re-enter your information.
                </p>
                <Link to="/first" className="started">Get Started</Link>  
            </div>
        </>
    );
}

export default Landing;
