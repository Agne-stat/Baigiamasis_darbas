let commentInput = document.getElementById('comment');
let newComment = document.querySelector('.newComments');

let comment = document.createElement('p');
let commentBox = newComment.appendChild(comment);


let heart = document.querySelector('.heart');
let likes = document.querySelector('.likesCount');
let commentIcon = document.querySelector('.comment');



// save to local Storage

const setToLocalStorage = function setToLocalStorage() {
    localStorage.setItem('comments', comment.textContent)
    localStorage.setItem('likes', likes.textContent)
};

const getToLocalStorage = function getToLocalStorage() {
    localStorage.getItem('comments')
    localStorage.getItem('likes')
};

getToLocalStorage();





// panaikinu remus paspaudus input
commentInput.onfocus = function () {
    this.style.outline = 'none';
}


// paspaudus sirdele - pasikeicia spalva ir atsiranda 1 like
heart.onclick = function () {
    if (heart.classList.contains("active")) {
        likes.innerHTML = Number('') + 1;
        heart.style.color = 'red';
        heart.classList.remove("active");
        heart.classList.add("inactive");
        setToLocalStorage();
    } else {
        likes.innerHTML = 0;
        heart.style.color = 'black';
        heart.classList.remove("inactive");
        heart.classList.add("active");
        setToLocalStorage();
    };

};


// paspaudus comment icon - sufokusuoja i komentarus
focusMethod = function getFocus() {
    commentInput.focus();
}



// input'as be teksto 
function clearIput() {
    return commentInput.value = '';
};



// komentuoti paspaudus ENTER
commentInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        let name = prompt('Enter your name')
        comment.innerHTML += `<p> ${name} <span style="font-weight: 400;"> ${e.target.value} </span> </p> `;
        clearIput();
        setToLocalStorage();
    }
});



// scrolling down 
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('header').style.height = '52px';
        document.querySelector('.nav').style.height = '52px';
        document.querySelector('.instaTitle').style.display = 'none';
        document.querySelector('.veticalLine').style.display = 'none';
    } else {
        document.querySelector('header').style.height = '77px';
        document.querySelector('.nav').style.height = '77px';
        document.querySelector('.instaTitle').style.display = 'block';
        document.querySelector('.veticalLine').style.display = 'block';
    }
};


getToLocalStorage();



