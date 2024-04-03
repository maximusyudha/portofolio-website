import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

type Project = {
  id: number;
  image_url: string;
  project_name: string;
  description: string;
};

const dummyProjects = [
  {
    id: 1,
    image_url: "https://via.placeholder.com/400",
    project_name: "Project Title 1",
    description: "Description for Project 1",
  },
  {
    id: 2,
    image_url: "https://via.placeholder.com/400",
    project_name: "Project Title 2",
    description: "Description for Project 2",
  },
  {
    id: 3,
    image_url: "https://via.placeholder.com/400",
    project_name: "Project Title 3",
    description: "Description for Project 3",
  },
]

const ProjectContent = ({ dummyProjects }: { dummyProjects: Project[] }) => {
  return (
    <motion.div
      className="Welcome-box text-2xl text-white p-8 shadow-md"
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold mb-4 mt-6 text-center">My Project</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 md:p-16">
        {dummyProjects.map((item) => (
          <motion.div
            key={item.id}
            className="card-container"
            variants={slideInFromTop}
          >
            <div className="flex flex-col">
              <div className="flex-shrink-0 h-[200px] md:h-[400px] relative mb-4">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={item.image_url}
                  alt={item.project_name}
                />
              </div>
              <div className="flex-1 bg-white rounded-lg border p-4">
                <div className="mb-2">
                  <div className="text-lg font-semibold">
                    {item.project_name}
                  </div>
                </div>
                <div className="mb-4 text-sm text-gray-700">
                  {item.description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectContent;
