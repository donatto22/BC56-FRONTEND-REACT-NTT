import { Department } from "@types/Department"
import { useEffect, useState } from "react"

const useJsonFile = (path: Department[]) => {
    const [data, setData] = useState<Department[]>(path)

    useEffect(() => {
        if(!path) throw new Error()
        setData(path)
    }, [])

    return data
}

export default useJsonFile