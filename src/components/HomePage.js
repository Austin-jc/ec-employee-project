"use client";
import { useMemo, useState } from "react";
import UserTable from "./Tables/UserTable";
import MyButton from "./Buttons/MyButton";
import Modal from "./Modals/Modal";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  patchEmployee,
} from "@/utils/api";
import { mapEmployees2Id } from "@/utils/utils";

export default function HomePage({ employees }) {
  const [showModal, setShowModal] = useState(false);
  const [employeeList, setEmployeeList] = useState(employees);

  const employeeIdMap = useMemo(() => {
    return mapEmployees2Id(employees);
  }, [employees]);

  const handleDelete = async (employee) => {
    await deleteEmployee(employee);
    const newList = await getEmployees();
    setEmployeeList(newList);
  };

  const handleUpdate = async (employee) => {
    const updatedEmployee = await patchEmployee(employee);
    const target = employeeIdMap.get(updatedEmployee.id);
    console.log();
    // update by using reference to avoid rerender
    for (const key in target) {
      if (updatedEmployee[key]) {
        target[key] = updatedEmployee[key];
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-light text-black">
      <Modal
        open={showModal}
        setOpen={setShowModal}
        addEmployee={createEmployee}
        onSubmit={async () => {
          const e = await getEmployees();
          setEmployeeList(e);
        }}
      />
      <UserTable
        employees={employeeList}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <MyButton variant="primary" onClick={() => setShowModal(true)}>
        Add User
      </MyButton>
    </div>
  );
}
