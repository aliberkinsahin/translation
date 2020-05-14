function UI() {
    this.outputLanguage = document.getElementById("outputWord")
}

UI.prototype.showTranslation = function(translation) {
    this.outputLanguage.textContent = translation
}