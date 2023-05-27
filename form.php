<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  // Process the form data (e.g., store in Firebase Firestore)
  // Your Firebase Firestore code here

  // Display success message
  $successMessage = "Message sent successfully!";
  echo json_encode(array('status' => 'success', 'message' => $successMessage));
  exit;
}
?>
