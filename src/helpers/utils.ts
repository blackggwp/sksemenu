import Axios from "axios";
import { useEffect, useState } from "react";

interface IApiResponses {
  error: {} | null;
  isLoading: boolean;
  data: {} | undefined;
  percentage: number;
}
export const useApiRequest = (url: string): IApiResponses => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const source = Axios.CancelToken.source();

    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await Axios({
          method: "get",
          url: url,
          cancelToken: source.token,
          timeout: 1000 * 15, // Wait for 15 seconds
          onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setPercentage(percentCompleted);
          },
        });
        setData(data[0]);
        setIsLoading(false);
      } catch (error) {
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
