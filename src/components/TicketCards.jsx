import React from "react";
import { MoreIcon } from "../assets/Images/Icon";
import TicketImg from '../assets/Images/Avatar/tickets-avatar.png'

const TicketCards = ({DetailsFirst, DetailsSecond, CustomerFirst, CustomerSecond, DataFirst, DataSecond, Btn}) => {
  return (
    <div className="py-[24px] px-[31px] border-b mb-[40px]">
      <div className="flex items-center gap-[24px]">
        <img src={TicketImg} alt="Ticket Image" className="rounded-[50%]" />
        <div className="w-[372px] max-w-full flex flex-col gap-[4px]">
          <h2  className="font-semibold text-[14px] leading-[20px] text-[#252733]">
            {DetailsFirst}
          </h2>
          <p className="font-normal text-[12px] leading-[16px] text-[#C5C7CD]">
            {DetailsSecond}
          </p>
        </div>

      <div className="ml-[66px] w-[208px] flex flex-col gap-[4px]">
        <h2 className="font-semibold text-[14px] leading-[20px] text-[#252733]">{CustomerFirst}</h2>
        <p className="text-[12px] leading-[16px] text-[#C5C7CD]">{CustomerSecond}</p>
      </div>
      <div className="ml-[57px] w-[140px]">
        <h2 className="font-semibold text-[14px] leading-[20px] text-[#252733]">{DataFirst}</h2>
        <p className="text-[12px] leading-[16px] text-[#C5C7CD]">{DataSecond}</p>
      </div>
      <button className={`ml-[58px]  font-bold text-[11px] leading-[14px] text-white py-[5px] px-[12px] rounded-[100px] bg-[#F12B2C]`}>
        {Btn}
      </button>
      <button className="ml-[12px]">
        <MoreIcon/>
      </button>
      </div>
    </div>
  );
};

export default TicketCards;
