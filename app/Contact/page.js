import React from 'react';

const Contact = () => {
    return (
        <main>
           <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-8">
        
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Reach out using the form or contact us
            directly with the details below.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">📍 Address</h3>
              <p className="text-gray-600">123 Main Street, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">📞 Phone</h3>
              <p className="text-gray-600">+880 123 456 789</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">📧 Email</h3>
              <p className="text-gray-600">support@yourapp.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div> 
        </main>
    );
};

export default Contact;