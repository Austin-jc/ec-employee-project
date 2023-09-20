"use client";
import MyButton from "../Buttons/MyButton";
import EditCell from "./EditCell";
import { useState } from "react";
export default function Table({
  title,
  data,
  headers,
  propertyNames,
  handleDelete,
  handleUpdate,
  isEditable,
  isDeletable,
}) {
  const [editTarget, setEditTarget] = useState(null);

  const handleEdit = async (target) => {
    setEditTarget({ ...target });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTarget({ ...editTarget, [name]: value });
  };
  const handleConfirmEdit = async () => {
    const res = await handleUpdate(editTarget);
    setEditTarget(null);
  };
  const handleAbortEdit = async () => {
    setEditTarget(null);
  };

  return (
    <div className="flex flex-col">
      <div className="text-6xl">{title}</div>
      <table className="mx-auto w-full text-left my-4">
        <thead>
          <tr className="border-b border-slate-500">
            {headers.map((header) => {
              return (
                <th key={header} className="py-2">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="my-4">
          {data.map((object) => (
            <tr
              key={object.id}
              className="py-4  border-b border-slate-400 hover:bg-stone-400 hover:dark:bg-dark-500 transition-all duration-300"
            >
              {propertyNames.map((propertyName) => {
                return (
                  <td key={propertyName} className="py-4">
                    <EditCell
                      propertyName={propertyName}
                      target={object}
                      editMode={editTarget && object.id === editTarget.id}
                      editTarget={editTarget}
                      handleInputChange={handleInputChange}
                      required={true}
                    />
                  </td>
                );
              })}
              {isEditable ? (
                <td>
                  <MyButton
                    variant={"tertiary"}
                    onClick={
                      editTarget && editTarget.id === object.id
                        ? async () => handleConfirmEdit()
                        : () => handleEdit(object)
                    }
                    className={"border-green-500 hover:bg-green-500"}
                  >
                    {`${
                      editTarget && editTarget.id === object.id
                        ? "confirm"
                        : "edit"
                    }`}
                  </MyButton>
                </td>
              ) : (
                ""
              )}
              {isDeletable ? (
                <td>
                  <MyButton
                    variant={"tertiary"}
                    onClick={
                      editTarget && editTarget.id === object.id
                        ? () => setEditTarget(null)
                        : () => handleDelete(object)
                    }
                    className={"border-red-500 hover:bg-red-500"}
                  >
                    {`${
                      editTarget && editTarget.id === object.id
                        ? "Cancel"
                        : "Delete"
                    }`}
                  </MyButton>
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
