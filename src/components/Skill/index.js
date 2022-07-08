import React, { useEffect, useRef, useState } from "react";
import classes from "./Skill.module.scss";
import { number, string } from "prop-types";
import classnames from "~utils/classnames";

const Skill = ({ title, progress }) => {
  const [show, setShow] = useState(false);
  const barRef = useRef();

  useEffect(() => {
    const barElement = barRef.current;
    const barPosition = window.scrollY + barElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      const windowPosition = window.scrollY;

      setShow(barPosition < windowPosition + windowHeight - 128);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={classes.title}>
        <div className={classes.caption_text}>{title}</div>
        <div className={classnames([classes.caption_text, classes.text_muted])}>
          {progress}%
        </div>
      </div>
      <div ref={barRef} className={classes[`bar${show ? "_show" : ""}`]}>
        <div
          className={classes.progress}
          style={{ width: `${show ? progress : 0}%` }}
        />
      </div>
    </>
  );
};

Skill.propTypes = {
  title: string.isRequired,
  progress: number.isRequired,
};

export default Skill;
