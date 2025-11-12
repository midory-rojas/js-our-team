const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Creo una funzione


function printCards() {

  const teamContainer = document.querySelector(".team-container");
  let cardsNew = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const curMembers = teamMembers[i];
    const card = creareSingolaCard(curMembers);
    cardsNew += card;
  }
  teamContainer.innerHTML = cardsNew;
}

function creareSingolaCard(membro) {
  const { name, role, email, img } = membro;
  return `
  <div class="card">
      <div class="card-image">
        <img 
        src="${img}" 
        alt="${name}" />
      </div>
      <div class="card-content">
        <h3>${name}</h3>
        <p>${role}</p>
        <a>${email}</a>
      </div>
    </div>
  `;
}

printCards();
//Prelevo tutti gli elementi del form
const nameImput = document.querySelector("#name");
const roleImpput = document.querySelector("#role");
const imageImput = document.querySelector("#image");
const emailImput = document.querySelector("#email");
const form = document.querySelector("form");

//console.log(nameImput, roleImpput, imageImput, form, email);

form.addEventListener("submit", function (event){
  event.preventDefault();
  const nuovoMembro = {
    name: nameImput.value,
    role: roleImpput.value,
    email: emailImput.value,
    image: imageImput.value,
  };
  teamMembers.push(nuovoMembro);
  
  printCards();
  console.log(teamMembers);
});




