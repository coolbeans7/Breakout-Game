var block:GameObject;
static var score:int = 0;
static var lives:int = 3;

function Start () {

	createBlocks();

}

function Update () {

}

function OnGUI () {
	
	GUI.color = Color.white;
	GUI.Label (Rect(50, 10, 100, 50), "Score: " + score);

	GUI.color = Color.white;
	GUI.Label (Rect(725, 10, 100, 50), "Lives: " + lives);

}

function createBlocks() {

	for (var i : int = -5; i < 6; i++)
	{
		Debug.Log("Creating block number: " + i);
		Instantiate(block, Vector3(i*21, 10, 0), Quaternion.identity);
	}
	
	for (var j : int = -5; j < 6; j++)
	{
		Debug.Log("Creating block number: " + j);
		Instantiate(block, Vector3(j*21, 20, 0), Quaternion.identity);
	}	

}