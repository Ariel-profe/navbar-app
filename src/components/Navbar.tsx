import React, { useEffect, useRef, DOMElement, MutableRefObject } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg'
import { links, social } from '../data/data';
import { useState } from 'react';

export const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef:MutableRefObject<any> = useRef(null);
    const linksRef:MutableRefObject<any> = useRef(null);

    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }else{
            linksContainerRef.current.style.height = '0px';
        }
        
    }, [showLinks])
    

  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <button
                    className='nav-toggle'
                    onClick={()=> setShowLinks(!showLinks)}
                >
                    <FaBars/>
                </button>
            </div>
           
                    <div className='links-container' ref={linksContainerRef}>
                        <ul className='links' ref={linksRef}>
                            {
                                links.map( ({id, text, url}) => (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
             
            
                <ul className="social-icons">
                    {
                        social.map(item => (
                            <li key={item.id}>
                                <a href="#">{item.icon}</a>
                            </li>
                        ))
                    }
                </ul>
        </div>
    </nav>
  )
}
