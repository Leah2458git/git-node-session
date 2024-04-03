import React from 'react';
import './Article.css'
import { useGetVideoByRoleQuery,useGetVideoByNameMutation,useGetAllVideosQuery } from '../app/videoApiSlice'
import ShowVideo from './ShowVideo'
import { useEffect } from "react";
import { Button } from 'primereact/button';

import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function VideoList() {
    const { data, isError, isSuccess,error } = useGetAllVideosQuery()
    // const [update,{ data, isError, isSuccess }] = useGetVideoByNameMutation()

    const navigate = useNavigate()

    const Request = async () => {
       
        const ans = await axios("http://localhost:1260/api/functionToken/" + localStorage.getItem("token"))
        
        if (ans.data.ans == false) {

            navigate("/login")
        }
    }
    useEffect(() => {
         Request();
        
}, [])
    return (
        <div>
            <Button onClick={()=>navigate('../addVideo')}>add video</Button>
{isError && console.log(error)}
            {isSuccess && console.log(data)}
                {isSuccess && data.map(element => 
                    <ShowVideo path={element.path}/>
                )
                }
              
        </div>
    )
}