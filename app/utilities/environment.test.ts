import { getRequiredEnvVariable } from "~/utilities/environment";

describe("getRequiredEnvVariable", () => {
  it("should throw an error if the environment variable is not set", () => {
    expect(() => getRequiredEnvVariable("NOT_SET")).toThrowError("Environment variable NOT_SET is not set.");
  });

  it("should return the value of the environment variable if it is set", () => {
    process.env.TEST_VARIABLE = "TEST_VALUE";
    expect(getRequiredEnvVariable("TEST_VARIABLE")).toBe("TEST_VALUE");
    process.env.TEST_VARIABLE = undefined;
  });
});
