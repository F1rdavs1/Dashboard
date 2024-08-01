import React from "react";
import { NotificationIcon, SearchIcon } from "../assets/Images/Icon";
import Avatar from "../assets/Images/Avatar/avatar.png";

function Header({ title }) {
  return (
    <div className="pt-[30px] pb-[54px] px-[30px] flex items-center justify-between">
      <h2 className="text-[24px] leading-[30px] text-[#252733]">{title}</h2>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          <SearchIcon />
          <NotificationIcon />
        </div>
        <div className="flex items-center gap-[14px]">
          <h2 className="text-[14px] leading-[20px] tex-[#252733] ">
            Jones Ferdinand
          </h2>
          <img src={Avatar} alt="Avatar" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}

export default Header;
