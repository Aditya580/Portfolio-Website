import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChrome ,faDev} from '@fortawesome/free-brands-svg-icons';


const Acheivements =()=>{
     const [listProjects]=useState([
        {
            name:'Article Writing Competion',
            des:'I won 1st prize in an article writing competition organized by the Confederation of Indian Industry, focusing on "Changing Dynamics of Higher Education." My article explored the evolving landscape of higher education, emphasizing the integration of technology, innovative teaching methodologies, and the importance of adapting to future educational trends to meet the needs of a rapidly changing world.',
           images:' /A-1.jpg',

        },
        {
            name:'Mentored 30+ Students in Web Designing Workshop',
            des:'I organized a web designing workshop at my university, where I mentored over 30 students. The workshop covered essential web development skills, including HTML, CSS, and JavaScript. My guidance helped students build their own web projects, fostering their understanding of web technologies and enhancing their practical skills in creating responsive and dynamic websites',
           
            images:'/A-2.jpg',

        },
        {
            name:'Managed and Anchored more than 20+ Events',
            des:'I have actively volunteered at over 20 events during my college years, demonstrating strong organizational and leadership skills. Additionally, I have anchored several events, showcasing my ability to engage and manage audiences effectively. These experiences have enhanced my communication abilities and teamwork, contributing to my overall personal and professional development',
           
            images:'/A-3.jpg',

        },
        {
            name:'Won 1st Prize in Sage Shark Tank',
            des:'I won 1st prize in the Sage Shark Tank competition organized by Sage University, Bhopal, with my innovative idea, DatesCafe. This concept focused on creating a unique cafe experience centered around dates, offering a variety of date-based products. My presentation highlighted the market potential and unique selling propositions, impressing the judges and securing the top spot in the competition',
            
            images:'/A-4.jpg',

        },
        {
            name:'Won Runner-up Prize in Finding Error in C++',
            des:'I secured the runner-up prize in a "Finding Error in C++" competition, demonstrating my proficiency in debugging and problem-solving. This event tested participants ability to identify and correct errors in C++ code, and my strong analytical skills and attention to detail enabled me to excel, earning recognition for my technical capabilities',
            
            images:'/A-5.jpg',

        }
     ]);
    return(
        <section className='projects'>
            <div className='title'>
                Acheivements Section
            </div>
            <div className='des'>
                Here is My Acheivements 
            </div>

            <div className ="list">
                {
                    listProjects.map((value ,key)=>(
                        <div key={key}className='item'>
                            <div className='images'>
                                <img src={value.images}/>
                            </div>
                            <div className='content'>
                                <h3>{value.name}</h3>
                                <div className='des'>{value.des}</div>
                                
                                

                               
                            </div>
                        </div>

                    ))
                }
            </div>
        </section>

    )
}
export default Acheivements;