const isAdmin = localStorage.getItem("admin")
if(isAdmin){
    const leftSideContent = document.getElementById("left-side-content")
    const addNewSectionLink = document.createElement("a")
    addNewSectionLink.setAttribute("href", "/newSection" )
    addNewSectionLink.textContent = "Add new section"
    leftSideContent.append(addNewSectionLink)

    const loginLink = document.getElementById("login")
    loginLink.textContent = "Logout"
    loginLink.setAttribute("href", "/logout" )
}