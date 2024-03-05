1. In terminal go to backend folder and type ```npm init -y```. it will initialize a json file.

2. inside the package.json file enter ```"type": "module"```

3. then again to terminal and install ```express``` and ```nodemon```
syntax: ```npm install express nodemon.```
4. now in under```package.json```file  enter ```"start": "node index.js",
    "dev": "nodemon index.js"``` under ```script```.

5. now create a file under backend ```index.js``` this will be the starter of our project.

6. * ```npm run dev```


```npm create vite@latest``` to create react app 

1. give project name
2. select framework
3. select varient (js)

### for tailwindcss
* go to tailwindCSS website and 
find copy this commands

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```
then
```
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```
copy>tailwindcss.config.js>inside component paste it.


 then inside index.css delete everything and paste
 ```
@tailwind base;
@tailwind components;
@tailwind utilities;
 ```

* 
```
npm i react-router-dom
```

*
```
npm i axios react-icons
```



## To run the code

### go to backend folder
```
cd backend
```
### then
``` npm run dev ```

### go to frontend folder
```
cd backend
```
### then
``` npm run dev ```
