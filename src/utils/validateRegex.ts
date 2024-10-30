export const validateRegex = (e: React.FormEvent, regex: RegExp) => {
    const input = e.target as HTMLInputElement

    if(!regex.test((e.target as HTMLInputElement).value)) {
        input.value = input.value.slice(0, -1)
    }
}

export const onlyLetters = (e: React.FormEvent) => validateRegex(e, /^[a-zA-ZñÑ\s]*$/)
export const validateAddress = (e: React.FormEvent) => validateRegex(e, /^[a-zA-ZñÑ0-9\s.-]*$/)
export const peruvianPhone = (e: React.FormEvent) => validateRegex(e, /^9\d{0,8}$/)