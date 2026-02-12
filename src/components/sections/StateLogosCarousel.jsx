import React from "react";

const stateLogos = [
  {
    name: "CBSE",
    src: "https://upload.wikimedia.org/wikipedia/hi/archive/d/d5/20170528202850%21Cbse-logo.png",
  },
  {
    name: "ICSE",
    src: "https://mycareersview.com/afile/mcv13824_ICSE.jpg",
  },
  {
    name: "CAMBRIDGE",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbhHznrNoNQw6wCoxUCuIOmGNleo6yZjanA&s",
  },
  {
    name: "IB WORLD",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6SEyY9Dn2uHERkWcEh69_MD1w-FsjdwzNw&s",
  },
  {
    name: "Andhra Pradesh",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem_of_Andhra_Pradesh.svg/200px-Emblem_of_Andhra_Pradesh.svg.png",
  },
  {
    name: "Delhi",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqW9yQ2eRlnANRC2q_qIj8zPkbVbIHY0iBA&s",
  },
  {
    name: "Kerala",
    src: "https://media.edexlive.com/edexlive%2Fimport%2F2018%2F12%2F13%2Foriginal%2FDepartment-of-Education-Kerala-Logo.png?w=480&auto=format%2Ccompress&fit=max",
  },
  {
    name: "Karnataka",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscpFSJ2ry03ET4CqhAWWiEFqRzj9oe7BBTQ&s",
  },
  {
    name: "Tamil Nadu",
    src: "https://nlcbharat.org/wp-content/uploads/2024/02/Tamil-Nadu.png",
  },
  {
    name: "Telangana",
    src: "https://images.deccanchronicle.com/dc-Cover-j4f1vs6naaks7ccjndu0en3bp4-20161127012629.Medi.jpeg",
  },
  {
    name: "Bihar",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seal_of_Bihar.svg/200px-Seal_of_Bihar.svg.png",
  },
];

export default function StateLogosCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white/5 py-8 sm:py-12 border-y border-white/5 backdrop-blur-sm relative mb-20">
      <div className="text-center mb-6 sm:mb-8 px-4">
        <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Design for All States Curriculum and Other Boards
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-2 sm:mt-4 uppercase tracking-widest">
          All States of India
        </h3>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="flex gap-8 sm:gap-16 animate-marquee whitespace-nowrap">
        {/* Double the array for seamless infinite scroll */}
        {[...stateLogos, ...stateLogos].map((logo, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] group transition-all duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-md group-hover:shadow-xl dark:shadow-indigo-500/10 mb-2 sm:mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain dark:brightness-110 transition-all group-hover:brightness-125"
                onError={(e) => {
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/2618/2618245.png"; // Fallback generic logo
                }}
              />
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-center transition-colors group-hover:text-indigo-500">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
