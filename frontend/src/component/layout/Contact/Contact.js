import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:kartickkghosh88@gmail.com">
        <Button>Contact: kartickkghosh88@gmail@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
