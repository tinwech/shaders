#version 330 core

in vec4 worldPos;
in vec3 normal;

uniform vec3 cameraPos;

out vec4 fragColor;

void main()
{
	vec3 N = normalize(normal);
	vec3 V = normalize(cameraPos - worldPos.xyz);
	if (max(dot(N, V), 0) < 0.25) {
		fragColor = vec4(vec3(0, 0, 1), 1);
	}
	else {
		fragColor  = vec4(vec3(0), 1);
	}
}