import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function About() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      {currentUser ? (
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
            Hello, I am <span className="font-semibold">Mohammad Imran</span>{" "}
            and I have expertise in web development and research. As a web
            developer, I create interactive websites using HTML, CSS,
            JavaScript, and frameworks like React. I also excel in research,
            analyzing data, and presenting findings effectively. Overall, I'm
            passionate about web development, constantly seeking opportunities
            to expand my skills and create impactful projects.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-6">
  <p className="text-center text-xl text-slate-700">You are not an authentic user!</p>
  <Link to="/sign-in">
    <button className="bg-green-700 text-white px-5 py-2 hover:opacity-95 rounded-md mt-4 uppercase">Go to Sign In</button>
  </Link>
</div>
      )}
    </div>
  );
}
