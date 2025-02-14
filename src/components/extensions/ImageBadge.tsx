import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ImageBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The source URL for the image
   */
  imageSrc?: string;
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  /**
   * Position of the image relative to the text
   * @default "left"
   */
  imagePosition?: "left" | "right";
  /**
   * Custom className for the image
   */
  imageClassName?: string;
  /**
   * Width of the image in pixels
   * @default 16
   */
  imageWidth?: number;
  /**
   * Height of the image in pixels
   * @default 16
   */
  imageHeight?: number;
  /**
   * Whether to make the image rounded
   * @default true
   */
  imageRounded?: boolean;
  /**
   * Variant of the badge
   */
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const ImageBadge = React.forwardRef<HTMLDivElement, ImageBadgeProps>(
  (
    {
      className,
      imageSrc,
      imageAlt = "",
      imagePosition = "left",
      imageClassName,
      imageWidth = 16,
      imageHeight = 16,
      imageRounded = true,
      children,
      ...props
    },
    ref
  ) => {
    const imageElement = imageSrc ? (
      <img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={cn(
          "object-contain",
          imageRounded && "rounded-full",
          imageClassName
        )}
      />
    ) : null;

    return (
      <Badge
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {imagePosition === "left" && imageElement}
        {children}
        {imagePosition === "right" && imageElement}
      </Badge>
    );
  }
);

ImageBadge.displayName = "ImageBadge";

export default ImageBadge;
