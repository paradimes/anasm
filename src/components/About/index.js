import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'About Me'.split('')}
                        idx={15}
                    />
                </h1>
                <p>
                    My name is Anas Mohmand. I grew up in Ontario, Canada and I have been
                    coding since I was a senior in high school. 
                    In May of 2022, I graduated from <a href='https://ontariotechu.ca/programs/undergraduate/engineering/index.php'> Ontario Tech University </a>with a Bachelor Of Engineering in Mechanical Engineering.
                    Currently, I'm pursuing a Bachelor of Engineering in Software Engineering and will be graduating in April of 2025.
                </p>

                <p>
                    I love learning about software and the ways its various
                    applications change the world. It's intriguing to me that I
                    can create something that can solve a problem
                    or change the world.
                    Asides from software, I have a strong passion for space,
                    specifically interplanetary travel and advancements in
                    our spacefaring capability.
                </p>

                <p>
                    <b>Hobbies: </b>Coding projects, Photography & Filmmaking, Hiking, Camping.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>

                </div>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    )



}

export default About;