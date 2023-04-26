import axios from "axios";
import { useQuery } from "react-query";

function useViews() {
    const fetchViews = async () => {
        const response = await axios.get("https://fe-task-api.mainstack.io/");


        if (response.status === 200) {
            return response.data;
        }

        throw response.data.error;
    };

    return useQuery(["views"], fetchViews, {
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: true
    });
}


export default useViews