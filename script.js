"use strict";
import { events } from "./data.js";

let renderedEvents = [];
let hourSelector = [];

function init() {
  for (let i = 0; i < 24; i++) {
    document.querySelectorAll(`.half-top`)[i].setAttribute("id", `am-${i}`);
    hourSelector.push(document.querySelector(`#am-${i}`));
  }
  for (let i = 0; i < events.length; i++) {
    setEvent(
      events[i].startTime,
      events[i].endTime,
      events[i].name,
      events[i].location
    );
  }
}

const setEvent = (startTime, endTime, name, location) => {
  const newEvent = hourSelector[Math.floor(startTime)].appendChild(
    createContent(startTime, name, location)
  );
  if (startTime < Math.ceil(startTime)) {
    newEvent.classList.add("event-half");
  } else {
    newEvent.classList.add("event");
  }
  newEvent.style.height = (endTime - startTime) * 100 + "px";
  renderedEvents.push(newEvent);
  align();
};

const align = () => {
  let time1, time2;
  for (let i = 0; i < renderedEvents.length; i++) {
    for (let j = i + 1; j < renderedEvents.length; j++) {
      if (elementsOverlap(renderedEvents[i], renderedEvents[j])) {
        time1 = parseFloat(
          renderedEvents[i].parentElement.children[0].innerText.substring(
            0,
            renderedEvents[i].children[0].innerText.indexOf(":")
          )
        );
        time2 = parseFloat(
          renderedEvents[j].children[0].innerText.substring(
            0,
            renderedEvents[j].children[0].innerText.indexOf(":")
          )
        );
        document
          .getElementById(renderedEvents[i].parentElement.id)
          .appendChild(renderedEvents[j]);

        renderedEvents[j].style.marginTop = (time2 - time1) * 100 - 10 + "px";
      }
    }
  }
};

const createContent = (startTime, eventName, eventLocation) => {
  const content = document.createElement("div");
  const time = document.createElement("p");
  const name = document.createElement("h5");
  const location = document.createElement("span");
  startTime < 12
    ? (time.innerText = `${startTime}:00 AM`)
    : (time.innerText = `${startTime}:00 PM`);

  name.innerText = eventName;
  location.innerText = eventLocation;
  content.append(time, name, location);
  return content;
};

const elementsOverlap = (el1, el2) => {
  const event1 = el1.getBoundingClientRect();
  const event2 = el2.getBoundingClientRect();

  return !(
    event1.top > event2.bottom ||
    event1.bottom < event2.top ||
    event1.right < event2.left ||
    event1.left > event2.right
  );
};

init();

console.log(events);
