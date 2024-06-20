import React, { useState, useEffect } from "react";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // Validation state
  const [formErrors, setFormErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Form validation effect
  useEffect(() => {
    const validateForm = () => {
      let errors = {
        email: "",
        subject: "",
        message: "",
      };

      // Email validation
      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email address is invalid";
      }

      // Subject validation
      if (!formData.subject) {
        errors.subject = "Subject is required";
      }

      // Message validation
      if (!formData.message) {
        errors.message = "Message is required";
      }

      setFormErrors(errors);
    };

    validateForm();
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g., send data to server)
    console.log("Form submitted with data:", formData);
    // Reset form data after submission (if needed)
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      name="contact"
      className="dark:bg-gray-900 bg-gradient-to-b from-[#0a110b] to-[#090437] "
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Feel free to contact us!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                formErrors.email && "border-red-500"
              }`}
              placeholder="name@gmail.com"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                formErrors.subject && "border-red-500"
              }`}
              placeholder="Let us know how we can help you"
              required
            />
            {formErrors.subject && (
              <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                formErrors.message && "border-red-500"
              }`}
              placeholder="Leave a comment..."
              required
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 hover:bg-transparent hover:border-red-500 hover:border-2"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
