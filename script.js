const Adress =
    [
        "https://i.ytimg.com/vi/7uacnNTk7I8/maxresdefault.jpg", "https://i.ytimg.com/vi/sdR1ZmDXS8w/maxresdefault.jpg",
        "https://i.ytimg.com/vi/VsTeCBvfSBs/maxresdefault.jpg"
    ]

const imagelist = document.querySelector(".images")
for (let i = 0; i < Adress.length; i++) {
    const ImageItem = document.createElement("li")
    const image = document.createElement("img")
    image.src = Adress[i]
    ImageItem.appendChild(image)
    imagelist.appendChild(ImageItem)

}