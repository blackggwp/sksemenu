import React from "react";
import { useQuery, gql } from "@apollo/client";
import DataGridDevExtreme from "../components/DataGridDevExtreme";
import { mapFTnameThProp } from "../helpers/utils";

export default function Graphql() {
  // const firstName = "black";
  const Foods = gql`
    query getAllFood {
      getAllFood {
        Fcode
        FnameTh
        FComment
        Startdate
        Enddate
        FProp
        FPrinter
        FoodType {
          FTcode
          FTnameTh
        }
        FTcode
      }
    }
  `;

  const { loading, error, data } = useQuery(
    Foods
    // { variables: { firstName } }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const foodResult = mapFTnameThProp(data.getAllFood);
  return (
    <div className="app p-4">
      <h1>In Test</h1>
      <DataGridDevExtreme data={foodResult} />
    </div>
  );
}
