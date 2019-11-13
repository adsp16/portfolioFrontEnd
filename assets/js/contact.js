const contactButton = document.getElementById('submitButton')

contactButton.addEventListener('click', () => {

  const userEmail = document.getElementById('email').value;
  const userName = document.getElementById('name').value;
  const userMessage = document.getElementById('message').value;

  const vemail = validEmail(userEmail);

  if (!userEmail || !userName || !userMessage) {

    return alert('Please fill out all fields')

  } else if (vemail === false) {

    return alert('Please enter a valid email')

  } else {

    data = {
      userEmail: userEmail,
      userName: userName,
      userMessage: userMessage,
    }

    axios.post('https://backend-portfolio-adsp.herokuapp.com/email', data)
      .then((response) => {

        const check = Boolean(response.data.body)

        if (check === false) {
          alert('You message has not been sent, please try again')
        } else {
          document.getElementById('email').value = '';
          document.getElementById('name').value = '';
          document.getElementById('message').value = '';
          alert('Your message has been sent!')

        }

      }).catch(err => {
        console.log(err)
      });

  }


})

//Utility Functions


const validEmail = (email) => {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}