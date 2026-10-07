const fs = require('fs');
const path = require('path');

async function testUpload() {
  const credentials = { username: 'admin', password: 'AdminPassword123!' };
  console.log('Logging in...');
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  const loginData = await res.json();
  
  if (!loginData.success) {
    console.error('Login failed:', loginData);
    return;
  }
  const token = loginData.token;
  console.log('Logged in successfully. Token:', token.substring(0, 20) + '...');

  // Create a dummy image
  const dummyImagePath = path.join(__dirname, 'dummy.png');
  // Just create a tiny 1x1 transparent png
  const pngData = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
  fs.writeFileSync(dummyImagePath, pngData);
  
  console.log('Uploading image for innovation...');
  
  const FormData = require('form-data');
  const form = new FormData();
  form.append('image', fs.createReadStream(dummyImagePath));

  const uploadRes = await fetch('http://localhost:5000/api/admin/images/innovation', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: form
  });

  const uploadData = await uploadRes.json();
  console.log('Upload response:', uploadData);

  // Clean up
  fs.unlinkSync(dummyImagePath);
}

testUpload().catch(console.error);
