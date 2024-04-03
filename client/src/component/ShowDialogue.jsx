import { useEffect, useState } from 'react'
import {useUpdateDialogMutation} from '../app/dialogApiSlice'
import { InputText } from "primereact/inputtext";
import DecodeToken from '../DecodeToken'
import { Card } from 'primereact/card';

const ShowDialogue=(props)=>{
    const [UpdateDialogue, { isError, isSuccess, error, isLoading, data }] = useUpdateDialogMutation()
    const [buttonValue,setButtonValue]=useState('')

    const sendMessage=()=>{
        const id = props.dialogue._id
        const {_id}=DecodeToken()
        const obj = {id,message:{message:buttonValue,userId:_id}}
        UpdateDialogue(obj)
        props.refetch()
        setButtonValue("")
    }
    return (
        <div style={{marginRight:'100%',width:'300px'}}>
        {props.dialogue.dialogue.map(element=> <InputText value={element.message}/>)}
        <InputText value={buttonValue} onChange={(e) => setButtonValue(e.target.value)} dir='rtl' placeholder='תגובה' />
        <button onClick={()=>sendMessage()}>שלח</button>
        </div>
    )
    


}
export default ShowDialogue
