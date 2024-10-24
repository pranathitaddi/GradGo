export default function ContactUs() {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col p-8">
      <h1 className="bighdn">Contact Us</h1>
      <form className="w-[100%] mx-auto p-6 bg-seccol-30 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2 uppercase"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-pricol focus:border-blue-500 bg-transparent"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2 uppercase"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-pricol focus:border-blue-500 bg-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700   
 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-pricol focus:border-blue-500 bg-transparent"
            placeholder="Enter your message"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-seccol-30 transition-all duration-100 hover:bg-pricol-50 hover:scale-105 py-2   
 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
