// En enkel funksjon. Den forventer en id og undersøker om det element inneholder klassen hidden, i hvilket tilfelle det blir fjernet, eventuelt lagt til.
function toggleWidget(togglerID) {
    let togglerElement = document.getElementById(togglerID)
    if (togglerElement.classList.contains("hidden")) {
        togglerElement.classList.remove("hidden")
    } else {
        togglerElement.classList.add("hidden")
    }
}