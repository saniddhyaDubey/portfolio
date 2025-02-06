import SkillContent from "./ skills";
import IntroContent from "./introduction";

export default function AboutSection() {
  return (
    <div className="pl-36 mt-12">
      <div>
        <h1 className="text-5xl font-courier">About Me</h1>
        <div className="w-[40rem] h-[1px] bg-gray-500 mt-3"></div>
      </div>
      <IntroContent />
      <SkillContent />
    </div>
  );
}
