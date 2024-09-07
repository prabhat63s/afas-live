import React from "react";
import { Link, NavLink } from "react-router-dom";
import { company, contact, legal, social } from "../../data/Data";
import logo from "../../assets/favicon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="z-50 py-10 flex flex-col bg-[#1e1e1e] shadow-lg text-white">
      <div className="w-[90%] lg:w-[85%] flex flex-col lg:flex-row gap-8 lg:gap-12 mx-auto">
        <div className="flex flex-col space-y-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <img className="h-10 w-10" src={logo} alt="Your Company" />

            <h1 className="font-extrabold font-serif flex flex-col text-xl">
              अपनी फसल{" "}
              <span className=" text-emerald-500 ml-6 -mt-1.5">
                अपनी सुरक्षा
              </span>
            </h1>
          </NavLink>

          <p className="text-sm md:text-base">
            © {currentYear} <span>अपनी फसल अपनी सुरक्षा</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12">
          <div className="flex-1 lg:border-l border-gray-600 lg:pl-12">
            <h1 className="text-emerald-500 text-lg lg:text-xl">बारे में</h1>
            {company.map(({ to, title }) => (
              <NavLink
                to={to}
                key={title}
                className="my-2 flex text-sm md:text-base"
              >
                {title}
              </NavLink>
            ))}
          </div>

          <div className="flex-1 lg:border-l border-gray-600 lg:pl-12">
            <h1 className="text-emerald-500 text-lg lg:text-xl">संपर्क करें</h1>
            {contact.map(({ to, title }) => (
              <NavLink
                to={to}
                key={title}
                className="my-2 flex text-sm md:text-base"
              >
                {title}
              </NavLink>
            ))}
          </div>

          <div className="flex-1 lg:border-l border-gray-600 lg:pl-12">
            <h1 className="text-emerald-500 text-lg lg:text-xl">कानूनी</h1>
            {legal.map(({ to, id, title }) => (
              <NavLink
                to={to}
                key={id}
                id={id}
                className="my-2 flex text-sm md:text-base"
              >
                {title}
              </NavLink>
            ))}
          </div>

          <div className="flex-1 lg:border-l border-gray-600 lg:pl-12">
            <h1 className="text-emerald-500 text-lg lg:text-xl">
              हमारे साथ जुड़ें
            </h1>
            <div className="flex flex-wrap gap-4">
              {social.map((s) => (
                <Link to={s.to} key={s.id} target="_blank" className="text-xl">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
