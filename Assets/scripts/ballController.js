var speed:float = 4250;
var ball:GameObject;
var bricksound:AudioClip;
var wallsound:AudioClip;
var block:GameObject;

function Start () {

}

function Update () {
	if (transform.position.y < -100)
	{
		// lives -1
		// reset ball, destroy it
		
		gameController.lives--;
		
		transform.position.y = GameObject.FindGameObjectWithTag("paddle").transform.position.y+5.5;
		transform.position.x = GameObject.FindGameObjectWithTag("paddle").transform.position.x;
		ball.rigidbody.Sleep();
		
		var pController:paddleController;
		pcontroller = GameObject.FindGameObjectWithTag("paddle").GetComponent(paddleController);
		pcontroller.attachedBall = this.gameObject;
	}
	
	if (gameController.lives == 0)
	{
		Application.LoadLevel("gameover");
	}
	
}

function OnCollisionEnter(col:Collision) {

	if (col.gameObject.tag == "wall") {
		audio.PlayOneShot(wallsound, 0.5);
	}
	
	if (col.gameObject.tag == "block") {
		audio.PlayOneShot(bricksound, 0.5);
		Destroy(col.gameObject);
		
		if (gameController.score >= 0)
		{
			gameController.score = gameController.score + 10;
		}
	}
}