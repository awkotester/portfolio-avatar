import React, { useEffect } from "react";
import "../static/css/App.css";
import "../static/css/avatar.css";
import { ReactComponent as Mailbox } from "../static/mailbox.svg";
import anime from "animejs";
import { motion } from "framer-motion";
import { ScrollContainer } from "../helpers/ScrollContainer";
import { Header } from "./layout/Header";
import FadeWrapper from "../helpers/FadeWrapper";

interface Props {
  pathName: string;
}

export default function Contact({ pathName }: Props) {
  console.log(`slug ${pathName}`);
  useEffect(() => {
    anime({
      targets: document.querySelectorAll(`#mailbox *`),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      fillOpacity: 1,
      delay: function(el, i) {
        return i * 150;
      },
      complete: function() {
        anime({
          targets: [document.querySelector(`#mailbox-latch`)],
          rotate: -90,
          duration: 2000
        });
      }
    });
  }, []);

  return (
    <motion.div animate="enter" exit="exit">
      <ScrollContainer id="portfolio">
        <Header />
        <FadeWrapper fadeIn>
          <Mailbox id="mailbox" />
          <div className="portfolio-inner">
            <h2>Contact Me</h2>
            <div className="contact-form boxed-content">
              <div>
                <label>Name</label>
                <input name="name" type="text" />
                <label>Email</label>
                <input name="email" type="email" />
                <label>Message</label>
                <textarea name="message" rows={5} />
              </div>
            </div>
          </div>
        </FadeWrapper>
      </ScrollContainer>
      <footer></footer>
    </motion.div>
  );
}

Contact.getInitialProps = async function(ctx: any) {
  console.log(`slug! ${JSON.stringify(ctx.pathname)}`);

  return {
    pathName: ctx.pathname
  };
};
