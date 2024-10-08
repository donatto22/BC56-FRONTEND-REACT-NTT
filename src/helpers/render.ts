import loadComponent from "./loadComponent"

export const render = (targetDiv: HTMLElement) => {
    setTimeout(() => {
        loadComponent('./src/components/header.html', targetDiv)
    }, 50)

    setTimeout(() => {
        loadComponent('./src/components/main.html', targetDiv)
    }, 100)

    setTimeout(() => {
        loadComponent('./src/components/footer.html', targetDiv)
    }, 150)
}
