import { useState } from 'react'
import '../../styles/shark.css'

function Shark() {
  const [aileron, setAileron] = useState('')
  const [poisson, setPoisson] = useState('')
  const [requin, setRequin] = useState('')
  const [oeilRequin, setOeilRequin] = useState('')
  const [basRequin, setBasRequin] = useState('')
  const [cadavre, setCadavre] = useState('')
  const [crabe, setCrabe] = useState('')
  const [coco, setCoco] = useState('')
  const [boutonLecture, setBoutonLecture] = useState('bouton-lecture')
  const [boutonReroll, setBoutonReroll] = useState('masquer-bouton')
  const [rideauDisplay, setRideauDisplay] = useState('rideau')

  const lectureClick = () => {
    setAileron('aileron-seul')
    setRequin('requin')
    setPoisson('poisson')
    setOeilRequin('oeil-noir-requin')
    setBasRequin('bas-requin')
    setCadavre('cadavre')
    setCrabe('crabe')
    setCoco('coco')
    setBoutonLecture('masquer-bouton')
    setBoutonReroll('bouton-reroll')
    setRideauDisplay('masquer-bouton')
  }
  const rebootClick = () => {
    setAileron('')
    setRequin('')
    setPoisson('')
    setOeilRequin('')
    setBasRequin('')
    setCadavre('')
    setCrabe('')
    setCoco('')
    setBoutonLecture('bouton-lecture')
    setBoutonReroll('masquer-bouton')
    setRideauDisplay('rideau')
  }
  return (
    <div>
      <div className="cadre">
        <div className={rideauDisplay}></div>
        <div className="cocotier">
          <div className="feuillage">
            <div className="feuille"></div>
            <div className="feuille feuille-reverse"></div>
            <div className="feuille feuille2"></div>
            <div className="feuille feuille2 feuille2-reverse"></div>
            <div className="feuille feuille3"></div>
            <div className="feuille feuille3 feuille3-reverse"></div>
          </div>
          <div className="tronc">
            <div className="segments-tronc">
              <div className="unSegment"></div>
              <div className="unSegment"></div>
              <div className="unSegment"></div>
              <div className="unSegment"></div>
              <div className="unSegment"></div>
            </div>
          </div>
          <div className="masque-segment-gauche">
            <div className="raccord-cadre"></div>
          </div>
          <div className="masque-segment-droite">
            <div className="raccord-cadre"></div>
          </div>
          <div className={coco}>
            <div className="trous-coco">
              <div className="un-trou-coco"></div>
              <div className="un-trou-coco"></div>
              <div className="un-trou-coco"></div>
            </div>
          </div>
        </div>
        <div className="sable"></div>
        <div className={crabe}>
          <div className="bloc-bras-crabe">
            <div className="pince-gauche">
              <div className="chelipede-1"></div>
              <div className="chelipede-2"></div>
            </div>
            <div className="bras-crabe"></div>
            <div className="pince-droite">
              <div className="chelipede-1"></div>
              <div className="chelipede-2"></div>
            </div>
          </div>
          <div className="bloc-pattes-crabe">
            <div className="unepatte-crabe patte-crabe-extremite">
              <div className="bas-patte-crabe"></div>
              <div className="haut-patte-crabe"></div>
            </div>
            <div className="unepatte-crabe patte-crabe-centre">
              <div className="bas-patte-crabe"></div>
              <div className="haut-patte-crabe"></div>
            </div>
            <div className="unepatte-crabe reverse-patte-crabe-centre">
              <div className="bas-patte-crabe"></div>
              <div className="haut-patte-crabe"></div>
            </div>
            <div className="unepatte-crabe reverse-patte-crabe-extremite">
              <div className="bas-patte-crabe"></div>
              <div className="haut-patte-crabe"></div>
            </div>
          </div>
          <div className="corps-crabe"></div>
          <div className="yeux-crabe">
            <div className="antenne-crabe">
              <div className="oeil-crabe-gauche">
                <div className="pupille-crabe-gauche"></div>
              </div>
            </div>
            <div className="antenne-crabe">
              <div className="oeil-crabe-droit">
                <div className="pupille-crabe-droite"></div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className={poisson}>
          <div className="corps-poisson"></div>
          <div className="branchie"></div>
          <div className="oeil-poisson"></div>
          <div className="queue-poisson"></div>
        </div>
        <div className={requin}>
          <div className={basRequin}>
            <div className="dents-bas"></div>
            <div className="machoire-requin"></div>
          </div>
          <div className="haut-requin">
            <div className="dents-haut"></div>
            <div className="tete-requin"></div>
            <div className="nez-requin"></div>
            <div className="oeil-blanc-requin"></div>
            <div className={oeilRequin}></div>
            <div className="aileron-requin"></div>
            <div className="ventre-requin"></div>
            <div className="queue-requin"></div>
            <div className="nageoire-requin"></div>
          </div>
        </div>
        <div className="water-top"></div>
        <div className={cadavre}>
          <div className="tete-mangee">
            <div className="orbite"></div>
          </div>
          <div className="squelette">
            <div className="colonne-v"></div>
            <div className="aretes">
              <div className="arete arete-1"></div>
              <div className="arete arete-2"></div>
              <div className="arete"></div>
            </div>
          </div>
          <div className="queue-squelette"></div>
        </div>
        <div className={aileron}></div>
        <div className="water-bot"></div>
        <button onClick={rebootClick} className={boutonReroll}>
          ⭮
        </button>
        <button onClick={lectureClick} className={boutonLecture}>
          ►
        </button>
      </div>
    </div>
  )
}

export default Shark
