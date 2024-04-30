import "./CoreConcept.css"

export function CoreConcept({image, title, description}) {
    //you can destructure incoming data to write less!
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }