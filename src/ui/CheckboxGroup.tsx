type CheckboxGroupProps = {
  options: { value: string; label: string }[];
  name: string;
  id: string;
};

export default function CheckboxGroup({
  options,
  name,
  id,
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
                <span className="text-sm text-gray-700">{option.value}</span>
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
