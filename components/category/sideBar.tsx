import ItemsNavigation from "../header/itemsNavigation";
import { Separator } from "../ui/separator";

function SideBar() {
  return (
    <div className="hidden md:flex md:flex-col md:items-start md:justify-center md:gap-4">
      <h1 className="text-xl">Browse By</h1>
      <Separator />
      <ItemsNavigation
        className="flex-col items-start px-2 xl:gap-6 xl:px-2 2xl:gap-6 2xl:px-2"
        browseByShow="block"
        browseByHidden="hidden"
        categoryTextClass="text-sm hover:text-sm xl:text-lg xl:hover:text-lg 2xl:text-xl 2xl:hover:text-xl"
        navClassName="bg-transparent "
      />
    </div>
  );
}

export default SideBar;
