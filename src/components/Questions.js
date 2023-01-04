export const questions = [
  {
    id: 1,
    question:
      "Which of the following methods cannot prevent object modification",
    answer_a: "Object.seal()",
    answer_b: "Object.lock()",
    answer_c: "Object.preventExtension()",
    answer_d: "Object.freeze()",
    correct_answer: "b",
  },
  {
    id: 2,
    question:
      "Which of the following is the correct way to store data in an object",
    answer_a: "obj['class'] = 12",
    answer_b: "obj.class = 12",
    answer_c: "a & b",
    answer_d: "None of above",
    correct_answer: "c",
  },
  {
    id: 3,
    question:
      "If you have a function f and an object o, you can define a method named m of o with",
    answer_a: "o.m=m.f;",
    answer_b: "o.m=f;",
    answer_c: "o=f.m;",
    answer_d: "o=f;",
    correct_answer: "a",
  },
  {
    id: 4,
    question: "How much is 2+4*5+1 = ? ",
    answer_a: "23",
    answer_b: "36",
    answer_c: "31",
    answer_d: "26",
    correct_answer: "a",
  },
  {
    id: 5,
    question: "How is a forEach statement different from a for statement?",
    answer_a: "Only a for statement uses a callback function.",
    answer_b:
      "A for statement is generic, but a forEach statement can be used only with an array.",
    answer_c: "Only a forEach statement lets you specify your own iterator.",
    answer_d:
      "A forEach statement is generic, but a for statement can be used only with an array.",
    correct_answer: "b",
  },
  {
    id: 6,
    question: "How does a function create a closure?",
    answer_a: "It reloads the document whenever the value changes.",
    answer_b: "It returns a reference to a variable in its parent scope.",
    answer_c: "It completes execution without returning.",
    answer_d: "It copies a local variable to the global scope.",
    correct_answer: "b",
  },
  {
    id: 7,
    question:
      "You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
    answer_a: "/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/",
    answer_b: "/[0-9]+:[0-9]+:[0-9]+/",
    answer_c: "/dd:dd:dd/",
    answer_d: "/ : : /",
    correct_answer: "c",
  },
  {
    id: 8,
    question:
      "Which property references the DOM object that dispatched an event?",
    answer_a: "self",
    answer_b: "object",
    answer_c: "source",
    answer_d: "target",
    correct_answer: "d",
  },
  {
    id: 9,
    question: "Which method converts JSON data to a JavaScript object?",
    answer_a: "JSON.fromString();",
    answer_b: "JSON.parse()",
    answer_c: "JSON.toObject()",
    answer_d: "JSON.stringify()",
    correct_answer: "b",
  },
];
