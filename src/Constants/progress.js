import { ProgressContext } from "../API/dailyProgress"
import { useContext } from "react"



export default function checkProgress(info) {

    const {setProgress} = useContext(ProgressContext)

    console.log(info)

    let value = dones / total * 100
    let dones = 0
    let total = 0
    info.forEach((e) => {
        console.log(e)
        if (e.done) {
            dones++
        }
        total++
    })

    setProgress(value)
}