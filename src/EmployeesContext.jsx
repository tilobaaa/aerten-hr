import { createContext, useContext, useState } from "react";

const EmployeesContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  return (
    <EmployeesContext.Provider
      value={{ selectedEmployees, setSelectedEmployees }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeesContext);
