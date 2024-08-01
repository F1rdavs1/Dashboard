import React from "react";

function Cards({ title, count, extraStyle }) {
  return (
    <ul>
      <li
        className={`py-[24px] w-[258px] hover:border-blue-800 group duration-300 flex flex-col border-[1px] rounded-md text-center bg-white ${extraStyle}`}
      >
        <span className="text-[19px] leading-[24px] group-hover:text-blue-800 text-[#9FA2B4] pb-[12px]">
          {title}
        </span>
        <strong className="text-[40px] leading-[50px] group-hover:text-blue-800 text-[#252733]">
          {count}
        </strong>
      </li>
    </ul>
  );
}

export default Cards;
