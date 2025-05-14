interface OrderedProductTypes {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: Array<string>;
  $updatedAt: string;
  image: string;
  name: string;
  onSale: boolean;
  product_type: string;
  quantity: number;
}

interface SingleProductTypes {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: Array<string>;
  $updatedAt: string;
  image: string;
  name: string;
  onSale: boolean;
  product_type: string;
  quantity: number;
}

interface getProductsProps {
  categoryName: string | string[] | undefined;
  filterValue: string;
  offSet: number;
  itemsCount: number;
}

interface FilterSortContextType {
  filterValue: string;
  updateValue: (newValue: string) => void;
}
interface FilterSortProviderProps {
  children: React.ReactNode;
}

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
