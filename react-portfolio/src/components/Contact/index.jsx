import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jvfv9ow',
        'template_ihc4ere',
        form.current,
        'geoPb9CkRyYOvIx-S'
      )
      .then(
        (result) => {
          alert(result.text)
        },
        (error) => {
          alert(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
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
                    name="message"
                    required
                    placeholder="Message"
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="info-map">
        Omer Faruk Guldu,
        <br />
        Turkey,
        <br />
        Tantavi Mahallesi, Yenisen Sokak <br />
        Merve Apartmani, No: 15/4 <br />
        <span>omerfguldu@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[41.0053, 28.977]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[41.0053, 28.977]}>
            <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
