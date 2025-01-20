import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  // Handle cases when ProjectLink is empty
  // const handleLiveDemo = (e) => {
  //   if (!ProjectLink) {
  //     console.log("ProjectLink is empty");
  //     e.preventDefault();
  //     alert("Live demo link is not available");
  //   }
  // };

  const handleDetails = (e) => {
    if (!id) {
      console.log("ID is empty");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-black to-gray-900 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-gray-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg w-full h-48">
            {" "}
            {/* Added fixed height */}
            <img
              src={Img}
              alt={Title}
              loading="lazy" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
            />
          </div>

          <div className="mt-4 space-y-">
            <h3
              className="text-xl font-semibold bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent"
              style={{ height: "65px" }}
            >
              {Title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>

            <div className="pt-4 flex justify-end">
              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">
                  Details Not Available
                </span>
              )}
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-gray-500 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
