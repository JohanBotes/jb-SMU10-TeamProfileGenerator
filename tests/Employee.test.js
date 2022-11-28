const Employee = require("../lib/Employee");

test("Test Employee creation", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Test Name creation", () => {
  const name = "Wynand";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Test Id creation", () => {
  const testValue = 150;
  const e = new Employee("001", testValue);
  expect(e.id).toBe(testValue);
});

test("Test e-mail creation", () => {
  const testValue = "wynand.botes@udexx.com";
  const e = new Employee("001", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Test name from getName()", () => {
  const testValue = "Wynand";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Test Id from getId()", () => {
  const testValue = 150;
  const e = new Employee("001", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Test email from getEmail()", () => {
  const testValue = "wynand.botes@udexx.com";
  const e = new Employee("001", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Test getRole() must return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Wynand", 1, "wynand.botes@udexx.com");
  expect(e.getRole()).toBe(testValue);
});