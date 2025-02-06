import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-y-4 m-1 z-10">
      <Link
        href="https://x.com/saniddhya_10"
        className="cursor-pointer"
        target="_blank"
      >
        <FaTwitter />
      </Link>
      <Link
        href="https://github.com/saniddhyaDubey/"
        className="cursor-pointer"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/saniddhya-dubey-69a9a520b/"
        className="cursor-pointer"
        target="_blank"
      >
        <FaLinkedin />
      </Link>

      <div className="w-[2px] h-16 bg-white m-2"></div>
      <div className="-rotate-90 mt-6">Follow me</div>
    </div>
  );
}
