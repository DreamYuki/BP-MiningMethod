<style>
canvas {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -10;
}</style>

/**
 *3D海洋效应与 Canvas2D
 * 您可以更改注释 "效果属性" 下的属性
 */
 
// Init Context
let c = document.createElement('canvas').getContext('2d')
let postctx = document.body.appendChild(document.createElement('canvas')).getContext('2d')
let canvas = c.canvas