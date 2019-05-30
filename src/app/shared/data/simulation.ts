import { IDoctor, IPatient } from '../interfaces';

export const doctors: IDoctor[] = [
  {
    "id": 1,
    "firstName":"Gregory",
    "lastName":"House",
    "title": "MD"
  },
  {
    "id": 2,
    "firstName":"Elizabeth",
    "lastName":"Blackwell",
    "title": "MD"
  },
  {
    "id": 3,
    "firstName":"Joseph",
    "lastName":"Lister",
    "title": "Surgeon"
  },
  {
    "id": 4,
    "firstName":"Eduard",
    "lastName":"Jenner",
    "title": "Immunologist"
  }
];

const patient = {
  "id": 1,
  "firstName": "xx",
  "lastName": "yy",
  "doctor": 0,
  "addresses": [
    {
      "type": "HOME|SECOND_HOME|WORK|HOLIDAY|RELATIVE",
      "email": " aaa@bb.com ",
      "phone": "+3912334",
      "street": "Whatever Boulevard 9",
      "city": "city",
      "zipcode": "12345",
      "country": "country"
    }
  ]
};

export const patients: IPatient[] = [
  {
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  },{
    "id": 1,
    "registeredDate": "2018-10-13T23:50:12Z",
    "firstName": "Mario",
    "lastName": "Rossi",
    "doctor": 1,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3956789910",
        "street": "Via Tiburtina 59",
        "city": "Rome",
        "zipcode": "00131",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 2,
    "registeredDate": "2018-10-12T11:23:57Z",
    "firstName": "Francesco",
    "lastName": "Giuliani",
    "doctor": 3,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+3933522342234",
        "street": "Via Casilina 72",
        "city": "Rome",
        "zipcode": "00186",
        "country": "Italy"
      },
      {
        "type": "WORK",
        "email": " aaa@bb.com ",
        "phone": "+39062231124",
        "street": "Via Cassia 823",
        "city": "Rome",
        "zipcode": "00192",
        "country": "Italy"
      }
    ]
  },
  {
    "id": 3,
    "registeredDate": "2018-10-16T13:51:28Z",
    "firstName": "Elico",
    "lastName": "Maikenberg",
    "doctor": 4,
    "addresses": [
      {
        "type": "HOME",
        "email": " aaa@bb.com ",
        "phone": "+39781123112",
        "street": "Piazza Risorgimento 44",
        "city": "Rome",
        "zipcode": "00195",
        "country": "Italy"
      }
    ]
  }
];
