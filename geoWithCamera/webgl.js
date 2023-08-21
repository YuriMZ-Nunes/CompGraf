// ----------------- CARREGA O GEOGEBRA  ----------------- \\

var ggbApplet = document.querySelector("#ggbApplet");

function gbbOnInit(param){
  if(param == "gbbApplet"){
    ggbApplet.registerObjectUpdateListener("A", "pointListener");
    ggbApplet.registerObjectUpdateListener("B", "abcListener");
    ggbApplet.registerObjectUpdateListener("C", "abcListener");
    ggbApplet.registerObjectUpdateListener("D", "abcListener");


    fourPoints.push(ggbApplet.getXcoord("A"));
    console.log(fourPoints);
  }
}

var parameters = {
  "id": "ggbApplet",
  "width":900,
  "height":900,
  "filename":"Curve.ggb",
  "ggbBase64":"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",
};

var fourPoints = new Array();

parameters.appletOnLoad = function teste(api){
  fourPoints[0] = ggbApplet.getXcoord("A");
  fourPoints[1] = ggbApplet.getYcoord("A");

  fourPoints[2]= ggbApplet.getXcoord("B");
  fourPoints[3]= ggbApplet.getYcoord("B");

  fourPoints[4]= ggbApplet.getXcoord("C");
  fourPoints[5]= ggbApplet.getYcoord("C");

  fourPoints[6] = ggbApplet.getXcoord("D");
  fourPoints[7] = ggbApplet.getYcoord("D");

  function updateListener(objName){
    strVal = api.getValueString(objName);

    if(objName == "A"){
      fourPoints[0] = ggbApplet.getXcoord("A");
      console.log(fourPoints[0]);
      fourPoints[1] = ggbApplet.getXcoord("A");
    }else if(objName == "B"){
      fourPoints[2] = ggbApplet.getXcoord("B");
      fourPoints[3] = ggbApplet.getXcoord("B");
    }else if(objName == "C"){
      fourPoints[4] = ggbApplet.getXcoord("C");
      fourPoints[5] = ggbApplet.getXcoord("C");
    }else if(objName == "D"){
      fourPoints[6] = ggbApplet.getXcoord("D");
      fourPoints[7] = ggbApplet.getXcoord("D");
    }
    //main(fourPoints);
  }
  
  api.registerUpdateListener(updateListener);
  console.log(fourPoints);

  main(fourPoints);

}

