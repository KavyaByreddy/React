import React from "react";
import Employee from "../Employee";

class Listrendering extends React.Component{
render(){
    return<>
    <table class="table table-bordered table-dark">
        <thead><tr>
            <th>id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>gender</th>
            </tr></thead>
            <tbody>
{
    Employee.map((d,index)=>{
        return <tr key={index}>
            <td class="bg-primary">{d.id}</td>
            <td class="bg-warning">{d.first_name}</td>
            <td class="bg-danger">{d.last_name}</td>
            <td class="bg-success">{d.email}</td>
            <td class="bg-info">{d.gender}</td>
        </tr>
    })
}
            </tbody>
    </table>
    </>
}

}
export default Listrendering;