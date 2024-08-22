class loginPage1{
    logoHrm(){
        return '//div[@class="orangehrm-login-branding"]'
    }
    userName(){
        return '//input[@name="username"]'
    }
    passWord(){
        return '//input[@name="password"]'
    }

    entercreds(field){
 
        return '//input[@name="'+field+'"]'

   }

    loginBtn(){
        return '//button[@type="submit"]'
    }
    forgetPasword(){
        return '//p[text()="Forgot your password? "]'
    }
    linkdinlIcon(){
        return '//g[@fill="currentColor"]'
    }

    errormessage="Invalid credentials"
    errormessageuserandpasswordfields="Required"

    logincreads(username,password){
        cy.xpath(this.entercreds("username")).type(username)
        cy.xpath(this.entercreds("password")).type(password)
        cy.xpath(this.loginBtn()).click()


    }
}

const login1 = new loginPage1() 
export default login1