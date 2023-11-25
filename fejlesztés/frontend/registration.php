<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regisztráció</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="stylesheet.css" rel="stylesheet">
</head>
<body>
    
    <h1 id="mainTitle">
        Register
    </h1>

    <form class="form" method="post" action="registration.php">
        <p class="form-title">Welcome here</p>

        <div class="input-container">
            <input type="text" name="name" placeholder="Enter your name">
         </div>

        <div class="input-container">
           <input type="email" name="username" placeholder="Enter your email">
           <span>
           </span>
        </div>

        <div class="input-container">
           <input type="password" name="password" placeholder="Enter your password">
        </div>


        <button type="submit" class="submit" name="reg_btn">
         Sign in
        </button>
 
       <p class="signup-link">
         <a href="index.html">Continue without registration</a>
       </p>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>
</html>

<?php

/*$servername = "localhost";//sql309.infinityfree.com
$dbusername = "root";//if0_35448821
$dbpassword = "";//QrNs8vgyPq
try {
  $conn = new PDO("mysql:websitelogin", $dbusername, $dbpassword);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

if(isset($_POST['reg_btn'])){
  $username=$_POST['username'];
  $password=$_POST['password'];
  $name=$_POST['name'];
  $sql="INSERT INTO logindetails (`id`, `name`, `username`, `password`) VALUES (NULL, '".$name."' , '".$username."','".$password."')";
  if ($conn->query($sql) === TRUE) {
    echo "<script> alert('Registration successful'); </script>";
  } else {
    echo "<script> alert(' . $sql . ' ' . $conn->error. ') </script>";
  }
  $conn->close();
  }
*/
$conn= mysqli_connect("localhost","root","","websitelogin");
if(isset($_POST['reg_btn'])){
  $username=$_POST['username'];
  $password=$_POST['password'];
  $name=$_POST['name'];
  $sql="INSERT INTO logindetails (`id`, `name`, `username`, `password`) VALUES (NULL, '".$name."' , '".$username."','".$password."')";
  if ($conn->query($sql) === TRUE) {
    echo "<script> alert('Registration successful'); </script>";
    header("Location:login.php");
  } else {
    echo "<script> alert(' . $sql . ' ' . $conn->error. ') </script>";
  }
  $conn->close();
}


?>