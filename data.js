// "use strict";
// const events = [
//   {
//     startTime: 1.5,
//     endTime: 3,
//     name: "Event 1",
//     location: "Location 1",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },

//   {
//     startTime: 0.5,
//     endTime: 2.5,
//     name: "Event 2",
//     location: "Location 2",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
//   {
//     startTime: 3,
//     endTime: 4,
//     name: "Event 3",
//     location: "Location 3",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
//   {
//     startTime: 12.5,
//     endTime: 13.5,
//     name: "Event 4",
//     location: "Location 4",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
//   {
//     startTime: 10,
//     endTime: 11,
//     name: "Event 4",
//     location: "Location 4",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
//   {
//     startTime: 11.5,
//     endTime: 12,
//     name: "Event 4",
//     location: "Location 4",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
//   {
//     startTime: 11.5,
//     endTime: 12,
//     name: "Event 4",
//     location: "Location 4",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
//   {
//     startTime: 11,
//     endTime: 11.5,
//     name: "Event 4",
//     location: "Location 4",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
//   {
//     startTime: 13,
//     endTime: 18,
//     name: "Event 4",
//     location: "Location 4",
//     hoursIncluded: function () {
//       const hoursSet = [];
//       for (let i = this.startTime; i <= this.endTime; i++) {
//         hoursSet.push(i);
//       }
//       return hoursSet;
//     },
//   },
// ];

// events.sort(
//   (a, b) => (a.hoursIncluded().length < b.hoursIncluded().length ? 1 : -1)
//   // a.startTime > b.startTime ? 1 : -1
// );

// export { events };

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
    startTime: 0.5,
    endTime: 3,
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
    endTime: 4,
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
    endTime: 7,
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
    startTime: 6,
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
    startTime: 15,
    endTime: 20,
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
    endTime: 8.5,
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
    startTime: 8.5,
    endTime: 9,
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
    endTime: 17.5,
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
