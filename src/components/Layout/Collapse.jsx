import React from 'react'
import { useState } from 'react'
import TopArrow from '../../images/top-arrow.png'

const Collapse = (props) => {
  const [openTab, setOpenTab] = useState(false)

  const openTabHandler = () => {
    setOpenTab((openTab) => !openTab)
  }

  return (
    <div className="collapseHalf">
      <div onClick={openTabHandler} className="collapse_header">
        <h2 className="collapse_header_title">{props.title}</h2>
        {!openTab ? (
          <img
            src={TopArrow}
            alt="fleche vers le bas"
            className="uppingArrow"
          />
        ) : (
          <img
            src={TopArrow}
            alt="fleche vers le haut"
            className="downingArrow"
          />
        )}
      </div>
      {openTab && <div className="collapse_content">{props.content}</div>}
    </div>
  )
}

export default Collapse
