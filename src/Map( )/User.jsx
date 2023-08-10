import user from './userData'
let User  = ()=>{
let {users, total}  = user

return <div>
    <h2>User Component</h2>
    <pre>{JSON.stringify(user)}</pre>
    <pre>{JSON.stringify(users)}</pre>
    <pre>{total}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className='table'>
                    <thead className='bg-info text-white'>
                    <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Gender</td>
                        <td>Age</td>
                    </tr>
                    </thead>
                    <tbody>
                        {
                           /* users.map() */
                         /*   users.map(()=>{})  */
                         users.map((user,index)=>{
                                return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.age}</td>
                                </tr>
                         })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

}
export default User