const getEncouragement = document.getElementById('getEncouragement')
const getInspiration = document.getElementById('getInspiration')
const getHelp = document.getElementById('getHelp')
const getParamSubmit = document.getElementById('getParamSubmit')
const getQuerySubmit = document.getElementById('getQuerySubmit')

const paramInput = document.getElementById('param-input')
const responseArea = document.getElementsByClassName('response-area')[0];





getEncouragement.addEventListener('click', () => {
    let encouragement = {
        message: `A woman is the full circle. Within her is the power to create, nurture and transform.`,
        meaning: 'Diane Marechild'
       }
    axios
        .post("http://localhost:4000/api/encouragement", encouragement)
        .then(res => displayRes([res.data]))
});

getInspiration.addEventListener('click', () => {
    let inspiration = {
        message: `You're off to great places, today is your day. Your mountain is waiting, so get on your way.`,
        meaning: 'Dr. Seuss'
       }
    axios
        .post("http://localhost:4000/api/inspiration", inspiration)
        .then(res => displayRes([res.data]))
});

getHelp.addEventListener('click', () => {
    let help = {
        message: `People appreciate and never forget that helping hand especially when times are tough.`,
        meaning: 'Catherine Pulsifer'
       }
    axios
        .post("http://localhost:4000/api/help", help)
        .then(res => displayRes([res.data]))
});

getQuerySubmit.addEventListener('click', () => {
    axios
   .delete(`http://localhost:4000/api/help/:message`)
   .then(res => displayRes([res.data]))
   
});

getParamSubmit.addEventListener('click', () => {
 
    let paramInput2 = window.prompt('Write your own affirmation')
    console.log(paramInput2)
    axios
    .get(`http://localhost:4000/api/helpInput/`)
    .then(res => displayRes([res.data]))
});


function displayRes(data){
    responseArea.innerHTML = null;
        data.forEach(item => {
            const p = document.createElement('p')
            const t = document.createTextNode(item)
            p.appendChild(t);
    
             responseArea.appendChild(p)
     })
 }
   