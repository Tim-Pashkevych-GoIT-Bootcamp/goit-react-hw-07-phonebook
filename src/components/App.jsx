import {
  ContactForm,
  ContactsList,
  ContactsListFilter,
  Section,
} from 'components';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <ContactsListFilter />
        <ContactsList />
      </Section>
    </>
  );
};
