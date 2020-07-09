const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/angular9webcomponent/runtime-es2015.js',
        './dist/angular9webcomponent/polyfills-es2015.js',
        './dist/angular9webcomponent/main-es2015.js'
      ];

      await fs.ensureDir('output');
      await concat(files, 'output/web-component.js');
}
concatenate();