export type Employee = {
  id: String;
  firstName: String;
  lastName: String;
  salary: Number;
};

export const EmployeeTableColumnMap = new Map<string, string>([
  ["firstName", "First Name"],
  ["lastName", "Last Name"],
  ["salary", "Salary"],
]);

export function mapEmployees2Id(employees: Employee[]): Map<string, Employee> {
  const map = new Map();
  employees.forEach((employee) => {
    map.set(employee.id, employee);
  });
  return map;
}
