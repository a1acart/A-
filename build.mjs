import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist/assets',{recursive:true});
for(const file of ['index.html','styles.css','script.js','assets/headphones.svg']) await copyFile(file,`dist/${file}`);
console.log('Built static site in dist/');
