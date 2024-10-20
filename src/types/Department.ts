import { District } from "./District"

export type Department = {
    id: number
    department: string
    districts: District[]
}