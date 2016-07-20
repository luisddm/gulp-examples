# gulp-examples

All the examples will work on any system with MacOSX or any distribution of Linux with Node 6 (or newer) installed. They should work as well in a Windows OS properly configured, but I haven't tested them myself. Same goes for versions of Node prior to 6.

## Why use a build system?

As you progress, your small projects start to grow into much larger applications, heavy and bloated.

In the earlier days, you performed a series of mundane operations each time you modify your code to keep it small and efficient.

But in order to carry on these repetitive tasks there is a better way. The solution to this lies in utilizing build systems.

Make was one of the first build systems. They were used to compile code into executable formats for an operating system.

However, in web development, we have a completely different set of practices and operations. Over the past few years, there has been an interest in using build systems to more capably handle the growing complexities of our applications.

As developers, these tools allow us to focus on what we should do best: **write code**.

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

First and foremost, the ability to automate your workflow is incredibly valuable. It brings order to the chaotic amount of tasks that need to be run throughout development.

Let's imagine that you recently developed a big application, but instead of being able to allow the necessary time to put together a proper build system, you were pressured into completing it within an incredibly short timeframe.

To deliver better load times in your application, you would need to **compress your overall file sizes, optimize your images, eliminate any unnecessary HTTP requests**.

You could implement a step in your workflow to handle each of these manually, but the problem is that workflows often flow forward and backward. No one is infallible, and we all make mistakes. And ideally you want a sustainable solution so you can provide this across all of your team's future projects as well.

The only practical way to handle optimizations like these is to automate them as an ongoing workflow step. Whether we are just starting, finishing up, or returning to our code to fix bugs, our optimizations will be handled for us.

There are many additional tasks that we can add to our list of automations. These include tasks such as **CSS preprocessing, running an HTML server, and automatically refreshing your browser window upon any changes to your code**.

### Streams

At the heart of gulp is something called streams, and this is what sets it apart from other JavaScript build systems.

Streams were originally introduced in Unix as a way to "pipe" together small, single-purpose applications to perform complex, flexible operations. Additionally, streams were created to operate on data without the need to buffer the entire file, leading to quicker processing. Piping these small applications together is what is referred to as a pipechain. This is one of the core components of how we will organize and structure our tasks in gulp.

Like Unix, Node has its own built-in stream module. This stream module is what gulp uses to operate on your data and perform tasks. This allows developers to create small gulp plugins or node modules that perform single operations and then pipe them together with others to perform an entire chain of actions on your data.

### Code over configuration

Another reason why many developers find gulp to be a more natural alternative to other JavaScript build systems is because the build  file you create is written in code, not config.

However, this may be a matter of personal preference.

## Dependencies

We need to keep track of all the packages (or dependencies) that we use in our projects.

Node uses a file named package.json to store information about our project, and npm uses this same file to manage all of the package dependencies our project requires to run properly.

In any project using gulp, it is always a great practice to create this file ahead of time so that you can easily populate your dependency list as you are installing packages or plugins.

### Create a package.json file

We will need to run npm's built-in init action:

`npm init`

Your command line will prompt you several times asking for basic information about the project. Most of this information is used primarily on the npm website if a developer decides to publish a Node package.

For our purposes, we will just use it to properly add our dependencies as we move forward.

You can take a look at the npm website https://www.npmjs.com/ and search among 250k+ npm packages that to all kind of imaginable things.

However, it is easier to begin with the gulp website (http://gulpjs.com/plugins/) that has links to 2500+ gulp plugins hosted in npm and approved by the gulp staff.

## Installing gulp

We are now ready to begin installing Node packages. The first and most important package we will install is gulp itself.

### Installing gulp locally

Before we install gulp, make sure you are in your project's root directory.

`npm install gulp --save-dev`

Additionally, npm has a –-save flag that saves the module to the list of devDependencies. These dependency lists are used to separate the modules that a project depends on to run, and the modules a project depends on when in development.

So, this command will use npm to contact the npm registry, and it will install gulp to our local directory. After using this command, you will notice that a new folder has been created that is named node_modules. This is where Node and npm store all of the installed packages and dependencies of your project.

### Installing gulp globally

For many of the packages that we install, this will be all that is needed. With gulp, we must install it once again globally so that we can use gulp as a command-line application from anywhere in our  le system in any of the projects that we use. To install gulp globally, use the following command:

`sudo npm install -g gulp`

In this command, not much has changed compared to the original command where we installed gulp locally. We've only added a -g flag to the command, which instructs npm to install the package globally.

At first, this can be a little confusing, and for many packages it won't apply. Similar build systems actually separate these usages into two different packages that must be installed separately; one that is installed globally for command-line use and another installed locally in your project.

## Anatomy of a gulp file

Before we can begin writing tasks, we should take a look at the anatomy and structure of a gulp file. Examining the code of a gulp file will allow us to better understand what is happening as we run our tasks.

The following small list of methods is all that is needed to understand how to begin writing basic tasks. They each represent a specific purpose and will act as the building blocks of our gulp file.

### The task() method

`.task(string, function)`

The basic wrapper for which we create our tasks. It takes two arguments: a string value representing the name of the task and a function that will contain the code to execute upon running that task.

### The src() method

`.src(string || array)`

The source files that we plan on modifying. It accepts either a single string or an array of strings as an argument.

### The watch() method

`.watch(string, array)`

Looks for changes in the files. This will keep gulp running again right after any changes are made so that we don't need to rerun gulp manually any time we need to process our tasks.

### The dest() method

`.dest(string)`

Sets the output destination of your processed file. Most often, this will be used to output our data into a dist folder that will be either shared as a library or accessed by your application.

### The pipe() method

`.pipe(function)`

Will allow us to pipe together smaller single-purpose plugins or applications into a pipechain. This is what gives us full control of the order in which we would need to process our files.

## Including modules / plugins

When writing a gulp file, you will always start by including the modules or plugins you are going to use in your tasks. These can be both gulp plugins or Node modules, based on what your needs are.

Gulp plugins are small Node wrappers built for use inside of gulp to provide a single-purpose action that can be chained together to create complex operations for your data.

Node modules serve a broader purpose and can be used with gulp or independently.

## Writing a task

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

# Examples

- [Reducing size tasks](gulp-example-minify-concat)
- [Preprocessing](gulp-example-preprocess-transpile)
- [Deploy](gulp-example-watch-deploy)
- [Development](gulp-example-browsersync)
