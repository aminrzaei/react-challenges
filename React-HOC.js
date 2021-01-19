function ShowEmployeeSalaryDetails(props) {
    return (
        <div>
            <div>Employee Name: {props.name}</div>
            <div>Employee Salary: {props.salary}</div>
            <div>Employee Bonus: {props.bonus}</div>
        </div>
    )
}

function ShowEmployeeBasicDetails(props) {
    return (
        <div>
            <div>Employee Name: {props.name}</div>
            <div>Employee Age: {props.age}</div>
            <div>Employee Designation: {props.designation}</div>
        </div>
    )
}

function getEmployeeData() {
    return {
        name: "Mayank",
        age: 30,
        designation: "Developer",
        salary: 30000,
        bonus: 2000
    }
}

var HigherOrderComponent = function(WrappedComponent) {
    return class EmployeeDetailComponents extends React.Component {

        constructor() {
            super();
            this.state = getEmployeeData();
        }
    
        render() {
            return (
                <div>
                    <WrappedComponent {...this.state}></WrappedComponent>
                </div>
            )
        }
    }
}

var EmployeeBasicDetails = HigherOrderComponent(ShowEmployeeBasicDetails);

var EmployeeSalaryDetails = HigherOrderComponent(ShowEmployeeSalaryDetails);

ReactDOM.render((
	<div>
    <h2>Employee Basic Details Component:</h2>
	  <EmployeeBasicDetails></EmployeeBasicDetails><br></br>
    <h2>Employee Salary Details Component:</h2>
    <EmployeeSalaryDetails></EmployeeSalaryDetails>
  </div>)

, document.getElementById("root"));