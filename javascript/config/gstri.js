// ពិនិត្យស្ថានភាពអ្នកប្រើប្រាស់
if (userIsSignedIn) {
  // ប្រសិនបើអ្នកប្រើប្រាស់បានចូលគណនី
  gtag('config', 'G-XXXXXXX', {
    'user_id': userId   // ដាក់លេខសម្គាល់ (ID) របស់អ្នកប្រើប្រាស់
  });
} else if (userIsSignedOut) {
  // ប្រសិនបើអ្នកប្រើប្រាស់បានចេញពីគណនី
  gtag('config', 'G-XXXXXXX', {
    'user_id': null     // ដាក់ null ដើម្បីដក ID ចេញ
  });
} else {
  // ប្រសិនបើមិនទាន់ចូលក៏មិនទាន់ចេញ
  // មិនធ្វើអ្វីទេ
}
