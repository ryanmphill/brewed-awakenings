import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was an employee list item clicked?
        if (itemClicked.dataset.type === "employee") {
            // Define variable to store the employee's id as an integer
            const clickedEmployeeId = parseInt(itemClicked.dataset.id)
            // Define a default counter and set it to zero
            let orderCount = 0
            // Iterate through the orders array
            for (const order of orders) {
                // Check to see if the employeeId in order matched the clicked employee's id
                if (clickedEmployeeId === order.employeeId) {
                    orderCount += 1
                }
            }
            // Print the alert message
            window.alert(`${itemClicked.dataset.name} sold ${orderCount} products`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id="${employee.id}"
        data-type="employee"
        data-name="${employee.name}"
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html // Added an 'l'
}

