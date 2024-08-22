class flipkartLogin{
    flipkartlogo(){
        return 'img[title="Flipkart"]'
    }
    login(){
        return '(//input[@type="text"])[1]'
    }
    requestOtp(){
        return `//button[text()='Request OTP']`
    }
    searchBox(){
        return '//input[@class="Pke_EE"]'
    }
    menu1(){
        return "//span[text()='TVs & Appliances']"
    }
    mobilesOptions(){
        return cy.get('a[class="CGtC98"]').eq(3).invoke("removeAttr", "target")
    }
    addCart(){
        // return "Add to cart"
       return  'button[class="QqFHMw vslbG+ In9uk2"]'
    }

    
}


const flipkart = new flipkartLogin()
export default flipkart