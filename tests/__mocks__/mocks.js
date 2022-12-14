const clients = [
  {
    full_name: 'Terry Evans',
    address: 'Potato street, 4',
    cups: '123456',
    role: 'customer',
    building_type: 'house',
  },
  {
    full_name: 'Glenda Gilbert',
    address: 'Potato street, 9',
    cups: '234567',
    role: 'customer-basic',
    building_type: 'house',
  },
  {
    full_name: 'Phillip Lee',
    address: 'Potato street, 7',
    cups: '345678',
    role: 'customer-premium',
    building_type: 'apartment',
  },
  {
    full_name: 'Cecil Grant',
    address: 'Sweet potato street, 2',
    cups: '321654',
    role: 'customer-basic',
    building_type: 'house',
  },
  {
    full_name: 'Clinton Horton',
    address: 'Swede street, 5',
    cups: '456123',
    role: 'customer',
    building_type: 'apartment',
  },
  {
    full_name: 'Steven Walters',
    address: 'Swede street, 7',
    cups: '111222',
    role: 'customer',
    building_type: 'house',
  },
];

const curlClient = {
  full_name: 'Terry Evans',
  address: 'Potato street, 4',
  cups: '123456',
  role: 'customer',
  building_type: 'house',
};

const suplyPoints = [
  {
    cups: '123456',
    tariff: 'One price',
    invoiced_amount: '50.00',
    power: {
      p1: '4500',
      p2: '4200',
    },
    neighbors: ['234567', '345678'],
  },
  {
    cups: '234567',
    tariff: 'Two prices',
    invoiced_amount: '45.00',
    power: {
      p1: '5000',
      p2: '4800',
    },
    neighbors: ['123456', '345678'],
  },
  {
    cups: '345678',
    tariff: 'One price',
    invoiced_amount: '40.00',
    power: {
      p1: '5500',
      p2: '5800',
    },
    neighbors: ['234567', '123456'],
  },
  {
    cups: '321654',
    tariff: 'One price',
    invoiced_amount: '68.00',
    power: {
      p1: '4200',
      p2: '4200',
    },
    neighbors: [],
  },
  {
    cups: '456123',
    tariff: 'One price',
    invoiced_amount: '200.00',
    power: {
      p1: '6200',
      p2: '6000',
    },
    neighbors: ['111222'],
  },
  {
    cups: '111222',
    tariff: 'Three prices',
    invoiced_amount: '10.00',
    power: {
      p1: '4700',
      p2: '4500',
    },
    neighbors: ['456123'],
  },
];

const selecedSuplyPoint = [
  {
    cups: '123456',
    tariff: 'One price',
    invoiced_amount: '50.00',
    power: {
      p1: '4500',
      p2: '4200',
    },
    neighbors: ['234567', '345678'],
  },
];

export default {
  clients,
  curlClient,
  suplyPoints,
  selecedSuplyPoint,
};
