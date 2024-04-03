import { Button } from 'primereact/button';
import { useState } from 'react';
import ShowDialogue from './ShowDialogue'
import {useUpdateDialogueReadMutation} from '../app/dialogApiSlice'
const Dialogbutton = (props) => {
    const [update,{ data, isError, isSuccess }] = useUpdateDialogueReadMutation()
    const [show, setShow] = useState(false)
    const [read, setRead] = useState(props.dialogue.read)
    console.log(props.dialogue.read);
    const c = read ? 'unset' : 'large'
    const onClickButton = () => {
        setShow(!show)
        const obj={id:props.dialogue._id,read:"true"}
        setRead(true)
        update(obj)
        
    }

    return (
        <>

            <Button label={props.dialogue.dialogueName} onClick={() =>onClickButton()} style={{ fontSize: c ,width:'150px'}}/>
            <br /><br />
            {show && <ShowDialogue dialogue={props.dialogue} refetch={props.refetch} />}
        </>
    )
}
export default Dialogbutton
