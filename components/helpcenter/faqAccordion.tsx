import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FaqAccordion({
  firstTrigger,
  secondTrigger,
  thirdTrigger,
  firstContent,
  secondContent,
  thirdContent,
}: fqaProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="md:mb-4 md:text-lg lg:mb-8">
          {firstTrigger}
        </AccordionTrigger>
        <AccordionContent className="md:text-lg md:font-extralight">
          {firstContent}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="md:mb-4 md:text-lg lg:mb-8">
          {secondTrigger}
        </AccordionTrigger>
        <AccordionContent className="md:text-lg md:font-extralight">
          {secondContent}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="md:mb-4 md:text-lg lg:mb-8">
          {thirdTrigger}
        </AccordionTrigger>
        <AccordionContent className="md:text-lg md:font-extralight">
          {thirdContent}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FaqAccordion;
