import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = ['', 'A', 'n', 'a', 's', '', 'M', 'o', 'h', 'm', 'a', 'n', 'd']
    // const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    const nameArray = "My name is Anas,".split("");
    const jobArray = "I'm a Software Engineer.".split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>W</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>c</span>
                    <span className={`${letterClass} _15`}>o</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <span className={`${letterClass} _17`}>e!</span>
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={18} />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={33} />
                </h1>
                <h2>Engineering Graduate (Class of 2022) / Avid Programmer / Technology Enthusiast</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            {/* <Logo />  */}
        </div>
        <Loader type="pacman" />
        </>
    ); 
}

export default Home;