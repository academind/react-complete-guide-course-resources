export default function Input({ label, invalid, ...props }) {
  return (
    <p>
      <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">{label}</label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300" {...props} />
    </p>
  );
}
