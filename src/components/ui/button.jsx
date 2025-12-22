function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  className,
  variant = "default",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline:
      "border border-slate-900/15 bg-transparent text-inherit hover:bg-slate-900/5 dark:border-slate-100/15 dark:hover:bg-slate-100/5"
  };

  return (
    <button
      type={type}
      className={cn(base, variants[variant] ?? variants.default, className)}
      {...props}
    />
  );
}
