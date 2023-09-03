const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode)

function App(){
    return (
    <>
        <h1>Pozdrav Algebra iz JSX</h1>   
        <Paragraf />
    </>
    )
}

function Paragraf(){
    return (
        <>
            <p>Nekakav Paragraf</p>   
        </>
        )
}

//const virtualDOM = App()
//const virtualDOM = React.createElement("h1", null, "Hello React")
//console.log(virtualDOM)

root.render(App())

/*const VD = {
    type: "h1",
    children: "Hello React"
}*/