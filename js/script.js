// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a Sphere.
 */
function calculateVolumeOfSphere() {
  // input
  const theRadious = parseFloat(document.getElementById("radious").value)
  // process
  const volumeOfSphere=  (4 / 3) * (Math.PI) * (theRadious **3)

  // output
  document.getElementById("volume").innerHTML =
    "Volume is: " + `${volumeOfSphere.toFixed(2)}` + " cm&sup3"
}