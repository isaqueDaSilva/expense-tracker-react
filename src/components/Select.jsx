import "../index.css";

export function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
