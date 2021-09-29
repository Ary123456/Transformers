
var canvas = new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;


	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);

	block_image_object.set({
		top:block_y,
		left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == "66") 
	{
		block_x = 0;
		new_image("Bluey.png");
		console.log("b");
	}
	if(keyPressed == '71')
	{
		block_x = 400;
		new_image("Greeney.png");
		console.log("g");
	}
	
	if(keyPressed == '80')
	{
		block_x =800;
		new_image("Orangey.png");
		console.log("p");
	}
	if(keyPressed == '82')
	{
		block_x = 1200;
		new_image("Redey.png");
		console.log("r");
	}
	if(keyPressed == '89')
	{
		block_x =1600 ;
	new_image("Yellowey.png");
	console.log("y");
	}
	
}

