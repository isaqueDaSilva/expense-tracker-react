import "../index.css";

export function Card({ children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
      {children}
    </div>
  );
}
