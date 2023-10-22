function toggleWidget(togglerID) {
    let togglerElement = document.getElementById(togglerID)
    if (togglerElement.classList.contains("hidden")) {
        togglerElement.classList.remove("hidden")
    } else {
        togglerElement.classList.add("hidden")
    }
}