// // import { resourcesLinks,platformLinks,communityLinks } from "../../constants";


// // const Footer = ()=>{
// //     return(
// //         <footer className="mt-20 border-t py-10 border-neutral-700 px-10 text-center">
// //             <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
// //                 <div>
// //                     <h3 className="text-md font-semibold mb-4 text-white">Resources</h3>
// //                     <ul className="space-y-2">
// //                         {resourcesLinks.map((Link,index)=>(
// //                             <li key={index}>
// //                                 <a className="text-neutral-300 hover:text-white" href={Link.href}>{Link.text}</a>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>

// //                 <div>
// //                     <h3 className="text-md font-semibold mb-4 text-white">Community</h3>
// //                     <ul className="space-y-2">
// //                         {communityLinks.map((Link,index)=>(
// //                             <li key={index}>
// //                                 <a className="text-neutral-300 hover:text-white" href={Link.href}>{Link.text}</a>
// //                             </li>
// //                         ))}
// //                     </ul>
                    
// //                  </div>

// //                  <div>
// //                     <h3 className="text-md font-semibold mb-4 text-white">Platform</h3>
// //                     <ul className="space-y-2">
// //                         {platformLinks.map((Link,index)=>(
// //                             <li key={index}>
// //                                 <a className="text-neutral-300 hover:text-white" href={Link.href}>{Link.text}</a>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>

// //             </div>
            
// //         </footer>
// //     );
// // }

// // export default Footer;





// import { resourcesLinks, platformLinks, communityLinks } from "../../constants";
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//     const socialLinks = [
//         { href: "https://twitter.com", icon: <FaTwitter size={24} /> },
//         { href: "https://facebook.com", icon: <FaFacebookF size={24} /> },
//         { href: "https://instagram.com", icon: <FaInstagram size={24} /> },
//         { href: "https://linkedin.com", icon: <FaLinkedinIn size={24} /> },
//     ];

//     return (
//         <footer className="mt-20 border-t py-10 border-neutral-700 px-10 bg-neutral-900">
//             <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div>
//                     <h3 className="text-md font-semibold mb-4 text-white">Resources</h3>
//                     <ul className="space-y-2">
//                         {resourcesLinks.map((link, index) => (
//                             <li key={index}>
//                                 <a className="text-neutral-300 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div>
//                     <h3 className="text-md font-semibold mb-4 text-white">Community</h3>
//                     <ul className="space-y-2">
//                         {communityLinks.map((link, index) => (
//                             <li key={index}>
//                                 <a className="text-neutral-300 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div>
//                     <h3 className="text-md font-semibold mb-4 text-white">Platform</h3>
//                     <ul className="space-y-2">
//                         {platformLinks.map((link, index) => (
//                             <li key={index}>
//                                 <a className="text-neutral-300 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             <div className="mt-8 border-t border-neutral-700 pt-8 flex flex-col items-center">
//                 <h3 className="text-md font-semibold mb-4 text-white">Follow Us</h3>
//                 <div className="flex space-x-6">
//                     {socialLinks.map((link, index) => (
//                         <a key={index} href={link.href} className="text-neutral-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
//                             {link.icon}
//                         </a>
//                     ))}
//                 </div>
//             </div>

//             <p className="mt-8 text-center text-neutral-300 text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
//         </footer>
//     );
// }

// export default Footer;


import { resourcesLinks, platformLinks, communityLinks } from "../../constants";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { href: "https://twitter.com", icon: <FaTwitter size={24} /> },
        { href: "https://facebook.com", icon: <FaFacebookF size={24} /> },
        { href: "https://instagram.com", icon: <FaInstagram size={24} /> },
        { href: "https://linkedin.com", icon: <FaLinkedinIn size={24} /> },
    ];

    return (
        <footer className="mt-20 border-t py-10 border-neutral-700 px-10" style={{ backgroundColor: '#1A252F' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="px-40">
                    <h3 className="text-md font-semibold mb-4 text-white">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="px-40">
                    <h3 className="text-md font-semibold mb-4 text-white">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="px-40">
                    <h3 className="text-md font-semibold mb-4 text-white">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-neutral-700 pt-6 flex flex-col items-center">
                <h3 className="text-md font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-6">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} className="text-neutral-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            <p className="mt-6 text-center text-neutral-300 text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;