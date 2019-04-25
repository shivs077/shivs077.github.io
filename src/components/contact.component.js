import React from "react";
import Heading from "../content/Heading";
import Contact from "../content/Contact";
import Footer from "./Footer";
import Aux from "../hoc/Aux"; 

const contactPage = () => {
  document.title = "My Portfolio | Contact";
  return (
    <Aux>
      <main id="contact">
        <Heading lg="Contact" span="Me" sm="This is how you can reach me..." />
        <div className="boxes">
          <Contact span="Email:" text="shivambisht.1998@gmail.com" />
          <Contact span="Phone:" text="9868573311" />
          <Contact
            span="Address:"
            text="27/4-C P&amp;T Gole
            Market,New Delhi-01"
          />
        </div>
      </main>
      <Footer />
    </Aux>
  );
};

export default contactPage;
