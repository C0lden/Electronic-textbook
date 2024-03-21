let menu_active = false

const show_menu = (action) => {
    menu = document.getElementById('themes-menu')

    if (menu_active | action == "close"){
        menu.style.left = "-500px"
        menu_active = false
    }
    else{
        menu.style.left = "0px"
        menu_active = true
    }
}

const close_menu = () => {

}