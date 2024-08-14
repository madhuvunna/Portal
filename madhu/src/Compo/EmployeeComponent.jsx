import React, { useState, useEffect } from 'react'
import EmployeeService from '../Compo/EmployeeService';
import SearchBar from '../Components/Searchbar';

function EmployeeComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = () => {

    };

    const handleSearchDetail = (val) => {
        EmployeeService.getEmployees(val).then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    }

    return (
        <div className="container">
            <SearchBar handleSearch={handleSearchDetail} />



            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> employe Id</th>
                        <th> employe Name</th>
                        <th> employe Desgination</th>
                        <th> employe Email</th>
                        <th> employe Phone Number</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.employeId}>
                                    <td> {employee.employeId}</td>
                                    <td> {employee.employeName}</td>
                                    <td> {employee.employeDesgination}</td>
                                    <td> {employee.employeEmail}</td>
                                    <td> {employee.employePhoneNumber}</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}

export default EmployeeComponent