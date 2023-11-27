export function isAdmin() {
    return localStorage.getItem("role") === "ADMIN"
}

export function isUser() {
    return localStorage.getItem("role") === "USER"
}

export function getUserId() {
    return localStorage.getItem("userId")
}

export function getFirstName() {
    return localStorage.getItem("name");
}

export function getLastName() {
    return localStorage.getItem("lastName");
}