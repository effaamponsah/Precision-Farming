---
id: dashboard
title: Dashboard Structure
sidebar_label: Dashboard
---
Here, we explore some stuff such as the structure and the compositions of the dashboard and we run the web application.

## Dashboard

This dashboard was built with a python web framework known as the `flask`. It is used to write rapid and smaller applications where expansion is can be employed later. Thus flask is well-suited for our project.
[Learn more about flask](https://flask.org) and how to setup and qucikly use it.


### Structure

After cloning the repository from [here](https://github.com/effaamponsah/Precision-Farming), type
```cd Precision-Farming/dashboard``` and type ```ls```
The results displays the file structure of the dashboard. It is from the `dashboard` directory that the sensors and the codes for the web app are.

```bash
dashboard
├───combinedCode
│   └───__pycache__
├───data
├───readings
├───static
│   ├───app
│   ├───css
│   ├───img
│   ├───js
│   └───lib
│       ├───bootstrap
│       ├───chart.js
│       ├───d3
│       ├───datatables
│       ├───datatables-responsive
│       ├───Flot
│       ├───flot-spline
│       ├───font-awesome
│       │   └───css
│       ├───fullcalendar
│       ├───gmaps
│       ├───highlightjs
│       ├───images
│       ├───Ionicons
│       │   └───css
│       ├───jquery
│       ├───jquery-ui
│       ├───jquery.sparkline.bower
│       ├───jquery.steps
│       ├───jqvmap
│       │   └───maps
│       ├───medium-editor
│       ├───moment
│       ├───morris.js
│       ├───parsleyjs
│       ├───perfect-scrollbar
│       │   ├───css
│       │   └───js
│       ├───popper.js
│       ├───raphael
│       ├───rickshaw
│       ├───select2
│       │   ├───css
│       │   └───js
│       ├───spectrum
│       ├───SpinKit
│       └───summernote
│           └───font
├───templates
├───Utils
│   └───__pycache__
├───views
│   └───__pycache__
├───app.py
└───__pycache__
```

### Folders

Below are a few explanations to the folders and their uses.

- ```combinedCode``` It contains the modules codes which is used to read data from the sensors. It is made up of modules and submodules of individual sensor codes.
- ```template``` This contains the rendered templates on the screen
- ```static``` This contains all the static files served in our application

### Files

Below is an important file

- ```app.py``` It is the entry point of the app and all necessary changed to the application is done here. Its assumed that you have basic understanding of the [flask](flask.org) micro-web framework.

## Run App

Now that you have a fair idea of the structure of the project, lets run our application.

> Navigate into the dashbaord if you havent done so.

To run the application, simply type ```python3 app.py```
