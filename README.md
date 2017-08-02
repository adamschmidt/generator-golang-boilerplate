# generator-golang-boilerplate

[![Build Status](https://travis-ci.org/adamschmidt/generator-golang-boilerplate.svg?branch=master)](/adamschmidt/generator-golang-boilerplate)

> Yeoman generator for Golang projects - quick setup of a project with a build script and Docker configuration

# About

The Golang boilerplate generator enables you to bootstrap a Golang project. The default generator produces a structure to support a single binary application.

## Installation
```bash
# Make sure both is installed globally
npm install -g yo
npm install -g generator-golang-boilerplate
```

## Setting up Projects

The Yeoman generator needs two arguments supplied on the command line: your website domain; and your app name.

```bash
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo golang-boilerplate mysite.org testapp
```

## Working on Your New Project

Once you've initialised your application, there are a few make tasks available:

* Run `make install-build-deps install-dev-tools` to install the development tools and initial dependencies (required)
* You can build the application to run locally using `make install`
* With a Docker machine created and the appropriate environment variables set, you can build and run the application inside a container using `make deploy-local`
