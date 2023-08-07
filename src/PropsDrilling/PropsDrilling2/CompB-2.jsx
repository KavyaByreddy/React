
let CompB = (x) => {


    return <div>
        <h1>Component B</h1>
        {/* <pre>{x}</pre> */}
        <pre>{JSON.stringify(x)}</pre>

        <hr />
        <h2>Message:{x.prop1}</h2>
        <h2>Message:{x.prop2}</h2>
        <h2>Name:{x.ename}</h2>
    </div>
}

export default CompB
