import React from "react";
import Aux from "../hoc/Auy";
import Footer from "./Footer";
import Heading from "../content/Heading";

//import firebase from "../content/Firebase";

const BlogPost = () => {
  document.title = "My Portfolio | Blog";
  //   useEffect()s
  const blogs = ["Woman", "Somethings", "Soldier"].map(blog => {
    const img = require("../img/blogs/" + blog + ".png");
    return (
      <div className="item" key={blog}>
        <img src={img} alt="" />
      </div>
    );
  });
  return (
    <Aux>
      <main id="blog">
        <Heading
          lg="My"
          span="Writings"
          sm="After all we all need a hobby..."
        />
        <div className="projects">{blogs}</div>
      </main>

      <Footer />
    </Aux>
  );
};

export default BlogPost;
