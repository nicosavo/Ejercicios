fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => {
    
    const catFactElement = document.getElementById('datazo');
    
    
    catFactElement.textContent = data.fact;
  })
  .catch(error => console.error('Error:', error));
