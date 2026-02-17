import {createPortal} from 'react-dom';
import * as React from 'react';
import {useEffect} from 'react';
import ContactUsForm from '../../components/forms/ContactUsForm/ContactUsForm.tsx';
import type {ContactUsFormData} from '../../../types/contactUs';
import {CloseIcon} from '../../components/ui/icons/CloseIcon.tsx';
import styles from './ContactUsModal.module.scss';

type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const ContactUsModal = ({isOpen, onClose}: ContactModalProps) => {
  useEffect(() => {
    if (!isOpen) {return;}

    document.body.style.overflow = 'hidden';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {return null;}

  const handleSubmit = (data: ContactUsFormData) => {
    console.log('Заполненные данные', JSON.stringify(data, null, 2));
    onClose();
  };

  return createPortal(
    <div className={styles.modal_overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          e.stopPropagation()
        }
      >
        <div className={styles.modal_header}>
          <h2>Связаться с нами</h2>
          <button className={styles.close_button} onClick={onClose}>
            <CloseIcon className={styles.close_button_icon}/>
          </button>
        </div>
        <ContactUsForm handleSubmit={handleSubmit}/>
      </div>
    </div>,
    document.body
  );
};

export default ContactUsModal;