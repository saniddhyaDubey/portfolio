export default function GetInTouch() {
  return (
    <>
      <div className="lg:w-1/3">
        <h2 className="font-courier text-3xl font-bold text-black dark:text-white mb-6">
          Get in touch
        </h2>
        <p className="font-courier text-black dark:text-white mb-4">
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:dubeysaniddhya@gmail.com" className="hover:underline">
            dubeysaniddhya@gmail.com
          </a>
        </p>
        <p className="font-courier text-gray-900 dark:text-gray-400">
          Email me at any time with any questions.
        </p>
      </div>
    </>
  );
}
