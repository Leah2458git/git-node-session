import { useEffect, useState } from 'react'
import {useUpdateDiscussionMutation} from '../app/discussionApiSlice'
import { InputText } from "primereact/inputtext";
import DecodeToken from '../DecodeToken'
import { Card } from 'primereact/card';
import { useLocation, useParams } from 'react-router-dom';

const ShowDiscussion=(props)=>{
    const location = useLocation()

    const { discussion } = location.state

    const [updateDiscussion, { isError, isSuccess, error, isLoading, data }] = useUpdateDiscussionMutation()
    const [buttonValue,setButtonValue]=useState('')

    const sendMessage=()=>{
        const id = discussion._id
        const {_id}=DecodeToken()
        const obj = {id,message:{message:buttonValue,userId:_id}}
        updateDiscussion(obj)
        setButtonValue("")
        
    }
    return (
        <div style={{width:'100%',alignItems:'center'}}>
            <br/><br/><br/>
            
        {discussion.discussion.map(element=> <div><InputText value={element.message} style={{marginTop:"10px",width:'200px',height:'30px',borderRadius:'10px'}}/></div>)}
        <br/>
        <InputText value={buttonValue} onChange={(e) => setButtonValue(e.target.value)} dir='rtl' placeholder='תגובה' />
        <button onClick={()=>sendMessage()}>שלח</button>
        </div>
    )
    


}
export default ShowDiscussion
