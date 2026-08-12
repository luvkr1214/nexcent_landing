import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Centers content and applies consistent max-width + responsive
 * horizontal padding across every section.
 */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
