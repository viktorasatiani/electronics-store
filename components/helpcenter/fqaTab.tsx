import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FaqAccordion from "./faqAccordion";

function FqaTab() {
  return (
    <div>
      <Tabs
        defaultValue="general"
        className="w-[600px] px-20 sm:px-10 md:w-[800px]"
      >
        <TabsList className="grid w-full grid-cols-2 md:mb-10 lg:mb-20">
          <TabsTrigger
            value="general"
            className="hover:bg-myPrimaryDark hover:text-white sm:text-base md:text-lg"
            style={{ transition: "all 0.6s" }}
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="settingup"
            className="hover:bg-myPrimaryDark hover:text-white sm:text-base md:text-lg"
            style={{ transition: "all 0.6s" }}
          >
            Setting up FAQs
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="general"
          className="animate__animated animate__fadeIn animate__slow"
        >
          <FaqAccordion
            firstTrigger="What is an FAQ section?"
            secondTrigger="Why do FAQs matter?"
            thirdTrigger="Where can I add my FAQs?"
            firstContent='An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?". '
            secondContent="FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience."
            thirdContent="FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go."
          />
        </TabsContent>
        <TabsContent
          value="settingup"
          className="animate__animated animate__fadeIn animate__slow"
        >
          <FaqAccordion
            firstTrigger="How do I add a new question & answer?"
            secondTrigger="Can I insert an image, video, or GIF in my FAQ?"
            thirdTrigger="How do I edit or remove the  title?"
            firstContent='An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".'
            secondContent="FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience."
            thirdContent="FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default FqaTab;
