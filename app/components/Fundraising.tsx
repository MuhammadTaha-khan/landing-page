import React from "react";
import fundracing1 from "../../public/fundracing1.png";
import fundracing2 from "../../public/fundracing2.png";
import fundracing from "../../public/fundracing.png";
import sliderimg from "../../public/sliderimg.png";
import Image, { StaticImageData } from "next/image";
// import { FiExternalLink } from "react-icons/fi";
// import Link from "next/link";

interface Auth {
  avgimage: string | StaticImageData;
  iconimg: string | StaticImageData;
  authtitle: string;
  authdescription: string;
}

interface Project {
  id: number;
  mintitle: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  auth: Auth | null;
}

const projects: Project[] = [
  {
    id: 1,
    mintitle: "Fundraising at Run for Fund ",
    title: "Fundraising Made Easy",
    description:
      "Share your challenge on social media, track donations, and thank your supporters directly through the app.",
    imageUrl: fundracing1,
    auth: null
  },
  {
    id: 2,
    mintitle: "Run for Fund Testimonials",
    title: "Run for Fund made it so easy to stay motivated!",
    description:
      "and raise money for a cause I care about. The challenges were fun and engaging, and I felt a sense of accomplishment with every step I took. I loved every minute of it!",
    imageUrl: fundracing2,
    auth: {
      avgimage: fundracing,
      authtitle:"Lara Croft",
      authdescription:"Weekend Warrior",
      iconimg: sliderimg
    }
  },
];

const ProjectSection = () => {
  return (
    <section id="Fundraising">
      <div className="  pt-20 px-6 lg:px-24" id="fundraising">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`myproject flex flex-col gap-10 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center mb-12 lg:mb-20`}
          >
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg  w-full object-cover"
              />
              {project.auth && (
                <div className="mt-10">
                  <Image
                    src={project.auth.iconimg}
                    alt={project.auth.authtitle}
                    className="flex w-28 h-7 pt-3"
                  />
                </div>
              )}
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col ">
              <div className="max-w-md mx-auto p-6 bg-white">
                <div className="text-left lg:w-11/12">
                  <div className=" text-sm mb-8">
                    <span className="py-1 px-3  border-2  border-black rounded-full ">
                      {project.mintitle}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-orange-500 pb-4 pt-3 font-tomorrow tracking-wide leading-10">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 mb-8 pt-5 leading-8">{project.description}</p>
                  {project.auth && (<div className="flex items-center">
                    <Image
                      src={project.auth.avgimage} // replace this with the correct image path
                      alt="Lara Croft"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-bold text-gray-800 font-tomorrow">
                        {project.auth.authtitle}
                      </p>
                      <p className="text-sm text-gray-500">{project.auth.authdescription}</p>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

















// import React from "react";
// import fundracing1 from "../../public/fundracing1.png";
// import fundracing2 from "../../public/fundracing2.png";
// import fundracing from "../../public/fundracing.png";
// import sliderimg from "../../public/sliderimg.png";
// import Image, { StaticImageData } from "next/image";

// interface Auth {
//   avgimage: string | StaticImageData;
//   iconimg: string | StaticImageData;
//   authtitle: string;
//   authdescription: string;
// }

// interface Project {
//   id: number;
//   mintitle: string;
//   title: string;
//   description: string;
//   imageUrl: string | StaticImageData;
//   auth: Auth | null;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     mintitle: "Fundraising at Run for Fund ",
//     title: "Fundraising Made Easy",
//     description:
//       "Share your challenge on social media, track donations, and thank your supporters directly through the app.",
//     imageUrl: fundracing1,
//     auth: null,
//   },
//   {
//     id: 2,
//     mintitle: "Run for Fund Testimonials",
//     title: "Run for Fund made it so easy to stay motivated!",
//     description:
//       "and raise money for a cause I care about. The challenges were fun and engaging, and I felt a sense of accomplishment with every step I took. I loved every minute of it!",
//     imageUrl: fundracing2,
//     auth: {
//       avgimage: fundracing,
//       authtitle: "Lara Croft",
//       authdescription: "Weekend Warrior",
//       iconimg: sliderimg,
//     },
//   },
// ];

// const ProjectSection = () => {
//   return (
//     <section id="Fundraising ">
//       <div className="pt-20 px-6 lg:px-24" id="fundraising">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             className={`myproject flex flex-col gap-10 ${
//               index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//             } items-center mb-12 lg:mb-20`}
//           >
//             {/* Main Image and iconimg container */}
//             <div className="lg:w-1/2 mb-6 lg:mb-0 flex flex-col items-center">
//               {/* Main image */}
//               <Image
//                 src={project.imageUrl}
//                 alt={project.title}
//                 className="rounded-lg w-full object-cover"
//               />
//               {/* Icon image below */}
//               {project.auth && (
//                 <div className="mt-4">
//                   <Image
//                     src={project.auth.iconimg}
//                     alt={project.auth.authtitle}
//                     className="flex w-full h-12 pt-8"
//                   />
//                 </div>
//               )}
//             </div>
//             <div className="lg:w-1/2 px-4 flex flex-col">
//               <div className="max-w-md mx-auto p-6 bg-white">
//                 <div className="text-left">
//                   <div className="text-sm mb-8">
//                     <span className="py-1 px-3 border-2 border-black rounded-full">
//                       {project.mintitle}
//                     </span>
//                   </div>
//                   <h2 className="text-2xl font-extrabold text-orange-500 mb-4 font-tomorrow">
//                     {project.title}
//                   </h2>
//                   <p className="text-gray-500 mb-8">{project.description}</p>

//                   {project.auth && (
//                     <div className="flex items-center">
//                       <Image
//                         src={project.auth.avgimage}
//                         alt={project.auth.authtitle}
//                         className="w-12 h-12 rounded-full"
//                       />
//                       <div className="ml-4">
//                         <p className="text-sm font-bold text-gray-800 font-tomorrow">
//                           {project.auth.authtitle}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {project.auth.authdescription}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;
