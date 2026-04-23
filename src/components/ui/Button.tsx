import Link from "next/link";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
} & ComponentPropsWithoutRef<"button">;

const styles = {
  base: "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50",
  primary:
    "bg-teal-600 text-white shadow-lg shadow-teal-600/20 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/25 active:translate-y-0",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:translate-y-0",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(styles.base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
