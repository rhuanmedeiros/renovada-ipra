"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    borderRadius?: string;
    children: React.ReactNode;
    as?: React.ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
  }
>(({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 4000,
  className,
  ...otherProps
}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "relative p-0.5 overflow-hidden transition-all duration-300 group",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* Animated border */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-opacity duration-300",
          borderClassName
        )}
        style={{
          borderRadius: borderRadius,
          background: `conic-gradient(from 0deg, transparent 20%, currentColor 40%, transparent 60%, currentColor 80%, transparent 100%)`,
          animation: `spin ${duration}ms linear infinite`,
        }}
      />
      
      {/* Button content */}
      <div
        className={cn(
          "relative flex items-center justify-center w-full h-full font-medium transition-all duration-300",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} - 2px)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
});

Button.displayName = "MovingBorder";