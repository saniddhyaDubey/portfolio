import SkillContent from "./ skills";
import IntroContent from "./introduction";

export default function AboutSection() {
  return (
    <div className="px-6 md:pl-36 md:pr-12 mt-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-courier">About Me</h1>
        <div className="w-full max-w-2xl h-[1px] bg-gray-500 mt-3"></div>
      </div>
      <IntroContent />
      <SkillContent />
    </div>
  );
}
