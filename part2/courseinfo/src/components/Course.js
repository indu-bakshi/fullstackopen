import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      {course.map((courses) => (
        <div key={courses.id}>
          <Header key={courses.id} course={courses} />
          <Content key={courses.parts.id} courses={courses} />
        </div>
      ))}
    </div>
  );
};

export default Course;
