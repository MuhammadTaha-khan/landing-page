import React from "react";
import fundracing1 from "../../public/fundracing1.png";
import fundracing2 from "../../public/fundracing2.png";
import fundracing from "../../public/fundracing.png";
import Image, { StaticImageData } from "next/image";
// import { FiExternalLink } from "react-icons/fi";
// import Link from "next/link";

interface Project {
  id: number;
  mintitle: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  avgimage: string | StaticImageData;
}

const projects: Project[] = [
  {
    id: 1,
    mintitle: "Fundraising at Run for Fund ",
    title: "Fundraising Made Easy",
    description:
      "Share your challenge on social media, track donations, and thank your supporters directly through the app.",
    imageUrl: fundracing1,
    avgimage: fundracing,
  },
  {
    id: 2,
    mintitle: "Run for Fund Testimonials",
    title: "Run for Fund made it so easy to stay motivated!",
    description:
      "and raise money for a cause I care about. The challenges were fun and engaging, and I felt a sense of accomplishment with every step I took. I loved every minute of it!",
    imageUrl: fundracing2,
    avgimage: fundracing,
  },
];

const ProjectSection = () => {
  return (
    <section id="Fundraising">
      <div className="  pt-20 px-6 lg:px-24">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`myproject flex flex-col gap-10 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center mb-12 lg:mb-14`}
          >
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg  w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col ">
              {/* <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p> */}
              <div className="max-w-md mx-auto p-6 bg-white ">
                <div className="text-left">
                  <div className=" text-sm mb-8">
                    <span className="py-1 px-3  border-2 border-black rounded-full">
                      {project.mintitle}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-orange-500 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-8">{project.description}</p>
                  <div className="flex items-center">
                    <Image
                      src={project.avgimage} // replace this with the correct image path
                      alt="Lara Croft"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-bold text-gray-800">
                        Lara Croft
                      </p>
                      <p className="text-sm text-gray-500">Weekend Warrior</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h3 className="text-5xl font-bold mb-6"> {`0${index + 1}`}</h3> */}
              {/* <Link href={`/project/${project.id}`}>
                <FiExternalLink className="mt-3 text-lg cursor-pointer text-white " />
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
