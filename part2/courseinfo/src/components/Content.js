import React from "react";
import Part from "./Part";

const Content = ({ courses }) => {
  const total = courses.parts.reduce((curr, prev) => {
    return curr + prev.exercises;
  }, 0);

  return (
    <div>
      {courses.parts.map((parts) => (
        <Part part={parts} key={parts.id} />
      ))}
      Total of {total} exercises
    </div>
  );
};

export default Content;
