const express = require("express");
const CORS = require("cors");

const app = express();

app.use(CORS());

let mockData = [
    {
        id: 0,
        username: "Greg",
        email: "greg@email.com",
        challenges: [
            {
                id: 0,
                title: "Running",
                duration: 30,
                startDate: 4-1-21,
                notes: [ 
                    {
                        date: 4-1-21,
                        note: "Note1"
                    },
                    {
                        date: 4-3-21,
                        note: "Note2"
                    },
                    {
                        date: 4-4-21,
                        note: "Note3"
                    },
                    {
                        date: 4-8-21,
                        note: "Note4"
                    },
                ]
            }
        ],
    },
    {
        id: 1,
        username: "Gregory",
        email: "gregory@email.com",
        challenges: [
            {
                id: 0,
                title: "Walking",
                duration: 30,
                startDate: 4-1-21,
                notes: [ 
                    {
                        date: 4-1-21,
                        note: "Note1"
                    },
                    {
                        date: 4-3-21,
                        note: "Note2"
                    },
                    {
                        date: 4-4-21,
                        note: "Note3"
                    },
                    {
                        date: 4-8-21,
                        note: "Note4"
                    },
              ]
            }
        ],
      },
      {
        id: 2,
        username: "Arthur",
        email: "arthur@email.com",
        challenges: [
            {
                id: 0,
                title: "Cycling",
                duration: 30,
                startDate: 4-1-21,
                notes: [ 
                    {
                        date: 4-1-21,
                        note: "Note1"
                    },
                    {
                        date: 4-3-21,
                        note: "Note2"
                    },
                    {
                        date: 4-4-21,
                        note: "Note3"
                    },
                    {
                        date: 4-8-21,
                        note: "Note4"
                    },
              ]
            }
        ],
      },
      {
        id: 3,
        username: "Hawman",
        email: "hawman@email.com",
        challenges: [
            {
                id: 0,
                title: "Piano",
                duration: 30,
                startDate: 4-1-21,
                notes: [ 
                    {
                        date: 4-1-21,
                        note: "Note1"
                    },
                    {
                        date: 4-3-21,
                        note: "Note2"
                    },
                    {
                        date: 4-4-21,
                        note: "Note3"
                    },
                    {
                        date: 4-8-21,
                        note: "Note4"
                    },
              ]
            }
        ],
      },
      
  ];