 // criar o vertex shader
 var vertexShaderSource = `#version 300 es

 // um atributo 'in' é um input para um vertex shader
 // recebera dados de um buffer
 
 in vec2 a_position;
 
 // passa a resolução do canvas
 uniform vec2 u_resolution;
 uniform vec2 u_translation;
 
 // todo shader contem uma função main
 void main() {
    // adciona o movimento
    vec2 position = a_position + u_translation;

    // convert a posição de pixeis para 0.0 a 1.0
    vec2 zeroToOne = position / u_resolution;
 
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
     var translationLocation = gl.getUniformLocation(program, "u_translation");
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
     
     setLetter(gl);

     // atributos para o positionBuffer
     var size = 2;           // 2 componentes por iteração (cada parte tera 2 triangulos)
     var type = gl.FLOAT;    // dados com floats de 32 bits
     var normalize = false;  // nao normalizar os dados
     var stride = 0;         // passos para cada iteração
     var offset = 0;         // comeca no inicio do buffer
     
     gl.vertexAttribPointer(
         positionAttributeLocation, size, type, normalize, stride, offset);
     var translation = [0, 0];
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
         /* gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
         setLetter(gl); */
     
         // configure uma cor aleatoria
         gl.uniform4fv(colorLocation, color);
        
         gl.uniform2fv(translationLocation, translation);

         //desenhe o retangulo
         var primitiveType = gl.TRIANGLES;
         var offset = 0;
         var count = 12;
         gl.drawArrays(primitiveType, offset, count);
     }
 }
 
 // defina os valores dos pontos do retangulo e preencha o buffer
 function setLetter(gl){
     gl.bufferData(
        gl.ARRAY_BUFFER, 
        new Float32Array([
            // parte menor
            0, 0,
            30, 0,
            80, 70,
            30, 0,
            80, 70,
            80, 40,

            // parte maior
            0, 200,
            90, 0,
            120, 0,
            0, 200,
            30, 200,
            120, 0,
     ]), gl.STATIC_DRAW);
 } 
 
 
 
 
 main();
 
 