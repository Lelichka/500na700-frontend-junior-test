import TextInput from '../../inputs/TextInput/TextInput.tsx';
import Checkbox from '../../inputs/Checkbox/Checkbox.tsx';
import Button from '../../inputs/Button/Button.tsx';
import * as React from 'react';
import {useState} from 'react';
import {PatternFormat} from 'react-number-format';
import type {ContactUsFormData, ContactUsFormErrors} from '../../../../types/contactUs';
import styles from './ContactUsForm.module.scss';

interface ContactUsFormProps {
  handleSubmit: (formData: ContactUsFormData) => void;
}

const ContactUsForm = ({handleSubmit}: ContactUsFormProps) => {
  const [formData, setFormData] = useState<ContactUsFormData>({
    name: '',
    email: '',
    phone: '',
    consent: false
  });

  const [errors, setErrors] = useState<ContactUsFormErrors>({});
  const [showMask, setShowMask] = useState<boolean>(false);

  const handleChange = (field: keyof ContactUsFormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));

    if (field === 'phone' && value !== '') {
      setShowMask(true);
    }
  };

  const validate = (): boolean => {
    const newErrors: ContactUsFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }

    if (!formData.phone.trim() || formData.phone.includes('_')) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.consent) {
      newErrors.consent = 'Необходимо согласие на обработку данных';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = (
    event: React.SubmitEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validate()) {return;}

    handleSubmit(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      consent: false
    });
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.modal_form}>
      <TextInput
        value={formData.name}
        name={'name'}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder={'Имя'}
      />
      {errors.name && <span className={styles.error}>{errors.name}</span>}
      <TextInput
        value={formData.email}
        name={'email'}
        onChange={(e) => handleChange('email', e.target.value)}
        placeholder={'E-mail'}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}
      <PatternFormat
        value={showMask ? formData.phone : ''}
        type={'tel'}
        name={'phone'}
        allowEmptyFormatting={showMask}
        onChange={(e) => handleChange('phone', e.target.value)}
        format="+7 (###) ###-##-##"
        mask={'_'}
        placeholder={'Телефон'}
        customInput={TextInput}
      />
      {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      <Checkbox
        checked={formData.consent}
        onChange={(e) => handleChange('consent', e.target.checked)}
        className={'mt-5'}
        label={'Я согласен (-а) на обработку персональных данных'}/>
      {errors.consent && <span className={styles.error}>{errors.consent}</span>}
      <Button className={'mt-20'} type={'submit'}>Отправить</Button>
    </form>
  );
};
export default ContactUsForm;