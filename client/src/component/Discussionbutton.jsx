import { Button } from 'primereact/button';
import { useState } from 'react';
import ShowDiscussion from './ShowDiscussion'
import {useUpdateDiscussionReadMutation} from '../app/discussionApiSlice'
import { useNavigate } from 'react-router-dom';
const Disscussionbutton = (props) => {
    const [update,{ data, isError, isSuccess }] = useUpdateDiscussionReadMutation()
    const [show, setShow] = useState(false)
    // const [read, setRead] = useState(props.discussion.read)
    // const c = read ? 'unset' : 'large'
    // const w=read?'150px':'180px'
    const navigate=useNavigate()
    const onClickButton = () => {
        setShow(!show)
        const obj={id:props.discussion._id,read:"true"}
        
        // setRead(true)
        update(obj)
        navigate(`/ShowDiscussion`,{state:{discussion:props.discussion}})
    }

    return (
        <>
           <Button label={props.discussion.discussionName} onClick={() =>onClickButton()} style={{width:'150px',justifyContent:'center'}}/>
            <br /><br />
            {/* {show && <ShowDiscussion discussion={props.discussion} refetch={props.refetch} />} */}
        </>
    )
}
export default Disscussionbutton
