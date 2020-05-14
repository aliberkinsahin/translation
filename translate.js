// yandexUrlBase + apiKey + &text="" + &lang=""

function Translate(word, lang) {
    this.apikey = "?key=trnsl.1.1.20200514T071753Z.852f872615067e18.629b23e5f9bf352a91933332b764ab0cbd815bcd"
    this.word = word
    this.lang = lang

    this.xhr = new XMLHttpRequest()
}

Translate.prototype.translateWord = function (callback) {
    const urlEndpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate${this.apikey}&text=${this.word}&lang=${this.lang}`

    this.xhr.open("get", urlEndpoint)

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText)
            console.log(json)
            const text = json.text[0]
            callback(null,text)
        }
        else {
            callback("Error!",null)
        }
    }

    this.xhr.send()
}

Translate.prototype.changeParameters = function (newWord, newLang) {
    this.word = newWord
    this.lang = newLang
}