function Emp() {
    let eId = 101;
    let eName = "Rahul"
    let eSal = 45000

    return <div>
        <h1>Employee Component</h1>
        <hr />
        <h3>Employee Details</h3>
        <h2>Employee Name: {eName}</h2>
        <h2>Employee Salary:{eSal}</h2>
    </div>
}
export default Emp