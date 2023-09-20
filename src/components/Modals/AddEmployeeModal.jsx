"use client";
import { Modal } from "@mui/material";
import { useState } from "react";
import MyModal from "./MyModal";
export default function AddEmployeeModal({
  open,
  setOpen,
  addEmployee,
  onSubmit,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const salaryAsFloat = parseFloat(salary);
    console.log("submitted");
    await addEmployee({ firstName, lastName, salary: salaryAsFloat });
    await onSubmit();
    handleClose();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "salary") {
      setSalary(value);
    }
  };

  return (
    <MyModal
      open={open}
      handleClose={handleClose}
      setOpen={setOpen}
      primaryButtonProps={{
        label: "Create",
        variant: "submit",
        formId: "AddEmployeeForm",
      }}
    >
      <div className="text-4xl"> Add Employee </div>
      <form
        id="AddEmployeeForm"
        onSubmit={handleSubmit}
        className="flex flex-col my-4"
      >
        <label className="m-2 flex justify-between">
          First Name:
          <input
            required={true}
            className="dark:bg-dark-600 border-2 border-slate-500 rounded-lg ml-2"
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleInputChange}
          />
        </label>
        <label className="m-2 flex justify-between">
          Last Name:
          <input
            required={true}
            className="dark:bg-dark-600 border-2 border-slate-500 rounded-lg ml-2"
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleInputChange}
          />
        </label>
        <label className="m-2 flex justify-between">
          Salary:
          <input
            required={true}
            inputMode="numeric"
            pattern="[0-9]"
            className="dark:bg-dark-600 border-2 border-slate-500 rounded-lg ml-2"
            name="salary"
            type="number"
            value={salary}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </MyModal>
  );
}
