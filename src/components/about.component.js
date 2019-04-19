import React from "react";
import Image from "../img/portrait1.jpg";

const about = () => (
  <div>
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      <div className="about-info">
        <img src={Image} alt="" className="bio-image" />
        <div className="bio">
          <h2 className="text-secondary">BIO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure porro
            odio nisi sed culpa itaque excepturi amet quos! Accusamus dicta
            pariatur nostrum natus iste, assumenda nam rem repudiandae deserunt
            voluptas!
          </p>
        </div>
        <div className="job job1">
          <h3>Webshop</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quaerat sint perspiciatis doloremque doloribus nemo officia eaque
            non, animi quo? Maiores dolore amet ut quisquam sed distinctio
            repellat cum earum!
          </p>
        </div>
        <div className="job job2">
          <h3>Designers</h3>
          <h6>Front End Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            consequuntur tenetur molestias rerum expedita fuga tempore nulla,
            sint facilis deserunt vero itaque possimus? Debitis aperiam eligendi
            perspiciatis unde iusto atque?
          </p>
        </div>
        <div className="job job3">
          <h3>Webworks</h3>
          <h6>Graphic Designer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sunt
            odio dolores cumque incidunt laboriosam voluptatum minus quia, nobis
            excepturi unde, necessitatibus perspiciatis sed, earum nihil! Minus
            facilis ducimus modi?
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default about;
