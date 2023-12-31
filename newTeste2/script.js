async function main() {
  const gl = document.querySelector('canvas').getContext('webgl');
  
  const m4 = twgl.m4;
  const v3 = twgl.v3;
  const vs = `
  attribute vec4 position;
  attribute vec2 texcoord;

  uniform sampler2D displacementMap;
  uniform mat4 projection;
  uniform mat4 view;
  uniform mat4 model;

  varying vec2 v_texcoord;

  void main() {
    float displacementScale = 10.0;
    float displacement = texture2D(displacementMap, texcoord).a * displacementScale;
    vec4 displacedPosition = position + vec4(0, displacement, 0, 0);
    gl_Position = projection * view * model * displacedPosition;
    v_texcoord = texcoord;
  }  
  `;

  const fs = `
  precision highp float;

  varying vec2 v_texcoord;

  uniform sampler2D displacementMap;
  uniform sampler2D colorTexture;

  void main() {
    // should make this a uniform so it's shared
    float displacementScale = 10.0;
    
    vec3 data = texture2D(displacementMap, v_texcoord).rgb;
    vec3 normal = data * 2. - 1.;

    vec3 color = texture2D(colorTexture, v_texcoord).rgb;
    
    // just hard code lightDir and color
    // to make it easy
    vec3 lightDir = normalize(vec3(1, -3, 2));
    float light = dot(lightDir, normal);
    
    vec3 finalColor = mix(color, color * (light * 0.5 + 0.5), 0.7);
    
    gl_FragColor = vec4(finalColor, 1);
  }
  `;

  // compile shader, link, look up locations
  const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

  // make some vertex data
  // calls gl.createBuffer, gl.bindBuffer, gl.bufferData for each array
  const bufferInfo = twgl.primitives.createPlaneBufferInfo(
      gl,
      96,  // width
      64,  // height
      96,  // quads across
      64,  // quads down
  );

  const img = await loadImage('teste.png');
  const imgMapColor = await loadImage('map.png');
  
  // get image data
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.canvas.width = 1600;
  ctx.canvas.height = 1600;
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  
  // generate normals from height data
  const displacementScale = 10;
  const data = new Uint8Array(imgData.data.length);
  for (let z = 0; z < imgData.height; ++z) {
    for (let x = 0; x < imgData.width; ++x) {
      const off = (z * img.width + x) * 4;
      const h0 = imgData.data[off];
      const h1 = imgData.data[off + 4] || 0;  // being lazy at edge
      const h2 = imgData.data[off + imgData.width * 4] || 0; // being lazy at edge
      const p0 = [x    , h0 * displacementScale / 255, z    ];
      const p1 = [x + 1, h1 * displacementScale / 255, z    ];
      const p2 = [x    , h2 * displacementScale / 255, z + 1];
      const v0 = v3.normalize(v3.subtract(p1, p0));
      const v1 = v3.normalize(v3.subtract(p2, p0));
      const normal = v3.normalize(v3.cross(v0, v1));
      data[off + 0] = (normal[0] * 0.5 + 0.5) * 255;
      data[off + 1] = (normal[1] * 0.5 + 0.5) * 255;
      data[off + 2] = (normal[2] * 0.5 + 0.5) * 255;
      data[off + 3] = h0;
    }
  }  

  const tex = twgl.createTexture(gl, {
    src: data,
    width: imgData.width,
    minMag: gl.LINEAR,
    wrap: gl.CLAMP_TO_EDGE,
  });

  const texColor = twgl.createTexture(gl, {
    src: imgMapColor,
    minMag: gl.LINEAR,
    wrap: gl.CLAMP_TO_EDGE,
  });

  function render(time) {
    time *= 0.000;  // seconds

    twgl.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    const fov = 60 * Math.PI / 180;
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const near = 0.1;
    const far = 200;
    const projection = m4.perspective(fov, aspect, near, far);

    const eye = [Math.cos(time) * 30, 10, Math.sin(time) * 30];
    const target = [0, 0, 0];
    const up = [0, 1, 0];
    const camera = m4.lookAt(eye, target, up);
    const view = m4.inverse(camera);
    const model = m4.identity();

    gl.useProgram(programInfo.program);

    // calls gl.bindBuffer, gl.enableVertexAttribArray, gl.vertexAttribPointer
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

    // calls gl.activeTexture, gl.bindTexture, gl.uniformXXX
    twgl.setUniformsAndBindTextures(programInfo, {
      projection,
      view,
      model,
      displacementMap: tex,
      colorTexture: texColor,
    });

    // calls gl.drawArrays or gl.drawElements
    twgl.drawBufferInfo(gl, bufferInfo);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = _ => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.src = url;
  });
} 

main();


