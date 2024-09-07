import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <div className="w-[100%] hidden lg:flex flex-col h-full overflow-auto">
      <NavLink
        to={"/dashboard/admin"}
        className="text-xl text-emerald-500 font-bold mb-4 border-b-4 w-fit"
      >
        ऐडमिनि डैशबोर्ड
      </NavLink>
      <div className="flex flex-col gap-4">
        <NavLink
          to={"/dashboard/admin/createCategory"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          विभिन्न ऋतुएँ
        </NavLink>
        <NavLink
          to={"/dashboard/admin/createCrop"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          फसल
        </NavLink>
        <NavLink
          to={"/dashboard/admin/crops"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          सभी फसलें
        </NavLink>
        <NavLink
          to={"/dashboard/admin/news"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          समाचार
        </NavLink>
        <NavLink
          to={"/dashboard/admin/organicFerti"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          जैविक खाद
        </NavLink>
        <NavLink
          to={"/dashboard/admin/greenhouse"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          ग्रीन हाउस
        </NavLink>
        <NavLink
          to={"/dashboard/admin/stubble"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          पराली
        </NavLink>
        <NavLink
          to={"/dashboard/admin/seed-store"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          बीज भंडारित करें
        </NavLink>
        <NavLink
          to={"/dashboard/admin/soil-testing"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          मिट्टी परीक्षण
        </NavLink>
        <NavLink
          to={"/dashboard/admin/advance-eqp"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center p-3 text-[14px] gap-4 bg-emerald-500 text-white border rounded-md "
              : "flex items-center font-medium p-3 text-[14px] gap-4 hover:shadow-sm bg- border rounded-md"
          }
        >
          {" "}
          उन्नत उपकरण
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
