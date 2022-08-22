import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataurl) =>{

    //these are two use state
    const [data,setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        let isMuted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) =>{
           
            setIsLoading(true);

            try{
                const response = await axios.get(url,{ cancelToken: source.token});
                if(isMuted){
                    setData(response.data);
                    setFetchError(null);
                }
            }catch(err){
                if(isMuted){
                    setData([]);
                    setFetchError(err.message);
                }
            }finally{
                isMuted && setTimeout(() => setIsLoading(false),5000);
            }
        }

        fetchData(dataurl);

        const cleanUp = () =>{
            console.log("Clean up runnig");
            isMuted = false;
            source.cancel();
        }

        return cleanUp
    }, [dataurl])

    return {data, fetchError, isLoading};
}

export default useAxiosFetch;