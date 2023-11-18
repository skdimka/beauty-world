import { EmployeeDto } from './../../common/dto/EmployeeDto';
import { makeAutoObservable } from "mobx" 

class EmployeesState {
    employees: EmployeeDto[] = [];

    constructor() {
        makeAutoObservable(this, undefined, {autoBind: true});
    }

    setEmployees(data: EmployeeDto[]){
        this.employees = data;
    }

    removeEmployee(id: number){
        this.employees = this.employees.filter(e => e.id !== id);
    }
}


const employeesState = new EmployeesState();

export default employeesState;

