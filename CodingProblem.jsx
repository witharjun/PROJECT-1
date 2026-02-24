import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { problems } from "./ProblemData";

export default function CodingProblem() {
  const { topic } = useParams();
  const [index, setIndex] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const problemList = problems[topic];
  const problem = problemList[index];

  const runCode = () => {
    setOutput(`Sample Output: ${problem.expectedOutput}`);
  };

  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-2">{problem.title}</h2>
      <p className="text-gray-400 mb-6">{problem.description}</p>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        className="w-full h-48 p-4 text-black rounded-lg"
      />

      <div className="flex gap-4 mt-6">
        <button onClick={runCode} className="bg-blue-600 px-5 py-2 rounded-md hover:bg-blue-500">
          Run Code
        </button>
        <button
          onClick={() => setIndex((index + 1) % problemList.length)}
          className="bg-gray-700 px-5 py-2 rounded-md hover:bg-gray-600"
        >
          Next Problem
        </button>
        <Link to="/skill-test" className="ml-auto bg-gray-800 px-5 py-2 rounded-md hover:bg-gray-700">
          Back to Topics
        </Link>
      </div>

      {output && (
        <div className="mt-6 bg-gray-900 p-4 rounded-lg">
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
