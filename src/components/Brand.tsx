import React from "react";
import { useApiRequest } from "../helpers/utils";
import DataGridDevExtreme from "../components/DataGridDevExtreme";
import { GLOBAL } from '../config'
import Loading from "../components/Loading";
import ProgressBar from '../components/ProgressBar'

interface BrandProps {
  brandID: string;
}
export default function Brand({ brandID }: BrandProps) {
  const { data, error, isLoading, percentage } = useApiRequest(
    `${GLOBAL.API_URL}menus?brandID=${brandID}`
  );

  return (
    <>
      <div style={{
        margin: '20px 0px 20px 0px',
        paddingBottom: 20
      }}>
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
    </>
  );
}
