"use strict";
import { events } from "./data.js";

let renderedEvents = [];
let hourSelector = [];
let halfHourSelector = [];

function init() {
  for (let i = 0; i < 24; i++) {
    document.querySelectorAll(`.half-top`)[i].setAttribute("id", `full-${i}`);
    hourSelector.push(document.querySelector(`#full-${i}`));
    document
      .querySelectorAll(`.half-bottom-2`)
      [i].setAttribute("id", `half-${i}`);
    halfHourSelector.push(document.querySelector(`#half-${i}`));
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
  let newEvent;
  if (startTime < Math.ceil(startTime)) {
    newEvent = halfHourSelector[Math.floor(startTime)].appendChild(
      createContent(startTime, endTime, name, location)
    );
  } else {
    newEvent = hourSelector[Math.floor(startTime)].appendChild(
      createContent(startTime, endTime, name, location)
    );
  }

  newEvent.classList.add("event");
  const height = (endTime - startTime) * 100 - 3;
  if (height <= 50) {
    startTime < Math.ceil(startTime)
      ? newEvent.classList.add("event-half-bot")
      : newEvent.classList.add("event-half-top");
    newEvent.classList.remove("event");
  }
  newEvent.style.height = height + "px";
  renderedEvents.push(newEvent);
  align();
  newEvent.style.height = height + 1 + "px";
};

const align = () => {
  let time, time1, time2;
  for (let i = 0; i < renderedEvents.length; i++) {
    for (let j = i + 1; j < renderedEvents.length; j++) {
      if (elementsOverlap(renderedEvents[i], renderedEvents[j])) {
        time1 = renderedEvents[i].parentElement.children[0].innerText;
        time2 = renderedEvents[j].children[0].innerText;
        time = getFloatTime(time1, time2);

        document
          .getElementById(renderedEvents[i].parentElement.id)
          .appendChild(renderedEvents[j]);
        renderedEvents[j].style.marginTop =
          (time[1] - time[0]) * 100 - 9 + "px";
      }
    }
  }
};

const getFloatTime = (time1, time2) => {
  const time = [];
  time1 = time1.substring(0, time1.indexOf(" "));
  time2 = time2.substring(0, time2.indexOf(" "));
  time1.includes(":30")
    ? time.push(parseFloat(time1.replace(":30", ".5")))
    : time.push(parseFloat(time1));
  time2.includes(":30")
    ? time.push(parseFloat(time2.replace(":30", ".5")))
    : time.push(parseFloat(time2));
  return time;
};

const createContent = (startTime, endTime, eventName, eventLocation) => {
  const content = document.createElement("div");
  const time = document.createElement("p");
  const name = document.createElement("h5");
  const location = document.createElement("span");

  const convertStartTime = startTime.toString();
  const convertEndTime = endTime.toString();

  if (convertStartTime.includes(".")) {
    startTime < 12
      ? (time.innerText = `${convertStartTime.replace(".5", ":30")} AM`)
      : (time.innerText = `${convertStartTime.replace(".5", ":30")} PM`);
  } else if (convertStartTime.includes(".")) {
    startTime < 12
      ? (time.innerText = `${convertEndTime.replace(".5", ":30")} AM`)
      : (time.innerText = `${convertEndTime.replace(".5", ":30")} PM`);
  } else
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
