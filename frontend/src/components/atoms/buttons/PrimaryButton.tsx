type PrimaryButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  compactOnMobile?: boolean;
  [key: string]: any;
};

function PrimaryButton({
  children,
  icon,
  className = "",
  disabled = false,
  compactOnMobile = false,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 px-4 rounded-[8px] bg-root text-cream transition shadow
        h-8
        ${compactOnMobile ? "sm:h-8 h-8 sm:px-4 px-2" : ""}
        ${
          disabled
            ? "opacity-50 cursor-not-allowed bg-sand text-root"
            : "hover:bg-limewash cursor-pointer"
        }
        ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon}
      <span
        className={
          compactOnMobile
            ? "hidden sm:inline whitespace-nowrap"
            : "inline whitespace-nowrap"
        }
      >
        {children}
      </span>
    </button>
  );
}

export default PrimaryButton;
