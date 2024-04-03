import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useGetDialogsQuery} from '../app/dialogApiSlice'
import { Button } from "primereact/button";
import AdminDialogue from './AdminDialogue'

const PersonalAreaAdmin = (props) => {
    const [show,setShow]=useState(false)
   const navigate=useNavigate()
    const Request = async () => {
       
        const ans = await axios("http://localhost:1260/api/functionToken/" + localStorage.getItem("token"))
        
        if (ans.data.ans == false) {

            navigate("/login")
        }
    }
    useEffect(() => {
         Request();
        
}, [])
// const getAllUsers=()=>{
    
    
    
// }


    return (

        <div>
            <Button onClick={()=>{setShow(true)}} className="pi pi-messages" style={{marginTop:'3%'}}>הצג הודעות</Button>
            {/* /<Button onClick={()=>{navigate('/register')}}className="pi pi-user-plus">הוסף משתמש</Button> */}
            {show&&<AdminDialogue />}
        </div>)
}
export default PersonalAreaAdmin