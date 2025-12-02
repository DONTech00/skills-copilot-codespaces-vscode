function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
    }
}


const galleryData = [
    {
        id: 1,
        category: 'stem',
        title: 'Junior Robotics Competition',
        desc: 'Grade 5 students demonstrating their obstacle-avoidance robots built using Arduino microcontrollers.',
        img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        category: 'arts',
        title: 'Cultural Day Celebration',
        desc: 'Students showcasing traditional Ghanaian dance and attire to honor our rich heritage.',
        img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80' 
    },
    {
        id: 3,
        category: 'stem',
        title: 'Biology Lab: Cell Structure',
        desc: 'High school students using microscopes to analyze plant cell structures.',
        img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        category: 'sports',
        title: 'Inter-School Football Finals',
        desc: 'The Elite Academy team showing teamwork and resilience during the regional finals.',
        img: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 5,
        category: 'arts',
        title: 'Annual Art Exhibition',
        desc: 'A display of student pottery and painting focusing on the theme of "Future Cities".',
        img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 6,
        category: 'sports',
        title: 'Track & Field Day',
        desc: 'Developing physical growth and competitive spirit on the tracks.',
        img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80'
    }
];

const galleryGrid = document.getElementById('gallery-grid');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');


window.addEventListener('DOMContentLoaded', () => {
    loadGallery('all');
});

function loadGallery(filter) {
    galleryGrid.innerHTML = ''; 
    
    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="card-info">
                <span class="card-category">${item.category.toUpperCase()}</span>
                <h4>${item.title}</h4>
            </div>
        `;
    
        card.onclick = () => openModal(item);
        galleryGrid.appendChild(card);
    });

}
function filterGallery(category) {
    
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
  
    event.target.classList.add('active');
    
    loadGallery(category);
}


function openModal(item) {
    modal.style.display = "flex";
    modalImg.src = item.img;
    modalTitle.innerText = item.title;
    modalDesc.innerText = item.desc;
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}