export const mockFetch = (data: unknown, status = 200, ok = true): jest.Mock => {
    const fn = jest.fn().mockImplementationOnce(() => {
        const response = {
            json: () => Promise.resolve(data),
            status,
            ok,
        }
        return Promise.resolve(response)
    })

    global.fetch = fn
    return fn
}