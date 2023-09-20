export default function EditCell({
  propertyName,
  target,
  editTarget,
  editMode,
  handleInputChange,
  required,
}) {
  return (
    <div className="h-full w-full">
      {editMode ? (
        <div>
          <input
            className="rounded-lg border-2 border-slate-400"
            name={propertyName}
            required={required}
            value={editTarget[propertyName]}
            type={propertyName === "salary" ? "number" : "text"}
            pattern={propertyName === "salary" ? "[0-9]" : ""}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div>
          {`${propertyName === "salary" ? "$" : ""}${target[propertyName]}`}
        </div>
      )}
    </div>
  );
}
