"use client";
import { useMemo, useState } from "react";
import Table from "./Tables/Table";
import MyButton from "./Buttons/MyButton";
import DarkmodeButton from "./Buttons/darkmodeButton";
import AddEmployeeModal from "./Modals/AddEmployeeModal";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  patchEmployee,
} from "@/utils/api";
import { mapEmployees2Id, EmployeeTableColumnMap } from "@/utils/utils";

export default function HomePage({ employees }) {
  const [showModal, setShowModal] = useState(false);
  const [employeeList, setEmployeeList] = useState(employees);

  const employeeIdMap = useMemo(() => {
    return mapEmployees2Id(employeeList);
  }, [employeeList]);

  const handleDelete = async (employee) => {
    await deleteEmployee(employee);
    const newList = await getEmployees();
    setEmployeeList(newList);
  };

  const handleUpdate = async (employee) => {
    const updatedEmployee = await patchEmployee(employee);
    const target = employeeIdMap.get(updatedEmployee.id);
    // update by using reference to avoid rerender
    for (const key in target) {
      if (updatedEmployee[key]) {
        target[key] = updatedEmployee[key];
      }
    }
  };

  const employeePropertyNames = Object.keys(employeeList[0]).filter(
    (property) => {
      const wanted = EmployeeTableColumnMap.get(property);
      if (wanted) {
        return wanted;
      }
    }
  );

  const employeeTableHeaders = employeePropertyNames.map((name) =>
    EmployeeTableColumnMap.get(name)
  );

  return (
    <div className="w-screen h-screen bg-light-500 dark:bg-dark-700 text-black dark:text-secondary-200 transition-all duration-300">
      <DarkmodeButton />
      <div className="w-4/5 h-fit rounded-xl mx-auto mt-12 p-4 bg-slate-300 dark:bg-dark-600 drop-shadow-2xl">
        <AddEmployeeModal
          open={showModal}
          setOpen={setShowModal}
          addEmployee={createEmployee}
          onSubmit={async () => {
            const e = await getEmployees();
            setEmployeeList(e);
          }}
        />
        <Table
          title={"Employees"}
          data={employeeList}
          headers={employeeTableHeaders}
          propertyNames={employeePropertyNames}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          isDeletable={true}
          isEditable={true}
        />
        <MyButton variant="primary" onClick={() => setShowModal(true)}>
          Add User
        </MyButton>
      </div>
    </div>
  );
}
