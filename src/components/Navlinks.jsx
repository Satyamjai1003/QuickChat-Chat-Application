import chat from '../assets/chat.png';
import { RiNotificationLine, RiArrowDownSLine} from "react-icons/ri";
import { PiSignOutFill } from "react-icons/pi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../utils/ThemeContext";
import { RiFolderUserLine } from "react-icons/ri";


const Navlinks = ({unreadCount})=>{
    const { isDarkMode, toggleTheme } = useTheme();
    
    const handleLogout = async()=>{
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <section className={`sticky lg:static top-0 flex items-center lg:items-start lg: justify-start h-[7vh] lg:h-[100vh] w-[100%] lg:w-[150px] py-8 lg:py-0 ${isDarkMode?"bg-[#070F2B]": "bg-[#3F52E3]"}`}>
            <main className="flex lg:flex-col items-center lg:gap-10 justify-between lg:px-0 w-[100%]">
                <div className="flex items-start justify-center lg: border-b border-b-1 border-[#ffffffb9] lg:w-[100%] p-4">
                    <span className="flex item-center justify-center">
                        <img src={chat} className="w-[56px] h-[52px] object-contain bg-white rounded-lg p-2" alt=""/>
                    </span>
                </div>
                
                <ul className="flex lg:flex-col flex-row items-center gap-7 md:gap-10 px-2 md:px-0">

                    <li>
                        <button className="lg:text-[28px] text-[22px] cursor-pointer">
                            <div className="flex justify-center">
                                <RiNotificationLine color="#fff"/>
                                <p className="text-gray-300 text-sm">{`(${unreadCount})`}</p>
                            </div>
                        </button>
                    </li>

                    <li>
                        <button onClick={toggleTheme} className="lg:text-[28px] text-[22px] cursor-pointer">
                            <MdOutlineLightMode color="#fff"/>
                        </button>
                    </li>

                    <li>
                        <button onClick={handleLogout} className="lg:text-[28px] text-[22px] cursor-pointer">
                            <PiSignOutFill color="#fff"/>
                        </button>
                    </li>
                    
                </ul>

                <button className="block lg:hidden lg:text-[28px] text-[22px] cursor-pointer">
                    <RiArrowDownSLine color="#fff"/>
                </button>
            </main>
        </section>
    )
}

export default Navlinks;


// import chat from "../assets/chat.png";
// import { RiNotificationLine, RiArrowDownSLine } from "react-icons/ri";
// import { PiSignOutFill } from "react-icons/pi";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";
// import { MdOutlineLightMode } from "react-icons/md";
// import { useTheme } from "../utils/ThemeContext";
// import { RiFolderUserLine } from "react-icons/ri";

// const Navlinks = ({ unreadCount }) => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <section
//       className={`sticky lg:static top-0 flex items-center lg:items-start lg:justify-start h-[7vh] lg:h-[100vh] w-full lg:w-[200px] p-4 lg:p-6 transition-all duration-300 ${
//         isDarkMode
//           ? "bg-gradient-to-br from-[#070F2B] to-[#1A252F]"
//           : "bg-gradient-to-br from-[#3F52E3] to-[#6B78E6]"
//       }`}
//     >
//       <main className="flex lg:flex-col items-center w-full justify-between lg:justify-start lg:gap-12">
//         {/* Logo Section */}
//         <div className="flex items-center justify-center lg:border-b lg:border-b-1 lg:border-[#ffffffb9] lg:w-full p-2 lg:p-4 transition-all duration-300 hover:scale-105">
//           <span className="flex items-center justify-center">
//             <img
//               src={chat}
//               className="w-[56px] h-[52px] object-contain bg-white rounded-lg p-2 shadow-md transition-all duration-300 hover:shadow-lg"
//               alt="Chat Logo"
//             />
//           </span>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex lg:flex-col flex-row items-center gap-6 lg:gap-8 px-2 lg:px-0 w-full">
//           <li className="w-full">
//             <button
//               className="flex items-center justify-center lg:justify-start w-full text-[22px] lg:text-[28px] text-white cursor-pointer py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-[#ffffff1a] transition-all duration-300 hover:shadow-md"
//             >
//               <RiNotificationLine className="mr-2" />
//               <span className="hidden lg:inline text-sm font-medium">Notifications</span>
//               {unreadCount > 0 && (
//                 <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {unreadCount}
//                 </span>
//               )}
//             </button>
//           </li>

//           <li className="w-full">
//             <button
//               onClick={toggleTheme}
//               className="flex items-center justify-center lg:justify-start w-full text-[22px] lg:text-[28px] text-white cursor-pointer py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-[#ffffff1a] transition-all duration-300 hover:shadow-md"
//             >
//               <MdOutlineLightMode className="mr-2" />
//               <span className="hidden lg:inline text-sm font-medium">Toggle Theme</span>
//             </button>
//           </li>

//           <li className="w-full">
//             <button
//               onClick={handleLogout}
//               className="flex items-center justify-center lg:justify-start w-full text-[22px] lg:text-[28px] text-white cursor-pointer py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:bg-[#ffffff1a] transition-all duration-300 hover:shadow-md"
//             >
//               <PiSignOutFill className="mr-2" />
//               <span className="hidden lg:inline text-sm font-medium">Logout</span>
//             </button>
//           </li>

//           <li className="w-full lg:hidden">
//             <button
//               className="flex items-center justify-center w-full text-[22px] text-white cursor-pointer py-2 px-4 rounded-lg hover:bg-[#ffffff1a] transition-all duration-300"
//             >
//               <RiFolderUserLine className="mr-2" />
//               <span className="text-sm font-medium">Profile</span>
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Dropdown Toggle */}
//         <button className="lg:hidden text-[22px] text-white cursor-pointer p-2 rounded-full hover:bg-[#ffffff1a] transition-all duration-300">
//           <RiArrowDownSLine />
//         </button>
//       </main>
//     </section>
//   );
// };

// export default Navlinks;