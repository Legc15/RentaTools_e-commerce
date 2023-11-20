export function isAdmin() {
  return localStorage.getItem("role") === "ADMIN"
}

export function isUser() {
  return localStorage.getItem("role") === "USER"
}

export function getUserId() {
  return localStorage.getItem("userId")
}
