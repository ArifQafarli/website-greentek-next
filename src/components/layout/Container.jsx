
"use client";

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1700px]  sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
