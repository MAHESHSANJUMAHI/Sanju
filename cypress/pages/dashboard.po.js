// import loginPage from "./login.po"
// class dashBoardPage extends loginPage{

//     dashboardMenu(){

//         return "Dashboard"
//     }
// }

// const dasboard = new dashBoardPage()

// export default dasboard

import loginPage from "./login.po"
class dashBoardPage extends loginPage{

    dashboardMenu(){

        return "Dashboard"
    }
    PIMMenu(){

        return "PIM"
    }
}

const dasboard = new dashBoardPage()

export default dasboard