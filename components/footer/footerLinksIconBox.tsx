import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";
import Link from "next/link";

export default function FooterLinksIconBox() {
  return (
    <div className="flex gap-5">
      <Link href="https://www.facebook.com" passHref>
        <FaSquareFacebook
          className="cursor-pointer bg-white text-4xl text-black hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
      <Link href="https://www.twitter.com" passHref>
        <FaSquareTwitter
          className="cursor-pointer bg-white text-4xl text-black hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
      <Link href="https://www.instagram.com" passHref>
        <FaSquareInstagram
          className="cursor-pointer bg-white text-4xl text-black hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
      <Link href="https://www.youtube.com" passHref>
        <FaSquareYoutube
          className="cursor-pointer bg-white text-4xl text-black hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
    </div>
  );
}
