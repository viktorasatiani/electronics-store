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
    <section className="flex flex-col gap-6 px-5 sm:px-4 md:mt-6 md:flex-row md:gap-12 lg:gap-2 2xl:gap-8">
      <Aside categoryName={categoryName} />
      <div>{children}</div>
    </section>
  );
}
