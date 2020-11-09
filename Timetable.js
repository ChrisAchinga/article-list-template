const timetable = [
  {
    id: 1,
    subject: "Maths",
    lessonDetails: [
      {
        startTime: "8am",
        endTime: "10am",
        room: 121,
      },
    ],
    lecturer: "Peter",
  },
  {
    id: 2,
    subject: "English",
    lessonDetails: [
      {
        startTime: "11am",
        endTime: "1pm",
        room: 100,
      },
    ],
    lecturer: "Susan",
  },
  {
    id: 3,
    subject: "Science",
    lessonDetails: [
      {
        startTime: "8am",
        endTime: "10am",
        room: 100,
      },
    ],
    lecturer: "Vivian",
  },
  {
    id: 4,
    subject: "Art",
    lessonDetails: [
      {
        startTime: "8am",
        endTime: "10am",
        room: 999,
      },
    ],
    lecturer: "Gregor",
  },
  {
    id: 5,
    subject: "Gym",
    lessonDetails: [
      {
        startTime: "4pm",
        endTime: "6pm",
        room: "field",
      },
    ],
    lecturer: "Chris",
  },
];

module.exports = timetable;
