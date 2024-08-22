import loginPage from "./login.po"
class dashBoardPage extends loginPage{

    dashboardMenu(){

        return "Dashboard"
    }
}

const dasboard = new dashBoardPage()

export default dasboard