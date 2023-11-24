import '../../styles/bird.css'

function Bird() {
  return (
    <div className="div-animation">
      <div className="corps">
        <div className="touffe">
          <div className="plume1"></div>
          <div className="plume2"></div>
          <div className="plume3"></div>
        </div>
        <div className="oeil-gauche"></div>
        <div className="oeil-droit"></div>

        <div className="bec"></div>
      </div>
      <div className="sourcil"></div>
      <div className="aile-gauche"></div>
      <div className="aile-droite"></div>
      <div className="patte-gauche">
        <div className="griffe1"></div>
        <div className="griffe2"></div>
      </div>
      <div className="patte-droite">
        <div className="griffe1"></div>
        <div className="griffe2"></div>
      </div>
    </div>
  )
}

export default Bird
