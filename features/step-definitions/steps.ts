import { Given, When, Then, } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { MESSAGES } from '../data/messages';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';


//esto seria util al tener muchas pages
/*
const pages = {
    login: LoginPage
}
    */


Given('EL usuario accede a la pagina principal', async () => {
  await LoginPage.open();
});


When('acepta todas las cookies si se muestran', async () => {
  if (await LoginPage.acceptCookiesButton.isDisplayed()) {
    await LoginPage.acceptCookiesButton.click();
  }
});

When('hace clic en el boton Te llamamos gratis', () => {
  LoginPage.teLlamamosGratisbutton.click();
})

When('introduce el nombre', async () => {
  await LoginPage.userEnterName(MESSAGES.NAME);
});

When('acepta los términos legales', async () => {
  let termsCheckBox = LoginPage.termsAndConditionsCheckBox;
  if (!(await termsCheckBox.isSelected())) {
    await termsCheckBox.click();
  }
  //await browser.pause(3000);
});

When('hace clic en el botón para pedir cita', () => {
  LoginPage.pedirCitaClick();
});

Then('se muestra el mensaje de error que falta el telefono', async () => {
  await expect(LoginPage.phoneErrorMessage).toHaveText(MESSAGES.PHONE_REQUIRED);
});

When('deja por aceptar los términos legales', async () => {
  let termsCheckBox = LoginPage.termsAndConditionsCheckBox;
  if (await termsCheckBox.isSelected()) {
    await termsCheckBox.click();
  }
})

When('selecciona la hora en la sección ¿Cuándo?', () => {
  LoginPage.hourClick();
})

When('introduce el telefono de contacto', () => {
  LoginPage.userEnterphone(MESSAGES.PHONE);
})

Then('se muestra el mensaje de error que faltan los terminos legales', async () => {
  await expect(LoginPage.legalTermsErrorMessage).toHaveText(MESSAGES.TERMS_REQUIRED);
})




/*
Given('estoy en la página de Google', async () => {
    await browser.url('https://www.google.com');
  });
  
  Then('el título debe contener {string}', async (expectedTitle: string) => {
    await expect(browser).toHaveTitle(expectedTitle);
  });

*/