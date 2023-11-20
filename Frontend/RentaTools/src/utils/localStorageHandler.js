

export function isAdmin() {
    return (
        localStorage.getItem('role') === 'ADMIN'
    )
}

export function getUserId() {
    return(
        localStorage.getItem('userId') 
    )
}