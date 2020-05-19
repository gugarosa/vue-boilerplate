# Vue Boilerplate: A Vue.js Front-end Application

## Welcome to Vue Boilerplate.

An easy-to-use solution to your visualization needs. Firstly, implemented along with the Vue.js framework, you can define your components, services, routes, and storages. Lastly, you can also use our own. We offer both solutions and all the essential tools that you need in order to construct a front-end. Please, follow along the next sections in order to learn more about this excellent tool.

Vue Boilerplate is compatible with the latest: **Vue.js**.

---

## Package guidelines

1. The very first information you need is in the very **next** section.
2. **Installing** is also easy if you wish to read the code and bump yourself into, follow along.
3. Note that there might be some **additional** steps in order to use our solutions.
4. If there is a problem, please do not **hesitate**, call us.

---

## Getting started: 60 seconds with Vue Boilerplate

First of all. Code is all commented. Yes, they are commented. Just browse to any file, chose your subpackage, and follow it. We have high-level code for most tasks we could think of.

Alternatively, if you wish to learn even more, please take a minute:

Vue Boilerplate is based on the following structure, and you should pay attention to its tree:

```
- vue-boilerplate
    - config
    - public
    - src
        - assets
        - components
        - configs
        - router
        - services
        - store
        - views
        - App.vue
        - main.js
        - packages.js
```

### Config

Essentially, this is the main configuration folder. All external configuration files should be placed here. For instance, we will use this folder for deployment purpose only.

### Public

This folder holds all the base public files that will be further generated and served. Only use if you need to change the favicon or configure any relevant header that must be present on HTML files.

### Source

Known as ```src```, this is where all the magic happens. Follow along the next items to understand what is happening here.

#### assets

External assets should be created and used here. We will be using SCSS as your pre-processor for CSS files. You can also add here static images if needed.

#### components

Every component should be placed here. An intelligent application uses a trade-off between when componentization should happen or not. For layout-related components, we assume this is a must.

#### configs

These are configuration objects that allow for easy-changing of static information. For example, you might want to change what your menu looks like or even the application's possible notifications.

#### router

Our application uses VueRouter as its navigation system. You can define whatever routes you want and use whatever guards you need to protect your routes.

#### services

External services should be placed here. We are encapsulating the Axios framework for any HTTP request. For each different API, we suggest that you create its file and folder.

#### store

In this application, we will be using Vuex as our storage provider. There are plenty of available examples in order to handle its usage. We will be mainly using for saving authorization- and user-related information.

#### App.vue

This is the Vue application entry point component. Only modify it if you know what you are doing.

#### main.js

This is the main javascript file that will bootstrap the Vue.js application.

#### packages.js

All external Javascript packages should be placed and loaded here.

---

## Installation

We believe that everything has to be easy. Not tricky or daunting, Vue Boilerplate will be the one-to-go package that you will need, from the very first installation to the daily-tasks implementing needs.

### Development

First of all, make sure that you have a Node.js environment installed, allowing the access to ```npm```or ```yarn``` commands.

Next, install the needed requirements by performing the following commands:

```
npm install | yarn install
```

Finally, you can start the development service:

```
npm run serve | yarn serve
```

All bootstrap commands were pre-loaded when this package was created. We have strictly followed the [Vue-CLI guide](https://cli.vuejs.org/guide/).

### Production

To ease your needs in a production environment, we ship this package in a Docker container. Make sure that ```docker``` and ```docker-compose``` are installed and accessible from the command line.

Make sure that you adjust your Nginx's needs in its configuration file ```config/nginx.conf``` before attempting to build and launch the container.

Finally, you can build the container by using:

```
docker-compose build
```

After the build process is finished, you can run the container in detached mode:

```
docker-compose up -d
```

If you ever need to perform maintenance or update the repository, please put the container down (ensure to use -v; otherwise it will not replace the build):

```
docker-compose down -v
```

---

## Environment configuration

Note that sometimes, there is a need for additional implementation. If needed, from here you will be the one to know all of its details.

### Ubuntu

No specific additional commands needed.

### Windows

No specific additional commands needed.

### MacOS

No specific additional commands needed.

---

## Support

We know that we do our best, but it is inevitable to acknowledge that we make mistakes. If you ever need to report a bug, report a problem, talk to us, please do so! We will be available at our bests at this repository or gustavo.rosa@unesp.br.

---