const shortenButton = document.getElementById("shorten-button")
const input = document.getElementById("link-shorten")
const linkDiv = document.getElementById("link-div")
const copyButton = document.querySelector(".copy-button")


//const setLink = () => {

//localStorage.setItem("inputValue", JSON.parse(JSON.stringify(input.value)))
//linkDiv.innerHTML=JSON.parse(localStorage.getItem("inputValue"))

//}

function copyToClipboard(value) {
    navigator.clipboard.writeText(value)
}

shortenButton.addEventListener("click", () => {
    return (

        fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
            .then(response => response.json())
            .then(data => {
                linkDiv.innerHTML += `
                                    
                                    <div class="linkDiv-first-div">
                                        <p>${input.value}</p>
                                      </div>

                            <div class="linkDiv-second-div">
                                <p>${data.result.short_link}</p>
                                <button class="button copy-button">Copy</button>
                            </div>
                            
                            `

                const copyButton = document.querySelector(".copy-button")
                copyButton.addEventListener("click", () => {
                    copyToClipboard(data.result.short_link)
                    copyButton.innerHTML = "Copied!"
                    copyButton.classList.add("copied")
                }) 
                console.log(data)
            })
    )
})

