import "../index.css";

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  isButtonDisabled = false
}) {
  const base = "rounded-2xl px-4 py-2 font-medium transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 hover:bg-gray-100",
    disabled: "bg-gray-300 text-gray-600 cursor-not-allowed",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      disabled={isButtonDisabled}
    >
      {children}
    </button>
  );
}
