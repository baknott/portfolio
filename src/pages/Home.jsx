import React, { useContext } from 'react'
import Header from '../components/Layout/Header'
import Part from '../components/Layout/Part'
import Projets from '../components/Layout/Projets'
import { ClassContext } from '../components/Layout/ClassContext'
import Photo from '../images/photoCV.jpg'
import Wip from '../images/wip.png'
function Home() {
  const { classAlter, toggleClass } = useContext(ClassContext)

  return (
    <div>
      <div className={classAlter} id="bodyCover"></div>
      <Header />
      <img
        src={Photo}
        alt="photodeprofil"
        className={classAlter}
        id="photoprofil"
      />
      <Part
        title="Bienvenue sur mon Portfolio !"
        classname={classAlter}
        id="entete"
        content="J'ai 28 ans et je suis papa d'une petite fille de 3 ans. 
        Après un BTS Service informatique aux organisations (SIO) option développement d'applications j'ai travaillé pendant 4 ans pour l'hébergeur web IONOS. A la fin de mon contrat j'ai décidé de m'occuper de ma fille pendant ces 2 dernières années, 
      pendant ce laps de temps j'ai suivi le parcours développeur web de Openclassrooms que j'ai terminé en Mars 2023. Je recherche une alternance dans le cadre du parcours Développeur Javascript/React d'Openclassrooms également"
      />
      {/*<Part title="Projets personels" content="" classname="part" />*/}
      <Projets state={classAlter} />
      <div className={classAlter} id='contact'>
        <h2>Me contacter</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/bryanpoujol/">Linkedin</a></li>
          <li><a href="https://github.com/baknott">Github</a></li>
        </ul>
      </div>
      <button onClick={toggleClass} className={classAlter} id="theButton"></button>
      <div className='wip'>
        <img src={Wip} alt="wip" className='wip__img'/>
        <p>Portfolio en cours de construction Dernière MàJ le 03/12/2023</p>
      </div>
    </div>
  )
}

export default Home
