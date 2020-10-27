import { areObjectsEqual, generateHexColor } from "../index";

describe("utils tests", () => {
  test("areObjectsEqual - should return true", () => {
    const fakeObj1 = {
      teste: 0,
      teste1: 1,
    };
    const fakeObj2 = {
      teste: 0,
      teste1: 1,
    };
    const result = areObjectsEqual(fakeObj1, fakeObj2);
    expect(result).toBe(true);
  });
  test("areObjectsEqual - should return true", () => {
    const fakeObj1 = {
      teste: 0,
      teste1: 1,
    };
    const fakeObj2 = {
      teste: 0,
      teste1: 2,
    };
    const result = areObjectsEqual(fakeObj1, fakeObj2);
    expect(result).toBe(false);
  });
  test("generateHexColor - should return any color", () => {
    const result = generateHexColor([]);

    expect(result).toHaveLength(7);
    expect(result).not.toBe("");
  });
  test("generateHexColor - should return any color except #DADADA", () => {
    const fakeColors = ["#DADADA"];
    const result = generateHexColor(fakeColors);

    expect(result).toHaveLength(7);
    expect(result).not.toBe(fakeColors[0]);
  });
});
