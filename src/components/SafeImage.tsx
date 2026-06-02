import React, { useState, useEffect } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  className?: string;
  onErrorCallback?: () => void;
  [key: string]: any;
}

export default function SafeImage({
  src,
  onErrorCallback,
  className = "",
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src || undefined);
  const [attempt, setAttempt] = useState<number>(0);

  useEffect(() => {
    setCurrentSrc(src || undefined);
    setAttempt(0);
  }, [src]);

  const handleError = () => {
    if (!src) return;

    // Check if the original path contains "kselectrical1" and make paths robust
    let cleanPath = src.startsWith("/") ? src.substring(1) : src;
    let isGH = false;
    if (cleanPath.startsWith("kselectrical1/")) {
      cleanPath = cleanPath.substring("kselectrical1/".length);
      isGH = true;
    }

    const fallbacks: string[] = [];

    // Prioritize fallback to alternate root prefixes
    if (isGH) {
      fallbacks.push(`/${cleanPath}`);
      fallbacks.push(`${cleanPath}`);
    } else {
      fallbacks.push(`/kselectrical1/${cleanPath}`);
      fallbacks.push(`kselectrical1/${cleanPath}`);
    }

    const baseWithoutExt = cleanPath.replace(/\.(png|jpg|jpeg|webp|png|PNG|JPG|JPEG|WEBP)$/i, "");
    const ext = src.split('.').pop() || 'png';
    const extensions = ["png", "jpg", "jpeg", "webp", "PNG", "JPG", "JPEG", "WEBP"];

    extensions.forEach((e) => {
      // With GH prefix
      fallbacks.push(`/kselectrical1/${baseWithoutExt}.${e}`);
      fallbacks.push(`/kselectrical1/${baseWithoutExt}.${e}.${e}`);
      
      // Without GH prefix (local dev)
      fallbacks.push(`/${baseWithoutExt}.${e}`);
      fallbacks.push(`/${baseWithoutExt}.${e}.${e}`);
      
      // Relative
      fallbacks.push(`${baseWithoutExt}.${e}`);
      fallbacks.push(`${baseWithoutExt}.${e}.${e}`);
    });

    if (cleanPath.startsWith("images/")) {
      const rootBase = baseWithoutExt.replace(/^images\//, "");
      extensions.forEach((e) => {
        fallbacks.push(`/kselectrical1/${rootBase}.${e}`);
        fallbacks.push(`/kselectrical1/${rootBase}.${e}.${e}`);
        fallbacks.push(`/${rootBase}.${e}`);
        fallbacks.push(`/${rootBase}.${e}.${e}`);
        fallbacks.push(`${rootBase}.${e}`);
      });
    }

    // Custom domain support
    fallbacks.push(`https://www.kselectrical.in/${cleanPath}`);
    extensions.forEach((e) => {
      fallbacks.push(`https://www.kselectrical.in/${baseWithoutExt}.${e}`);
      fallbacks.push(`https://www.kselectrical.in/${baseWithoutExt}.${e}.${e}`);
    });

    // Gallery item mappings
    if (cleanPath.includes("gallery_")) {
      let origFallback = "images/ac_service.png";
      if (cleanPath.includes("gallery_ac")) {
        origFallback = "images/ac_service.png";
      } else if (cleanPath.includes("gallery_washing")) {
        origFallback = "images/washing_machine_service.png";
      } else if (cleanPath.includes("gallery_fridge")) {
        origFallback = "images/refrigerator_service.png";
      } else if (cleanPath.includes("gallery_wiring_1")) {
        origFallback = "images/electric.png";
      } else if (cleanPath.includes("gallery_wiring_2")) {
        origFallback = "images/electrical_safety_service.png";
      } else if (cleanPath.includes("gallery_ro")) {
        origFallback = "images/ro.png";
      } else if (cleanPath.includes("gallery_geyser")) {
        origFallback = "images/geyser_service.png";
      } else if (cleanPath.includes("gallery_drill")) {
        origFallback = "images/drill_hanging_service.png";
      } else if (cleanPath.includes("gallery_cooler")) {
        origFallback = "images/cooler_service.png";
      }

      const origClean = origFallback.startsWith("/") ? origFallback.substring(1) : origFallback;
      const origBase = origClean.replace(/\.(png|jpg|jpeg|webp|pmg|PNG|JPG|JPEG|WEBP)$/i, "");

      fallbacks.push(`/kselectrical1/${origClean}`);
      fallbacks.push(`/${origClean}`);
      fallbacks.push(`${origClean}`);
      
      extensions.forEach((e) => {
        fallbacks.push(`/kselectrical1/${origClean}.${e}`);
        fallbacks.push(`/kselectrical1/${origBase}.${e}.${e}`);
        fallbacks.push(`/${origClean}.${e}`);
        fallbacks.push(`/${origBase}.${e}.${e}`);
      });

      if (origBase.includes("electric")) {
        fallbacks.push("/kselectrical1/images/Electric.png.png");
        fallbacks.push("/kselectrical1/images/Electric.png");
        fallbacks.push("/images/Electric.png.png");
        fallbacks.push("/images/Electric.png");
      }

      fallbacks.push(`https://www.kselectrical.in/${origClean}`);
    }

    if (cleanPath.includes("washing_machine_service")) {
      fallbacks.push("/kselectrical1/images/refrigerator_service.png");
      fallbacks.push("/kselectrical1/images/fan_repair_service.png");
      fallbacks.push("/kselectrical1/images/electrical_safety_service.png");
      fallbacks.push("/images/refrigerator_service.png");
      fallbacks.push("/images/fan_repair_service.png");
      fallbacks.push("/images/electrical_safety_service.png");
    }

    // Filter unique fallback paths to keep it efficient and prevent infinite recursion loops
    const uniqueFallbacks = Array.from(new Set(fallbacks)).filter(f => f !== src && f !== `/${cleanPath}` && f !== `kselectrical1/${cleanPath}`);

    if (attempt < uniqueFallbacks.length) {
      const nextSrc = uniqueFallbacks[attempt];
      setAttempt((prev) => prev + 1);
      setCurrentSrc(nextSrc);
    } else {
      if (onErrorCallback) {
        onErrorCallback();
      }
    }
  };

  return (
    <img
      src={currentSrc || undefined}
      onError={handleError}
      className={className}
      {...props}
    />
  );
}
