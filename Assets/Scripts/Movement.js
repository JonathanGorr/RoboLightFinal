#pragma strict
 
var speed = 10.0;
 
//The vector we are going to move by
private var moveDirection : Vector3;
 
function FixedUpdate () {
    //Set moveDirection to the vertical axis (up and down keys) * speed
    //For smoother movement use Input.GetAxis instead of Input.GetAxisRaw
    moveDirection = Vector3(0,0,speed*Input.GetAxisRaw("Vertical"));
    //Transform the vector3 to local space
    moveDirection = transform.TransformDirection(moveDirection);
    //set the velocity, so you can move
    transform.rigidbody.velocity = moveDirection;
}