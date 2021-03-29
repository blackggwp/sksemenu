import Axios from "axios";
import { useEffect, useState } from "react";

interface IApiResponses {
  error: {} | null, isLoading: boolean, data: {} | undefined, percentage: number
}
export const useApiRequest = (url: string): IApiResponses => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await Axios({
          method: "get",
          url: url,
          timeout: 1000 * 15, // Wait for 15 seconds
          onDownloadProgress: progressEvent => {
            let percentCompleted = Math.floor(progressEvent.loaded / progressEvent.total * 100)
            setPercentage(percentCompleted)
          }
        })
        setData(data[0]);
        setIsLoading(false);
      } catch (e) {
        console.error("fetchData Error: ", e);
        setError(e);
        setIsLoading(false);
        return { e, isLoading: false, data: undefined };

      }
    }
    fetchData();
  }, [url]);
  return { error, isLoading, data, percentage };
};
