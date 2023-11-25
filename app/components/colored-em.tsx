import { ComponentProps } from "react";

export default function ({ children }: ComponentProps<"span">) {
  return (
    <span className="relative mx-1">
      <span
        className="block absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md select-none"
        aria-hidden="true"
      ></span>
      <span className="relative font-semibold text-primary-foreground">
        {children}
      </span>
    </span>
  );
}
