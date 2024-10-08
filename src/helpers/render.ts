import loadComponent from "./loadComponent"

export const render = (targetDiv: HTMLElement) => {
    loadComponent('./src/components/header.html', targetDiv)
    loadComponent('./src/components/main.html', targetDiv)
    loadComponent('./src/components/footer.html', targetDiv)
}
