import "./contact.css";

function Contact() {
  return (
    <>
      <div id="con" className="wrapper">
        <div className="company-info">
          <h3>Contact Me</h3>
          <ul>
            <li>
              <i className="fa fa-road"></i> Tehran Iran
            </li>
            <li>
              <i className="fa fa-phone"></i> +989392512261
            </li>
            <a href="https://mustafajhon.github.io/">
              {" "}
              <li>
                <i className="fa fa-envelope"></i>{" "}
                https://mustafajhon.github.io/
              </li>
            </a>
          </ul>
        </div>
        <div className="contact">
          <h3>Email Me</h3>
          <div className="alert">Your message has been sent</div>
          <form id="contactForm">
            <p>
              <label>Name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company" id="company" />
            </p>
            <p>
              <label>Email Address</label>
              <input type="email" name="email" id="email" required />
            </p>
            <p>
              <label>Phone Number</label>
              <input type="text" name="phone" id="phone" />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" rows="5" id="message"></textarea>
            </p>
            <p className="full">
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
