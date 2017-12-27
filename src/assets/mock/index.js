let mockData = [
  {
    'name': 'Product #1',
    'id': '00001',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': 'A',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': '',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': 'A',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 50,
        'amount': 50
      }
    ]
  },
  {
    'name': 'Product #2',
    'id': '00002',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 100,
        'amount': 100
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': 'A',
        'fixed': 100,
        'amount': 100
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': '',
        'fixed': 20,
        'amount': 20
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 100,
        'amount': 100
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': '',
        'fixed': 100,
        'amount': 100
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': 'A',
        'fixed': 100,
        'amount': 100
      }
    ]
  },
  {
    'name': 'Product #3',
    'id': '00003',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': 'A',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': '',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': 'A',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 50,
        'amount': 50
      }
    ]
  },
  {
    'name': 'Product #4',
    'id': '00004',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': 'C',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': '',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': 'C',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 50,
        'amount': 50
      }
    ]
  },
  {
    'name': 'Product #5',
    'id': '00005',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': 'A',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': '',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 50,
        'amount': 50
      }
    ]
  },
  {
    'name': 'Product #6',
    'id': '00006',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 150,
        'amount': 150
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': 'B',
        'fixed': 150,
        'amount': 150
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': '',
        'fixed': 110,
        'amount': 110
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': '',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 150,
        'amount': 150
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': 'B',
        'fixed': 150,
        'amount': 150
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 150,
        'amount': 150
      }
    ]
  },
  {
    'name': 'Product #7',
    'id': '00007',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': 'C',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': 'C',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': 'C',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 50,
        'amount': 50
      }
    ]
  },
  {
    'name': 'Product #8',
    'id': '00008',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': 'A',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': 'A',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': '',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': '',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': 'A',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': 'A',
        'fixed': 50,
        'amount': 50
      }
    ]
  },
  {
    'name': 'Product #9',
    'id': '00009',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': '',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': 'B',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': 'B',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 50,
        'amount': 50
      }
    ]
  },
  {
    'name': 'Product #10',
    'id': '00010',
    'orders': [
      {
        'date': new Date(2017, 11, 1),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 2),
        'promo': 'D',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 3),
        'promo': '',
        'fixed': 15,
        'amount': 15
      },
      {
        'date': new Date(2017, 11, 4),
        'promo': '',
        'fixed': 40,
        'amount': 40
      },
      {
        'date': new Date(2017, 11, 5),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 6),
        'promo': '',
        'fixed': 50,
        'amount': 50
      },
      {
        'date': new Date(2017, 11, 7),
        'promo': '',
        'fixed': 50,
        'amount': 50
      }
    ]
  }
]

export default mockData
