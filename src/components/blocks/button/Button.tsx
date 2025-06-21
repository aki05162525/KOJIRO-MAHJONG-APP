import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "gray" | "blue" | "red" | "green";
  className?: string;
}

export default function Button({ color, className, ...props }: ButtonProps) {
  const baseClass = "rounded-md px-6 py-3 text-white";
  const colorClass =
    color === "gray"
      ? "bg-zinc-500 hover:bg-zinc-600"
      : color === "blue"
        ? "bg-sky-600 hover:bg-sky-700"
        : color === "red"
          ? "bg-red-600 hover:bg-red-700"
          : color === "green"
            ? "bg-green-600 hover:bg-green-700"
            : "";

  return (
    <button
      className={baseClass + " " + colorClass + " " + className}
      {...props}
    />
  );
}
