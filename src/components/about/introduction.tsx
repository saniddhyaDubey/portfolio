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
          I&apos;m not a nerd but I like all those things (mathematics, algorithms, computer, rubik&apos;s cube).
          My main weapon is C++, writing code is so crazy and cool, learn and build. Only thing I focus on daily is
          DSA (daily leetcode), System design, some what development (thank you claude).
          &ldquo;My out-of-the-box thinking and eagerness to dive into technologies has allowed me
          to become an extremely capable developer&rdquo;, well this what I have been told by people around me.
        </p>
      </div>
    </section>
  );
}
