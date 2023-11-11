async function sendEmail() {
  try {
    await fetch('https://sendsail.onrender.com/send', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        from:'joaosilva2505@outlook.com',
        to:'joaosilva2505@outlook.com',
        subject:'Fala amiguito',
        text:'Olá amiguito'
      })
    })

  }
  catch(error) {
    console.log('Deu ruim')
  }
}