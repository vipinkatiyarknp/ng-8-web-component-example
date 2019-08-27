const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/angular-webcomponents-demo/runtime-es5.js',
'./dist/angular-webcomponents-demo/polyfills-es5.js',
'./dist/angular-webcomponents-demo/scripts.js',
'./dist/angular-webcomponents-demo/main-es5.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/analytics-counter.js');
await fs.copyFile('./dist/angular-webcomponents-demo/styles.css', 'elements/styles.css')
// await fs.copy('./dist/angular-webcomponents-demo/assets/', 'elements/assets/' )
})()