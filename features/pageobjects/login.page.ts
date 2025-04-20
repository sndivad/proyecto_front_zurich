import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get acceptCookiesButton () {
        return $('#onetrust-accept-btn-handler');
    }

    public get teLlamamosGratisbutton () {
        return $(".link-secondary-button[data-toggle='modal']");
    }


    public get nameField () {
        return $('#_ZurichCallmebackEmpresas_name');
    }

    public get termsAndConditionsCheckBox () {
        return $('#_ZurichCallmebackEmpresas_');
    }

    public get pedirCitaButton () {
        return $('#_ZurichCallmebackEmpresas_pedirCita');
    }

    public get phoneErrorMessage(){
        return $('#_ZurichCallmebackEmpresas_phoneHelper .required');
    }


    public get phoneField () {
        return $('#_ZurichCallmebackEmpresas_phone');
    }

    public get hourButton () {
        return $('div.buttonHorario[name="17"]');
    }

    public get legalTermsErrorMessage(){
        return $('#_ZurichCallmebackEmpresas_Helper .required');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    //home page

    public async acceptCookies () {
        await this.acceptCookiesButton.click();
    }

    public async teLlamamosGratis () {
        await this.teLlamamosGratisbutton.click();
    }


    //Pide tu cita panel

    public async userEnterName (name: string) {
        await this.nameField.setValue(name)
    }

    public async userEnterphone (phone: string) {
        await this.phoneField.setValue(phone)
    }

    public async acceptTerms (name: string) {
        await this.termsAndConditionsCheckBox.click();
    }

    public async pedirCitaClick () {
        await this.pedirCitaButton.click();
    }

    public async hourClick () {
        await this.hourButton.click();
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
