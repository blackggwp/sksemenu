import { ConvertToArr } from "./ConvertToArr";

const mockStr =
  "array ( 'first_name' => '', 'last_name' => '', 'mobile' => '0901975612', 'transaction_no' => 'T011210200129', 'note' => '', 'amount' => '400', 'outletcode' => 'T01', 'empcode' => 'E-0000', 'tablecode' => '905', 'systemdate' => '2/3/2021 11:04:15 AM', 'programdate' => '03/02/2021 0:00:00', 'tag' => 'send_transection', )";

test("should return object {key: val}", () => {
  const mockKey = "transaction_no";
  const obj = ConvertToArr(mockStr, mockKey);
  console.log(obj)
  expect(obj).toEqual({ transaction_no: 'T011210200129' })
});

// test("should return combine arr in object", () => {
//   let data = {}
//   const keys = ["transaction_no", "mobile", "amount"]
//   for (let index = 0; index < keys.length; index++) {
//     const resObj = ConvertToArr(mockStr, keys[index])
//     data[keys[index]] = resObj[keys[index]]
//   }
//   // return data
//   expect(data).toEqual({ "amount": "400", "mobile": "0901975612", "transaction_no": "T011210200129" })
// });
