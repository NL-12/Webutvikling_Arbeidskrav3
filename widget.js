function toggleWidget(contentID, togglerID) {
    let contentElement = document.getElementById(contentID)
    let togglerElement = document.getElementById(togglerID)
    if (contentElement.classList.contains("hidden")) {
        contentElement.classList.remove("hidden")
        togglerElement.classList.add("hidden")
    } else {
        contentElement.classList.add("hidden")
        togglerElement.classList.remove("hidden")
    }
}