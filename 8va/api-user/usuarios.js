fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const { email, cell, name, login, picture, location } = user;
    console.log(data);
    
    // Mostrar username y thumbnail
    document.getElementById('usuario').innerText = login.username;
    document.getElementById('thumnail').innerHTML = `<img src="${picture.thumbnail}" alt="Thumbnail">`;
  })
  .catch(error => console.error('Error:', error));
