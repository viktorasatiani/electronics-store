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
          className="cursor-pointer text-4xl text-black hover:rounded-xl hover:bg-white hover:text-mySecondary 2xl:text-5xl"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
      <Link href="https://www.twitter.com" passHref>
        <FaSquareTwitter
          className="cursor-pointer text-4xl text-black hover:rounded-xl hover:bg-white hover:text-mySecondary 2xl:text-5xl"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
      <Link href="https://www.instagram.com" passHref>
        <FaSquareInstagram
          className="cursor-pointer text-4xl text-black hover:rounded-xl hover:bg-white hover:text-mySecondary 2xl:text-5xl"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
      <Link href="https://www.youtube.com" passHref>
        <FaSquareYoutube
          className="cursor-pointer text-4xl text-black hover:rounded-xl hover:bg-white hover:text-mySecondary 2xl:text-5xl"
          style={{ transition: "all 0.6s" }}
        />
      </Link>
    </div>
  );
}
