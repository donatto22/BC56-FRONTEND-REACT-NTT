const loadComponent = async (htmlComponentUrl: string, targetDiv: HTMLElement) => {
    const response = await fetch(htmlComponentUrl)
    const htmlContent = await response.text()

    targetDiv.innerHTML += htmlContent
}

export default loadComponent
