type Admin = {
    nsme : string;
    privileges: string[];
}

type Employee ={
    name:string;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee;