import Axios from "axios";
import { useEffect, useState } from "react";

interface IApiResponses {
  error: object | null;
  isLoading: boolean;
  data: object[] | undefined;
  percentage: number;
}

interface DataProps {
  Fcode: string;
  FoodType?: {
    FTnameTh: string;
  };
  FTnameTh?: string | undefined;
}

export const useApiRequest = (url: string): IApiResponses => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [percentage, handlePercentage] = useState(0);

  useEffect(() => {
    const source = Axios.CancelToken.source();

    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await Axios({
          method: "get",
          url: url,
          cancelToken: source.token,
          timeout: 1000 * 20, // Wait for 20 seconds
          onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            handlePercentage(percentCompleted);
          },
        });
        setData(data);
        setIsLoading(false);
      } catch (error: any) {
        if (Axios.isCancel(error)) {
        } else {
          console.error("fetchData Error: ", error);
          setError(error);
          setIsLoading(false);
          return { error, isLoading: false, data: undefined };
        }
      }
    }
    fetchData();
    return () => {
      source.cancel();
    };
  }, [url]);
  return { error, isLoading, data, percentage };
};

export const mapFTnameThProp = (data: Array<DataProps>): Array<DataProps> => {
  const foodT = data.map((food) => {
    const combined = { FTNameTh: food?.FoodType?.FTnameTh, ...food };
    const { FoodType, ...rest } = combined;
    return rest;
  });
  return foodT;
};

export const groupCount = (arr: object[] | undefined, key: string) => {
  if (!arr) return;
  const obj = arr.reduce((total: any, value: any) => {
    total[value[key]] = (total[value[key]] || 0) + 1;
    return total;
  }, {});
  return obj;
};
