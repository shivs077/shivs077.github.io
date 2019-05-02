import React from "react";
import Heading from "../content/Heading";
import Contact from "../content/Contact";
import Footer from "./Footer";
import Aux from "../hoc/Auy"; 

const contactPage = () => {
  document.title = "My Portfolio | Contact";
  return (
    <Aux>
      <main id="contact">
        <Heading lg="Contact" span="Me" sm="This is how you can reach me..." />
        <div className="boxes">
          <Contact span="Email:" text="shivambisht.1998@gmail.com" />
          <Contact span="Phone:" text="9868573311" />
          <Contact span="Address:" text="New Delhi, India" />
        </div>
      </main>
      <Footer />
    </Aux>
  );
};

export default contactPage;
