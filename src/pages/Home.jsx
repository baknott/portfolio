import React, { useContext } from 'react'
import Header from '../components/Layout/Header'
import Part from '../components/Layout/Part'
import Projets from '../components/Layout/Projets'
import { ClassContext } from '../components/Layout/ClassContext'

import Photo from '../images/photoCV.jpg'
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
        title="Qui suis-je ?"
        classname={classAlter}
        id="entete"
        content="J'ai 28 ans et je suis papa d'une petite fille de 3 ans. 
        Après un BTS Service informatique aux organisations (SIO) option développement d'applications j'ai travaillé pendant 4 ans pour l'hébergeur web IONOS. 
      N'ayant pas vraiment de possibilité d'évolution intéressante dans la société j'ai décidé de mettre fin à mon contrat pour m'occuper de ma fille pendant ces 2 dernières années, 
      j'ai décidé de me remettre au développement web que j'avais laissé de coté depuis la fin de mon BTS en suivant en paralèlle la formation Développeur Web d'Openclassrooms que j'ai terminé en Mars 2023"
      />
      {/*<Part title="Projets personels" content="" classname="part" />*/}
      <Projets state={classAlter} />
      <button onClick={toggleClass}>Projets personels</button>
    </div>
  )
}

export default Home
