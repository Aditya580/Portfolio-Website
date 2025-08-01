import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChrome ,faDev} from '@fortawesome/free-brands-svg-icons';


const Projects =()=>{
     const [listProjects]=useState([
        {
            name:'Real Time Tracker',
            des:'A real-time tracker app built using React, Redux, and Google Maps API. It allows users to track their daily activities, locations, and speeds, and visualize their progress on a map.',
            mission:'Backend Development',
            languages:'HTML, CSS , JavaScript ,Socket.io ,Express.js ,leaflet',
            images:' /Project-1.jpg',

        },
        {
            name:'Library management System',
            des:'Developed a Library Management System to efficiently manage the librarys book inventory. This project aims to streamline the process of tracking books and managing user interactions',
            mission:'Backend Development',
            languages:'Java, Java Swing (for the user interface).',
            images:'/Project-2.jpg',

        },
        {
            name:'Quiz Game',
            des:'Created a Java-based Quiz Game that allows users to participate in quizzes featuring multiple-choice questions. The application provides an interactive graphical interface for users to engage with the quiz content',
            mission:'Frontend Development',
            languages:'Java, Java Swing (for the user interface).',
            images:'/Project-3.jpg',

        },
        {
            name:'Fitness Training Website',
            des:'Developed a comprehensive Fitness Training website that includes features for client interaction and a fitness query chatbot to address client questions and concerns',
            mission:'Frontend Development',
            languages:'HTML, CSS, JavaScript.',
            images:'/Project-4(2).jpg',

        },
     ]);
    return(
        <section className='projects'>
            <div className='title'>
                This is my Project Section
            </div>
            <div className='des'>
                I have worked on various projects that showcase my skills in frontend and backend development. Here are a few of them.
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
                                <div className='mission'>
                                    <div><FontAwesomeIcon icon={faDev} /></div>
                                    <div>
                                       <h4>Mission</h4>
                                       <div className='des'>{value.mission}</div>
                                    </div>
                                </div>

                                <div className='mission'>
                                     <div><FontAwesomeIcon icon={faChrome}/></div> 
                                    <div>
                                       <h4>Languages</h4>
                                       <div className='des'>{value.languages}</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))
                }
            </div>
        </section>

    )
}
export default Projects;