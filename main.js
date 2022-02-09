import { startOfTomorrow, format, intervalToDuration } from 'date-fns';
import {UI} from './view.js';

function setMinDate() {
   const tomorrowDate = startOfTomorrow();
   UI.INPUT_DATE.setAttribute('min', format(tomorrowDate, 'yyyy-MM-dd'));
}

setMinDate();

UI.SUBMIT_BUTTON.addEventListener('click', countRemainedTime);

function countRemainedTime() {
   const day = UI.INPUT_DATE.value.slice(-2);
   const month = UI.INPUT_DATE.value.slice(5, 7) - 1;
   const year = UI.INPUT_DATE.value.slice(0, 4);
   const chosenDate = new Date(year, month, day);

   const result = intervalToDuration({
      start: new Date(),
      end: chosenDate,
   })

   UI.OUTPUT_TEXT.textContent = 'Remained: ';
   UI.OUTPUT_TEXT.append(JSON.stringify(result, null, 2).slice(1, -1));
}