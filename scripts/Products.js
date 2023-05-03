import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a product list item clicked?
        if (itemClicked.dataset.type === "product") {
            let formattedPrice = parseFloat(itemClicked.dataset.price).toFixed(2) // Convert string number to float and display 2 decimal places
            window.alert(`${itemClicked.dataset.name} costs $${formattedPrice}`)
        }

    }
)

export const Products = () => {
    let html = "<ul>" // Replaced ` with "

    for (const product of products) {
        html += `<li data-price="${product.price}"
        data-type="product"
        data-name="${product.name}"
        >${product.name}</li>` // Changed 'title' to name
    }

    html += "</ul>"

    return html
}

