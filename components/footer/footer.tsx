import FooterHelpCenter from "./footerHelpCenter";
import FooterLinkSection from "./footerLinkSection";
import FooterPaymentsBox from "./footerPaymentsBox";

export default function Footer() {
  return (
    <footer className="text-myBlack flex flex-col items-center justify-center bg-background py-10">
      <FooterHelpCenter />
      <FooterLinkSection />
      <FooterPaymentsBox />
    </footer>
  );
}
