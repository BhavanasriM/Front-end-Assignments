let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

//Accessing Specific Value:
console.log(shoppingList[0]);

//Implementing push Method:
shoppingList.push("Carrots");
console.log(shoppingList);

//Implementing pop Method:
console.log("Before removal:", shoppingList);
shoppingList.pop();
console.log("After removal:", shoppingList);

//Implementing splice Method:
console.log("Before removal:", shoppingList[4]);
shoppingList[4].splice(2, 2, "Cucumbers", "Bell Peppers");
console.log("After removal:", shoppingList[4]);

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};

//Fetching Specific Value:
console.log(student.name);
//or
comsole.log(student["name"]);

//Adding Value:
student.phone = "123-456-7890";
console.log(student);

//Removing Value:
console.log("Before removal:", student);
delete student.grade;
console.log("After removal:", student);

//Modifying Value:
student.age = 21;
console.log(student);

//Conditionals assignment

//Task 1: Understanding if Statements:
function NumberCheck(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(NumberCheck(5));
console.log(NumberCheck(-3));
console.log(NumberCheck(0));

//Task 2: Implementing else if Statements:
function GradeCheck(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));

//Task 3: Exploring Truthy/Falsy Concepts:
function TruthyFalsyCheck(str) {
  if (typeof str === "string" && str !== "") {
    return "Truthy";
  } else {
    return "Falsy";
  }
}
console.log(TruthyFalsyCheck("Hello"));
console.log(TruthyFalsyCheck(0));
console.log(TruthyFalsyCheck(""));
