import { AiFillDatabase, AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiCloudDownload, GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Image
        src="https://media.licdn.com/dms/image/D5635AQF4ZBdNuH09hg/profile-framedphoto-shrink_400_400/0/1689934163411?e=1690675200&v=beta&t=wv-4kzzOTWcvg2d4z3ebWiljYP3yeSxBYjLzAAt3CUg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Shashank</span> Malviya
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Lead Software Engineer
      </p>
      {/* Resume */}
      <a
        href="/assets/Shashank_Malviya_Lead_Software_Engineer.pdf"
        download="Shashank_Malviya_Lead_Software_Engineer.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiCloudDownload className="mr-2" /> <span>Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        {/* <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}
        <a target="_blank" href="https://www.linkedin.com/in/shashank-malviya-developer/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a target="_blank" href="https://github.com/Shanie1331">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
        <a target="_blank" href="https://stackoverflow.com/users/8406046/shashank-malviya">
          <AiFillDatabase className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Bengaluru, India </span>
        </div>
        <p className="my-2 "> shashankm.malviya@gmail.com </p>
        <a className="my-2" href="tel:8269876420"> 8269876420 </a>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:code.sumax@gmail.com")}
      >
        Email me
      </button>
      {/* <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        //TODO remove bg black
        Toggle Theme
      </button> */}
      
    </>
  );
};

export default Sidebar;
