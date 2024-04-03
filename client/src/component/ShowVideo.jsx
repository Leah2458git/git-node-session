import { useGetVideoByNameMutation } from '../app/videoApiSlice';
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const ShowVideo = (props) => {
     
    let videoPath = ""
    let fileName=props.path.split("\\")
    fileName=fileName[fileName.length-1]
    
    // const[video,setVideo]=useState(false)
const [getVideo,{data,isError,isSuccess,error}] = useGetVideoByNameMutation();

// useEffect(()=>{
   
//        getVideo({fileName}) 
//     console.log(data);
// },[data])

// console.log();
    return (
        <div>
{/* {video && getVideo({fileName:fileName})} */}
 {/* {console.log(video)} */}
 {/* {getVideo({fileName:fileName})} */}
                {/* {videoPath = "http://localhost:1260/upload/"} */}
                {isSuccess && console.log("aaaaaa")}              
{isError && console.log("error")}
                {/* <div className="App"> */}
                    <video width="640" height="360" controls>
                        <source src={`http://localhost:1260/upload/${fileName}`} type="video/mp4" />
                    </video>
                    

                {/* </div> */}
           

        </div>)
}
export default ShowVideo