import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  // const hiddenAnimationState = { opacity: 0, y: 30 };
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
          /* FIX FOR NEWER FRAMER-MOTION */
          exit: { opacity: 0, y: 30 },
        }}
        initial="hidden"
        animate="visible"
        /* FIX FOR NEWER FRAMER-MOTION */
        exit="exit"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
