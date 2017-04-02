"use strict"
const canvas = select("canvas")
const context = canvas.getContext("2d")

window.onkeydown = e => e.keyCode===32 && console.log("test")

