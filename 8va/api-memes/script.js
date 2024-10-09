fetch('https://api.imgflip.com/get_memes')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const memes = document.getElementById('memes');
    memes.innerHTML = '';
    data.data.memes.forEach(meme => {
      const img = document.createElement('img');
      img.src = meme.url;
      img.style.width = '400px';
      memes.appendChild(img);
    });
  }
)
  .catch(error => console.error('Error:', error));
