function sendEmail() {
    fetch('https://sendsail.onrender.com/send', {
      method: 'POST',
      mode:'cors',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        from:'joaosilva2505@outlook.com',
        to:'joaosilva2505@outlook.com',
        subject:'Fala amiguito',
        text:'Olá amiguito'
      }),
    })
    .then((res)=> res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
}