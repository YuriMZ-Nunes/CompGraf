var ggbApplet = document.querySelector("#ggbApplet");

function gbbOnInit(param) {
  if (param == "gbbApplet") {
    ggbApplet.registerObjectUpdateListener("A", "pointListener");
    ggbApplet.registerObjectUpdateListener("B", "abcListener");
    ggbApplet.registerObjectUpdateListener("C", "abcListener");
    ggbApplet.registerObjectUpdateListener("D", "abcListener");
  }
}

var parameters = {
  id: "ggbApplet",
  width: 900,
  height: 900,
  filename: "Curve.ggb",
  ggbBase64:
    "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",
};

var fourPoints = new Array();

parameters.appletOnLoad = function teste(api) {
  fourPoints[0] = ggbApplet.getXcoord("A");
  fourPoints[1] = ggbApplet.getYcoord("A");

  fourPoints[2] = ggbApplet.getXcoord("B");
  fourPoints[3] = ggbApplet.getYcoord("B");

  fourPoints[4] = ggbApplet.getXcoord("C");
  fourPoints[5] = ggbApplet.getYcoord("C");

  fourPoints[6] = ggbApplet.getXcoord("D");
  fourPoints[7] = ggbApplet.getYcoord("D");

  function updateListener(objName) {
    strVal = api.getValueString(objName);

    if (objName == "A") {
      fourPoints[0] = ggbApplet.getXcoord("A");
      fourPoints[1] = ggbApplet.getXcoord("A");
    } else if (objName == "B") {
      fourPoints[2] = ggbApplet.getXcoord("B");
      fourPoints[3] = ggbApplet.getXcoord("B");
    } else if (objName == "C") {
      fourPoints[4] = ggbApplet.getXcoord("C");
      fourPoints[5] = ggbApplet.getXcoord("C");
    } else if (objName == "D") {
      fourPoints[6] = ggbApplet.getXcoord("D");
      fourPoints[7] = ggbApplet.getXcoord("D");
    }
  }

  api.registerUpdateListener(updateListener);
};

var views = {
  is3D: 0,
  AV: 1,
  SV: 0,
  CV: 0,
  EV2: 0,
  CP: 0,
  PC: 0,
  DA: 0,
  FI: 0,
  macro: 0,
};
var applet = new GGBApplet(parameters, "5.0", views);
window.onload = function () {
  applet.inject(ggbApplet);
};
applet.setPreviewImage(
  "data:image/gif;base64,R0lGODlhAQABAAAAADs=",
  "https://www.geogebra.org/images/GeoGebra_loading.png",
  "https://www.geogebra.org/images/applet_play.png"
);

