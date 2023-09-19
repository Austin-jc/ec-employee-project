export default function TabelCell({
  inputType,
  employee,
  editEmployee,
  handleInputChange,
  required,
}) {
  return (
    <div className="h-full w-full">
      {editEmployee && editEmployee.id === employee.id ? (
        <div>
          <input
            className="rounded-lg border-2 border-slate-400"
            name={inputType}
            required={required}
            value={editEmployee[inputType]}
            type={inputType === "salary" ? "number" : "text"}
            pattern={inputType === "salary" ? "[0-9]" : ""}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        employee[inputType]
      )}
    </div>
  );
}
