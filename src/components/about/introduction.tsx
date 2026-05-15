export default function IntroContent() {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 py-16">
      {/* Left Column */}
      <div className="lg:w-1/3 pt-10">
        <h2 className="text-3xl font-courier text-black dark:text-white">
          Introduction
        </h2>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 ">
        <p className="font-courier text-lg text-black dark:text-gray-400 leading-relaxed">
          I&apos;m quite nerdy, my goto things (mathematics, algorithms, computer, rubik&apos;s cube).
          My side hustle is coding in C++, which makes me go crazy and cool at the same time and also help me 
         learn and build. My focal length covers leetcode, System design, and thanks to claude I spent more time 
         some learning and less on development. &ldquo;My out-of-the-box thinking and eagerness to dive
         into technologies has allowed me to become an extremely capable developer&rdquo;, well this 
         is what I have been told by people around me.
        </p>
      </div>
    </section>
  );
}
