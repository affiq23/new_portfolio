import WindowFrame from "@/components/WindowFrame";

export default function ContactPage() {
  return (
    <main className="space-y-8 text-[15px] font-[Tahoma]">
      {" "}
      <WindowFrame title="Contact" titleFont="Trebuchet MS">
        <p className="mb-4">Feel free to reach out!</p>
        <form
          action="https://formspree.io/f/mldbaqqd"
          method="POST"
          className="space-y-4 text-sm w-full"
        >
          <div>
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border border-gray-700 p-2 bg-white font-[Tahoma] text-sm shadow-[inset_1px_1px_#ccc]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-gray-700 p-2 bg-white font-[Tahoma] text-sm shadow-[inset_1px_1px_#ccc]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full border border-gray-700 p-2 bg-white font-[Tahoma] text-sm shadow-[inset_1px_1px_#ccc]"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-1 bg-white text-black border border-gray-800 font-[Tahoma] shadow-[2px_2px_0_#999] hover:bg-blue-700 hover:text-white hover:shadow-none transition-all"
            >
              Send
            </button>
          </div>
        </form>
      </WindowFrame>
    </main>
  );
}
