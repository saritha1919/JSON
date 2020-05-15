function getAllEmployees()
{
    let employeeNames = []; // Create an array to store employee names
    
    // Iterate employees of a Company
    for(let currentEmp of companyObj.employees) {
        employeeNames.push(currentEmp.person.name); // Add employee name to array
    }

    // Return the employee names
    return employeeNames;

}