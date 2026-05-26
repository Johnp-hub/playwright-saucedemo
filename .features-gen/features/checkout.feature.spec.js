// Generated from: features\checkout.feature
import { test } from "playwright-bdd";

test.describe('Gestión del Carrito de Compras', () => {

  test.beforeEach('Antecedentes', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que el usuario ha iniciado sesión correctamente', null, { page }); 
  });
  
  test('Agregar un producto al carrito exitosamente', { tag: ['@shopping', '@carrito'] }, async ({ When, Then, page }) => { 
    await When('el usuario hace clic en "Add to cart" del producto "Sauce Labs Backpack"', null, { page }); 
    await Then('el icono del carrito debe mostrar un indicador de "1" producto agregado', null, { page }); 
  });

  test('Visualizar productos en el carrito', { tag: ['@shopping', '@carrito'] }, async ({ Given, When, Then, page }) => { 
    await Given('que el usuario ha agregado el producto "Sauce Labs Backpack" al carrito', null, { page }); 
    await When('el usuario navega hacia el carrito de compras', null, { page }); 
    await Then('debería ver el producto "Sauce Labs Backpack" en la lista de artículos seleccionados', null, { page }); 
  });

  test('Completar el proceso de compra exitosamente', { tag: ['@shopping', '@checkout', '@smoke'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('que el usuario tiene productos en el carrito', null, { page }); 
    await And('se encuentra en la pantalla de revisión del carrito', null, { page }); 
    await When('completa el formulario de envío con sus datos', null, { page }); 
    await And('confirma la orden en el paso final', null, { page }); 
    await Then('debería visualizar el mensaje de confirmación "Thank you for your order!"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@shopping","@carrito"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que el usuario ha iniciado sesión correctamente","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"Cuando el usuario hace clic en \"Add to cart\" del producto \"Sauce Labs Backpack\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Add to cart\"","children":[{"start":25,"value":"Add to cart","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"Sauce Labs Backpack\"","children":[{"start":52,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Entonces el icono del carrito debe mostrar un indicador de \"1\" producto agregado","stepMatchArguments":[{"group":{"start":50,"value":"\"1\"","children":[{"start":51,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":["@shopping","@carrito"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que el usuario ha iniciado sesión correctamente","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Dado que el usuario ha agregado el producto \"Sauce Labs Backpack\" al carrito","stepMatchArguments":[{"group":{"start":39,"value":"\"Sauce Labs Backpack\"","children":[{"start":40,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"Cuando el usuario navega hacia el carrito de compras","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Entonces debería ver el producto \"Sauce Labs Backpack\" en la lista de artículos seleccionados","stepMatchArguments":[{"group":{"start":24,"value":"\"Sauce Labs Backpack\"","children":[{"start":25,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":23,"tags":["@shopping","@checkout","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que el usuario ha iniciado sesión correctamente","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Dado que el usuario tiene productos en el carrito","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Y se encuentra en la pantalla de revisión del carrito","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"Cuando completa el formulario de envío con sus datos","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"Y confirma la orden en el paso final","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Entonces debería visualizar el mensaje de confirmación \"Thank you for your order!\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Thank you for your order!\"","children":[{"start":47,"value":"Thank you for your order!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end