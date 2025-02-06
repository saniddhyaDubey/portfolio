import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-y-4 m-1 z-10">
      <FaTwitter />
      <FaGithub />
      <FaLinkedin />
      <div className="w-[2px] h-16 bg-white m-2"></div>
      <div className="-rotate-90 mt-6">Follow me</div>
    </div>
  );
}
