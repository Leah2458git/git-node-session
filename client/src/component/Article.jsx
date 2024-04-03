import React from 'react'; 
import { Card } from 'primereact/card';
import './Article.css'
import {useGetArticleByNameQuery}from '../app/articleApiSlice'
import {useParams} from'react-router-dom'

// export default function Article(props) {
//     // const { name } =props.name.name
//     // const { data, isError, isSuccess } = useGetArticleByNameQuery(name)
// console.log("Article")
//     return (
//         <div className="card1">
            
            
//             <Card title={props.name.name}>
//                 <p className="m-0">
//                    {props.name.article}
//                 </p>
//             </Card>
            
//         </div>
//     )
//  }

import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Article(props) {
    return (
        <div >
            <Accordion multiple activeIndex={[1]} dir='rtl'>
                <AccordionTab header={props.name.name}>
                    <p className="m-0">
                        {props.name.article}
                        </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}