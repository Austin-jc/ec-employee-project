"use client";
import { Modal } from "@mui/material";
import { useState } from "react";
import MyButton from "../Buttons/MyButton";
export default function AddEmployeeModal({
  open,
  setOpen,
  addEmployee,
  onSubmit,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const salaryAsFloat = parseFloat(salary);

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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ position: "absolute", top: "30%" }}
      >
        <div className="flex flex-col p-4 bg-white text-black w-96 mx-auto rounded-xl">
          <div className="text-4xl"> Add Employee </div>
          <form onSubmit={handleSubmit} className="flex flex-col my-4">
            <label className="m-2 flex justify-between">
              First Name:
              <input
                required={true}
                className="text-black border-2 border-slate-500 rounded-lg ml-2"
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
                className="text-black border-2 border-slate-500 rounded-lg ml-2"
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
                inputmode="numeric"
                pattern="[0-9]"
                className="text-black border-2 border-slate-500 rounded-lg ml-2"
                name="salary"
                type="number"
                value={salary}
                onChange={handleInputChange}
              />
            </label>
            <div className="flex flex-row mt-4 justify-evenly">
              <MyButton variant={"secondary"} onClick={handleClose}>
                Cancel
              </MyButton>

              <MyButton variant={"primary"}>Create</MyButton>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
