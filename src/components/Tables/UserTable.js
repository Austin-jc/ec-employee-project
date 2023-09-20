"use client";

import MyButton from "../Buttons/MyButton";
import TableCell from "../Tables/TableCell";
import { useState } from "react";
import { Employee } from "@/utils/utils";
export default function EmployeeTable({
  employees,
  handleDelete,
  handleUpdate,
}) {
  const [editEmployee, setEditEmployee] = useState(null);

  const handleEdit = async (employee) => {
    setEditEmployee({ ...employee });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditEmployee({ ...editEmployee, [name]: value });
  };
  const handleConfirmEdit = async () => {
    console.log(editEmployee);
    const res = await handleUpdate(editEmployee);
    setEditEmployee(null);
  };
  const handleAbortEdit = async () => {
    setEditEmployee(null);
  };

  return (
    <table className="mx-auto w-full text-left my-4">
      <thead>
        <tr className="border-b border-slate-500">
          <th className="py-2">First Name</th>
          <th className="py-2">Last Name</th>
          <th className="py-2">Salary</th>
        </tr>
      </thead>
      <tbody className="my-4">
        {employees.map((employee) => (
          <tr
            key={employee.id}
            className="py-4 border-b border-slate-400 hover:bg-slate-300 transition duration-200"
          >
            <td>
              <TableCell
                inputType={"firstName"}
                employee={employee}
                editEmployee={editEmployee}
                handleInputChange={handleInputChange}
                required={true}
              />
            </td>
            <td>
              <TableCell
                inputType={"lastName"}
                employee={employee}
                editEmployee={editEmployee}
                handleInputChange={handleInputChange}
                required={true}
              />
            </td>
            <td>
              <TableCell
                inputType={"salary"}
                employee={employee}
                editEmployee={editEmployee}
                handleInputChange={handleInputChange}
                required={true}
              />
            </td>
            <td>
              <MyButton
                variant={"tertiary"}
                onClick={
                  editEmployee && editEmployee.id === employee.id
                    ? async () => handleConfirmEdit()
                    : () => handleEdit(employee)
                }
                className={"border-green-500 hover:bg-green-500"}
              >
                {`${
                  editEmployee && editEmployee.id === employee.id
                    ? "confirm"
                    : "edit"
                }`}
              </MyButton>
            </td>
            <td>
              <MyButton
                variant={"tertiary"}
                onClick={
                  editEmployee && editEmployee.id === employee.id
                    ? () => setEditEmployee(null)
                    : () => handleDelete(employee)
                }
                className={"border-red-500 hover:bg-red-500"}
              >
                {`${
                  editEmployee && editEmployee.id === employee.id
                    ? "Cancel"
                    : "Delete"
                }`}
              </MyButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
