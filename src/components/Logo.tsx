import Link from "next/link";

interface LogoProps {
  readonly className?: string;
  readonly showDotCom?: boolean;
}

export function Logo({ className = "", showDotCom = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none focus:outline-none focus:ring-2 focus:ring-[#1E7BFF]/50 rounded-lg ${className}`}
      aria-label="iboatlaspro.com - Accueil"
    >
      {/* Custom iboatlaspro Atlas & Play Logo Mark */}
      <span className="relative flex items-center justify-center w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(18,98,227,0.45)] flex-shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="header-ibo-grad" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#082554" />
              <stop offset="50%" stopColor="#1262E3" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>
            <linearGradient id="header-ibo-orbit" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="7.5" fill="url(#header-ibo-grad)" />
          <path
            d="M7 13.5C8 9.5 12 7 17 7.5C21.5 8 24.8 10.5 26 13.5"
            stroke="url(#header-ibo-orbit)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M12.5 10C12.5 9.2 13.4 8.7 14.1 9.1L22.2 14.7C22.8 15.1 22.8 16.1 22.2 16.5L14.1 22.1C13.4 22.5 12.5 22 12.5 21.2V10Z"
            fill="#FFFFFF"
          />
          <path
            d="M5.5 18C6.8 22.2 11 25 16 24.5C20.5 24 24 21.8 25.5 18"
            stroke="url(#header-ibo-orbit)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="25.5" cy="18" r="1.3" fill="#FFFFFF" />
        </svg>
      </span>

      <span className="text-xl font-extrabold tracking-tight text-white flex items-baseline">
        <span>iboatlas</span>
        <span className="text-[#1E7BFF]">pro</span>
        {showDotCom && <span className="text-xs text-[#9FB0CC] font-normal ml-0.5">.com</span>}
      </span>
    </Link>
  );
}
