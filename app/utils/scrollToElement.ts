function scrollToElement(elementSelector: string) {
    const element = document.getElementById(elementSelector)

    if (!element) return

    element.scrollIntoView({
        behavior: 'smooth'
    })
}

export default scrollToElement