import "../index.css";

export function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
  );
}
