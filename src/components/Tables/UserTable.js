"use client";

import MyButton from "../Buttons/MyButton";
import { useState } from "react";
import { Employee } from "@/utils/utils";
export default function UserTable({ employees, handleDelete }) {
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
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.salary}</td>
            <td>
              <MyButton
                variant={"primary"}
                onClick={() => handleDelete(employee)}
              >
                Delete
              </MyButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
