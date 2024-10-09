import { useState } from "react";
import "./ContactMeSection.css";
import Swal from "sweetalert2";

function ContactMeSection() {
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Send the form data to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Your message was successfully sent!",
        });
        e.target.reset(); // Reset the form
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Send",
          text: "There was a problem sending your message. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contactMe" className="section">
      <h1 className="colorChangeHeading">Contact Me!</h1>
      <div className="contactContainer border">
        {showForm ? (
          <div className="contactForm border">
            <form onSubmit={handleSubmit} method="POST">
              <input
                type="hidden"
                name="access_key"
                value="ec7710a8-c5ed-4ff4-a9ee-8f8a2b2d4b00"
              />

              <label htmlFor="name">
                <h3 className="colorChange">Enter Your Name</h3>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input border"
                placeholder="Enter Your Name"
                required
              />

              <label htmlFor="email">
                <h3 className="colorChange">Enter Your Email</h3>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input border"
                placeholder="Enter Your Email"
                required
              />

              <label htmlFor="message">
                <h3 className="colorChange">Type Your Message</h3>
              </label>
              <textarea
                name="message"
                className="border"
                id="message"
                cols="20"
                rows="5"
                placeholder="Type Your Message Here"
                required
              ></textarea>

              <div className="btnS">
                <button
                  id="submitBtn"
                  className="btn--primary btn boxShadow"
                  type="submit"
                >
                  Submit Your Message
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="InfoCard border">
            <h2>Contact Me</h2>
            <hr />
            <h3>Email:</h3>
            <p>bhattijunaidahmed404@gmail.com</p>
            <h3>WhatsApp:</h3>
            <p>+92-3249873088</p>
            <h3>Phone</h3>
            <p>+92-3147152363</p>
            <hr />
          </div>
        )}
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="btn--secondary"
          type="button"
        >
          {showForm ? "Show Contact Info" : "Show Contact Form"}
        </button>
      </div>
    </section>
  );
}

export default ContactMeSection;
