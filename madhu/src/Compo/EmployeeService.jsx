import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/employe/getName';

class EmployeeService{

    getEmployees(val){
        return axios.get(`${EMPLOYEE_API_BASE_URL}?employeName=${val}`);
    }
}

export default new EmployeeService();