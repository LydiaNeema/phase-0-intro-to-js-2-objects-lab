//const { validateUseBuiltInsOption } = require("@babel/preset-env/lib/normalize-options");

// Write your solution in this file!

let employee = {
  name: "Alice Johnson",
  streetAddress: "123 Main St"
};

// Step 2: Non-destructive update
function updateEmployeeWithKeyAndValue(emp, key, value) {
  return {
    ...emp,
    [key]: value
  };
}

// Step 3: Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
  emp[key] = value;
  return emp;
}

// Step 4: Non-destructive delete
function deleteFromEmployeeByKey(emp, key) {
  const newEmp = { ...emp };
  delete newEmp[key];
  return newEmp;
}

// Step 5: Destructive delete
function destructivelyDeleteFromEmployeeByKey(emp, key) {
  delete emp[key];
  return emp;
}



