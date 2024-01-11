import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center py-28 px-32 text-center">
      <h1 className="text-slate-700 text-3xl font-bold">About Me</h1>
      <div className="mx-auto my-5">
        <img
          className="rounded cursor-pointer mt-2 border-2 border-green-700"
          src={currentUser.avatar}
          alt="User Photo"
        />
      </div>
      <p className="text-lg text-slate-600 leading-9">
        Hello, I am <span className="font-semibold">Mohammad Imran</span> and I have expertise in web development and
        research. As a web developer, I create interactive websites using HTML,
        CSS, JavaScript, and frameworks like React. I also excel in research,
        analyzing data, and presenting findings effectively. Overall, I'm
        passionate about web development, constantly seeking opportunities to
        expand my skills and create impactful projects.
      </p>
    </div>
  );
}
