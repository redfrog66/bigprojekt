<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="stylesheet.css" rel="stylesheet">
</head>
<body>
    
    <h1 id="mainTitle">
        Login
    </h1>

    
    <form class="form" method="post" action="login.php">
        <p class="form-title">Sign in to your account</p>
         <div class="input-container">
           <input type="email" name="username" placeholder="Enter email">
           <span>
           </span>
       </div>
       <div class="input-container">
           <input type="password" name="password" placeholder="Enter password">
         </div>
          <button type="submit" class="submit" name="login_btn">
         Sign in
       </button>
 
       <p class="signup-link">
         No account?
         <a href="registration.php">Sign up</a>
       </p>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>
</html>
<?php
//$conn= mysqli_connect("localhost","root","");
//$conn = mysqli_connect("sql309.infinityfree.com", "if0_35448821", "QrNs8vgyPq","if0_35448821_websitelogin");
//if (!$conn) {
  //die("Connection failed: " . mysqli_connect_error());
//}
//echo "Connected successfully";
$servername = "sql309.infinityfree.com";
$username = "if0_35448821";
$password = "QrNs8vgyPq";
try {
  $conn = new PDO("mysql:host=$servername;port=3306;dbname=if0_35448821_websitelogin", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}


if(isset($_POST['login_btn'])){
  $username=$_POST['username'];
  $password=$_POST['password'];
  $sql="SELECT * FROM websitelogin.logindetails WHERE username='$username'";
  $result = mysqli_query($conn,$sql);
  while($row=mysqli_fetch_assoc($result)){
    $resultPassword=$row['password'];
    if($password==$resultPassword){
      header('Location:index.html');
    }else{
      echo "<script> alert('Login unsuccessful'); </script>";
    }
  }

}


?>