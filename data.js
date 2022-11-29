"use strict";
const events = [
  {
    startTime: 1.5,
    endTime: 4,
    name: "Event 1",
    location: "Location 1",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 2,
    endTime: 4,
    name: "Event 2",
    location: "Location 2",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 0,
    endTime: 5,
    name: "Event 2",
    location: "Location 2",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 3,
    endTime: 7,
    name: "Event 3",
    location: "Location 3",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 1,
    endTime: 3,
    name: "Event 4",
    location: "Location 4",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },

  {
    startTime: 5,
    endTime: 8,
    name: "Event 4",
    location: "Location 4",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 11,
    endTime: 13,
    name: "Event 4",
    location: "Location 4",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 8,
    endTime: 23,
    name: "Event 4",
    location: "Location 4",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 9,
    endTime: 10,
    name: "Event 4",
    location: "Location 4",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 11,
    endTime: 23,
    name: "Event 4",
    location: "Location 4",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
  {
    startTime: 14,
    endTime: 24,
    name: "Event 4",
    location: "Location 4",
    hoursIncluded: function () {
      const hoursSet = [];
      for (let i = this.startTime; i <= this.endTime; i++) {
        hoursSet.push(i);
      }
      return hoursSet;
    },
  },
];

events.sort(
  // (a, b) => (a.hoursIncluded().length < b.hoursIncluded().length ? 1 : -1)
  (a, b) => (a.startTime > b.startTime ? 1 : -1)
);

export { events };
