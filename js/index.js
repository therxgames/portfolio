
const portfolioProjects = [
    {
        id: 1,
        title: 'Pereezd',
        date: 'April,2019',
        src: 'img/project-1.jpg',
        type: 'Front-end',
        href: 'https://therxgames.github.io/project_1-Front-end-/'
    },
    {
        id: 2,
        title: 'Todo List',
        date: 'December,2019',
        src: 'img/project-2.jpg',
        type: 'Front-end',
        href: 'https://therxgames.github.io/project_2-Front-end-/'
    },
     {
        id: 3,
        title: 'Dentistry',
        date: 'April,2018',
        src: 'img/project-3.jpg',
        type: 'Fullstack',
        href: 'https://github.com/therxgames/project_3-Back-end-/'
    },
     {
        id: 4,
        title: 'Travel Agency',
        date: 'May,2020',
        src: 'img/project-4.jpg',
        type: 'Fullstack',
        href: 'https://github.com/therxgames/project_4-Back-end-/'
    },
    {
        id: 5,
        title: 'Showcase',
        date: 'July,2020',
        src: 'img/project-5.jpg',
        type: 'Front-end',
        href: 'https://github.com/therxgames/project_5-Front-end-/'
    },
    {
        id: 6,
        title: 'Kovalev',
        date: 'September,2020',
        src: 'img/project-6.jpg',
        type: 'Front-end',
        href: 'https://therxgames.github.io/project_6-Front-end-/'
    },
    {
        id: 7,
        title: 'Autocomplete',
        date: 'October,2020',
        src: 'img/project-7.jpg',
        type: 'Front-end',
        href: 'https://therxgames.github.io/project_7-Front-end-/'
    },
    {
        id: 8,
        title: 'Kazino',
        date: 'March,2021',
        src: 'img/project-8.jpg',
        type: 'Front-end',
        href: 'https://therxgames.github.io/project_8-Front-end-/'
    },
    
]

const divProjects = document.createElement('div');
divProjects.className = 'portfolio_projects';
document.querySelector('.portfolio>.wrapper').append(divProjects);

const addProject = (portfolioProjects) => { 
    divProjects.innerHTML = '';
    portfolioProjects.forEach(item => {
    const img = document.createElement('img'),
          linkImg = document.createElement('a'),
          title = document.createElement('span'),
          h3 = document.createElement('h3'),
          project = document.createElement('div'),
          date = document.createElement('p'),
          divImg = document.createElement('div');

    divImg.className = 'portfolio_project-img';
    date.className = 'box-text portfolio_project-date';
    title.className = 'box-sm-title portfolio_project-title';
    project.className = 'portfolio_project';

    linkImg.setAttribute('href', item.href);
    linkImg.setAttribute('target', '_blank');
    linkImg.setAttribute('title', 'перейти к проекту');


    img.src = item.src;
    title.textContent = item.title;
    date.textContent = item.date;

    h3.append(title);
    linkImg.append(img);
    divImg.append(linkImg);

    const arr = [divImg,h3,date];
    project.append(...arr);
    
    document.querySelector('.portfolio_projects')
            .append(project);
})}


document.addEventListener("DOMContentLoaded", addProject(portfolioProjects));

const filterProjects = (type) => {
    divProjects.innerHTML = '';
    const filterProjects = portfolioProjects.filter(item => item.type === type);
    addProject(filterProjects);
};

document.querySelector('.front-end')
        .addEventListener("click", () => filterProjects('Front-end'));

document.querySelector('.fullstack')
        .addEventListener("click", () => filterProjects('Fullstack'));

document.querySelector('.all_projects')
        .addEventListener("click", () => addProject(portfolioProjects));


const anchor  = () => {

     const anchors = document.querySelectorAll('a[href*="#"]');

     anchors.forEach( item => {
     	item.addEventListener('click', (e) => {
     		e.preventDefault();
     		const blockID = item.getAttribute('href');
     		document.querySelector(`${blockID}`).scrollIntoView({
     			behavior: "smooth",
     			block: "start",
     		})
     	})
     })

}


const modalWindow = () => {

    const contactMeBtn = document.querySelector('#contact_me-btn');
    const contactMeForm = document.querySelector('.contact_me-form');
    const backBtn = document.querySelector('.back_button');

     contactMeBtn.addEventListener('click', () => {

        let darkLayer = document.createElement('div'); 
        darkLayer.id = 'shadow';
        document.body.appendChild(darkLayer); 

        let modalWin = document.querySelector('.contact_me-form'); 
        modalWin.style.display = 'block'; 

        darkLayer.addEventListener('click' , () => { 
            darkLayer.parentNode.removeChild(darkLayer); 
            modalWin.style.display = 'none'; 
        });

        backBtn.addEventListener('click' , () => {
            darkLayer.parentNode.removeChild(darkLayer);
            modalWin.style.display = 'none'; 
        });
     }
    )

}

anchor();
modalWindow();

