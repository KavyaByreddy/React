import CompB from './CompB'

let CompA = () => {
    let u_name = "Rahul"

    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB prop1={"GM"} ename={u_name} />

        
    </div>
}

export default CompA