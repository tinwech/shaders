#version 330 core

// TODO:
// Implement Gouraud shading

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec2 aTexCoord;

uniform mat4 M;
uniform mat4 V;
uniform mat4 P;
uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;
uniform float gloss;
uniform vec3 La;
uniform vec3 Ld;
uniform vec3 Ls;
uniform vec3 lightPos;
uniform vec3 cameraPos;

out vec2 texCoord;
out vec4 worldPos;
out vec3 normal;

out vec3 Ia;
out vec3 Id;
out vec3 Is;

void main()
{
	gl_Position = P * V * M * vec4(aPos, 1.0);
	texCoord = aTexCoord;
	worldPos = M * vec4(aPos, 1.0);
	normal = normalize((transpose(inverse(M)) * vec4(aNormal, 0.0)).xyz);

	vec3 N = normalize(normal);
	vec3 L = normalize(lightPos - worldPos.xyz);
	vec3 R = normalize(2 * dot(L, N) * N - L);
	vec3 V = normalize(cameraPos - worldPos.xyz);

	Ia = La * Ka;
	Id = Ld * Kd * max(dot(L, N), 0.0f);
	Is = Ls * Ks * pow(dot(V, R), gloss);
}