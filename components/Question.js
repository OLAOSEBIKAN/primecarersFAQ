    const Questions = ({props}) => {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-stretch">{props.map(prop =>(
      <div key={prop.id} className="h-60 shadow-lg bg-gray/90 ring-1 ring-zinc-900/5 backdrop-blur px-3 ">
        <h1>{prop.title}</h1>
        <p>{prop.description}</p>
      </div>
    ))}</div>
  )
  }

  export default Questions
