import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>" // Replaced ` with "

    for (const product of products) {
        html += `<li>${product.name}</li>` // Changed 'title' to name
    }

    html += "</ul>"

    return html
}

