export const validateRegex = (e: React.FormEvent, regex: RegExp) => {
    const input = e.target as HTMLInputElement

    if(!regex.test((e.target as HTMLInputElement).value)) {
        input.value = input.value.slice(0, -1)
    }
}