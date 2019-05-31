import { IDoctor, IPatient } from '../shared/interfaces';

export const Doctors: IDoctor[] = [
  {
    id       : 1,
    firstName: 'Gregory',
    lastName : 'House',
    title    : 'MD'
  },
  {
    id       : 2,
    firstName: 'Elizabeth',
    lastName : 'Blackwell',
    title    : 'MD'
  },
  {
    id       : 3,
    firstName: 'Joseph',
    lastName : 'Lister',
    title    : 'Surgeon'
  },
  {
    id       : 4,
    firstName: 'Eduard',
    lastName : 'Jenner',
    title    : 'Immunologist'
  }
];

export const Patients: IPatient[] = [
  {
    id            : 1,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 2,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 3,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 4,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 5,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 6,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 7,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 8,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 9,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 10,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 11,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 12,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 13,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 14,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 15,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 16,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 17,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 18,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 19,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 20,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 21,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 22,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 23,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 24,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 25,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 26,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 27,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 28,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 29,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 30,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }, {
    id            : 31,
    registeredDate: '2018-10-13T23:50:12Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Mario',
    lastName      : 'Rossi',
    doctor        : 1,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3956789910',
        street : 'Via Tiburtina 59',
        city   : 'Rome',
        zipcode: '00131',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 32,
    registeredDate: '2018-10-12T11:23:57Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Francesco',
    lastName      : 'Giuliani',
    doctor        : 3,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+3933522342234',
        street : 'Via Casilina 72',
        city   : 'Rome',
        zipcode: '00186',
        country: 'Italy'
      },
      {
        type   : 'WORK',
        email  : ' aaa@bb.com ',
        phone  : '+39062231124',
        street : 'Via Cassia 823',
        city   : 'Rome',
        zipcode: '00192',
        country: 'Italy'
      }
    ]
  },
  {
    id            : 33,
    registeredDate: '2018-10-16T13:51:28Z',
    birthDate     : '1987-10-13T23:50:12Z',
    firstName     : 'Elico',
    lastName      : 'Maikenberg',
    doctor        : 4,
    addresses     : [
      {
        type   : 'HOME',
        email  : ' aaa@bb.com ',
        phone  : '+39781123112',
        street : 'Piazza Risorgimento 44',
        city   : 'Rome',
        zipcode: '00195',
        country: 'Italy'
      }
    ]
  }
];
