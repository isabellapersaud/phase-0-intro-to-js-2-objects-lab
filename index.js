// Write your solution in this file!
var employee = {}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };  
}