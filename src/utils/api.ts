import { Employee } from "./utils";
export async function getEmployees() {
  const response = await fetch("/api/employees", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data.result;
  } else {
    alert("failed to get resources");
  }
}

export async function getEmployee(employee: Employee) {
  const response = await fetch(`/api/employees/${employee.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data.result;
  } else {
    alert("failed to get resources");
  }
}

export async function deleteEmployee(employee: Employee) {
  const response = await fetch(`/api/employees/${employee.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    alert("Employee Deleted");
  } else {
    alert("failed to delete employee");
    const res = await response.json();
    console.log(res.error);
  }
}

export async function createEmployee(employee: Employee) {
  const response = await fetch("/api/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ employee }),
  });
  console.log(await response.json());
  if (response.status === 201) {
    alert("Person added successfully!");
  } else {
    console.log(await response.json());
  }
}

export async function patchEmployee(employee: Employee) {
  const { id, ...info } = employee;
  const response = await fetch(`/api/employees/${employee.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ employee: { ...info } }),
  });
  console.log(response);
  if (response.status === 200) {
    const res = await response.json();
    return res.result;
  } else {
  }
}
