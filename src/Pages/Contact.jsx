import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Get form data
      const form = e.target;
      const formData = new FormData(form);

      // Extract data from the form
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Use EmailJS to send the email
      await emailjs.send(
        "service_8fbvuyr", // Replace with your Service ID
        "template_hm6u1m1", // Replace with your Template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "Vx4qcthrE0b7fIlq6" // Replace with your Public Key
      );

      // Show success message
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#000",
        timer: 2000,
        timerProgressBar: true,
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error message
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#000",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700"
        >
          <span
            style={{
              color: "gray",
              backgroundImage:
                "linear-gradient(45deg, gray 10%, lightgray 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      {/* TODO : Make Auto Margin for Mobile phone rather  */}
      <div
        className="h-auto m-3 flex items-center justify-center px-[5%] md:px-0"
        id="Contact"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-black/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 border-2 border-gray-600 hover:border-gray-200 hover:shadow-white/20 hover:scale-105"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 ">
                  Get in Touch
                </h2>
                <p className="text-gray-500">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-gray-500 opacity-50" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-gray-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-black/20 rounded-xl border border-gray-700 placeholder-gray-500 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 hover:border-white disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-gray-400  transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-black/20 rounded-xl border border-gray-700 placeholder-gray-500 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 hover:border-white disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-gray-400  transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 pl-12 bg-black/20 rounded-xl border border-gray-700 placeholder-gray-500 text-gray-400  focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 hover:border-white h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="bg-black/10 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 flex flex-col justify-center items-center border-2 border-gray-600 hover:border-gray-200 hover:shadow-white/20 hover:scale-105"
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              Follow Me
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              Connect with me on my social media platforms.
            </p>
            <div className="w-full mt-10 pt-6 border-t border-gray-300 flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>

          {/* <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="bg-black/10 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-white/10 flex flex-col justify-center items-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              Follow Me
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              Connect with me on my social media platforms.
            </p>
            <div className="mt-10 pt-6 border-t border-gray-300 flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
