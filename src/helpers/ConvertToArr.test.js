import { object } from "prop-types";
import { ConvertToArr } from "./ConvertToArr";

const str =
  "array ( 'first_name' => '', 'last_name' => '', 'mobile' => '0901975612', 'transaction_no' => 'T011210200129', 'note' => '', 'amount' => '400', 'outletcode' => 'T01', 'empcode' => 'E-0000', 'tablecode' => '905', 'systemdate' => '2/3/2021 11:04:15 AM', 'programdate' => '03/02/2021 0:00:00', 'tag' => 'send_transection', )";

test("should found transaction_no key and val", () => {
  const key = "transaction_no";
  const res = ConvertToArr(str, key);
  // console.log(res);
});

test("should found mobile key and val", () => {
  const key = "mobile";
  const res = ConvertToArr(str, key);
  // console.log(res);
});

test("should found amount key and val", () => {
  const key = "amount";
  const res = ConvertToArr(str, key);
  // console.log(res);
});

test("combine arr in object", () => {
  let data = {}
  const keys = ["transaction_no", "mobile", "amount"]
  for (let index = 0; index < keys.length; index++) {
    const resObj = ConvertToArr(str, keys[index])
    data[keys[index]] = resObj[keys[index]]
  }
  // return data
});
