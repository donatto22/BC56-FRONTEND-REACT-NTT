import { ErrorMessages } from "../types/Error"

export const validateElement = (element: HTMLElement | null) => {
    if(!element) throw new Error(ErrorMessages.THERE_ISNT_ELEMENT)
    return element
}