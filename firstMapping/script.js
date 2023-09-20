// Get a reference to the WebGL canvas element
const canvas = document.getElementById("canvas");

// Initialize WebGL context
const gl = canvas.getContext("webgl");
if (!gl) {
    alert("WebGL is not supported by your browser.");
}

// Shader sources (vertex and fragment shaders)
const vertexShaderSource = `
attribute vec3 a_position; // Vertex positions
attribute vec2 a_texcoord; // Texture coordinates

uniform mat4 u_modelViewMatrix; // Model-view matrix
uniform mat4 u_projectionMatrix; // Projection matrix

uniform sampler2D u_heightMap; // Height map texture
uniform float u_scale; // Scale factor for displacement

varying vec2 v_texcoord;
varying float v_height;

void main() {
    v_texcoord = a_texcoord;

    // Sample the height map texture using the texture coordinates
    vec4 heightMapColor = texture2D(u_heightMap, a_texcoord);
    
    // Calculate the new vertex position with displacement
    vec3 displacedPosition = a_position + vec3(0.0, 0.0, heightMapColor.r * u_scale);
    
    // Calculate the final position in view and projection space
    gl_Position = u_projectionMatrix * u_modelViewMatrix * vec4(displacedPosition, 1.0);
    
    // Pass the height value to the fragment shader
    v_height = heightMapColor.r;
}
`;

const fragmentShaderSource = `
    precision mediump float;

    varying vec2 v_texcoord;
    varying float v_height;

    uniform sampler2D u_texture; // Terrain texture

    void main() {
        // Sample the terrain texture using the displaced texture coordinates
        vec4 texColor = texture2D(u_texture, v_texcoord);
        
        // Apply some lighting based on the height
        float lighting = max(0.2, v_height * 2.0); // Adjust the lighting factor as needed
        
        // Final fragment color with lighting
        gl_FragColor = vec4(texColor.rgb * lighting, texColor.a);
    }               
`;

// Compile and link shaders
function createShader(gl, sourceCode, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation failed:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

if (!vertexShader || !fragmentShader) {
    alert("Failed to compile shaders.");
}

// Create and link the shader program
const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error("Shader program linking failed:", gl.getProgramInfoLog(shaderProgram));
    gl.deleteProgram(shaderProgram);
}

gl.useProgram(shaderProgram);

// Define vertex data for a simple grid or plane
const positions = []; // Array of vertex positions
const texCoords = []; // Array of texture coordinates

// Populate positions and texCoords arrays with your terrain data

// Create and bind vertex buffer objects (VBOs)
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

const texCoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

// Define and enable vertex attributes
const positionAttributeLocation = gl.getAttribLocation(shaderProgram, "a_position");
gl.enableVertexAttribArray(positionAttributeLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

const texCoordAttributeLocation = gl.getAttribLocation(shaderProgram, "a_texcoord");
gl.enableVertexAttribArray(texCoordAttributeLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);

// Load height map and terrain textures
const heightMapTexture = gl.createTexture();
const terrainTexture = gl.createTexture();

function loadTexture(url, texture, textureUnit) {
  return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = function () {
          gl.activeTexture(textureUnit);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
          gl.generateMipmap(gl.TEXTURE_2D);

          // Set texture parameters (optional, adjust as needed)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

          resolve(texture);
      };
      image.onerror = function () {
          reject(new Error(`Failed to load image: ${url}`));
      };
      image.src = url;
  });
}

// Load height map texture
loadTexture("moonBump.jpg", heightMapTexture, gl.TEXTURE0)
  .then(() => {
      gl.uniform1i(heightMapLocation, 0); // Set the texture unit to 0
  })
  .catch((error) => {
      console.error(error);
  });

// Load terrain texture
loadTexture("moon.jpg", terrainTexture, gl.TEXTURE1)
  .then(() => {
      gl.uniform1i(textureLocation, 1); // Set the texture unit to 1
  })
  .catch((error) => {
      console.error(error);
  });

// Implement texture loading and binding here

// Set uniform values
const modelViewMatrixLocation = gl.getUniformLocation(shaderProgram, "u_modelViewMatrix");
const projectionMatrixLocation = gl.getUniformLocation(shaderProgram, "u_projectionMatrix");
const heightMapLocation = gl.getUniformLocation(shaderProgram, "u_heightMap");
const scaleLocation = gl.getUniformLocation(shaderProgram, "u_scale");
const textureLocation = gl.getUniformLocation(shaderProgram, "u_texture");

function degToRad(d) {
  return d * Math.PI / 180;
}

var fieldOfViewRadians = degToRad(60);

// Initialize camera and matrices




// Define camera properties
const cameraPosition = [0, 10, 20]; // Camera position (adjust as needed)
const targetPosition = [0, 0, 0];  // Camera target position (adjust as needed)
const upDirection = [0, 1, 0];     // Up direction (usually [0, 1, 0])

// Define field of view, aspect ratio, and near/far clipping planes
const fov = 60;                      // Field of view (in degrees)
const aspectRatio = canvas.width / canvas.height; // Adjust as needed
const near = 0.1;                    // Near clipping plane
const far = 1000.0;                  // Far clipping plane

var projectionMatrix =
        m4.perspective(fieldOfViewRadians, aspectRatio, 1, 2000);

var cameraMatrix = m4.lookAt(cameraPosition, targetPosition, upDirection);

var viewMatrix = m4.inverse(cameraMatrix);
// Set up perspective projection matrix
//mat4.perspective(projectionMatrix, glMatrix.toRadian(fov), aspectRatio, near, far);

// Set up view matrix (camera)
//mat4.lookAt(viewMatrix, cameraPosition, targetPosition, upDirection);

var viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);

// Initialize the model matrix (identity matrix for the terrain)

// Pass matrices to the shader
gl.uniformMatrix4fv(modelViewMatrixLocation, false, viewMatrix);
gl.uniformMatrix4fv(projectionMatrixLocation, false, projectionMatrix);

// Render the terrain
function render() {
    // Implement rendering logic here

    // Use gl.drawArrays or gl.drawElements to render the terrain

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Update any animations or camera movements here if needed

    // Bind height map texture
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, heightMapTexture);

    // Bind terrain texture
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, terrainTexture);

    // Set the scale factor for displacement (adjust as needed)
    gl.uniform1f(scaleLocation, 0.2); // Example scale factor

    // Set any other shader uniforms as needed

    // Render the terrain using gl.drawArrays or gl.drawElements
    // Example:
    // gl.drawArrays(gl.TRIANGLES, 0, numVertices);

    requestAnimationFrame(render);
}

render();