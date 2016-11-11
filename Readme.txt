
Information Regarding Project Structure for various application sizes:
http://codingsmackdown.tv/blog/2013/04/19/angularjs-modules-for-great-justice/

Information Regarding Angularfire / TypeScript Template:
https://github.com/kenhowardpdx/angularfire-chat-typescript/


My Process 1.1:
1. Copy TeapotTemplate to new Teapot folder

2. Browse to new directory and link to global packages (prevents downloading between teapots). Any missing run "npm install -g package-name-goes-here".

npm link browser-sync; npm link del; npm link gulp; npm link gulp-debug; npm link gulp-inject; npm link gulp-rimraf; npm link gulp-sourcemaps; npm link gulp-tslint; npm link gulp-typescript; npm link superstatic;

to remove links:
npm unlink browser-sync; npm unlink del; npm unlink gulp; npm unlink gulp-debug; npm unlink gulp-inject; npm unlink gulp-rimraf; npm unlink gulp-sourcemaps; npm unlink gulp-tslint; npm unlink gulp-typescript; npm unlink superstatic;

3. Add src/app/app.ts and code by hand the basic angular example module class definition.
3a. Also need to create views (except for About/Contact) under src/views/app

4. Start web server: gulp serve


My Process 1.0
1. Copy TeapotTemplate to new Teapot folder

2. Browse to new directory and run "npm install" to have Node grab any new packages

3. Add src/app/app.ts and code by hand the basic angular example module class definition.
3a. Also need to create views (except for About/Contact) under src/views/app

4. Start web server: gulp serve



My Old process:
1. Create directory structure
     src
     src\app
     src\app\controllers
     src\app\directives
     src\app\models
     src\app\resources
     src\app\services
     src\css
     src\js
     src\views
     src\views\templates

2. tsd init
tsd query jquery angular angular-route angular-resource angularfire require --resolve --action install --save

3. Add tsconfig.json to root, type compiler in the file and autocomplete with the following:
Change module to AMD and add sourceMap: true
{
     "compilerOptions": {
          "target": "ES5",
          "module": "amd"
     }
}

4. Create package.json and add following contents:
{
  "name": "BosterJS",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "dependencies": {
    "browser-sync": "^2.8.2",
    "del": "^1.2.1",
    "superstatic": "^1.2.3"
  },
  "devDependencies": {
    "bower": "^1.3.1",
    "http-server": "^0.8.0",
    "gulp": "^3.8.11",
    "gulp-debug": "^2.0.1",
    "gulp-inject": "^1.2.0",
    "gulp-sourcemaps": "^1.5.1",
    "gulp-tslint": "^1.4.4",
    "gulp-typescript": "^2.5.0",
    "gulp-rimraf": "^0.1.1"
  },
  "scripts": {
    "start": "http-server -a 127.0.0.1 -p 8000",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Dave Boster",
  "license": "ISC"
}

5. npm install

6. copy tslint.js, readme.txt, gulpfile.js, gulpfile.config.js

7. Ctrl-shift-b, configure task runner, replace with following contents
{
     "version": "0.1.0",
     "command": "gulp",
     "isShellCommand": true,
     "tasks": [
          {
               "taskName": "default",
              
               "isBuildCommand": true,
              
               "showOutput": "silent",
              
               "problemMatcher": "$tsc"
          }
     ]
}

8. build successfully

9. Add app.css (body fix) index.html with bootstrap and initial angular/jquery references.

10. Add app.ts and code by hand the basic angular example module class definition
11. Build and make sure the js file gets created correctly with mapping
12. gulp serve
