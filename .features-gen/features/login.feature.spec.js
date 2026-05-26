// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Autenticación de Usuario', () => {

  test.beforeEach('Antecedentes', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario navega a la página de inicio de sesión', null, { page }); 
  });
  
  test('Inicio de sesión exitoso con credenciales válidas', { tag: ['@auth', '@smoke', '@regresion'] }, async ({ When, Then, And, page }) => { 
    await When('el usuario ingresa el nombre de usuario "standard_user"', null, { page }); 
    await And('la contraseña "secret_sauce"', null, { page }); 
    await And('hace clic en el botón de ingresar', null, { page }); 
    await Then('debería ser redirigido a la página de productos', null, { page }); 
    await And('debería visualizar el título de la sección "Products"', null, { page }); 
  });

  test('Intento de inicio de sesión con credenciales inválidas', { tag: ['@auth', '@negativo'] }, async ({ When, Then, And, page }) => { 
    await When('el usuario ingresa el nombre de usuario "locked_out_user"', null, { page }); 
    await And('la contraseña "secret_sauce"', null, { page }); 
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
  {"pwTestLine":10,"pickleLine":12,"tags":["@auth","@smoke","@regresion"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que el usuario navega a la página de inicio de sesión","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"Cuando el usuario ingresa el nombre de usuario \"standard_user\"","stepMatchArguments":[{"group":{"start":40,"value":"\"standard_user\"","children":[{"start":41,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"Y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":14,"value":"\"secret_sauce\"","children":[{"start":15,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"Y hace clic en el botón de ingresar","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Entonces debería ser redirigido a la página de productos","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Y debería visualizar el título de la sección \"Products\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Products\"","children":[{"start":44,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":20,"tags":["@auth","@negativo"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que el usuario navega a la página de inicio de sesión","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"Cuando el usuario ingresa el nombre de usuario \"locked_out_user\"","stepMatchArguments":[{"group":{"start":40,"value":"\"locked_out_user\"","children":[{"start":41,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"Y la contraseña \"secret_sauce\"","stepMatchArguments":[{"group":{"start":14,"value":"\"secret_sauce\"","children":[{"start":15,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"Y hace clic en el botón de ingresar","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Entonces debería visualizar un mensaje de error que indica \"Sorry, this user has been locked out\"","stepMatchArguments":[{"group":{"start":50,"value":"\"Sorry, this user has been locked out\"","children":[{"start":51,"value":"Sorry, this user has been locked out","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end