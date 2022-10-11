//Given stored username and password and input username and password, Print if the user can login or not.
let user_name = "V@v123";
let password = "vv123";
let DB_username = "V@v123";
let DB_password = "av123";
if(DB_username===user_name)
{
  if(password===DB_password)
    console.log("login successfully");
  else
    console.log("wrong password");
}
else
  console.log("wrong credentials");
