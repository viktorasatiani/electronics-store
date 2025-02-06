import { Separator } from "@/components/ui/separator";
function Terms() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 md:gap-8 lg:gap-10 xl:gap-14 xl:py-16">
      <h1 className="mb-10 px-28 text-center text-5xl font-medium md:pt-8 lg:pt-12 lg:text-6xl">
        Terms & Conditions
      </h1>
      <Separator className="2xl:w-11/12" />
      <div className="flex flex-col items-center justify-center gap-8 px-10 md:px-20 xl:px-32">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Customer Care
        </h1>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m a Customer Care section. I`m a great place to write a long text
          about your company and your services, and, most importantly, how to
          contact your store with queries. Writing a detailed Customer Care
          policy is a great way to build trust and reassure your customers that
          they can buy with confidence.
        </p>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m the second paragraph in your Customer Care section. Click here to
          add your own text and edit me. It`s easy. Just click “Edit Text” or
          double click me to add details about your policy and make changes to
          the font. I`m a great place for you to tell a story and let your users
          know a little more about you.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 px-10 md:px-20 xl:px-32">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Privacy & Safety
        </h1>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m a Privacy & Safety policy section. I`m a great place to inform
          your customers about how you use, store, and protect their personal
          information. Add details such as how you use third-party banking to
          verify payment, the way you collect data or when will you contact
          users after their purchase was completed successfully.
        </p>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          Your user`s privacy is of the highest importance to your business, so
          take the time to write an accurate and detailed policy. Use
          straightforward language to gain their trust and make sure they keep
          coming back to your site!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 px-10 md:px-20 xl:px-32">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Wholesale Inquiries
        </h1>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m a wholesale inquiries section. I`m a great place to inform other
          retailers about how they can sell your stunning products. Use plain
          language and give as much information as possible in order to promote
          your business and take it to the next level!
        </p>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          I`m the second paragraph in your Wholesale Inquiries section. Click
          here to add your own text and edit me. It`s easy. Just click “Edit
          Text” or double click me to add details about your policy and make
          changes to the font. I`m a great place for you to tell a story and let
          your users know a little more about you.
        </p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-8 px-10 md:px-20 xl:px-32"
        id="payments"
      >
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Payment Methods
        </h1>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          - Credit / Debit Cards
        </p>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          - PAYPAL
        </p>
        <p className="text-center text-sm font-light md:text-base lg:text-lg">
          - Offline Payments
        </p>
      </div>
    </div>
  );
}

export default Terms;
