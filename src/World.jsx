import {Canvas, useFrame, useLoader} from '@react-three/fiber'

import React, {useRef, useState} from 'react'


import * as three from "three"


import StorageManager from "./StorageManager";
import {Box} from "@react-three/drei";


const AsyncMaterial = ({path}) => {

    console.log("Heere")

    const texture = useLoader(three.TextureLoader, path)
    
    return (
        <meshBasicMaterial transparent={true} map={texture} side={three.DoubleSide}/>
    )
}


export const World = ({}) => {

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

    console.log(convertedPath !== "")

    return (
        <Canvas>
            <ambientLight/>

            <pointLight position={[10, 10, 10]}/>
            <Box position={[-1.2, 0, 0]}>
                {
                    convertedPath !== "" && <AsyncMaterial path={convertedPath}/>
                }
            </Box>
            <Box position={[1.2, 0, 0]}/>
        </Canvas>
    )
}