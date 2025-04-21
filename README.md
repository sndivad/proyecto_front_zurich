# Prueba de Automatización Front-end con WebdriverIO y Cucumber

Este repositorio contiene pruebas automatizadas de front-end utilizando WebdriverIO, Cucumber y TypeScript, siguiendo el patrón de diseño Page Object Model (POM).

## Requisitos previos

Antes de ejecutar las pruebas, asegúrate de tener instalado lo siguiente:

- [Visual Studio Code](https://code.visualstudio.com/download) (o cualquier otro IDE de tu preferencia)
- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- Google Chrome

## Instalación

Sigue estos pasos para configurar el entorno de pruebas:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sndivad/proyecto_front_zurich.git

2. Instala las dependencias:
   ```bash
   npm install

## Estructura del proyecto

 ```
.
├── features/
│   ├── data/                  # Carpeta para datos de prueba
│   │   └── message.ts         # Archivo con datos o mensajes utilizados en las pruebas
│   ├── page-objects/          # Implementación del patrón Page Object Model
│   │   ├── login.page.ts      # Página de inicio de sesión
│   │   ├── page.ts            # Clase base para las páginas
│   │   └── securepage.ts      # Página segura después del login
│   ├── step-definitions/      # Definiciones de los pasos de Cucumber
│   │   └── steps.ts           # Archivo con las definiciones de los pasos
│   └── test.feature           # Archivo de pruebas en formato Gherkin
├── node_modules/              # Dependencias instaladas por npm
├── .gitignore                 # Archivo para ignorar archivos/directorios en Git
├── package-lock.json          # Archivo generado automáticamente por npm
├── package.json               # Configuración de dependencias y scripts
├── tsconfig.json              # Configuración de TypeScript
└── wdio.config.ts             # Configuración de WebdriverIO
 ```

## Configuración

El proyecto está configurado para ejecutar las pruebas en modo incógnito en Chrome por defecto. La configuración se encuentra en el archivo **`wdio.conf.ts`**.

## Ejecución de pruebas
Para ejecutar todas las pruebas, utiliza el siguiente comando:
```bash
   npx wdio run wdio.conf.ts
```


![Mi imagen desde Imgur](https://i.imgur.com/nEIGVxb.png)


![Mi imagen desde Imgur](https://i.imgur.com/SJDcoVj.png)


