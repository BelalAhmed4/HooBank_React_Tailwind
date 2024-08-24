import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex items-center navbar justify-between py-6">
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`hover:text-secondary font-poppins text-[16px] font-normal cursor-pointer text-white ${
              index === navLinks.length ? "mr-0" : "mr-10"
            }`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="object-contain w-[28px] h-[28px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
          src={`${toggle ? close : menu}`}
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient mx-4 absolute top-20 right-0 rounded-xl my-2 min-w-[140px] sidebar`}>
          <ul className="flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins text-[16px] font-normal cursor-pointer text-white ${
                  index === navLinks.length ? "mr-0" : "mb-4"
                }`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
