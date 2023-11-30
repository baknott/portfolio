import React, { useState } from 'react'
import Bird from './Bird'
import Shark from './Shark'
import data from './data.json' // Importez le fichier JSON directement

const Projets = ({ state, render }) => {
  const [elementSelectionne, setElementSelectionne] = useState(null)

  const handleSelection = (nom) => {
    setElementSelectionne(nom)
  }

  return (
    <div className={state} id="blocProjets">
      <h2>Projets :</h2>
      <div className="flexHrz spaBetw">
        <div id="indexProjets">
          <ul>
            {data.map((element, index) => (
              <li
                className="listeProjets"
                key={index}
                onClick={() => handleSelection(element.nom)}
              >
                {element.nom}
              </li>
            ))}
          </ul>
        </div>

        <div className="displayProjets">
          {elementSelectionne && data && (
            <div>
              <h2>
                {/* TITRE DU PROJET*/} {elementSelectionne}
              </h2>
              <p>
                <strong>Objectif</strong> :
                {
                  data.find((element) => element.nom === elementSelectionne)
                    .objectif
                }
              </p>
              <h4>Contexte :</h4>
              <p>
                {
                  data.find((element) => element.nom === elementSelectionne)
                    .contexte
                }
              </p>
              <div>
                {/* Rendu */}
                <div className="blocImgProjets">
                  {data.find((element) => element.nom === elementSelectionne)
                    .rendu &&
                    data
                      .find((element) => element.nom === elementSelectionne)
                      .rendu.map((url, index) => (
                        <div className="cadreImgProjet">
                          {/*<input type="checkbox" className="zoomer"></input>*/}
                          <img
                            className={`ImgProjet${index}`}
                            key={index}
                            src={`/portfolio${url}`}
                            alt={`img ${index + 1}`}
                          />
                        </div>
                      ))}
                </div>

                <div
                  className={
                    data.find((element) => element.nom === elementSelectionne)
                      .animations
                  }
                >
                  <Bird />
                  <Shark />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projets
