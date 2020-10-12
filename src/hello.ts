console.log('Hi');
// tsc --init  Inicializa
// tsc  Corre el archivod e configuración de Typescript tsconfig,json
// tsc --watch Esta atento a los cambios guardados y los compila
// node dist/hello.js  ejecuta en node


// Webpack y Agrupación de Módulos
/* 
    Webpack es un empaquetador de módulos
     conocido como bundlee en al jerga de programación
     y permite la integracion de diferentes plugins y herramientas adicionales de configuración 

     Como agregarlo 
      Tener el package.json 
       Para garegarlo es npm init -y
      npm install typescript webpack webpack-cli --save-dev 

    Se crea el archivo webpack.conf.js
    Con la siguiente estrutura basica, y leer documentacion
     module.exports = {
        mode: 'production',   // Ambiente
        entry: '.src/main.js',  // Punto de entrada o arranque
        devtool: 'inline-cource-map', //
        resolve: {                    // Extensiones qeu soporta el proyecto
            extensions: ['.ts', '.js'],
        },
        output: {                     // Se indica el nombre del archivo resultante 
            filename: 'bundle.js',
        }

      Y se agrega un nuevo scripts en el package.json 
       se reemplaza esto "test": "echo \"Error: no test specified\" && exit 1" por "build": "webpack"
       Agregando 
        "scripts": {
            "build": "webpack"
        }

      Y despues se ejecuta el comando npm run build para revisar qeu este corriendo bien

      Si no corre bien ingresar el siguiente comando
       npm install ts-loader --save-dev
       En el archivo webpack.config.js se agrega 
        module: {
          rules: [{
              test: /\.ts$/,
              use: 'ts-loader',
              exclude: /node_modules/
           }]
        },
        despues ya se puede correr el archivo que genera webpack qeu es bundle.js
        node ruta_del_archivo/bundle.js

        Se crea un archivo index.html para ver ese codigo en el navegador en la consola
        C:\Users\carpr\OneDrive\Documentos\Ejercicios\Platzi\8.FundamentosTypeScript\TypeScrPlat\src\photo-app\principio-respo-unica\index.html

} 
*/
