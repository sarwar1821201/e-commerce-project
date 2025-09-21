import React from 'react'
import { FaEnvelope, FaHeadphones, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section className="bg-gray-100 py-28">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Form */}
        <div>
          <h2 className="text-2xl font-semibold">
            Get <span className="text-gray-500">in Touch</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Have questions or need help? Send us a message, and we&apos;ll get
            back to you as soon as possible.
          </p>

          <form className="mt-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Write your message here"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Details */}
        <div>
          <h2 className="text-2xl font-semibold">
            Contact <span className="text-gray-500">Details</span>
          </h2>
          <p className="text-gray-600 mt-2">
            We are always here to assist you! Feel free to reach out to us
            through any of the following methods
          </p>

          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Location:</span> <br />
              <FaLocationDot></FaLocationDot>
              123 Shopprr Street, Clothing City, FC 12345
            </p>
            <p>
              <span className="font-semibold">Email:</span> <br />
              <FaEnvelope></FaEnvelope>
              info@shopprr.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> <br />
              <FaPhone></FaPhone>
              + (880) 1345-679852
            </p>
            <p>
              <span className="font-semibold">Support:</span> <br />
              <FaHeadphones></FaHeadphones>
              24/7 Support is open
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact