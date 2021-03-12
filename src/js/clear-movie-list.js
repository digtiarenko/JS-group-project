import refs from './refs';
import { load, save } from './storage';
import message from './key-words';


let currentValue;

export default function clearList() {
    currentValue = load('currentRequest');

    if (load(currentValue).length === 0) {
        hiddenClearBtn();
        
    } else if (load(currentValue).length !== 0) {
        showClearBtn();
    }
}

function handleClearBtn() {
    save(currentValue, []);
    refs.filmListRef.innerHTML = '';
    refs.clearBtnContainer.style.display = "none";
    message.messageAboutLibrary();
}

function hiddenClearBtn() {
    refs.clearBtnContainer.style.display = "none";
}

function showClearBtn() {
    refs.clearBtn.textContent = `clear ${currentValue} list`;
    refs.clearBtnContainer.style.display = "block";
}


refs.clearBtn.addEventListener('click', handleClearBtn);







