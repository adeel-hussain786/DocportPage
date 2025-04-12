const ContactSection = () => {
  return (
    <div className="bg-[#e9f5f5] py-16 px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-12">
      {/* Left Column: Text Info */}
      <div className="flex-1">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 mt-20 text-[#2d2d2f]">Get in touch</h2>
        <p className="text-lg text-[#2d2d2f] max-w-md">
          If you have any questions that you'd like to ask us, feel free to
          get in touch or book a consultation.
        </p>
      </div>

      {/* Right Column: Contact Form */}
      <div className="flex-1 bg-white rounded-xl p-8 shadow-md w-full max-w-xl">
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-2xl font-semibold text-[#2d2d2f] text-center">Get Started</h3>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2d2d2f]">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5cb4a1]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2d2d2f]">Message</label>
            <textarea
              placeholder="Type your message here"
              className="w-full h-32 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5cb4a1] resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#5cb4a1] to-[#4cc597] hover:bg-[#5cb4a1] text-white font-medium py-3 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
