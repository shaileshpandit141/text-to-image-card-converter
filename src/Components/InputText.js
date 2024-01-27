export default function InputText(inputTextData = null) {

    let data = inputTextData ? inputTextData : ''

    return (
        `
        <textarea id="inputText" class="input--text" placeholder="Type your text here that you want to convert...">${data}</textarea>

        `
    )
}
