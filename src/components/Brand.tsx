import { useApiRequest } from "../helpers/utils";
import DataGridDevExtreme from "../components/DataGridDevExtreme";
import { GLOBAL } from "../config";
import Loading from "../components/Loading";
import ProgressBar from "../components/ProgressBar";
import { Chip } from "@material-ui/core";

interface BrandProps {
  brandID: string;
}
export default function Brand({ brandID }: BrandProps) {
  const { data, error, isLoading, percentage } = useApiRequest(
    `${GLOBAL.API_URL}menus?brandID=${brandID}`
  );

  return (
    <div>
      <Chip size="medium" label={brandID} />
      <div className="my-5 pb-5">
        {isLoading && (
          <>
            <ProgressBar value={percentage} />
            <Loading />
          </>
        )}
        {error && (
          <h4>Something went wrong... Please Connect VPN or contact IT.</h4>
        )}
        {!isLoading && !error && <DataGridDevExtreme data={data} />}
      </div>
    </div>
  );
}
