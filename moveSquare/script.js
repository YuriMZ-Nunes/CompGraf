 // criar o vertex shader
var vertexShaderSource = `#version 300 es

// um atributo 'in' é um input para um vertex shader
// recebera dados de um buffer

in vec2 a_position;

// passa a resolução do canvas
uniform vec2 u_resolution;

// todo shader contem uma função main
void main() {

  // convert a posição de pixeis para 0.0 a 1.0
  vec2 zeroToOne = a_position / u_resolution;

  // converte de 0->1 para 0->2
  vec2 zeroToTwo = zeroToOne * 2.0;

  // converte de 0->2 para -1->+1 (clipspace)
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
}
`;

var fragmentShaderSource = `#version 300 es

precision highp float;

uniform vec4 u_color;

// precisamos declarar um output para o fragment shader
out vec4 outColor;

void main() {
  outColor = u_color;
}
`;

function main(){
    // configurar o canvas e o webgl
    var canvas = document.querySelector("canvas");
    var gl = canvas.getContext("webgl2");
    if (!gl)
        alert("aaa");
    
    // criar programa com os shaders feitos
    var program = webglUtils.createProgramFromSources(gl, 
        [vertexShaderSource, fragmentShaderSource]);
    
    // procura no shader onde os dados precisam ir
    var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    var colorLocation = gl.getUniformLocation(program, "u_color");
    
    // criar o buffer
    var positionBuffer = gl.createBuffer();
    
    // criar um objeto vertex array
    var vao = gl.createVertexArray();
    
    // e o vincule com o bind
    gl.bindVertexArray(vao);
    
    // ligue o atributo do array
    gl.enableVertexAttribArray(positionAttributeLocation);
    
    // vincule o array no positionBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // atributos para o positionBuffer
    var size = 2;           // 2 componentes (2 triangulos para formar um retangulo)
    var type = gl.FLOAT;    // dados com floats de 32 bits
    var normalize = false;  // nao normalizar os dados
    var stride = 0;         // passos para cada iteração
    var offset = 0;         // comeca no inicio do buffer
    
    gl.vertexAttribPointer(
        positionAttributeLocation, size, type, normalize, stride, offset);
    
    // criação de variaveis para translação, e dimenções do retangulo
    var translation = [0, 0];
    var width = 100;
    var height = 30;
    var color = [Math.random(), Math.random(), Math.random(), 1];
    
    drawScene();
    
    // configurar interface para receber dados do slide
    webglLessonsUI.setupSlider("#x", {slide: updatePosition(0), max: gl.canvas.width});
    webglLessonsUI.setupSlider("#y", {slide: updatePosition(1), max: gl.canvas.height});
    
    function updatePosition(index){
        return function(event, ui){
            translation[index] = ui.value;
            drawScene();
        };
    }
    
    function drawScene(){
        webglUtils.resizeCanvasToDisplaySize(gl.canvas);
    
        // diga como converter o clipspace para pixels
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
        // limpe o canvas
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
        // use o programa
        gl.useProgram(program);
    
        // vincule o atributo/buffer que queremos
        gl.bindVertexArray(vao);
    
        // passe a resolução do canvas para convertermos de pixels para clipspace no shader
        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
    
        // atualize o position buffer com as posições do retangulo
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        setRectangle(gl, translation[0], translation[1], width, height);
    
        // configure uma cor aleatoria
        gl.uniform4fv(colorLocation, color);
    
        //desenhe o retangulo
        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 6;
        gl.drawArrays(primitiveType, offset, count);
    }
}

// defina os valores dos pontos do retangulo e preencha o buffer
function setRectangle(gl, x, y, width, height){
    var x1 = x;
    var x2 = x + width;
    var y1 = y;
    var y2 = y + height;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2,
    ]), gl.STATIC_DRAW);
} 




main();

