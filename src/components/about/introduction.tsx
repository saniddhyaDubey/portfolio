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
          I’m a curios and adaptive backend/api developer who has spent the last
          1 year working on distributed systems, low level programming in C++, working on blockchain protocols
          and learning about scalable applications. I have been working with various talented individuals
          from all over the world, learning and growing with them. My
          out-of-the-box thinking and eagerness to dive into technologies has
          allowed me to become an extremely capable developer.
        </p>
      </div>
    </section>
  );
}