async function main(fourPoints) {
  const gl = document.querySelector("canvas").getContext("webgl2");

  const m4 = twgl.m4;
  const v3 = twgl.v3;
  const vs = `
    attribute vec4 position;
    attribute vec2 texcoord;
    attribute vec3 normal;
  
    uniform sampler2D displacementMap;
    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 model;
  
    varying vec2 v_texcoord;

    varying vec3 fragPosition; // Pass fragment position to the fragment shader
    varying vec3 fragNormal;
  
    void main() {
        float displacementScale = 10.0;
        float displacement = texture2D(displacementMap, texcoord).a * displacementScale;
        vec4 displacedPosition = position + vec4(0, displacement, 0, 0);
        gl_Position = projection * view * model * displacedPosition;
        v_texcoord = texcoord;

        mat3 normalMatrix = mat3(view * model);
        fragNormal = normalize(normalMatrix * normal);
        fragPosition = (view * model * displacedPosition).xyz;
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

  const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

  // ATRIBUTOS DO PLANO
  const bufferInfo = twgl.primitives.createPlaneBufferInfo(
    gl,
    96, // width
    64, // height
    96, // quads across
    64 // quads down
  );

  // ATRIBUTOS DO CUBO
  const cubeGeometry = twgl.primitives.createCubeBufferInfo(gl, 2);
  let cubeRender = true;

  // ATRIBUTOS DA ESFERA
  const sphereRadius = 1;
  const numSlices = 32;
  const numStacks = 16;

  let sphereIndex = -1;

  const sphereGeometry = twgl.primitives.createSphereVertices(
    sphereRadius,
    numSlices,
    numStacks
  );

  const sphereBufferInfo = twgl.createBufferInfoFromArrays(gl, sphereGeometry);

  let spheres = [0];

  // ATRIBUTOS DA CAMERA
  const fov = (60 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const near = 0.1;
  const far = 66;
  const projection = m4.perspective(fov, aspect, near, far);
  let view;
  let camera;
  let target = [];
  let eye;

  // CARREGAR IMAGENS
  const img = await loadImage("teste.png");
  const imgMapColor = await loadImage("map.png");
  const imgSphere = await loadImage("moon.jpg");
  const imgCube = await loadImage("target.jpg");

  // CRIACAO DO PLANO COM AS ALTURAS
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = 1600;
  ctx.canvas.height = 1600;
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, img.width, img.height);

  const displacementScale = 10;
  const data = new Uint8Array(imgData.data.length);
  for (let z = 0; z < imgData.height; ++z) {
    for (let x = 0; x < imgData.width; ++x) {
      const off = (z * img.width + x) * 4;
      const h0 = imgData.data[off];
      const h1 = imgData.data[off + 4] || 0;
      const h2 = imgData.data[off + imgData.width * 4] || 0;
      const p0 = [x, (h0 * displacementScale) / 255, z];
      const p1 = [x + 1, (h1 * displacementScale) / 255, z];
      const p2 = [x, (h2 * displacementScale) / 255, z + 1];
      const v0 = v3.normalize(v3.subtract(p1, p0));
      const v1 = v3.normalize(v3.subtract(p2, p0));
      const normal = v3.normalize(v3.cross(v0, v1));
      data[off + 0] = (normal[0] * 0.5 + 0.5) * 255;
      data[off + 1] = (normal[1] * 0.5 + 0.5) * 255;
      data[off + 2] = (normal[2] * 0.5 + 0.5) * 255;
      data[off + 3] = h0;
    }
  }

  // CARREGAR TEXTURAS
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

  const targetColor = twgl.createTexture(gl, {
    src: imgCube,
    minMag: gl.LINEAR,
    wrap: gl.CLAMP_TO_EDGE,
  });

  const moonColor = twgl.createTexture(gl, {
    src: imgSphere,
    minMag: gl.LINEAR,
    wrap: gl.CLAMP_TO_EDGE,
  });

  // SLIDE DA CAMERA
  var cameraCurve = 1;
  webglLessonsUI.setupSlider("#cameraCurve", {
    value: 0,
    slide: updateCameraCurve,
    min: 0.0,
    max: 1.0,
    step: 0.01,
  });

  function updateCameraCurve(event, ui) {
    cameraCurve = ui.value;
    cameraCurve = 1 - cameraCurve;
    render();
  }

  // FUNÇÕES PARA CALCULO DA CURVA E DA TANGENTE
  function bezierX(fourPoints, t) {
    var pAx = fourPoints[0];
    var pBx = fourPoints[2];
    var pCx = fourPoints[4];
    var pDx = fourPoints[6];

    var term1 = Math.pow(1 - t, 3) * pAx;
    var term2 = 3 * Math.pow(1 - t, 2) * t * pBx;
    var term3 = 3 * (1 - t) * Math.pow(t, 2) * pCx;
    var term4 = Math.pow(t, 3) * pDx;

    var bezierX = term1 + term2 + term3 + term4;

    return bezierX;
  }
  function bezierY(fourPoints, t) {
    var pAy = fourPoints[1];
    var pBy = fourPoints[3];
    var pCy = fourPoints[5];
    var pDy = fourPoints[7];

    var term1 = Math.pow(1 - t, 3) * pAy;
    var term2 = 3 * Math.pow(1 - t, 2) * t * pBy;
    var term3 = 3 * (1 - t) * Math.pow(t, 2) * pCy;
    var term4 = Math.pow(t, 3) * pDy;

    var bezierY = term1 + term2 + term3 + term4;

    return bezierY;
  }

  function calcTangent(fourPoints, t) {
    let P0 = new Array();
    let P1 = new Array();
    let P2 = new Array();
    let P3 = new Array();
    P0[0] = fourPoints[0];
    P0[1] = fourPoints[1];

    P1[0] = fourPoints[2];
    P1[1] = fourPoints[3];

    P2[0] = fourPoints[4];
    P2[1] = fourPoints[5];

    P3[0] = fourPoints[6];
    P3[1] = fourPoints[7];

    var tangentVector = [
      -3 * Math.pow(1 - t, 2) * P0[0] +
        3 * Math.pow(1 - t, 2) * P1[0] -
        6 * (1 - t) * t * P1[0] +
        6 * (1 - t) * t * P2[0] +
        3 * Math.pow(t, 2) * P2[0] -
        3 * Math.pow(t, 2) * P3[0],
      -3 * Math.pow(1 - t, 2) * P0[1] +
        3 * Math.pow(1 - t, 2) * P1[1] -
        6 * (1 - t) * t * P1[1] +
        6 * (1 - t) * t * P2[1] +
        3 * Math.pow(t, 2) * P2[1] -
        3 * Math.pow(t, 2) * P3[1],
    ];

    tangentVector[0] = tangentVector[0] * -1;
    tangentVector[1] = tangentVector[1] * -1;

    return tangentVector;
  }

  // CHAMA A FUNCAO PARA LANCAR ESFERA
  document.querySelector("canvas").addEventListener("click", throwSphere);

  function render(time) {
    twgl.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    // CALCULO DE POSICOES DA CURVA
    let tangent = calcTangent(fourPoints, cameraCurve);
    let calcBezierX = bezierX(fourPoints, cameraCurve);
    let calcBezierZ = bezierY(fourPoints, cameraCurve);

    eye = [30 * calcBezierX, 10, 40 * calcBezierZ];
    target = [tangent[0], 10, tangent[1]];
    const up = [0, 1, 0];
    camera = m4.lookAt(eye, target, up);
    view = m4.inverse(camera);
    const model = m4.identity();

    // RENDERIZAR PLANO
    gl.useProgram(programInfo.program);

    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

    twgl.setUniformsAndBindTextures(programInfo, {
      projection,
      view,
      model,
      displacementMap: tex,
      colorTexture: texColor,
    });

    twgl.drawBufferInfo(gl, bufferInfo);

    // RENDERIZAR CUBO
    var zPos = -30;
    timeCube = time;
    timeCube *= 0.002;
    zPos += timeCube;

    const cubePosition = [4, 0, -zPos];
    modelTransform = m4.identity();
    m4.translate(modelTransform, cubePosition, modelTransform);
    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, cubeGeometry);
    twgl.setUniforms(programInfo, {
      projection,
      view,
      model: modelTransform,
      displacementMap: 0,
      colorTexture: targetColor,
    });

    if (cubeRender) twgl.drawBufferInfo(gl, cubeGeometry);

    // RENDERIZAR ESFERAS
    for (let i = 0; i < spheres.length; i++) {
      const sphere = spheres[i];

      if (sphere.moving) {
        sphere.position[0] += sphere.direction[0] * sphere.speed;
        sphere.position[1] += sphere.direction[1] * sphere.speed;
        sphere.position[2] += sphere.direction[2] * sphere.speed;

        gl.useProgram(programInfo.program);
        const modelTransformSphere = m4.identity();
        m4.translate(
          modelTransformSphere,
          sphere.position,
          modelTransformSphere
        );

        twgl.setBuffersAndAttributes(gl, programInfo, sphereBufferInfo);
        twgl.setUniformsAndBindTextures(programInfo, {
          projection,
          view,
          model: modelTransformSphere,
          displacementMap: 0,
          colorTexture: moonColor,
        });

        if (collisionCheck(sphere, cubePosition)) {
          sphereIndex = i;
          cubeRender = false;
        } else {
          if (sphereIndex != i) twgl.drawBufferInfo(gl, sphereBufferInfo);

          const distanceToCamera = v3.distance(sphere.position, eye);

          if (distanceToCamera > far) {
            sphere.moving = false;
          }
        }
      }
    }
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = (_) => resolve(img);
      img.onerror = reject;
      img.crossOrigin = "anonymous";
      img.src = url;
    });
  }

  function throwSphere() {
    const sphere = {
      position: [30, 0, 7],
      radius: 1,
      color: "red",
      speed: 0.5,
      direction: [0, 0, 0],
      moving: false,
    };

    spheres.push(sphere);

    target[0] = 0;
    target[1] = 0;
    target[2] = 0;

    sphere.direction = v3.normalize(v3.subtract(target, sphere.position));

    sphere.moving = true;
  }

  function collisionCheck(sphere, cubePosition) {
    const cubeMin = [
      cubePosition[0] - 2 / 2,
      cubePosition[1] - 2 / 2,
      cubePosition[2] - 2 / 2,
    ];

    const cubeMax = [
      cubePosition[0] + 2 / 2,
      cubePosition[1] + 2 / 2,
      cubePosition[2] + 2 / 2,
    ];

    const closestPoint = [
      Math.max(cubeMin[0], Math.min(sphere.position[0], cubeMax[0])),
      Math.max(cubeMin[1], Math.min(sphere.position[1], cubeMax[1])),
      Math.max(cubeMin[2], Math.min(sphere.position[2], cubeMax[2])),
    ];

    const distance = v3.distance(sphere.position, closestPoint);

    return distance <= sphereRadius;
  }
}

main(fourPoints);
