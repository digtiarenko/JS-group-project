import refs from './refs';
import { load, save, remove } from './storage';
import { HOME, SEARCH, WATCHED, QUEUE } from './request';


// const clearBtn = document.querySelector('[data-request="clear"]');


// console.log(clearBtn);


// if (localStorage.getItem('currentRequest') === "watched" || localStorage.getItem('currentRequest') === "queue") {
//     clearBtn.style.display = "block";
// }

export default function clearList() {
    const current = load('currentRequest');

    console.log(current);
    

    if ((load(current).length) === 0) {
        refs.learBtn.style.display = "none";
        return;
    } else {
        
        refs.clearBtn.textContent = `Clear ${current} list`;
        refs.clearBtn.style.display = "block";
    }

    // if (localStorage.getItem(current)) {
    //     clearBtn.textContent = `Clear ${current} list`;
    //     clearBtn.style.display = "block";
    // }




//     if (localStorage.getItem('currentRequest') === "watched" || localStorage.getItem('currentRequest') === "queue") {
//     clearBtn.style.display = "block";
// }
}



// refs.libraryHeaderBtn.addEventListener('click', listner);






