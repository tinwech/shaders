#version 330 core

in vec2 texCoord;
in vec3 Ia;
in vec3 Id;
in vec3 Is;

uniform sampler2D ourTexture;

out vec4 fragColor;

void main()
{
	fragColor = texture(ourTexture, texCoord);
	fragColor.rgb = fragColor.rgb * Ia + fragColor.rgb * Id + Is;
}