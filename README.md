# 🎭 Playwright E2E - SauceDemo Automation

Este proyecto es un framework de automatización de pruebas End-to-End para la web **SauceDemo**. Utiliza una arquitectura avanzada basada en **Playwright**, **TypeScript**, y el patrón de diseño **Page Object Model (POM)**, integrando **Gherkin** para la definición de escenarios de negocio.

## 🏗️ Arquitectura del Proyecto

El framework está dividido en tres capas principales para facilitar el mantenimiento y la escalabilidad:

* **`features/`**: Archivos `.feature` con los criterios de aceptación escritos en Gherkin (lenguaje humano).
* **`pages/`**: Clases de Page Object que encapsulan los selectores (`data-test`) y la lógica de interacción con la interfaz.
* **`steps/`**: Definiciones de pasos que actúan como puente entre Gherkin y los Page Objects.

---

## 🛠️ Requisitos e Instalación

1.  **Node.js**: Asegúrate de tener instalada la versión 18 o superior.
2.  **Instalar Dependencias**:
    ```bash
    npm install
    ```
3.  **Instalar Navegadores de Playwright**:
    ```bash
    npx playwright install
    ```

---

## 🚀 Ejecución de las Pruebas

El proyecto utiliza `playwright-bdd`. Es fundamental generar los archivos de ejecución antes de lanzar Playwright.

### 1. Ejecución Estándar (Modo Headless)
Este comando sincroniza los archivos Gherkin y ejecuta todos los tests en segundo plano:
```bash
npm test