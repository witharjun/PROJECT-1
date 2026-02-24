import React from "react";
import { Link } from "react-router-dom";

const topics = [
  { name: "AI", path: "/skill-test/ai" },
  { name: "Web Dev", path: "/skill-test/webdev" },
  { name: "DSA", path: "/skill-test/dsa" },
  { name: "Python", path: "/skill-test/python" },
];

export default function SkillTest() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-white mb-4">Skill Assessment Test</h1>
      <p className="text-gray-400 mb-8">Select a topic to start your coding assessment</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {topics.map((topic) => (
          <Link
            key={topic.name}
            to={topic.path}
            className="p-6 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition"
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
