import { Button } from "@material-tailwind/react";
import { Timer } from "lucide-react";

const Header = () => {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 flex flex-col md:flex-row justify-around items-center text-white space-y-4 md:space-y-0">
        {/* Left Side: Webinar Title */}
        <div className="text-center md:text-left">
          <p className="uppercase text-sm font-semibold tracking-wide">Webinar</p>
          <h1 className="text-lg font-bold">Hyper-personalization using GenAI</h1>
        </div>
  
        {/* Right Side: Date, Time, and Button */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          {/* Date */}
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 2.25v1.5M15.75 2.25v1.5M3 9.75h18M4.5 6.75h15a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 15.75v-9A2.25 2.25 0 014.5 6.75z"
              />
            </svg>
            <span>December 11, 2024</span>
          </div>
  
          {/* Time */}
          <div className="flex items-center space-x-2">
            <Timer className="w-5 h-5"/>
            <span>4:00 PM</span>
          </div>
  
          {/* Register Button */}
          <Button  className=" bg-transparent border border-white text-white px-4 py-2 font-semibold rounded hover:bg-blue-100 w-full md:w-auto">
            Register
          </Button>
        </div>
      </div>
    );
  };
  
  export default Header;
  