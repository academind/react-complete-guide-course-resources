/**
 * Renders a core concept item.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the core concept.
 * @param {string} props.description - The description of the core concept.
 * @param {string} props.image - The URL of the image for the core concept.
 * @returns {JSX.Element} The rendered core concept item.
 */
export default function CoreConcept({ title, description, image }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }