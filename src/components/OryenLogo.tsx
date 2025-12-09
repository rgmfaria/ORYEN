interface OryenLogoProps {
  className?: string;
  showText?: boolean;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: { icon: "w-8 h-8", text: "text-lg" },
  md: { icon: "w-10 h-10", text: "text-xl" },
  lg: { icon: "w-14 h-14", text: "text-2xl" },
  xl: { icon: "w-20 h-20", text: "text-4xl" },
};

const OryenLogo = ({ 
  className = "", 
  showText = true, 
  iconOnly = false,
  size = "md" 
}: OryenLogoProps) => {
  const { icon, text } = sizeClasses[size];

  const IconSVG = () => (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={iconOnly ? className : icon}
    >
      {/* Hexagonal Shield */}
      <path 
        d="M50 5L90 25V60C90 75 72 90 50 95C28 90 10 75 10 60V25L50 5Z" 
        stroke="currentColor" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner Door/Gate Symbol */}
      <path 
        d="M35 40V70H50V40" 
        stroke="currentColor" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Top accent */}
      <path 
        d="M35 40L50 28L50 40" 
        stroke="currentColor" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );

  if (iconOnly) {
    return <IconSVG />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${icon} text-primary`}>
        <IconSVG />
      </div>
      {showText && (
        <span className={`font-display font-bold ${text} text-foreground tracking-tight`}>
          ORYEN
        </span>
      )}
    </div>
  );
};

export default OryenLogo;
