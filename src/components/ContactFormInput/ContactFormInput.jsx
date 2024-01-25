import { nanoid } from '@reduxjs/toolkit';
import css from './ContactFormInput.module.css';
import { useFormContext } from 'react-hook-form';

export const ContactFormInput = ({
  label,
  type,
  name,
  required = false,
  focus = false,
}) => {
  const fieldId = nanoid();
  const { register } = useFormContext();

  return (
    <fieldset className={css.formFieldSet}>
      <label className={css.formLabel} htmlFor={fieldId}>
        {label}:
      </label>
      <input
        id={fieldId}
        type={type}
        autoFocus={focus}
        {...register(name, { required })}
      />
    </fieldset>
  );
};
