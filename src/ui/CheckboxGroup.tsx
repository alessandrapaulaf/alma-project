type CheckboxGroupProps = {
  options: { value: string; label: string }[];
  name: string;
  error?: { _errors: string[] } | null;
};

export default function CheckboxGroup({
  options,
  name,
  error = null,
}: CheckboxGroupProps) {
  return (
    <fieldset className="space-y-2">
      <div className="flex flex-col space-y-1">
        {options.map((option) => {
          return (
            <div key={option.value}>
              <label
                htmlFor={`${name}-${option.value}`}
                className="inline-flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  id={`${name}-${option.value}`}
                  name={name}
                  value={option.value}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            </div>
          );
        })}
      </div>
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-1 text-xs text-red-600"
        >
          {error["_errors"].join(", ")}
        </p>
      )}
    </fieldset>
  );
}
