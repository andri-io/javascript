class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ValidationError";
  }
}

function validateNumberInput(a, b, c) {
  if (typeof a !== "number") {
    throw new ValidationError("Argumen pertama harus number");
  } else if (typeof b !== "number") {
    throw new ValidationError("Argumen kedua harus number");
  } else if (typeof c !== "number") {
    throw new ValidationError("Argumen ketiga harus number");
  }
}

function detectTriangle(a, b, c) {
  try {
    validateNumberInput(a, b, c);

    if (a === b && b === c) {
      return "segitiga sama sisi";
    } else if (a === b || a === c || b === c) {
      return "segitiga sama kaki";
    } else {
      return "segitiga sembarang";
    }
  } catch (error) {
    return error.message;
  }
}

console.log(detectTriangle(1, false, 1)); 
console.log(detectTriangle('a', 3, 5));   
console.log(detectTriangle(12, 2, null)); 
console.log(detectTriangle(3, 4, 6));     