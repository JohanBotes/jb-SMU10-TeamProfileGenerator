const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Test office number", () => {
  const testValue = 150;
  const e = new Manager("001", 1, "wynand.botes@udexx.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('Test getRole() must return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("001", 1, "wynand.botes@udexx.com", 150);
  expect(e.getRole()).toBe(testValue);
});

test("Test office number via getOffice()", () => {
  const testValue = 150;
  const e = new Manager("001", 1, "wynand.botes@udexx.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});