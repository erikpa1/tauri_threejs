import { World } from "./World";
import React from "react";
import StorageManager from "./StorageManager";


function App() {

    const [convertedPath, setConvertedPath] = React.useState("")

    React.useEffect(() => {
        StorageManager.convertFileResourcePath("tmp.jpg").then((path) => {
            console.log(path)
            setConvertedPath(path)

            fetch(path).then(r => r.blob()).then((result) => {
                console.log(result)
            })

            // fetch(path).then(r => r.json()).then((result) => {
            //     console.log(result)
            // })


            // console.log(path)
        })
    }, [])

    return (
        <div style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%"
        }}>
            <img src={convertedPath} style={{
                width: "250px",
                height: "250px",
            }} />
            
            {/* <World /> */}
        </div>
    );
}

export default App;
