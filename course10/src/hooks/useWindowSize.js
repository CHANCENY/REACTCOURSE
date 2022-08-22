import { useEffect, useState } from "react";

const useWindowSize = () =>{

    //making state hook
    const [windowSize, setWindowSize] = useState({
        width:undefined,
        height: undefined,
        msg: undefined});


    //useEffect

    useEffect(() =>{
      
        const handleResize =() =>{

            //setting width and height of useState above
            setWindowSize({
                width:window.innerWidth, 
                height:window.innerHeight,
                msg:"Size Changing"});
        }

        handleResize();

        //eventlister to listen for change in window size 
        window.addEventListener("resize", handleResize);

        //cleanUp will be running auto by useE to avoid memory links
        const cleanUp = () =>{
          
            console.log("CleanUp");
            window.removeEventListener('resize', handleResize);
        }

        //refactoring cleapUp function can be
        // return ()=>window.removeEventListener('resize', handleResize);
        //it is same as the top cleanUp function
        
        return cleanUp;
    }, [])

    return windowSize;
}

export default useWindowSize
