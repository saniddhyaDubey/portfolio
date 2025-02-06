export default function ConnectForm() {
  return (
    <>
      <div className="lg:w-1/2">
        <form className="space-y-6">
          {/* Name and Email Row */}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full sm:w-1/2 p-3 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-1/2 p-3 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Message Field */}
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full p-3 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          {/* Send Button */}
          <button
            type="submit"
            className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black rounded-md transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
