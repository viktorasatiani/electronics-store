interface HambMenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sm: boolean;
  setSm: (value: boolean) => void;
}
interface HambMenuProviderProps {
  children: React.ReactNode;
}

interface AboutFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  startDate: Date;
}

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface fqaProps {
  firstTrigger: string;
  secondTrigger: string;
  thirdTrigger: string;
  firstContent: string;
  secondContent: string;
  thirdContent: string;
}
