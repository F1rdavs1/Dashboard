import React from "react";
import { NavLink } from "react-router-dom";
import {
  AgentsIcon,
  ArticlesIcon,
  ContactIcon,
  Dashboard,
  IdeasIcon,
  OverwievIcon,
  SettingsIcon,
  SubscriptionIcon,
  TicketsIcon,
} from "../assets/Images/Icon";

function Navbar() {
  return (
    <nav className="w-[20%] min-h-[100vh] bg-[#363740]">
      <ul>
        <li>
          <a
            href="/"
            className="flex items-center pt-[37px] pl-[32px] pb-[55px] gap-[12px]"
          >
            <Dashboard />
            <p className="text-[#A4A6B3] font-bold text-[19px]">
              Dashboard Kit
            </p>
          </a>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <NavLink
            className={"flex items-center gap-[24px] text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/"}
          >
          <OverwievIcon />
            Overwiev
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <NavLink
            className={"flex items-center gap-[24px] text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/tickets"}
          >
          <TicketsIcon />
            Tickets
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <NavLink
            className ={"flex items-center gap-[24px] text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/ideas"}
          >
          <IdeasIcon />
            Ideas
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <NavLink
            className={"flex items-center gap-[24px] text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/contacts"}
          >
          <ContactIcon />
            Contacts
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <NavLink
            className= {"flex items-center gap-[24px] text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/agents"}
          >
          <AgentsIcon />
            Agents
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px]  py-[20px]">
          <NavLink
            className={"flex items-center gap-[24px] text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/articles"}
          >
          <ArticlesIcon />
            Articles
          </NavLink>
        </li>
        <hr className="my-[16px] border-[1px] " />
        <li className="flex items-center gap-[24px] py-[20px] pl-[32px] ">
          <NavLink
            className={"flex items-center gap-[24px] text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/settings"}
          >
          <SettingsIcon />
            Settings
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] py-[20px] pl-[32px] ">
          <NavLink
            className={"flex items-center gap-[24px] text -[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/subscription"}
          >
          <SubscriptionIcon />
            Subscription
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
