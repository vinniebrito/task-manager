type CheckboxIconProps = {
  done?: boolean;
  className?: string;
};

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  done = false,
  className = "",
}) =>
  done ? (
    // Checkbox preenchido com check branco
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#5e6b52" />

      <path
        d="M7 12.5l3 3 7-7"
        stroke="#fff"
        strokeWidth="2"
        fill="#5e6b52"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    // Checkbox em branco
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#5e6b52"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="none"
        stroke="#5e6b52"
        strokeWidth="2"
      />
      <rect x="4" y="4" width="16" height="16" fill="none" />
    </svg>
  );

export default CheckboxIcon;
