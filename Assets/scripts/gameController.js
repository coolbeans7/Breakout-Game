var block:GameObject;

function Start () {

	createBlocks();

}

function Update () {

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