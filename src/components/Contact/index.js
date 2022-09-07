import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();


    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_5ygdegp',
                'template_bspy09w', //template ID
                form.current,
                'agm7khpSRg2N1810K',
            )
            .then(
                () => {
                    alert('Thank you for your messsage!');
                    window.location.reload(false)
                },
                () => {
                    alert('Oops! The message failed to send. Please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Contact Me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Please use the form below to send me any inquiries
                        you may have!
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul >
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    >
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Anas Mohmand
                    <br />
                    Toronto, ON
                    <br />
                    Canada <br />
                    <span>anasm.portfolio@gmail.com</span>
                </div>
                 <div className='map-wrap'>
                    <MapContainer center={[43.643292, -79.388195]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[43.643292, -79.388195]}>
                            <Popup>Hello!</Popup>
                        </Marker>
                    </MapContainer>
                 </div>
            </div>

            <Loader type='pacman' />
        </>
    )




}

export default Contact