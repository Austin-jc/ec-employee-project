"use client";
import { useState } from "react";
import UserTable from "./Tables/UserTable";
import MyButton from "./Buttons/MyButton";
import Modal from "./Modals/Modal";
import { getEmployees, createEmployee } from "@/utils/api";
export default function HomePage({ employees }) {
  const [showModal, setShowModal] = useState(false);
  const [employeeList, setEmployeeList] = useState(employees);

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
      <UserTable employees={employeeList} />
      <MyButton variant="primary" onClick={() => setShowModal(true)}>
        Add User
      </MyButton>
    </div>
  );
}
