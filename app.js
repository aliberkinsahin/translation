const wordInput = document.getElementById("word")
const langSelection = document.getElementById("language")

eventListeners()

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit",translateWord)
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