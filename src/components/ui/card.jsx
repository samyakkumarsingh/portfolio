function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-900/10 bg-white/60 backdrop-blur dark:border-slate-100/10 dark:bg-slate-950/20",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}
