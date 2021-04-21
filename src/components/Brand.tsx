import { useContext } from "react";
import { useApiRequest } from "../helpers/utils";
import DataGridDevExtreme from "../components/DataGridDevExtreme";
import { GLOBAL } from "../config";
import Loading from "../components/Loading";
import { Chip } from "@material-ui/core";
import MyContext from "../contexts/MyContext";
import { useEffect } from "react";

interface BrandProps {
  brandID: string;
}
export default function Brand({ brandID }: BrandProps) {
  const { data, error, isLoading, percentage } = useApiRequest(
    `${GLOBAL.API_URL}menus?brandID=${brandID}`
  );
  const { api } = useContext(MyContext);

  useEffect(() => {
    api.handlePercen(percentage);
    return () => {
      api.handlePercen(0);
    };
  }, [percentage, api]);

  return (
    <div>
      <Chip size="medium" label={brandID} />
      <div className="my-5 pb-5">
        {isLoading && <Loading />}
        {error && (
          <h4>Something went wrong... Please Connect VPN or contact IT.</h4>
        )}
        {!isLoading && !error && <DataGridDevExtreme data={data} />}
      </div>
    </div>
  );
}
