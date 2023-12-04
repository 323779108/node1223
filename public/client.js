
function handleCategoryChange() {
  }

function handleAtmosphereChange(){
}

function rel(){
location.reload();
}

  
function handleEventChange() {
    const eventSelect = document.getElementById('event');
    const ageInputDiv = document.getElementById('ageInput');
    const ageInput = document.getElementById('age');
  
    if (eventSelect.value === 'birthday') {
      ageInputDiv.style.display = 'block';
    } else {
      ageInputDiv.style.display = 'none';
      ageInput.value = '';
    }
  }

  function submitChoices() {
    const responseContainer = document.getElementById('responseContainer')
    const category = document.getElementById('category').value;
    const event = document.getElementById('event').value;
    const age = document.getElementById('age').value;
    const atmosphere = document.getElementById('atmosphere').value
    const obj = {
      category:category,
      atmosphere:atmosphere,
      event:event,
      age:age
    }
    console.log(obj);

    responseContainer.style.display = 'block';
    const ageInput = document.getElementById('age');
    const categorySelect = document.getElementById('category');
    const eventSelect = document.getElementById('event');
    const atmosphereSelect = document.getElementById('atmosphere');
    const reButton = document.getElementById("rel")
    reButton.style.display = 'block'
    reButton.textContent = " :אווירה "+atmosphere+" :סוג"+category + ' אירוע: '+event;
    if (age!='')
    reButton.textContent += 'גיל' + age;
   

    categorySelect.style.display = 'none'
    eventSelect.style.display = 'none'
    atmosphereSelect.style.display = 'none'
    ageInput.style.display = 'none';
    document.querySelector('label[for="category"]').style.display = 'none';    
    document.querySelector('label[for="event"]').style.display = 'none';    
    document.querySelector('label[for="age"]').style.display = 'none';    
    document.querySelector('label[for="atmosphere"]').style.display = 'none';    

    
    // Send a request to the server with the choices
    fetch(`/get?category=${category}&event=${event}&age=${age}`)
      .then(response => response.text())
      .then(data => {
        // Display the server's response in the response container
        const responseContainer = document.getElementById('responseContainer');
        responseContainer.innerHTML = `<p>${data}</p>`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
