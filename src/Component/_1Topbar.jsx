import React from 'react'
import { DiCodeigniter } from 'react-icons/di'
import { FaBars } from 'react-icons/fa'
import { BiCalendarAlt } from 'react-icons/bi'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'



const _1Topbar = (props) => {
    return (
        <div className={`flex justify-between items-center px-4 py-2 ${props.bgmode} `}>
            <div className='flex items-center '>
                <DiCodeigniter size={30} className={`text-blue-700 mr-2`} />
                <h1 className={`${props.textMode}`}>AJ</h1>
            </div>
            <div>
                <div className=' flex items-center ' >

                    <div className='hidden lg:flex '>

                        <a href="" className={`mx-10 font-semibold text-sky-700 italic`}>About me</a>
                        <a href="" className={`mx-10 ${props.textMode}`}>Projects</a>
                        <a href="" className={`mx-10 ${props.textMode}`}>Education</a>
                        <a href="" className={`mx-10 ${props.textMode}`}>Skills</a>
                        <a href="" className={`mx-10 mr-28 ${props.textMode}`}>Contact</a>

                    </div>

                    <button onClick={props.handleMode} className={`px-3 py-1 ${props.textMode}`}>Mode</button>
                </div>
            </div>
        </div>
    )
}

export default _1Topbar