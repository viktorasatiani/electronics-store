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

interface CartContextType {
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: SingleProductTypes[];
  setCartItems: React.Dispatch<React.SetStateAction<SingleProductTypes[]>>;
  subtotal: number;
  setSubtotal: React.Dispatch<React.SetStateAction<number>>;
}

interface CartProviderProps {
  children: React.ReactNode;
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

interface OrderedItemProps {
  name: string;
  image: string;
  quantity: number;
}
interface OrderFormProps {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  orderedItem: OrderedItemProps[];
  price: string;
}

interface getOrderProps {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  price: string;
  orderedItem: {
    name: string;
    image: string;
    quantity: number;
    $createdAt: string;
  }[];
  $collectionId: string;
  $databaseId: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: Array<string>;
  $collectionId: string;
  $databaseId: string;
}

interface EachOrder {
  name: string;
  image: string;
  quantity: number;
  $createdAt: string;
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

interface User {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  email: string;
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
