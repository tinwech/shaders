#version 330 core

in vec2 texCoord;
in vec4 worldPos;
in vec3 normal;

uniform sampler2D ourTexture;
uniform vec3 lightPos;
uniform vec3 Kd;

out vec4 fragColor;

void main()
{
	vec3 N = normalize(normal);
	vec3 L = normalize(lightPos - worldPos.xyz);

	fragColor = texture(ourTexture, texCoord);
	
	float intensity;
	if (dot(N, L) < 0) {
		intensity = 0;
	}
	if (dot(N, L) < 0.2) {
		intensity = 0.25;
	}
	else if (dot(N, L) < 0.4) {
		intensity = 0.5;
	}
	else if (dot(N, L) < 0.6) {
		intensity = 1;
	}
	else if (dot(N, L) < 0.8) {
		intensity = 1.25;
	}
	else {
		intensity = 1.5;
	}

	fragColor.rgb = Kd * fragColor.rgb * intensity;
}