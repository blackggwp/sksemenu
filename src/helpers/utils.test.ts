import { mapFTnameThProp } from "./utils";

const mocks = [
  {
    __typename: "Food",
    Fcode: "01026",
    FnameTh: "กระเจี๊ยบ",
    FTcode: "01-1",
    FoodType: {
      __typename: "FoodType",
      FTcode: "01-1",
      FTnameTh: "ผัก BBQ",
    },
  },
  {
    __typename: "Food",
    Fcode: "01027",
    FnameTh: "กระเจี๊ยบ",
    FTcode: "01-1",
    FoodType: {
      __typename: "FoodType",
      FTcode: "01-1",
      FTnameTh: "ผัก BBQ",
    },
  },
  {
    __typename: "Food",
    Fcode: "01028",
    FnameTh: "กระเจี๊ยบ",
    FTcode: "01-1",
    FoodType: {
      __typename: "FoodType",
      FTcode: "01-1",
      FTnameTh: "ผัก BBQ",
    },
  },
];
const res = mapFTnameThProp(mocks);
console.log(res);

describe("map FTnameTh Prop to data", () => {
  it("should have FTnameTh Prop", () => {
    // expect(Object.keys(res[0]).includes("FTnameTh"));
  });
});
