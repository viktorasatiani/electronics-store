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

interface AboutFormPropsResponse {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $permissions: Array<string>;
  $updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  position: string;
  startDate: string;
}

interface fqaProps {
  firstTrigger: string;
  secondTrigger: string;
  thirdTrigger: string;
  firstContent: string;
  secondContent: string;
  thirdContent: string;
}
