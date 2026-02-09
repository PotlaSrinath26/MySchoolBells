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
    name: "ISB",
    src: "https://upload.wikimedia.org/wikipedia/hi/archive/d/d5/20170528202850%21Cbse-logo.png",
  },
  {
    name: "CAMBRIDGE",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbhHznrNoNQw6wCoxUCuIOmGNleo6yZjanA&s",
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
    name: "CBSE",
    src: "https://upload.wikimedia.org/wikipedia/hi/archive/d/d5/20170528202850%21Cbse-logo.png",
  },
  {
    name: "ICSE",
    src: "https://mycareersview.com/afile/mcv13824_ICSE.jpg",
  },
  {
    name: "Bihar",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seal_of_Bihar.svg/200px-Seal_of_Bihar.svg.png",
  },
  {
    name: "Uttar Pradesh",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/200px-Seal_of_Uttar_Pradesh.svg.png",
  },
  {
    name: "Maharashtra",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKgi4reKDNCoxtzjmKmhwJLS8pL5RDd7PcA&s",
  },
];

export default function StateLogosCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white/5 py-12 border-y border-white/5 backdrop-blur-sm relative mb-20">
      <div className="text-center mb-8">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Design for All States Curriculum and Other Boards
        </span>
        <h3 className="text-xl font-bold text-white mt-4 uppercase tracking-widest">
          All States of India
        </h3>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {/* Double the array for seamless infinite scroll */}
        {[...stateLogos, ...stateLogos].map((logo, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[120px] group grayscale opacity-50 dark:opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl p-3 shadow-lg mb-3 transition-transform hover:scale-110">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/2618/2618245.png"; // Fallback generic logo
                }}
              />
            </div>
            <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest text-center transition-colors">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
