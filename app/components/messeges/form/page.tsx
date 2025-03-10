import React from "react";

export const FormInput = () => {
  interface InputString {
    id: number;
    name: string;
    placeholder: string;
  }

  const input: InputString[] = [
    {
      id: 1,
      name: "Name",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      name: "Email",
      placeholder: "Enter your email",
    },
    {
      id: 3,
      name: "Contact number",
      placeholder: "Enter your contact number",
    },
    {
      id: 4,
      name: "Address",
      placeholder: "Enter your address",
    },
    {
      id: 5,
      name: "Message",
      placeholder: "Send your message we like to help you",
    },
  ];

  return (
    <div className="w-full">
      <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {input.map((item) => (
              <div key={item.id}>
                <label className="block mb-2 text-sm font-medium text-gray-200">
                  {item.name}
                </label>
                {item.name === "Message" ? (
                  <textarea
                    id={`input-${item.id}`}
                    rows={4}
                    className="w-full bg-gray-800/50 text-white rounded-xl border-0 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    placeholder={item.placeholder}
                  />
                ) : (
                  <input
                    type="text"
                    id={`input-${item.id}`}
                    placeholder={item.placeholder}
                    className="w-full bg-gray-800/50 text-white rounded-xl border-0 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                )}
              </div>
            ))}
          </div>
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormInput;
