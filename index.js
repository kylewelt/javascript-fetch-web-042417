const token = '47b08cc0251dfe7dc63e7d3793271808a17c5904'

fetch('https://api.github.com/kylewelt/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
