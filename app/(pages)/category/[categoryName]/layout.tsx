import Aside from "@/components/category/aside";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ categoryName: string }>;
}) {
  const categoryName = (await params).categoryName;

  return (
    <section className="flex flex-col gap-6 px-5 sm:px-10 md:mt-6 md:flex-row md:gap-20">
      <Aside categoryName={categoryName} />
      <div>{children}</div>
    </section>
  );
}
