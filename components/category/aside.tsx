"use client";
import BreadcrumbWithCustomSeparator from "./breadcrumbWithCustomSeparator";

function Aside({ categoryName }: { categoryName: string }) {
  return (
    <div>
      <BreadcrumbWithCustomSeparator category={categoryName} />
    </div>
  );
}

export default Aside;
