interface HambMenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface HambMenuProviderProps {
  children: React.ReactNode;
}
