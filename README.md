# ng-loading-overlay
ng-loading-overlay is an [Angular.js](http://angularjs.org/) module to show customizable loading overlay.

## Installation
- run `bower install ng-loading-overlay`
- or `npm install ng-loading-overlay`
- or download zip from release page: https://github.com/KillerCodeMonkey/ng-loading-overlay/releases

## Usage
- load angular, ng-loading-overlay scripts in your index.html
- add dependency to your app module `var myAppModule = angular.module('loadingTest', ['ngLoadingOverlay']);`
- after that you can configure over $loadingOverlayConfigProvider and show/hide overlay with $loadingOverlay
- you can call show it multiple times --> a counter gets increased --> you need to call hide as many times you call show!
- the best --> you can use it to show only a backdrop or show something like a centered content

## Configuration with $loadingOverlayConfigProvider
- configure via defaultConfig(templateString, backgroundStyle, textColor)-Function
- templateString: a html string (default: `<b>Please wait</b>`)
- backgroundStyle: a css value for background-property (default: `rgba(0, 0, 0, 0.5)`)
- textColor: a css value for color-property (default: `#fff`)
- zIndex: a css value for z-index (default: `9999`)

## Get Default with $loadingOverlayConfig
- a provider you can inject in your app components
- $loadingOverlayConfig.get():
  - return defaultConfig object

## Show and hide with $loadingOverlay
- a service you can inject in your app components
- provides show()- and hide()-functions
- $loadingOverlay.show(templateString, backgroundStyle, textColor):
  - show overlay or changes overlay with optional parameters
  - increase open layers counter by 1
- $loadingOverlay.hide():
  - decrease open layers counter by 1
  - hides overlay if counter gets 0

 ## Additional
 - the overlay has the id `ng-loading-overlay` so you can animate ng-show and ng-hide
