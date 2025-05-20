/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO:
// Construct an object named `participant`
// with properties for `name`, `age`, and `studyField`.
// Utilize shorthand property names to simplify your code.

const participant = {
  name: "Alice",
  age: 30,
  studyField: "Physics",
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO:
// Copy the `participant` object by adding a shorthand method named `displayInfo`
// that prints the participant's details
// using `this` and a template string.
const participantPlus = {
  ...participant,
  displayInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  },
};
participantPlus.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO:
// Echo the above task with an arrow function.
// Observe the behavior of `this` and explain your findings.

const participantPlusArrow = {
  ...participant,

  displayInfo: () => {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
    );
  },
};
participantPlusArrow.displayInfo();

const participantPlusArrowFixed = {
  ...participant,

  // Arrow function fixed to use the correct context
  displayInfo: (participant) => {
    const { name, age, studyField } = participant;
    console.log(`Name: ${name}, Age: ${age}, Study Field: ${studyField}`);
  },
};
participantPlusArrowFixed.displayInfo(participantPlusArrowFixed);

/*
 * Observations:
 * TODO: Explain here.
 *
 * Arrow functions do not have their own `this` context.
 * Instead, they inherit `this` from the surrounding scope.
 * In this example, `this` inside the arrow function does not refer to the `participantPlusArrow` object,
 * but to the outer, (global or window) context, so the properties `name`, `age`, and `studyField` are not found.
 *
 * As a result, the output shows `undefined` for all these properties.
 */

/* Task 4: Using Computed Property Names */
// TODO:
// Implement a function named `updateParticipantInfo`
// that takes a property name and value as arguments alongside an object and
// returns a new object with that property dynamically set.

function updateParticipantInfo(propertyName, value, obj) {
  return {
    ...obj,
    [propertyName]: value,
  };
}
const updatedParticipant = updateParticipantInfo(
  "studyField",
  "Biology",
  participant
);
console.log(updatedParticipant);
