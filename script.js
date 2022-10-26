const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    Menu.classList.toggle('active');
});

document.querySelectorAll(".menu-item").forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        Menu.classList.remove('active');
    }));

// Storing data in JS

const Teachers = [{
    teacherImage: 'IMG/download.png',
    teacherName: 'Rachel ana',
    teacherDomain: 'Her, Bus driver Teacher',
    teacherAbout: 'Rachel ana was born in Moscow, Russia. After Spending all her life there, She decided to take that step and learn drving! She is a teacher of Russian and available for services such as Online Tutoring',
}, {
    teacherImage: 'IMG/images (3).jpeg',
    teacherName: 'Mutombo james',
    teacherDomain: 'Him, chauffer Teacher',
    teacherAbout: 'Mutombo james was born in Kisangani, DRC. Having a double-Nationality of DRC and KENYA, He has a big knowledge in driving, is available for Class Tutoring and Online Tutoring in for those who study in night program',
}, {
    teacherImage: 'IMG/images (2).png',
    teacherName: 'Javier kanjira',
    teacherDomain: 'Him, Delivery Teacher',
    teacherAbout: 'Javier kanjira was born in Goma, DRC. After spending years in USA, he was able to drive all kind of cars and obtain a Driving degree. He is available to teach Delivery  Online and in class programs',
}, {
    teacherImage: 'IMG/download (1).png',
    teacherName: 'Kavira kam',
    teacherDomain: 'Her,Emergency medical technian Teacher',
    teacherAbout: 'Kavira kam, Lubumbashi. She Spent her whole life working in hospila to help people to take people form home and bring them quily at hospital , she is great driver she takes care of everyone in a hurry ',
}, {
    teacherImage: 'IMG/images (4).jpeg',
    teacherName: 'Jonathan gan',
    teacherDomain: 'Him, ,motorman  Teacher',
    teacherAbout: ' Jonathan gan is a motarman teacher. Born kassai,  he has a great experience in driving school , he teachers student how to drive quite well the bike and the respect the code of the road , he has expirience in driving small bike honda, aujuwe, and big brabus ',
}, {
    teacherImage: 'IMG/images.png',
    teacherName: 'Lena gavi',
    teacherDomain: 'Her,Taxicab driver Teacher',
    teacherAbout: 'Lena gavi, born in Bukavu , she a great teacher in taxicab she knows how to communicate we different people and drive them safe to their destination , and she is a great colaborator to each client',
},
];

const card = document.querySelector('.teacher-cards');

Teachers.forEach((cards) => {
    const div = document.createElement('div');
    div.innerHTML += `
  <div class="card2">
  <img src="${cards.teacherImage}">
  <div>
      <h3>${cards.teacherName}</h3>
      <h5>${cards.teacherDomain}</h5>
      <p>${cards.teacherAbout}</p>
  </div>
  </div>
  `;
    card.append(div);
});