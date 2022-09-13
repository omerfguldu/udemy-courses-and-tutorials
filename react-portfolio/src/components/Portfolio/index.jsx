import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import projectsData from '../../data/projects.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderProjects = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project, index) => (
          <div key={index} className="image-box">
            <img
              className="project-image"
              src={project.project_image_url}
              alt="Project Image"
            />
            <div className="content">
              <p className="title">{project.project_name}</p>
              <h4 className="description">{project.project_description}</h4>
              <button
                className="btn"
                onClick={() => window.open(project.project_link)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
        <div>{renderProjects(projectsData.projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
