import { AnimatedShinyText } from "./animated-shiny-text";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden relative group";

  const variants = {
    primary:
      "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-rose-600 dark:hover:bg-rose-700 shadow-lg hover:shadow-xl focus:ring-indigo-500",
    secondary:
      "border-transparent text-indigo-900 bg-indigo-50 hover:bg-indigo-100 dark:text-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-950/50 shadow-sm focus:ring-indigo-500",
    outline:
      "border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-950/20 focus:ring-indigo-500",
    white:
      "border-transparent text-slate-900 bg-white hover:bg-slate-50 dark:bg-white dark:text-indigo-950 shadow-md focus:ring-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <AnimatedShinyText className="text-current dark:via-white/50 via-white/50">
        {children}
      </AnimatedShinyText>
    </button>
  );
}
