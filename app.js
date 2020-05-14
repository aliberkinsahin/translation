const wordInput = document.getElementById("word")
const langSelection = document.getElementById("language")
const testIndex = document.getElementById("test-output")


eventListeners()

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit",translateWord)
    langSelection.onchange = function () {
        testIndex.textContent = `Index: ${langSelection.selectedIndex}`
    }
}
const translate = new Translate(wordInput.value, langSelection.value)
const ui = new UI()

function translateWord(e) {
    translate.changeParameters(wordInput.value, langSelection.value)
    translate.translateWord(function(err, response) {
        if(err == null) ui.showTranslation(response)
        else console.error(err)
    })
    e.preventDefault()
}

