/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
const NativeUI = require('NativeUI');
const Textures = require('Textures'); 
const Materials = require('Materials'); 

// Locate the plane in the Scene
//const plane = Scene.root.find('plane0');

const plant = Scene.root.find('large_plant');
const plant1 = Scene.root.find('medium_plant');
const plant2 = Scene.root.find('small_plant');



const texture0 = Textures.get('one');
const texture1 = Textures.get('two');
const texture2 = Textures.get('small_plant_icon');



const picker = NativeUI.picker; 

const index = 0;

const configuration = { 
	selectedIndex: index, 
	items: [ 
	{image_texture: texture0}, 
	{image_texture: texture1}, 
	{image_texture: texture2}
	]
};

picker.configure(configuration);
picker.visible = true;
picker.selectedIndex.monitor().subscribe(function(index) {

	if(index.newValue == 0){
		plant.hidden = false;
		plan1.hidden = true;
		plant2.hidden = true;


	}else if (index.newValue == 1) {
		plant.hidden = true;
		plant1.hidden = false;
		plant2.hidden = true;

	}else if (index.newValue == 2) {
		plant.hidden = true;
		plant1.hidden = true;
		plant2.hidden = false;

	}
});
