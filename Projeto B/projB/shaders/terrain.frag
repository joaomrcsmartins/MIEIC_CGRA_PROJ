  #ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;
//uniform float timeFactor;
varying vec4 coords;
const float weight = 0.5;
void main() {

vec4 color = texture2D(uSampler, vTextureCoord);
vec4 colorGrad = texture2D(uSampler3,vec2(0.2,1.0-coords.z)	);



//vec4 filter = texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord);

//	if (filter.b > 0.5)
		//color=vec4(0.52, 0.18, 0.11, 1.0);
	



	gl_FragColor = weight*colorGrad+ (1.0-weight)*color ;
	//gl_FragColor = color;
	
}