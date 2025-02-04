interface HambMenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sm: boolean;
  setSm: (value: boolean) => void;
}
interface HambMenuProviderProps {
  children: React.ReactNode;
}
