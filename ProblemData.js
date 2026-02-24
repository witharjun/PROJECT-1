export const problems = {
  ai: [
    {
      id: 1,
      title: "Linear Regression Prediction",
      description: "Implement y = mx + b for given values of m, b, x.",
      sampleInput: "m=2, b=1, x=5",
      expectedOutput: "y = 11",
    },
    {
      id: 2,
      title: "Sigmoid Function",
      description: "Compute sigmoid 1/(1+e^-x) for a given x.",
      sampleInput: "x = 0",
      expectedOutput: "0.5",
    },
  ],
  dsa: [
    { id: 1, title: "Reverse Array", description: "Reverse elements of array.", sampleInput: "[1,2,3]", expectedOutput: "[3,2,1]" },
    { id: 2, title: "Sum of Digits", description: "Find sum of digits of n.", sampleInput: "123", expectedOutput: "6" },
  ],
  webdev: [
    { id: 1, title: "Reverse String", description: "Reverse a given string.", sampleInput: "Hello", expectedOutput: "olleH" },
    { id: 2, title: "Count Vowels", description: "Count vowels in a string.", sampleInput: "SkillBridge", expectedOutput: "3" },
  ],
  python: [
    { id: 1, title: "Factorial of a Number", description: "Compute n! for given n.", sampleInput: "5", expectedOutput: "120" },
    { id: 2, title: "Even or Odd", description: "Check if n is even or odd.", sampleInput: "7", expectedOutput: "Odd" },
  ],
};
