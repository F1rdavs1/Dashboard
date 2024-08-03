import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Overview,
  Tickets,
  Ideas,
  Contacts,
  Agents,
  Articles,
  Settings,
  Subscription,
  NotFound,
  NewTicket,
  AboutTicket,
} from "../pages";

function CustomRoutes() {
  return (
    <div className="w-full h-[100vh] bg-[#F7F8FC]">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="tickets" element={<Tickets />}>
          <Route path="newTicket" element={<NewTicket />} />
          <Route path="aboutTicket" element={<AboutTicket />} />
        </Route>
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<Subscription />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default CustomRoutes;
