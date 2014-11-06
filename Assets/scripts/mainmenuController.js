var quit = false;
var intro:AudioClip;

function Start () {
	renderer.material.color = Color.black;
	audio.PlayOneShot(intro);
}

function OnMouseEnter()
{
	renderer.material.color = Color.red;	
}

function OnMouseExit()
{
	renderer.material.color = Color.black;
}

function OnMouseUp()
{
	if (quit == true)
	{
		Application.Quit();
	}
	else
	{
		Application.LoadLevel("game");
	}
}