// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Autenticación de Usuario', () => {

  test.beforeEach('Antecedentes', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario navega a la página de inicio de sesión', null, { page }); 
  });
  
  test('Inicio de sesión exitoso con credenciales válidas', { tag: ['@auth', '@smoke', '@regresion'] }, async ({ When, Then, And, page }) => { 
    await When('el usuario ingresa las credenciales de un "USUARIO_VÁLIDO"', null, { page }); 
    await And('hace clic en el botón de ingresar', null, { page }); 
    await Then('debería ser redirigido a la página de productos', null, { page }); 
    await And('debería visualizar el título de la sección "Products"', null, { page }); 
  });

  test('Intento de inicio de sesión con credenciales inválidas', { tag: ['@auth', '@negativo'] }, async ({ When, Then, And, page }) => { 
    await When('el usuario ingresa las credenciales de un "USUARIO_INVÁLIDO"', null, { page }); 
    await And('hace clic en el botón de ingresar', null, { page }); 
    await Then('debería visualizar un mensaje de error que indica "Sorry, this user has been locked out"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@auth","@smoke","@regresion"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que el usuario navega a la página de inicio de sesión","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"Cuando el usuario ingresa las credenciales de un \"USUARIO_VÁLIDO\"","stepMatchArguments":[{"group":{"start":42,"value":"\"USUARIO_VÁLIDO\"","children":[{"start":43,"value":"USUARIO_VÁLIDO","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"Y hace clic en el botón de ingresar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Entonces debería ser redirigido a la página de productos","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Y debería visualizar el título de la sección \"Products\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Products\"","children":[{"start":44,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":19,"tags":["@auth","@negativo"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que el usuario navega a la página de inicio de sesión","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"Cuando el usuario ingresa las credenciales de un \"USUARIO_INVÁLIDO\"","stepMatchArguments":[{"group":{"start":42,"value":"\"USUARIO_INVÁLIDO\"","children":[{"start":43,"value":"USUARIO_INVÁLIDO","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"Y hace clic en el botón de ingresar","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Entonces debería visualizar un mensaje de error que indica \"Sorry, this user has been locked out\"","stepMatchArguments":[{"group":{"start":50,"value":"\"Sorry, this user has been locked out\"","children":[{"start":51,"value":"Sorry, this user has been locked out","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end