var views = {'is3D': 0,'AV': 1,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var applet = new GGBApplet(parameters, '5.0', views);
window.onload = function() {applet.inject(ggbApplet)};
applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');

// ----------------- CARREGA O GEOGEBRA  ----------------- \\

// -------------------------------------------------------- \\

// ----------------- INICIO WEBGL  ----------------- \\


"use strict";

//        FUNÇÕES PARA CARREGAR O OBJ

function parseOBJ(text) {
  // because indices are base 1 let's just fill in the 0th data
  const objPositions = [[0, 0, 0]];
  const objTexcoords = [[0, 0]];
  const objNormals = [[0, 0, 0]];
  const objColors = [[0, 0, 0]];

  // same order as `f` indices
  const objVertexData = [
    objPositions,
    objTexcoords,
    objNormals,
    objColors,
  ];

  // same order as `f` indices
  let webglVertexData = [
    [],   // positions
    [],   // texcoords
    [],   // normals
    [],   // colors
  ];

  const materialLibs = [];
  const geometries = [];
  let geometry;
  let groups = ['default'];
  let material = 'default';
  let object = 'default';

  const noop = () => {};

  function newGeometry() {
    // If there is an existing geometry and it's
    // not empty then start a new one.
    if (geometry && geometry.data.position.length) {
      geometry = undefined;
    }
  }

  function setGeometry() {
    if (!geometry) {
      const position = [];
      const texcoord = [];
      const normal = [];
      const color = [];
      webglVertexData = [
        position,
        texcoord,
        normal,
        color,
      ];
      geometry = {
        object,
        groups,
        material,
        data: {
          position,
          texcoord,
          normal,
          color,
        },
      };
      geometries.push(geometry);
    }
  }

  function addVertex(vert) {
    const ptn = vert.split('/');
    ptn.forEach((objIndexStr, i) => {
      if (!objIndexStr) {
        return;
      }
      const objIndex = parseInt(objIndexStr);
      const index = objIndex + (objIndex >= 0 ? 0 : objVertexData[i].length);
      webglVertexData[i].push(...objVertexData[i][index]);
      // if this is the position index (index 0) and we parsed
      // vertex colors then copy the vertex colors to the webgl vertex color data
      if (i === 0 && objColors.length > 1) {
        geometry.data.color.push(...objColors[index]);
      }
    });
  }

  const keywords = {
    v(parts) {
      // if there are more than 3 values here they are vertex colors
      if (parts.length > 3) {
        objPositions.push(parts.slice(0, 3).map(parseFloat));
        objColors.push(parts.slice(3).map(parseFloat));
      } else {
        objPositions.push(parts.map(parseFloat));
      }
    },
    vn(parts) {
      objNormals.push(parts.map(parseFloat));
    },
    vt(parts) {
      // should check for missing v and extra w?
      objTexcoords.push(parts.map(parseFloat));
    },
    f(parts) {
      setGeometry();
      const numTriangles = parts.length - 2;
      for (let tri = 0; tri < numTriangles; ++tri) {
        addVertex(parts[0]);
        addVertex(parts[tri + 1]);
        addVertex(parts[tri + 2]);
      }
    },
    s: noop,    // smoothing group
    mtllib(parts, unparsedArgs) {
      // the spec says there can be multiple filenames here
      // but many exist with spaces in a single filename
      materialLibs.push(unparsedArgs);
    },
    usemtl(parts, unparsedArgs) {
      material = unparsedArgs;
      newGeometry();
    },
    g(parts) {
      groups = parts;
      newGeometry();
    },
    o(parts, unparsedArgs) {
      object = unparsedArgs;
      newGeometry();
    },
  };

  const keywordRE = /(\w*)(?: )*(.*)/;
  const lines = text.split('\n');
  for (let lineNo = 0; lineNo < lines.length; ++lineNo) {
    const line = lines[lineNo].trim();
    if (line === '' || line.startsWith('#')) {
      continue;
    }
    const m = keywordRE.exec(line);
    if (!m) {
      continue;
    }
    const [, keyword, unparsedArgs] = m;
    const parts = line.split(/\s+/).slice(1);
    const handler = keywords[keyword];
    if (!handler) {
      console.warn('unhandled keyword:', keyword);  // eslint-disable-line no-console
      continue;
    }
    handler(parts, unparsedArgs);
  }

  // remove any arrays that have no entries.
  for (const geometry of geometries) {
    geometry.data = Object.fromEntries(
        Object.entries(geometry.data).filter(([, array]) => array.length > 0));
  }

  return {
    geometries,
    materialLibs,
  };
}

function parseMapArgs(unparsedArgs) {
  // TODO: handle options
  return unparsedArgs;
}

function parseMTL(text) {
  const materials = {};
  let material;

  const keywords = {
    newmtl(parts, unparsedArgs) {
      material = {};
      materials[unparsedArgs] = material;
    },
    /* eslint brace-style:0 */
    Ns(parts)       { material.shininess      = parseFloat(parts[0]); },
    Ka(parts)       { material.ambient        = parts.map(parseFloat); },
    Kd(parts)       { material.diffuse        = parts.map(parseFloat); },
    Ks(parts)       { material.specular       = parts.map(parseFloat); },
    Ke(parts)       { material.emissive       = parts.map(parseFloat); },
    map_Kd(parts, unparsedArgs)   { material.diffuseMap = parseMapArgs(unparsedArgs); },
    map_Ns(parts, unparsedArgs)   { material.specularMap = parseMapArgs(unparsedArgs); },
    map_Bump(parts, unparsedArgs) { material.normalMap = parseMapArgs(unparsedArgs); },
    Ni(parts)       { material.opticalDensity = parseFloat(parts[0]); },
    d(parts)        { material.opacity        = parseFloat(parts[0]); },
    illum(parts)    { material.illum          = parseInt(parts[0]); },
  };

  const keywordRE = /(\w*)(?: )*(.*)/;
  const lines = text.split('\n');
  for (let lineNo = 0; lineNo < lines.length; ++lineNo) {
    const line = lines[lineNo].trim();
    if (line === '' || line.startsWith('#')) {
      continue;
    }
    const m = keywordRE.exec(line);
    if (!m) {
      continue;
    }
    const [, keyword, unparsedArgs] = m;
    const parts = line.split(/\s+/).slice(1);
    const handler = keywords[keyword];
    if (!handler) {
      console.warn('unhandled keyword:', keyword);  // eslint-disable-line no-console
      continue;
    }
    handler(parts, unparsedArgs);
  }

  return materials;
}

//        FUNÇÃO MAIN PARA CARREGAR OS SHADERS

async function main(fourPoints) {

  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl2");
  if (!gl) {
    return;
  }

   

  // Tell the twgl to match position with a_position etc..
  twgl.setAttributePrefix("a_");

  const vs = `#version 300 es
  in vec4 a_position;
  in vec3 a_normal;
  in vec2 a_texcoord;
  in vec4 a_color;

  uniform mat4 u_projection;
  uniform mat4 u_view;
  uniform mat4 u_world;
  uniform vec3 u_viewWorldPosition;

  out vec3 v_normal;
  out vec3 v_surfaceToView;
  out vec2 v_texcoord;
  out vec4 v_color;

  void main() {
    vec4 worldPosition = u_world * a_position;
    gl_Position = u_projection * u_view * worldPosition;
    v_surfaceToView = u_viewWorldPosition - worldPosition.xyz;
    v_normal = mat3(u_world) * a_normal;
    v_texcoord = a_texcoord;
    v_color = a_color;
  }
  `;

  const fs = `#version 300 es
  precision highp float;

  in vec3 v_normal;
  in vec3 v_surfaceToView;
  in vec2 v_texcoord;
  in vec4 v_color;

  uniform vec3 diffuse;
  uniform sampler2D diffuseMap;
  uniform vec3 ambient;
  uniform vec3 emissive;
  uniform vec3 specular;
  uniform float shininess;
  uniform float opacity;
  uniform vec3 u_lightDirection;
  uniform vec3 u_ambientLight;

  out vec4 outColor;

  void main () {
    vec3 normal = normalize(v_normal);

    vec3 surfaceToViewDirection = normalize(v_surfaceToView);
    vec3 halfVector = normalize(u_lightDirection + surfaceToViewDirection);

    float fakeLight = dot(u_lightDirection, normal) * .5 + .5;
    float specularLight = clamp(dot(normal, halfVector), 0.0, 1.0);

    vec4 diffuseMapColor = texture(diffuseMap, v_texcoord);
    vec3 effectiveDiffuse = diffuse * diffuseMapColor.rgb * v_color.rgb;
    float effectiveOpacity = opacity * diffuseMapColor.a * v_color.a;

    outColor = vec4(
        emissive +
        ambient * u_ambientLight +
        effectiveDiffuse * fakeLight +
        specular * pow(specularLight, shininess),
        effectiveOpacity);
  }
  `;


  // compiles and links the shaders, looks up attribute and uniform locations
  const meshProgramInfo = twgl.createProgramInfo(gl, [vs, fs]);

  // CARREGANDO O OBJ

  const objHref = 'fullBasket.obj';  
  const response = await fetch(objHref);
  const text = await response.text();
  const obj = parseOBJ(text);
  const baseHref = new URL(objHref, window.location.href);
  const matTexts = await Promise.all(obj.materialLibs.map(async filename => {
    const matHref = new URL(filename, baseHref).href;
    const response = await fetch(matHref);
    return await response.text();
  }));
  const materials = parseMTL(matTexts.join('\n'));

  const textures = {
    defaultWhite: twgl.createTexture(gl, {src: [255, 255, 255, 255]}),
  };

  // load texture for materials
  for (const material of Object.values(materials)) {
    Object.entries(material)
      .filter(([key]) => key.endsWith('Map'))
      .forEach(([key, filename]) => {
        let texture = textures[filename];
        if (!texture) {
          const textureHref = new URL(filename, baseHref).href;
          texture = twgl.createTexture(gl, {src: textureHref, flipY: true});
          textures[filename] = texture;
        }
        material[key] = texture;
      });
  }

  const defaultMaterial = {
    diffuse: [1, 1, 1],
    diffuseMap: textures.defaultWhite,
    ambient: [0, 0, 0],
    specular: [1, 1, 1],
    shininess: 400,
    opacity: 1,
  };

  const parts = obj.geometries.map(({material, data}) => {
    // Because data is just named arrays like this
    //
    // {
    //   position: [...],
    //   texcoord: [...],
    //   normal: [...],
    // }
    //
    // and because those names match the attributes in our vertex
    // shader we can pass it directly into `createBufferInfoFromArrays`
    // from the article "less code more fun".

    if (data.color) {
      if (data.position.length === data.color.length) {
        // it's 3. The our helper library assumes 4 so we need
        // to tell it there are only 3.
        data.color = { numComponents: 3, data: data.color };
      }
    } else {
      // there are no vertex colors so just use constant white
      data.color = { value: [1, 1, 1, 1] };
    }

    // create a buffer for each array by calling
    // gl.createBuffer, gl.bindBuffer, gl.bufferData
    const bufferInfo = twgl.createBufferInfoFromArrays(gl, data);
    const vao = twgl.createVAOFromBufferInfo(gl, meshProgramInfo, bufferInfo);
    return {
      material: {
        ...defaultMaterial,
        ...materials[material],
      },
      bufferInfo,
      vao,
    };
  });

  
  

  function getExtents(positions) {
    const min = positions.slice(0, 3);
    const max = positions.slice(0, 3);
    for (let i = 3; i < positions.length; i += 3) {
      for (let j = 0; j < 3; ++j) {
        const v = positions[i + j];
        min[j] = Math.min(v, min[j]);
        max[j] = Math.max(v, max[j]);
      }
    }
    return {min, max};
  }

  function getGeometriesExtents(geometries) {
    return geometries.reduce(({min, max}, {data}) => {
      const minMax = getExtents(data.position);
      return {
        min: min.map((min, ndx) => Math.min(minMax.min[ndx], min)),
        max: max.map((max, ndx) => Math.max(minMax.max[ndx], max)),
      };
    }, {
      min: Array(3).fill(Number.POSITIVE_INFINITY),
      max: Array(3).fill(Number.NEGATIVE_INFINITY),
    });
  }

  const extents = getGeometriesExtents(obj.geometries);
  const range = m4.subtractVectors(extents.max, extents.min);
  // amount to move the object so its center is at the origin
  const objOffset = m4.scaleVector(
      m4.addVectors(
        extents.min,
        m4.scaleVector(range, 0.5)),
  -1);

  // CRIANDO SLIDER
  var cameraCurve = 1;
  webglLessonsUI.setupSlider("#cameraCurve", {value: 0, slide: updateCameraCurve, min: 0.0, max: 1.0, step:0.01});

  function updateCameraCurve(event, ui){
    cameraCurve = ui.value;
    cameraCurve = 1 - cameraCurve;
    render();
  }
    
  // FUNÇÕES PARA CALCULO DA CURVA E DA TANGENTE
  function bezierX(fourPoints, t){
    var pAx = fourPoints[0];
    var pBx = fourPoints[2];
    var pCx = fourPoints[4];
    var pDx = fourPoints[6];

    var term1 = Math.pow((1 - t), 3) * pAx;
    var term2 = 3 * Math.pow((1 - t), 2) * t * pBx;
    var term3 = 3 * (1 - t) * Math.pow(t, 2) * pCx;
    var term4 = Math.pow(t, 3) * pDx;

    var bezierX = term1 + term2 + term3 + term4;

    return bezierX;
  }
  function bezierY(fourPoints, t){

    var pAy = fourPoints[1];
    var pBy = fourPoints[3];
    var pCy = fourPoints[5];
    var pDy = fourPoints[7];

    var term1 = Math.pow((1 - t), 3) * pAy;
    var term2 = 3 * Math.pow((1 - t), 2) * t * pBy;
    var term3 = 3 * (1 - t) * Math.pow(t, 2) * pCy;
    var term4 = Math.pow(t, 3) * pDy;

    var bezierY = term1 + term2 + term3 + term4;

    return bezierY;
  }

  function calcTangent(fourPoints, t){
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
      -3 * Math.pow((1 - t), 2) * P0[0] + 3 * Math.pow((1 - t), 2) * P1[0] - 6 * (1 - t) * t * P1[0] + 6 * (1 - t) * t * P2[0] + 3 * Math.pow(t, 2) * P2[0] - 3 * Math.pow(t, 2) * P3[0],
      -3 * Math.pow((1 - t), 2) * P0[1] + 3 * Math.pow((1 - t), 2) * P1[1] - 6 * (1 - t) * t * P1[1] + 6 * (1 - t) * t * P2[1] + 3 * Math.pow(t, 2) * P2[1] - 3 * Math.pow(t, 2) * P3[1],
  ];

  tangentVector[0] = tangentVector[0] * -1;
  tangentVector[1] = tangentVector[1] * -1;

  return tangentVector;

  }

  const radius = m4.length(range);
  
  // Set zNear and zFar to something hopefully appropriate
  // for the size of this object.
  const zNear = radius / 100;
  const zFar = radius * 3;

  function degToRad(deg) {
    return deg * Math.PI / 180;
  }

  // RENDERIZAR 
  function render(time) {
    time *= 0.001;  // convert to seconds

    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.DEPTH_TEST);

    const fieldOfViewRadians = degToRad(60);
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const projection = m4.perspective(fieldOfViewRadians, aspect, zNear, zFar);

    const up = [0, 1, 0];
    // Compute the camera's matrix using look at.

    let tangent = calcTangent(fourPoints, cameraCurve);
    let cameraTarget = [tangent[0], 0, tangent[1]];
    //const cameraTarget = [0, 0, 0];
    // figure out how far away to move the camera so we can likely
    // see the object.
    
    let calcBezierX = bezierX(fourPoints, cameraCurve);
    let calcBezierZ = bezierY(fourPoints, cameraCurve);

    const cameraPosition = m4.addVectors(cameraTarget, [
      radius * calcBezierZ,
      0,
      40 * calcBezierX,
    ]);
    const camera = m4.lookAt(cameraPosition, cameraTarget, up);

    // Make a view matrix from the camera matrix.
    const view = m4.inverse(camera);

    const sharedUniforms = {
      u_lightDirection: m4.normalize([-1, 3, 5]),
      u_view: view,
      u_projection: projection,
      u_viewWorldPosition: cameraPosition,
    };

    gl.useProgram(meshProgramInfo.program);

    // calls gl.uniform
    twgl.setUniforms(meshProgramInfo, sharedUniforms);

    // compute the world matrix once since all parts
    // are at the same space.
    let u_world = m4.yRotation(0);
    u_world = m4.translate(u_world, ...objOffset);

    for (const {bufferInfo, vao, material} of parts) {
      // set the attributes for this part.
      gl.bindVertexArray(vao);
      // calls gl.uniform
      twgl.setUniforms(meshProgramInfo, {
        u_world,
      }, material);
      // calls gl.drawArrays or gl.drawElements
      twgl.drawBufferInfo(gl, bufferInfo);
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}


