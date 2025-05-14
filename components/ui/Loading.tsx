"use client";
import Image from "next/image";
import React from "react";

const Loading = ({
  size = 40,
  isWhite = false,
  isLocal = false,
  isFullScreen = false,
}: {
  size?: number;
  isWhite?: boolean;
  isLocal?: boolean;
  isFullScreen?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-center ${
        isFullScreen ? "fixed inset-0 z-0" : isLocal ? "h-full" : "h-dvh"
      }`}
    >
      <Image
        src={"/three-dots.svg"}
        alt="loader"
        width={120}
        height={size}
        priority
        style={{
          width: size,
          height: "auto",
          filter: isWhite ? "invert(1)" : "none",
        }}
      />
    </div>
  );
};

export { Loading as GlobalLoading };
