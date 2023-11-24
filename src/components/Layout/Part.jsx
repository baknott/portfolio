const Part = ({ classname, id, title, content }) => {
  return (
    <div className={classname} id={id}>
      <h2 className="titlePart">{title}</h2>
      <div className="flexHrz width100">{content}</div>
    </div>
  )
}

export default Part
