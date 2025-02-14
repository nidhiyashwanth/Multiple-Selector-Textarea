import React from "react";
import ImageBadge from "../extensions/ImageBadge";

const ImageBadgeDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Basic usage */}
      <div className="flex gap-2">
        <ImageBadge
          imageSrc="https://github.com/shadcn.png"
          imageAlt="User avatar"
        >
          @shadcn
        </ImageBadge>
      </div>

      {/* Different variants */}
      <div className="flex gap-2">
        <ImageBadge
          variant="default"
          imageSrc="https://github.com/shadcn.png"
          imageAlt="User avatar"
        >
          Default
        </ImageBadge>
        <ImageBadge
          variant="secondary"
          imageSrc="https://github.com/shadcn.png"
          imageAlt="User avatar"
        >
          Secondary
        </ImageBadge>
        <ImageBadge
          variant="destructive"
          imageSrc="https://github.com/shadcn.png"
          imageAlt="User avatar"
        >
          Destructive
        </ImageBadge>
      </div>

      {/* Image positions */}
      <div className="flex gap-2">
        <ImageBadge
          imageSrc="https://github.com/shadcn.png"
          imageAlt="User avatar"
          imagePosition="left"
        >
          Image Left
        </ImageBadge>
        <ImageBadge
          imageSrc="https://github.com/shadcn.png"
          imageAlt="User avatar"
          imagePosition="right"
        >
          Image Right
        </ImageBadge>
      </div>

      {/* Custom sizes */}
      <div className="flex gap-2">
        <ImageBadge
          imageSrc="https://github.com/shadcn.png"
          imageAlt="User avatar"
          imageWidth={24}
          imageHeight={24}
        >
          Larger Image
        </ImageBadge>
      </div>
    </div>
  );
};

export default ImageBadgeDemo;
