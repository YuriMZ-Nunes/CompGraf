"use strict";


// Vertex shader
var vsSource = `#version 300 es
    precision highp float;

    in vec4 a_position;
    in vec2 a_texcoord;

    uniform mat4 u_matrix;

    out vec2 v_texcoord;

    void main() {
        gl_Position = u_matrix * a_position;
        v_texcoord = a_texcoord;
    }
`;

// Fragment shader
var fsSource = `#version 300 es
    precision highp float;

    in vec2 v_texcoord;

    uniform sampler2D u_heightmap;
    uniform sampler2D u_texture;

    void main() {
        vec4 heightColor = texture2D(u_heightmap, v_texcoord);
        vec4 textureColor = texture2D(u_texture, v_texcoord);
        gl_FragColor = mix(textureColor, vec4(0.0, 0.5, 0.0, 1.0), heightColor.r);
    }
`;

// Create shaders
/* function createShader(gl, sourceCode, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(`Error compiling ${type === gl.VERTEX_SHADER ? "vertex" : "fragment"} shader: ${gl.getShaderInfoLog(shader)}`);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

// Create the program
function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Error linking program:", gl.getProgramInfoLog(program));
        return null;
    }
    return program;
}
 */
// Create shaders and program
/* const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);
const program = createProgram(gl, vertexShader, fragmentShader); */


// WebGL variables
let canvas = document.getElementById("canvas");
let gl = canvas.getContext("webgl2");

var program = webglUtils.createProgramFromSources(gl,
    [vsSource, vsSource]);

var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
var texcoordAttributeLocation = gl.getAttribLocation(program, "a_texcoord");
var heightmapUniformLocation = gl.getUniformLocation(program, "u_heightmap");
var textureUniformLocation = gl.getUniformLocation(program, "u_texture");
var matrixLocation = gl.getUniformLocation(program, "u_matrix");

var positionBuffer = gl.createBuffer();
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);
gl.enableVertexAttribArray(positionAttributeLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
setGeometry(gl);

var size = 3;          // 3 components per iteration
var type = gl.FLOAT;   // the data is 32bit floats
var normalize = false; // don't normalize the data
var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(
    positionAttributeLocation, size, type, normalize, stride, offset);

var texcoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
setTexcoords(gl);
gl.enableVertexAttribArray(texcoordAttributeLocation);

var size = 2;          // 2 components per iteration
var type = gl.FLOAT;   // the data is 32bit floating point values
var normalize = true;  // convert from 0-255 to 0.0-1.0
var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next color
var offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(
    texcoordAttributeLocation, size, type, normalize, stride, offset);


var textureMap = gl.createTexture();
gl.activeTexture(gl.TEXTURE0 + 0);
gl.bindTexture(gl.TEXTURE_2D, textureMap);

gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 255, 255]));

var terrainTexture = new Image();
terrainTexture.src = "map.png";
terrainTexture.addEventListener('load', function(){
    gl.bindTexture(gl.TEXTURE_2D, textureMap);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, terrainTexture);
    gl.generateMipmap(gl.TEXTURE_2D);
})

var textureHeight = gl.createTexture();
gl.activeTexture(gl.TEXTURE0 + 0);
gl.bindTexture(gl.TEXTURE_2D, textureHeight);

gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 255, 255]));

var heightmapTexture = new Image();
heightmapTexture.src = "Erosion.png";
heightmapTexture.addEventListener('load', function(){
    gl.bindTexture(gl.TEXTURE_2D, textureHeight);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, heightmapTexture);
    gl.generateMipmap(gl.TEXTURE_2D);
})


/* gl.uniformMatrix4fv(projectionUniformLocation, false, projectionMatrix);
gl.uniformMatrix4fv(viewUniformLocation, false, viewMatrix);

var positionBuffer = gl.createBuffer();

var vao = gl.createVertexArray();

gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);



gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);


var texcoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
gl.bufferData(gl.ARRAY_BUFFER, texcoords, gl.STATIC_DRAW);

var indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

gl.enableVertexAttribArray(positionAttributeLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);
setGeometry(gl);

gl.enableVertexAttribArray(texcoordAttributeLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
gl.vertexAttribPointer(texcoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);
setTextcoords(gl); */


// Create terrain geometry
var positions = [];

var texcoords = [];

var gridSize = 100;

for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
        var xPos = (x / (gridSize - 1)) * 2 - 1; // Range from -1 to 1
        var yPos = (y / (gridSize - 1)) * 2 - 1; // Range from -1 to 1
        var zPos = 0; // You can adjust this for terrain elevation

        var u = x / (gridSize - 1);
        var v = y / (gridSize - 1);

        positions.push(xPos, yPos, zPos);
        texcoords.push(u, v);
    }
}

var indices = [];

for (let y = 0; y < gridSize - 1; y++) {
    for (let x = 0; x < gridSize - 1; x++) {
        var topLeft = y * gridSize + x;
        var topRight = topLeft + 1;
        var bottomLeft = (y + 1) * gridSize + x;
        var bottomRight = bottomLeft + 1;

        indices.push(topLeft, topRight, bottomLeft);
        indices.push(topRight, bottomRight, bottomLeft);
    }
}



// Pass the projection and view matrices to the shaders

// Create textures (heightmap and terrain texture)
/* function loadTexture(url) {
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, url);
    gl.generateMipmap(gl.TEXTURE_2D);
    return texture;
} */



/* 
var heightmapTexture = loadTexture("Erosion.png"); // Replace with your heightmap image
var terrainTexture = loadTexture("map.png"); // Replace with your terrain texture
 */
// Render loop
function drawScene() {

    webglUtils.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    gl.bindVertexArray(vao);

    gl.useProgram(program);

    var camera = {
        position: [0, 0, 2], // Initial camera position (x, y, z)
        target: [0, 0, 0], // Initial camera target (x, y, z)
        up: [0, 1, 0], // Up vector (x, y, z)
        fov: 45, // Field of view in degrees
        aspect: canvas.clientWidth / canvas.clientHeight,
        near: 0.1,
        far: 100,
    };
    
    function toRadians(s){
        var rad = s/180 * Math.PI;
        return rad;
    }
    
    // Create a perspective matrix for the camera
    var projectionMatrix = m4.perspective(
        toRadians(camera.fov),
        camera.aspect,
        camera.near,
        camera.far
    );
    
    // Create a view matrix for the camera
    var viewMatrix = m4.lookAt(camera.position, camera.target, camera.up);

    var viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);

    var matrix = m4.xRotate(viewProjectionMatrix, 0);
    matrix = m4.yRotate(matrix, 0);

    gl.uniformMatrix4fv(matrixLocation, false, matrix);

    /* gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textureHeight);
    gl.uniform1i(heightmapUniformLocation, 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, textureMap);
    gl.uniform1i(textureUniformLocation, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.enableVertexAttribArray(texcoordAttributeLocation);
    gl.vertexAttribPointer(texcoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0); */

    requestAnimationFrame(drawScene);
}

drawScene();