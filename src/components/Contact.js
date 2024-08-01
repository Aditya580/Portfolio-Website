import React ,{useRef, useState} from 'react';
import CustomHook from './CustomHook';  

const Contact =()=>
{
    const [listcontacts]=useState([
        {
            title:'Phone Number',
            value:'+91 8103519944'
        },
        {
            title:'E-mail Address',
            value:'adityashrivastav022@gmail.com'
        },
        {
            title:'Instagram Id',
            value:'adi_shrivastav04'
        },
        {
            title:'LinkedIn Id',
            value:'adityashrivastav'
        }
    ]);
const refTab =useRef();
    CustomHook(refTab);
    return(
        <section className='contacts' ref={refTab}>
            <div className='title'>
                This is my Contacts List
            </div>
            <div className='des'>
                I will be happy to help you with any queries or inquiries.
            </div>
            <div className ='list'>
                {
                    listcontacts.map((value ,key)=>(
                        <div key={key} className='item'>
                            <h3>{value.title}</h3>
                            <div>{value.value}</div>
                        </div>
                    ))
                }

            </div>

        </section>

    )
}
export default Contact;
