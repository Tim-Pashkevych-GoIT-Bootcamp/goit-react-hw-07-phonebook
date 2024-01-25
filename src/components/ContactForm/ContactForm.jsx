import css from './ContactForm.module.css';
import { ContactFormInput, ContactFormButton } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContact } from './../../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const onFormSubmit = data => {
    dispatch(addContact(data));
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        className={css.form}
        name="contactForm"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <ContactFormInput label="Name" name="name" type="text" focus={true} />
        <ContactFormInput label="Number" name="number" type="tel" />
        <ContactFormButton text="Add contact" type="submit" />
      </form>
    </FormProvider>
  );
};
