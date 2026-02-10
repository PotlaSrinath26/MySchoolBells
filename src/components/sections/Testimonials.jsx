import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Switching to My School Bells was the single best infrastructure decision we made this year. The automated scheduling saved our admin staff hours of work every single week.",
      name: "Dr. Anjali Gupta",
      designation: "Principal, Lotus Valley International",
      src: "https://t3.ftcdn.net/jpg/15/27/94/76/360_F_1527947603_hmwulE1F3mpgS7V6Z6ltclsYYP24Uqme.jpg", // Using a professional woman image as a placeholder for the principal
    },
    {
      quote:
        "The communication module has bridged the gap between parents and teachers seamlessly. Real-time updates have made a huge difference in parent engagement.",
      name: "Mr. Rajesh Kumar",
      designation: "Director, Greenfields Public School",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      quote:
        "Managing attendance and fees used to be a nightmare. With My School Bells, everything is automated, accurate, and incredibly easy to use.",
      name: "Mrs. Sarah",
      designation: "Administrator, St. Mary's High School",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
  ];
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
         My School Bells <span className="text-orange-500">Advantage</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
         School Bells empowers educators and administrators to lead their campuses with confidence, clarity, and calm—so every school day runs smoothly and purposefully.
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
