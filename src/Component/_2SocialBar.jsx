import React from 'react'
import { useState } from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { BiSolidBarChartSquare } from 'react-icons/bi'

const _2SocialBar = (props) => {

    const [nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(prevNav => (!prevNav))
    }

    return (
        <div className={`w-full min-h-[58px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80`}>

            <div className={`flex justify-between`}>
                <FaFacebook className='mx-4' size={20} />
                <FaTwitter className='mx-4' size={20} />
                <FaYoutube className='mx-4' size={20} />
                <FaInstagram className='mx-4' size={20} />
            </div>

            {/*hamburger icon*/}

            <div onClick={handleNav} className={`lg:hidden z-10`}>
                <FaBars size={20} className='mr-4 cursor-pointer' />
            </div>

            {/*Moblie menu*/}
            <div
                onClick={handleNav}
                className={nav ? `overflow-y-hidden lg:hidden ease-in duration-300 text-center absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col` : 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
                <ul className='h-full w-full text-center pt-12'>

                    <li> <a href="" className={`font-semibold text-2xl py-12 text-sky-700 italic`}>About me</a></li>
                    <li><a href="" className={` text-2xl py-12 ${props.textMode}`}>Projects</a></li>
                    <li><a href="" className={` text-2xl py-12 ${props.textMode}`}>Projects</a></li>
                    <li><a href="" className={` text-2xl py-12  ${props.textMode}`}>Projects</a></li>
                    <li><a href="" className={` text-2xl py-12  ${props.textMode}`}>Projects</a></li>


                </ul>
            </div>


        </div>
    )
}

export default _2SocialBar