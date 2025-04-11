// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a Sphere.
 */
function calculateFahrenheittoCelsius() {
  // input
  const Fahrenheit = parseFloat(document.getElementById("degresFahrenheit").value)
  // process
  const degresCelsius =  (Fahrenheit- 32) * (5/9)

  // output
  document.getElementById("temperature").innerHTML =
    "Temperature is: " + `${degresCelsius.toFixed(2)}` + " °C "
}