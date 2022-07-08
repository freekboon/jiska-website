import React from "react";
import classes from "./Job.module.scss";
import { bool, string } from "prop-types";
import formatDate from "~utils/formatDate";
import { useRouter } from "next/router";

const Job = ({ company, description, fromDate, untilDate, title, reverse }) => {
  const { locale } = useRouter();
  return (
    <div className={classes[`job${reverse ? "_reverse" : ""}`]}>
      <div className={classes[`col_date${reverse ? "" : "_align_right"}`]}>
        <div className={classes.overline_text}>
          {formatDate(fromDate, locale, "MMMM yyyy")} -{" "}
          {untilDate ? formatDate(untilDate, locale, "MMMM yyyy") : "Now"}
        </div>
      </div>
      <div
        className={
          classes[`col_content${reverse ? "_line_right" : "_line_left"}`]
        }
      >
        <h4 className={classes.h4}>{title}</h4>
        <div className={classes.subtitle_text}>{company}</div>
        <p className={classes.body}>{description}</p>
      </div>
    </div>
  );
};

export const JobType = {
  company: string,
  description: string,
  fromDate: string,
  id: string,
  untilDate: string,
  title: string,
};

export const JobFragment = `
  company
  description
  fromDate: from
  id
  untilDate: until
  title
`;

Job.propTypes = {
  ...JobType,
  reverse: bool,
};

export default Job;
