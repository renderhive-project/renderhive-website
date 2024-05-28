import { createContext, useContext } from 'react';

interface ContactFormContextType {
    showContactForm: boolean;
    setShowContactForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactFormContext = createContext<ContactFormContextType>({ showContactForm: false, setShowContactForm: () => {} });

const useContactForm = () => {
    return useContext(ContactFormContext);
}

export { ContactFormContext, useContactForm };