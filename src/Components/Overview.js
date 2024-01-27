export default function Overview(inputTextData) {
    return (
        `
        <div id='canvasElement' class="converted--card ">
            <p class='text'>
                ${inputTextData}
            </p>
            <div class='shape--1' ></div>
            <div class='shape--2' ></div>
            <div class='shape--3' ></div>
        </div>
        `
    )
}
