//let root = document.getElementsByClassName('root')[0];
let data = {
    fullname: 'Zack Wells',
    title: 'UX Designer',
    socialmedia: [
        {
            id: 'instagram',
            platform: 'Instagram',
            url: 'https://www.instagram.com',
            icon: 'd="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"'
        },

        {
            id: 'twitter',
            platform: 'Twitter',
            url: 'https://www.twitter.com',
            icon: 'd="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"'
        },

        {
            id: 'linkedin',
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com',
            icon: 'd="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"'
        },
    ],
    description: 'I design easy to use websites and apps. Feel free to contact me at one of the links above.',
}
let cardApp = (data) => {
    let body = document.getElementsByTagName('body')[0]

    let root = document.createElement('div');

    let style = document.createElement('style')

    let card = document.createElement('section');

    let html = `
<div class="card__wrapper">
<img src="https://images.unsplash.com/photo-1507081323647-4d250478b919?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b717a6d0469694bbe6400e6bfe45a1da"
    class="card__image">
<div class="card__info">
    <span class="card__name">${data.fullname}</span>
    <span class="card__title">${data.title}</span>
</div>
<div class="card__socialmedia">
</div>
<div class="card__description">
    <span>${data.description}</span>
</div>
</div>
`;

    let cssStyles = `
.card{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
}

.card__wrapper{
    height: 370px;
    padding: 20px;
    max-width: 270px;
    width: 100%;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.22);
    display: flex;
    flex-direction: column;
    align-items: center;
} 

.card__image{
    border: 3px solid #2f00ff;
    height: 65px;
    width: 65px;
    margin: 1.5rem 0 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.card__info{
    margin-bottom: 1.5rem;
}

.card__name{
    text-align: center;
    display: block;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    color: #000000;
}

.card__title{
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 0.9rem;
    color: #747474;
}

.card__socialmedia{
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin-bottom: 1.7rem;
}

.cart__icon{
    cursor: pointer;
    transition: 0.3 ease-in-out, color 0.3s ease-in-out;
}

.card__icon:hover{
    opacity: 0.7;
}

.card__icon svg{
    width: 35px;
    height: 35px;
}


.card__description{
    text-align: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1rem;
    text-align: center;
    color: #747474;
}
`;

    body.prepend(root);
    root.classList.add('root');
    root.prepend(card);
    root.style.cssText = `
background: linear-gradient(127.38deg, #A0FFE8 0.9%, #05A5FF 98.76%);
background-size: cover; 
background-position: center;
`;
    root.prepend(style);
    card.classList.add('card');

    style.innerHTML = cssStyles;
    card.innerHTML = html;

    let cardsocialmedia = card.getElementsByClassName('card__socialmedia')[0];

    data.socialmedia.forEach((item, index) => {
        let tempNode = document.createElement('a')
        tempNode.classList.add('card__icon', `card__icon--${item.id}`);
        tempNode.innerHTML = `
      <a href="${item.url}" target="_blank" class="card__icon card__icon--${item.id}">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
              ${item.icon} />
              </svg>
      </a>
        `;
        cardsocialmedia.append(tempNode);
    });

}
cardApp(data);