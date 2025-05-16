type TextFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: { _errors: string[] } | null;
};

export default function TextField({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  error,
}: TextFieldProps) {
  return (
    <div className="flex flex-col h-[40px]">
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`rounded-md w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border ${
            error ? "border-red-500" : "border-gray-300"
          }`}
      />
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-1 text-xs text-red-600 text-right"
        >
          {error["_errors"].join(", ")}
        </p>
      )}
    </div>
  );
}
