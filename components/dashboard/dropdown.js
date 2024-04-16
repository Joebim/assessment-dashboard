import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "../../styles/Navbar.module.css";
import { duration } from '../../shared/data';


export default function Dropdown(props) {

  const [dropdownToggle, setDropdownToggle] = useState(false)
  const [durationTime, setDurationTime] = useState("This Week")


  return (
    <div className="relative z-[100]">
            <div className={`absolute w-full ${dropdownToggle ? "h-auto shadow-md" : "h-[0px]"} ${props.dropClass} overflow-hidden p-[10px] pt-[16px] duration-200 rounded-[8px] z-[1] flex flex-col gap-[5px]`}>
              <div className='pt-[10px]'>
                {duration.map((duration, id)=> (
                <div key={id} className='w-full h-[28px] rounded-[5px] hover:bg-gray-100 text-[12px] text-black flex justify-center items-center cursor-pointer'
                onClick={()=> {
                  setDurationTime(duration.time)
                  setDropdownToggle(false)
                }}
                >{duration.time}</div>
              ))}
              </div>
              
            </div>
            <div className={`${styles.dropdown} z-[2] relative cursor-pointer ${props.class}`}
            onClick={()=> {
              setDropdownToggle(!dropdownToggle)
            }}
            >
              <p className={`${props.textClass} px-[5px]`}>{durationTime}</p>
              <MdOutlineKeyboardArrowDown
                width="20"
                className={`${styles.downArrow} ${dropdownToggle ? "rotate-180" : "rotate-0"} duration-200`}
              />
            </div>
          </div>
  )
}
