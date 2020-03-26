#version 330 core							   
in vec4 vertexColor;
in vec2 TextCoord;

uniform sampler2D ourTexture;
uniform sampler2D ourFace; 	
uniform vec3 objColor;
uniform vec3 ambientColor;
out vec4 FragColor;	
void main()								   
{			
	//FragColor = mix(texture(ourTexture,TextCoord),texture(ourFace,TextCoord),0.2);
	//FragColor = texture(ourTexture,TextCoord)*texture(ourFace,TextCoord);
	FragColor = vec4(objColor*ambientColor,1.0f);
}											   