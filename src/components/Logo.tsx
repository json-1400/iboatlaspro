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
      {/* Blue play-icon mark */}
      <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1456BD] via-[#1E7BFF] to-[#4DB5FF] p-0.5 shadow-[0_0_15px_rgba(30,123,255,0.45)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 translate-x-0.5"
          aria-hidden="true"
        >
          <path
            d="M5 4.5V19.5L19 12L5 4.5Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
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
