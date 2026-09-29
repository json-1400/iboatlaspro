import {
  Tv,
  Smartphone,
  Tablet,
  Monitor,
  Box,
} from "lucide-react";
import { FaAndroid, FaApple, FaWindows, FaAmazon } from "react-icons/fa";
import { COMPATIBLE_DEVICES } from "@/data/site-content";

export function DevicesGrid() {
  const renderDeviceIcon = (type: string) => {
    switch (type) {
      case "smart-tv":
        return <Tv className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      case "android":
        return <FaAndroid className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      case "fire-tv":
        return <FaAmazon className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      case "mag-box":
        return <Box className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      case "windows":
        return <FaWindows className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      case "apple":
        return <FaApple className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      case "smartphone":
        return <Smartphone className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      case "tablet":
        return <Tablet className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
      default:
        return <Monitor className="w-8 h-8 text-[#9FB0CC] group-hover:text-[#1E7BFF] transition-colors" />;
    }
  };

  return (
    <section
      id="devices"
      className="py-16 md:py-24 bg-[#040A17]"
      aria-label="Appareils compatibles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Compatible avec tous vos appareils
          </h2>
          <p className="mt-3 text-base text-[#9FB0CC]">
            Regardez où vous voulez, quand vous voulez.
          </p>
        </div>

        {/* 8 Device Cards Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {COMPATIBLE_DEVICES.map((device) => (
            <div
              key={device.id}
              className="group relative flex flex-col items-center justify-center p-5 rounded-xl bg-[#0A1428]/80 border border-[#1A2A4A] transition-all duration-200 hover:border-[#1E7BFF] hover:shadow-[0_0_20px_rgba(30,123,255,0.25)] hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="mb-3 flex items-center justify-center">
                {renderDeviceIcon(device.iconType)}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#1E7BFF] transition-colors text-center">
                {device.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
