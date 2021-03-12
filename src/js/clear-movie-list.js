import refs from './refs';
import { load, save } from './storage';

import message from './key-words';


let currentValue;

export default function clearList() {
    currentValue = load('currentRequest');

    if (load(currentValue).length === 0) {
        refs.clearBtnContainer.style.display = "none";
        
    } else if (load(currentValue).length !== 0) {
        refs.clearBtn.textContent = `Clear ${currentValue} list`;
        refs.clearBtnContainer.style.display = "block";
    }
}

function handleClearBtn() {
    save(currentValue, []);
    refs.filmListRef.innerHTML = '';
    refs.clearBtnContainer.style.display = "none";
    message.messageAboutLibrary();
}


refs.clearBtn.addEventListener('click', handleClearBtn);







