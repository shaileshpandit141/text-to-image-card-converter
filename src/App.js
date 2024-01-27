import InputText from "./Components/InputText.js"
import Overview from "./Components/Overview.js"


const textSourcerContainerElement = document.getElementById('textSourcerContainer')
const overviewContainerElement = document.getElementById('overviewContainer')
const downloadToPng = document.getElementById('downloadToPng')


textSourcerContainerElement.innerHTML = InputText()
overviewContainerElement.innerHTML = Overview('Your text goes here...')
const inputTextElement = document.getElementById('inputText')


inputTextElement.addEventListener('keyup', (event) => {
    let data = event.target.value
    inputTextElement.innerHTML = data
    overviewContainerElement.innerHTML = Overview(data)
})


downloadToPng.addEventListener('click', () => {

    html2canvas(document.getElementById('canvasElement'))
        .then((canvas) => {
            const convertedToImageFile = canvas.toDataURL('image/png')

            let downloader = document.createElement('a')
            downloader.setAttribute('href', convertedToImageFile)
            downloader.setAttribute('download', 'converted-file.png')
            downloader.click()
            downloader.remove()
        })

})
