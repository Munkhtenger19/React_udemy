// object destructuring so that you don't have to access props.title, props.description, etc.
export default function CoreConcept({ image, title, description }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }