const list_button = document.getElementById('see_save');
console.log("see button", list_button)

  list_button.addEventListener("click", function (event) {
    document.location.replace('/list');
    console.log("click worked"); // The event details
  });


const newFormHandler = async (event) => {
  event.preventDefault();


  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#description').value.trim();
  const category = document.querySelector('#category').value.trim();
console.log("title", title)
  if (title && description && category) {
    const response = await fetch(`/api/interests`, {
      method: 'POST',
      body: JSON.stringify({ savs:title, description, category }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to create sav');
    }
  }
};

document
  .querySelector('.form-addsav')
  .addEventListener('submit', newFormHandler);



