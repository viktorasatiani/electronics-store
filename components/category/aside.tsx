import BreadcrumbWithCustomSeparator from "./breadcrumbWithCustomSeparator";
import SideBar from "./sideBar";

function Aside({ categoryName }: { categoryName: string }) {
  return (
    <div className="flex flex-col gap-6">
      <BreadcrumbWithCustomSeparator category={categoryName} />
      <SideBar />
    </div>
  );
}

export default Aside;
