import React from "react";
import Header from "../components/Header";
import { FilterIcon, SortIcon } from "../assets/Images/Icon";
import TicketCards from "../components/TicketCards";

function Tickets() {
  return (
    <section className="h-screen overflow-y-auto">
      <Header title={"Tickets"} />
      <div className="bg-white border rounded-[8px] mx-[30px]">
        <div className="px-[36px] pt-[32px] mb-[48px] flex items-center justify-between">
          <h1 className="text-[19px] font-bold leading-[23.85px] tracking-[0.4px] text-dark">
            All tickets
          </h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <SortIcon />
              <p className="leading-[20px] font-semibold text-[14px] text-dark-100">Sort</p>
            </div>
            <div className="flex items-center gap-2">
              <FilterIcon />
              <p className="leading-[20px] font-semibold text-[14px] text-dark-100">Filter</p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-around border-b border-[#DFE0EB] pb-[12px] font-bold text-[14px] leading-[17.57px] text-[#9FA2B4]">
          <p className="w-[440px] text-[14px] ">Ticket details</p>
          <p className="w-[208px] text-[14px] ">Customer name</p>
          <p className="w-[140px] text-[14px] ">Date</p>
          <p className="w-[104px] text-[14px] ">Priority</p>
        </div>
        
        <div className="flex flex-col">
          <TicketCards DetailsFirst={'Contact Email not Linked'} DetailsSecond={'Updated 1 day ago'} CustomerFirst={'Tom Cruise'} CustomerSecond={'on 24.05.2019'} DataFirst={'May 26, 2019'} DataSecond={'6:30 PM'} Btn={'HIGH'} />
          <TicketCards DetailsFirst={'Adding Images to Featured Posts'} DetailsSecond={'Updated 1 day ago'} CustomerFirst={'Matt Damon'} CustomerSecond={'on 24.05.2019'} DataFirst={'May 26, 2019'} DataSecond={'8:00 AM'} Btn={'LOW'} extraStyle={`bg-gren-500`}/>
          <TicketCards DetailsFirst={'When will I be charged this month?'} DetailsSecond={'Updated 1 day ago'} CustomerFirst={'Robert Downey'} CustomerSecond={'on 24.05.2019'} DataFirst={'May 26, 2019'} DataSecond={'7:30 PM'} Btn={'HIGH'}/>
          <TicketCards DetailsFirst={'Payment not going through'} DetailsSecond={'Updated 2 days ago'} CustomerFirst={'Christian Bale'} CustomerSecond={'on 24.05.2019'} DataFirst={'May 25, 2019'} DataSecond={'5:00 PM'} Btn={'NORMAL'}/>
          <TicketCards DetailsFirst={'Unable to add replies'} DetailsSecond={'Updated 2 days ago'} CustomerFirst={'Henry Cavil'} CustomerSecond={'on 24.05.2019'} DataFirst={'May 25, 2019'} DataSecond={'4:00 PM'} Btn={'HIGH'}/>
          <TicketCards DetailsFirst={'Downtime since last week'} DetailsSecond={'Updated 3 days ago'} CustomerFirst={'Chris Evans'} CustomerSecond={'on 23.05.2019'} DataFirst={'May 25, 2019'} DataSecond={'2:00 PM'} Btn={'NORMAL'}/>
          <TicketCards DetailsFirst={'Referral Bonus'} DetailsSecond={'Updated 4 day ago'} CustomerFirst={'Sam Smith'} CustomerSecond={'on 22.05.2019'} DataFirst={'May 25, 2019'} DataSecond={'11:30 AM'} Btn={'LOW'}/>
          <TicketCards DetailsFirst={'How do I change my password?'} DetailsSecond={'Updated 6 days ago'} CustomerFirst={'Steve Rogers'} CustomerSecond={'on 21.05.2019'} DataFirst={'May 24, 2019'} DataSecond={'1:00 PM'} Btn={'NORMAL'}/>
        </div>
      </div>
    </section>
  );
}

export default Tickets;
