"use client";

import MyButton from "../Buttons/MyButton";
// import TableCell from "../Tables/TableCell";
import EditCell from "./EditCell";
import { useState } from "react";
export default function Table({
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
            className="py-4 border-b border-slate-400 hover:bg-slate-300 transition duration-200"
          >
            {propertyNames.map((propertyName) => {
              return (
                <td key={propertyName}>
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
  );
}
