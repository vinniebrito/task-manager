type PrimaryButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  [key: string]: any;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  icon,
  className = "",
  ...props
}) => (
  <button
    className={`flex items-center gap-2 px-4 rounded-[8px] bg-root text-cream hover:bg-limewash transition cursor-pointer h-8 shadow 
      ${className}`}
    {...props}
  >
    {icon}
    <span className="hidden sm:inline whitespace-nowrap ">{children}</span>
  </button>
);

export default PrimaryButton;
