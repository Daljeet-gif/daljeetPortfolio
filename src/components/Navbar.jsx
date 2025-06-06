import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);

  const navitems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Project" },
    { id: 4, text: "Contact" },
  ];
  return (
    <div className="max-w-screen-3xl  conatiner mx-auto h-16 px-4 fixed shadow-md  left-0 top-0 right-0 z-50  bg-white dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex justify-evenly items-center h-16">
        <div className="flex space-x-2 ">
          <h1 className="font-semibold  text-xl cursor-pointer dark:text-white hover:text-green-300 ">
            Daljeet{" "}
            <span className="text-green-300 text-2xl hover:text-black">.</span>{" "}
            <p className="text-sm dark:hover:text-green-300">Web developer</p>{" "}
          </h1>
        </div>
        <div>
          <ul className="hidden   md:flex space-x-4 dark:text-white">
            {navitems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-90 duration-200 cursor-pointer relative text-black-400 hover:text-green-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-300 hover:after:w-full after:transition-all after:duration-300"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" ">
          <label class="inline-flex items-center relative">
            <input
              class="peer hidden"
              id="toggle"
              type="checkbox"
              onChange={toggleTheme}
            />
            <div class="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
            <svg
              height="0"
              width="100"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
            >
              <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
            </svg>
            <svg
              height="512"
              width="512"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
            >
              <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
            </svg>
          </label>
        </div>

        <div className="md:hidden  pr-4" onClick={() => setMenu(!menu)}>
          {menu ? <RxCross2 size={24}></RxCross2> : <IoMenu size={24}></IoMenu>}
        </div>
      </div>

      {menu && (
        <div className="bg-white  dark:bg-gray-800 text-white dark:border-gray-700">
          <ul className="md:hidden flex flex-col items-center  text-xl justify-center h-screen space-y-4 ">
            {navitems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-150 duration-200 font-semibold cursor-pointer"
              >
                <Link
                  to={text}
                  onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

{
}
