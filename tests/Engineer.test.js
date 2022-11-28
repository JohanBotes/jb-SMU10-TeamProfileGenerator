const Engineer = require("../lib/Engineer");

test("Test GitHub username", () => {
  const testValue = "GitHubUserName";
  const e = new Engineer("001", 1, "wynand.botes@udexx.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Test getRole() must return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("001", 1, "wynand.botes@udexx.com", "GitHubUserName");
  expect(e.getRole()).toBe(testValue);
});

test("Test GitHub username via getGithub()", () => {
  const testValue = "GitHubUserName";
  const e = new Engineer("001", 1, "wynand.botes@udexx.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});