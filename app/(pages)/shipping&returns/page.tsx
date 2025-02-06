import { Separator } from "@/components/ui/separator";

function Shipping() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 md:gap-8 lg:gap-10 xl:gap-14 xl:py-16">
      <h1 className="mb-10 px-28 text-center text-5xl font-medium md:pt-8 lg:pt-12 lg:text-6xl">
        Shipping & Returns
      </h1>
      <Separator className="2xl:w-11/12" />
      <div className="flex flex-col items-center justify-center gap-8 px-10 md:px-20 xl:px-32">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Shipping Policy
        </h1>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m a Shipping Policy section. I`m a great place to update your
          customers about your shipping methods, packaging and costs. Use plain,
          straightforward language to build trust and make sure that your
          customers stay loyal!
        </p>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m the second paragraph in your Shipping Policy section. Click here
          to add your own text and edit me. It`s easy. Just click “Edit Text” or
          double click me to add details about your policy and make changes to
          the font. I`m a great place for you to tell a story and let your users
          know a little more about you.
        </p>
      </div>
      <Separator className="2xl:w-11/12" />
      <div className="flex flex-col items-center justify-center gap-8 px-10 md:px-20 xl:px-32">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Return & Exchange Policy
        </h1>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m a return policy section. I`m a great place to let your customers
          know what to do in case they`ve changed their mind about their
          purchase, or if they`re dissatisfied with a product. Having a
          straightforward refund or exchange policy is a great way to build
          trust and reassure your customers that they can buy with confidence.
        </p>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m the second paragraph in your Return & Exchange policy. Click here
          to add your own text and edit me. It`s easy. Just click “Edit Text” or
          double click me to add details about your policy and make changes to
          the font. I`m a great place for you to tell a story and let your users
          know a little more about you.
        </p>
      </div>
    </div>
  );
}

export default Shipping;
