import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "../../styles/Navbar.module.css";
import { duration } from "../../shared/data";
import Notification from "../../public/Notification.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillGrid1X2Fill } from "react-icons/bs";


export default function NotificationDropdown(props) {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [durationTime, setDurationTime] = useState("This Week");

  console.log("duration", duration);

  return (
    <>
      <div className="relative z-[101]">
        <div
          className={`absolute w-[300px] ml-[-1500%] top-[28px] h-auto ${dropdownToggle ? "shadow-md z-[101]" : "h-[0px] opacity-0 z-[-100] invisible"
          } overflow-hidden pt-[16px] bg-white duration-150 rounded-[8px] flex flex-col gap-[5px]`}
        >
            <div className="w-full flex flex-row justify-between items-center h-[40px] px-[20px] border-b-gray-100 border-b-[1px] border-solid">
                <h1 className="text-black">Notification</h1>
                <IoSettingsOutline className="text-black cursor-pointer"/>
            </div>
          <div className="pt-[10px]">
            {duration.map((duration, id) => (
              <div key={id} className="h-[80px] w-full hover:bg-blue-100 flex flex-row py-[20px] px-[20px] items-start gap-[15px] cursor-pointer">
                    <div className="flex-[1] flex justify-center items-center">
                        <div className="h-[40px] w-[40px] rounded-full bg-orange-100 flex justify-center items-center">
                        <BsFillGrid1X2Fill className=" text-orange-400"/>
                        </div>
                    </div>
                    <div className="flex-[4]">
                        <h1 className="text-black font-bold text-[15px]">Fresh Blog Alert</h1>
                        <p className="text-black text-[10px] p-0 m-0">Discover the latest information in our comprehensive guide</p>
                    </div>
                    <div className="flex-[1] text-black text-[10px]">20m</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative cursor-pointer z-[2]"
          onClick={() => {
            setDropdownToggle(!dropdownToggle);
          }}
        >
          <div className="absolute h-[6px] w-[6px] bg-red-500 rounded-full left-0"></div>
          <Notification
            width={10}
            height={10}
            className={styles.notificationLogo}
          />
        </div>
      </div>
    </>
  );
}
