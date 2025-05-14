import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function CategoryItemAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="">
        <AccordionTrigger className="md:text-base">
          Product Info
        </AccordionTrigger>
        <AccordionContent className="md:text-sm">
          I`m a product detail. I`m a great place to add more information about
          your product such as sizing, material, care and cleaning instructions.
          This is also a great space to write what makes this product special
          and how your customers can benefit from this item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="md:text-base">
          Return & Refund Policy
        </AccordionTrigger>
        <AccordionContent className="md:text-sm">
          I`m a Return and Refund policy. I`m a great place to let your
          customers know what to do in case they are dissatisfied with their
          purchase. Having a straightforward refund or exchange policy is a
          great way to build trust and reassure your customers that they can buy
          with confidence.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="md:text-base">
          Shipping Information
        </AccordionTrigger>
        <AccordionContent className="md:text-sm">
          Here you can outline the shipping methods, delivery times, and any
          costs associated with shipping. Providing transparent shipping
          information can help manage customer expectations and inquiries.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default CategoryItemAccordion;
