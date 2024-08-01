import React , { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact,faHtml5,faCss3,faJs,faJava,faSql,faNode,faExpress} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    const [listskills] =useState([

        {
            name: 'HTML',
            des:'HTML is the standard markup language used to create and structure web pages. It provides a way to define the content, layout, and semantics of a webpage using various elements and tags. With HTML, I can create headings, paragraphs, lists, links, images, forms, and more to build the foundation of a website.',
            icon:faHtml5

        },
        {
            name: 'CSS',
            des:'CSS is a style sheet language used to describe the presentation of a document written in a markup language like HTML. It allows me to control the layout, color, font, and other visual aspects of a webpage. With CSS, I can create responsive designs, implement animations, and enhance the overall user experience of a website.',
            icon:faCss3

        },
        {
            name: 'Javascript',
            des:'JavaScript is a high-level programming language used to add interactivity and dynamic behavior to web pages. It enables me to manipulate the Document Object Model (DOM), handle events, make AJAX requests, and create interactive user interfaces. JavaScript also allows for server-side scripting with Node.js and the development of single-page applications (SPAs)',
            icon:faJs

        },
        {
            name: 'React',
            des:'React is a popular JavaScript library for building user interfaces. It uses a component-based architecture, allowing me to create reusable UI elements. Reacts virtual DOM and efficient diffing algorithm make it easy to update and render components efficiently. With React, I can build complex and interactive web applications with a focus on performance and maintainability',
            icon:faReact

        },
        {
            name: 'Java',
            des:'Java is a high-level, class-based, object-oriented programming language. It is known for its portability, as Java applications can run on any platform that supports the Java Virtual Machine (JVM). Java is widely used in enterprise applications, mobile development, and scientific computing. Its strong type safety, extensive libraries, and robust ecosystem make it a popular choice for building scalable and reliable software systems',
            icon:faJava

        },
        {
            name: 'Node.js',
            des:'Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine. It allows me to run JavaScript on the server-side, enabling the creation of APIs, handling HTTP requests, and managing server-side logic. Node.js comes with a vast ecosystem of libraries and frameworks, making it a powerful tool for building scalable and efficient server applications.',
            icon:faNode

        },
    ]);
    
    return (
        <section className="skills">
            <div className="title">
                This is my skills
            </div>
            <div className="des">Here is My Skills in which I am Proficient</div>

            <div className="list">
                {
                listskills.map((value , key)=>(
                    <div key={key} className="item">
                    <FontAwesomeIcon icon ={value.icon}/>
                    <h3>{value.name}</h3>
                    <div className="des">{value.des}</div>
                    </div>
                ))
                }

            </div>

        </section>
            
        )
}
export default Skills;