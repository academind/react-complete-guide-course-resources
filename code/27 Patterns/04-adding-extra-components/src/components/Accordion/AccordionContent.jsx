import { useAccordionContext } from './Accordion.jsx';

export default function AccordionContent({ id, className, children }) {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ''} open` : `${className ?? ''} close`
      }
    >
      {children}
    </div>
  );
}
