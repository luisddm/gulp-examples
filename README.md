# gulp-examples

The following examples illustrate some of the most common tasks a developer may wish to carry on constantly while developing a front-end app.

- [Reduce size](gulp-example-minify-concat) of the resources to save bandwidth and reduce the latency.
- [Preprocess or transpile](gulp-example-preprocess-transpile) the higher-level or non-supported code so the browser can execute it.
- [Compress](gulp-example-watch-deploy) the app to a compressed package ready to deploy and regenerate it when any change is made.
- [Refresh the app in the browser](gulp-example-browsersync) anytime a change is made to make sure it still works.

All the examples will work on any OSX system or any distribution of Linux with Node 6 (or newer) installed. They should work as well on a Windows OS properly configured, but I haven't tested it myself. Same goes for versions of Node prior to 6.

## Why use a build system?

Basically, a build system **automatizes a series of small and tedious repetitive tasks** that otherwise will be easily forgotten, especially when your small projects start to grow into much larger applications, heavy and bloated.

These tasks are meant to keep your code tidy and efficient, or preprocess it so it will be able to run in any browser.

Make was one of the first build systems. In the early days they were used to compile code into executable formats for an operating system.

However, in web development, we have a completely different set of practices and operations. Over the past few years, there has been an interest in using build systems to more capably handle the growing complexities of our applications.

As developers, these tools allow us to focus on **write code** while the rest of the tasks are taken care of.

## What is gulp?

Gulp is a streaming JavaScript build system built with Node; it leverages the power of **streams** to automate, organize, and run development tasks very quickly and efficiently.

By simply creating a **small file of instructions**, gulp can perform just about any development task you can think of.

Gulp uses **small, single-purpose plugins** to modify and process your project files. Additionally, you can chain, or pipe, these plugins together into more complex actions with full control of the order in which those actions take place.

Gulp is built upon **Node** and **npm**.

## What is Node?

A powerful JavaScript platform built on top of **Google Chrome's JavaScript runtime engine, V8**.

This gives us the ability to **write JavaScript code on a server**. Using Node, we now have the opportunity to write both the backend and frontend of a web application entirely in JavaScript.

Node ships with **npm, a package manager** that facilitates the installation, storage, and creation of modular components that you can use to create applications.

[Install Node on Linux via package manager](https://github.com/nodesource/distributions)

[Download Node installers for MacOSX & Windows](https://nodejs.org/en/)

## Why use gulp?

### Project automation

It brings order to the chaotic amount of tasks that need to be run throughout development.

To deliver better load times in your application, you would need to **compress your overall file sizes, optimize your images, or eliminate any unnecessary HTTP requests**.

There are many additional tasks that we can add to our list of automations. These include tasks such as **stylesheet preprocessing, transpiling from any other language to JS, or automatically refreshing your browser window upon any changes to your code**.

### Streams

Streams were originally introduced in Unix as a way to **"pipe" together small, single-purpose applications to perform complex, flexible operations**. Additionally, streams were created to operate on data without the need to buffer the entire file, leading to quicker processing. Piping these small applications together is what is referred to as a pipechain.

Like Unix, Node has its own built-in stream module. This stream module is what gulp uses to operate on your data and perform tasks. This allows developers to create small gulp plugins or node modules that perform single operations and then pipe them together with others to perform an entire chain of actions.

## Dependencies (packages)

We need to keep track of all the packages (or dependencies) that we use in our projects.

Node uses a file named `package.json` to store information about our project, and npm uses this same file to manage all of the package dependencies our project requires to run properly.

### Create a package.json file

Run npm's built-in init action:

`npm init`

Your command line will prompt you several times asking for basic information about the project. Most of this information is used primarily on the npm website if a developer decides to publish a Node package.

For our purposes, we will just use it to add our dependencies.

## Installing gulp

We are now ready to begin installing Node packages. The first and most important package we will install is gulp itself.

### Installing gulp locally

Before we install gulp, make sure you are in your project's root directory.

`npm install gulp --save-dev`

So, this command will use npm to contact the npm registry, and it will install gulp to our local directory. After using this command, you will notice that a new folder has been created that is named `node_modules`. This is where Node and npm store all of the installed packages and dependencies of your project. Your `packages.json` will also add a new entry in the list of devDependencies with the name of the new dependency so it can be loaded by gulp.

Additionally, npm has a `–-save` flag that saves the module to the list of dependencies instead of devDependencies. This list is usually made of external packages that are not used to build the application, but are meant to be deployed along with it to run in the client's browser, like jQuery, Bootstrap, Angular, etc.

However, these are usually managed with another package manager named [bower](https://bower.io/).

### Installing gulp globally

For many of the packages that we install, this will be all that is needed. With gulp, we must install it once again globally so that we can use gulp as a command-line application from anywhere in our file system.

`sudo npm install -g gulp`

We've only added a `-g` flag to the command, which instructs npm to install the package globally.

Be aware that the package will be installed in a system directory where the user usually has no write permissions, hence the `sudo` part. Therefore it will ask for root password before installing.

## Including dependencies (modules / plugins)

Gulp plugins are **small Node wrappers built for use inside of gulp** to provide a **single-purpose action** that can be **chained together** to create complex operations.

Node modules serve a broader purpose and can be used with gulp or independently.

There are two main places where you can look for them:

- You can take a look at the [npm website](https://www.npmjs.com) and search among 250k+ npm packages that to all kind of imaginable things. They can be plugins or modules.

- However, it is easier to begin with the [gulp website](http://gulpjs.com/plugins) that has links to 2500+ gulp plugins hosted in npm and approved by the gulp staff.

After adding all the dependencies with the `--save-dev` flag, we are ready to start writing our gulp tasks. But if instead you intend to run the examples in this repository, keep in mind that the dependencies are not stored here, and you should run the following command from the root directory of each example first thing.

`npm install`

This will grab all the dependencies from their respective repositories and install them locally at once.

## Main methods used in a gulp file

The following small list of methods is all that is needed to understand how to begin writing basic tasks. They each represent a specific purpose and will act as the building blocks of our gulp file.

### The task() method

`.task(string, function)`

The **basic wrapper** for which we create our tasks. It takes two arguments: a string value representing the name of the task and a function that will contain the code to execute upon running that task.

### The src() method

`.src(string || array)`

The **source files** that we plan on modifying. It accepts either a single string or an array of strings as an argument.

### The watch() method

`.watch(string, array)`

**Looks for changes in the files**. This will keep gulp running again right after any changes are made so that we don't need to rerun gulp manually any time we need to process our tasks.

### The dest() method

`.dest(string)`

Sets the **output destination of your processed file**. Most often, this will be used to output our data into a dist folder that will be either shared as a library or accessed by your application.

### The pipe() method

`.pipe(function)`

Will allow us to **pipe together smaller single-purpose plugins or applications** into a pipechain. This is what gives us full control of the order in which we would need to process our files.

## Writing a task

Now we are ready to start writing our own tasks and move on to the examples.

- ES5

```javascript
gulp.task(taskName, function() {
  return gulp.src(srcPath)
    .pipe(plugin1)
    .pipe(plugin2)
    .pipe(gulp.dest(destPath));
});
```

- ES6+

```javascript
gulp.task(taskName, () =>
  gulp.src(srcPath)
    .pipe(plugin1)
    .pipe(plugin2)
    .pipe(gulp.dest(destPath));
);
```

## Running a task

We can run a task just executing gulp in the root of our project followed by the name of the task.

`gulp taskName`

It is also possible to have a default task, which can be a regular task, or a list of other tasks. It will be executed just typing `gulp` in the command line with no arguments.
