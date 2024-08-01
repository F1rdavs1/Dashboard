import React from "react";
import { AddIcon } from "../assets/Images/Icon";
import Header from "../components/Header";

function Overview() {
  return (
    <section className="h-screen overflow-y-auto">
      <Header title={"Overwiev"} />
      <div className="bg-white mx-[30px] flex justify-between mb-[30px] rounded-md ">
        <div className="px-[32px] flex justify-between  w-full pt-[32px]">
          <div>
            <h2 className="text-[19px] leading-[24px] text-[#252733] font-bold">
              Today’s trends
            </h2>
            <span className="text-[12px] leading-[16px] font-normal">
              as of 25 May 2019, 09:41 PM
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex items-center gap-[8px]">
              <span className="block w-[16px] h-[2px] bg-[#3751FF]"></span>
              <p className="font-semibold text-[12px] leading-[15px] text-[#9FA2B4]">
                Today
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="block w-[16px] h-[2px] bg-[#DFE0EB]"></span>
              <p className="font-semibold text-[12px] leading-[15px] text-[#9FA2B4]">
                Yesterday
              </p>
            </div>
          </div>
        </div>
        <ul className="w-[342px] text-center">
          <li className="border-[1px] pt-[32px] pb-[24px] flex flex-col">
            <span className="mb-[6px] text-[16px] leading-[22px] text-[#9FA2B4]">
              Resolved
            </span>
            <strong className="text-[24px] leading-[30px] text-[#252733]">
              449
            </strong>
          </li>
          <li className="border-[1px] pt-[32px] pb-[24px] flex flex-col">
            <span className="mb-[6px] text-[16px] leading-[22px] text-[#9FA2B4]">
              Received
            </span>
            <strong className="text-[24px] leading-[30px] text-[#252733]">
              426
            </strong>
          </li>
          <li className="border-[1px] pt-[32px] pb-[24px] flex flex-col">
            <span className="mb-[6px] text-[16px] leading-[22px] text-[#9FA2B4]">
              Average first response time
            </span>
            <strong className="text-[24px] leading-[30px] text-[#252733]">
              33m
            </strong>
          </li>
          <li className="border-[1px] pt-[32px] pb-[24px] flex flex-col">
            <span className="mb-[6px] text-[16px] leading-[22px] text-[#9FA2B4]">
              Average response time
            </span>
            <strong className="text-[24px] leading-[30px] text-[#252733]">
              3h 8m
            </strong>
          </li>
          <li className="border-[1px] pt-[32px] pb-[24px] flex flex-col">
            <span className="mb-[6px] text-[16px] leading-[22px] text-[#9FA2B4]">
              Resolution within SLA
            </span>
            <strong className="text-[24px] leading-[30px] text-[#252733]">
              94%
            </strong>
          </li>
        </ul>
      </div>

      <ul className="flex justify-between px-[30px] pb-[30px]">
        <li className="border-[3px] rounded-md w-[546px] px-[32px] bg-white">
          <div className="mt-[32px] flex justify-between">
            <div>
              <h2 className="font-bold text-[19px] leading-[24px] text-[#252733]">
                Unresolved tickets
              </h2>
              <h3 className="mt-[8px] mb-[16px] font-normal text-[12px] leading-[16px]">
                Group:{" "}
                <span className="font-semibold text-[12px] leading-[15px]">
                  Support
                </span>{" "}
              </h3>
            </div>
            <a
              className="font-semibold text-[14px]  leading-[20px] text-[#3751FF]"
              href="#"
            >
              View details
            </a>
          </div>
          <div className="flex justify-between py-[20px] border-b-[3px]">
            <h2 className="font-semibold text-[14px] leading-[14px] text-[#252733]">
              Waiting on Feature Request
            </h2>
            <span className="font-semibold text-[14px] leading-[20px] text-[#9FA2B4]">
              4238
            </span>
          </div>
          <div className="flex justify-between py-[20px] border-b-[3px]">
            <h2 className="font-semibold text-[14px] leading-[14px] text-[#252733]">
              Awaiting Customer Response
            </h2>
            <span className="font-semibold text-[14px] leading-[20px] text-[#9FA2B4]">
              1005
            </span>
          </div>
          <div className="flex justify-between py-[20px] border-b-[3px]">
            <h2 className="font-semibold text-[14px] leading-[14px] text-[#252733]">
              Waiting on Feature Request
            </h2>
            <spa
              className="font-semibold text-[14px] leading-[20px] text-[#9FA2B4]"
              n
            >
              914
            </spa>
          </div>
          <div className="flex justify-between py-[20px]">
            <h2 className="font-semibold text-[14px] leading-[14px] text-[#252733]">
              Pending
            </h2>
            <spa
              className="font-semibold text-[14px] leading-[20px] text-[#9FA2B4]"
              n
            >
              281
            </spa>
          </div>
        </li>

        <li className="border-[3px] rounded-md w-[546px] px-[32px] bg-white">
          <div className="mt-[32px] flex justify-between">
            <div>
              <h2 className="font-bold text-[19px] leading-[24px] text-[#252733]">
                Tasks
              </h2>
              <span className="font-normal text-[12px] leading-[16px] text-[#9FA2B4] mt-[8px]">
                Body
              </span>
            </div>
            <a
              className="font-semibold text-[14px] leading-[20px] text-[#3751FF]"
              href="#"
            >
              View all
            </a>
          </div>

          <div className="flex items-center justify-between border-b-[3px] py-[20px]">
            <span className="font-semibold text-[14px] leading-[20px] text-[#C5C7CD]">
              Create new task
            </span>
            <div className="cursor-pointer">
              <AddIcon />
            </div>
          </div>
          <div className="flex justify-between items-center py-[20px] border-b-[3px]">
            <div className="flex">
              <input
                className="w-[20px] h-[20px] rounded-[50%] cursor-pointer"
                type="checkbox"
              />
              <h2 className="ml-[16px] font-semibold text-[14px] leading-[20px] text-[#252733]">
                Finish ticket update
              </h2>
            </div>
            <button className="font-bold text-[11px] leading-[14px] text-white py-[5px] px-[12px] bg-[#FEC400] rounded-[8px]">
              Urgent
            </button>
          </div>
          <div className="flex justify-between items-center py-[20px] border-b-[3px]">
            <div className="flex">
              <input
                className="w-[20px] h-[20px] rounded-[50%] cursor-pointer"
                type="checkbox"
              />
              <h2 className="ml-[16px] font-semibold text-[14px] leading-[20px] text-[#252733]">
                Create new ticket example
              </h2>
            </div>
            <button className="font-bold text-[11px] leading-[14px] text-white py-[5px] px-[12px] bg-[#29CC97] rounded-[8px]">
              New
            </button>
          </div>
          <div className="flex justify-between items-center py-[20px]">
            <div className="flex">
              <input
                className="w-[20px] h-[20px] rounded-[50%] cursor-pointer"
                type="checkbox"
              />
              <h2 className="ml-[16px] font-semibold text-[14px] leading-[20px] text-[#252733]">
                Update ticket report
              </h2>
            </div>
            <button className="font-bold text-[11px] leading-[14px] text-[#9FA2B4] py-[5px] px-[12px] bg-[#F0F1F7] rounded-[8px]">
              Default
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Overview;