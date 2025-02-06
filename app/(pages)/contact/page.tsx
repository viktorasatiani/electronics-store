import ContactForm from "@/components/contact/contactForm";
import { Separator } from "@/components/ui/separator";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6 py-14 md:py-24 lg:py-28 xl:pb-8">
      <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl">
        Get in Touch
      </h1>
      <Separator />
      <h2 className="text-2xl lg:text-3xl 2xl:mt-10">We`re here to help!</h2>
      <p className="px-10 text-lg font-light sm:px-20">
        Fill out the form with any query on your mind and we`ll get back to you
        as soon as possible
      </p>
      <ContactForm />
    </div>
  );
}

export default Contact;
