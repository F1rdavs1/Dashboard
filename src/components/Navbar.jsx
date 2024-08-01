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
          <OverwievIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/"}
          >
            Overwiev
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <TicketsIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/tickets"}
          >
            Tickets
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <IdeasIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/ideas"}
          >
            Ideas
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <ContactIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/contacts"}
          >
            Contacts
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px] py-[20px]">
          <AgentsIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/agents"}
          >
            Agents
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] pl-[32px]  py-[20px]">
          <ArticlesIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/articles"}
          >
            Articles
          </NavLink>
        </li>
        <hr className="my-[16px] border-[1px] " />
        <li className="flex items-center gap-[24px] py-[20px] pl-[32px] ">
          <SettingsIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/settings"}
          >
            Settings
          </NavLink>
        </li>
        <li className="flex items-center gap-[24px] py-[20px] pl-[32px] ">
          <SubscriptionIcon />
          <NavLink
            className={"text-[16px] leading-[20px] text-[#A4A6B3]"}
            to={"/subscription"}
          >
            Subscription
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
