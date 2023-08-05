let CompB = (props) => {


    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Name:{props.ename}</h3>
    </div>
}

export default CompB