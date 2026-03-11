import { createContext, useContext, useState, ReactNode } from 'react';

export interface LoyaltyRecord {
  id: string;
  date: string;
  time?: string;
  type: 'add' | 'redeem';
  points: number;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  points: number;
  history: LoyaltyRecord[];
}

interface FidelidadeContextType {
  customers: Customer[];
  addCustomer: (name: string, phone: string, email: string) => void;
  addPoints: (customerId: string, points: number, description: string) => void;
  redeemPoints: (customerId: string, points: number) => void;
  getCustomerById: (id: string) => Customer | undefined;
}

const FidelidadeContext = createContext<FidelidadeContextType | undefined>(undefined);

const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: '1',
    name: 'Ilca Almeida',
    phone: '(11) 98765-4321',
    points: 320,
    history: [
      { id: 'h1', date: '22/07/2025', time: '16h30', type: 'add', points: 320, description: 'Pedido #232 - R$ 45,00' }
    ]
  },
  {
    id: '2',
    name: 'João Silva',
    phone: '(11) 91234-5678',
    points: 1250,
    history: [
      { id: 'h2', date: '21/07/2025', time: '16h20', type: 'add', points: 1250, description: 'Pedido #240 - R$ 89,90' }
    ]
  },
  {
    id: '3',
    name: 'Maria Santos',
    phone: '(11) 97654-3210',
    points: 75,
    history: [
      { id: 'h3', date: '20/07/2025', time: '13h15', type: 'add', points: 75, description: 'Pedido #245 - R$ 35,00' }
    ]
  },
  {
    id: '4',
    name: 'Pedro Costa',
    phone: '(11) 99876-5432',
    points: 540,
    history: [
      { id: 'h4', date: '19/07/2025', time: '12h45', type: 'add', points: 540, description: 'Pedido #241 - R$ 78,00' }
    ]
  },
  {
    id: '5',
    name: 'Ana Rodrigues',
    phone: '(11) 98234-5678',
    points: 2080,
    history: [
      { id: 'h5', date: '18/07/2025', time: '16h30', type: 'add', points: 2080, description: 'Pedido #248 - R$ 42,00' }
    ]
  },
  {
    id: '6',
    name: 'Carlos Ferreira',
    phone: '(11) 91567-8901',
    points: 990,
    history: [
      { id: 'h6', date: '17/07/2025', time: '15h20', type: 'add', points: 990, description: 'Pedido #243 - R$ 58,50' }
    ]
  },
  {
    id: '7',
    name: 'Lucia Oliveira',
    phone: '(11) 99345-6789',
    points: 1000,
    history: [
      { id: 'h7', date: '16/07/2025', time: '18h10', type: 'add', points: 1000, description: 'Pedido #250 - R$ 71,00' }
    ]
  },
  {
    id: '8',
    name: 'Roberto Lima',
    phone: '(11) 98567-1234',
    points: 150,
    history: [
      { id: 'h8', date: '15/07/2025', time: '13h05', type: 'add', points: 150, description: 'Pedido #242 - R$ 25,00' }
    ]
  },
  {
    id: '9',
    name: 'Fernanda Sousa',
    phone: '(11) 97890-1234',
    points: 680,
    history: [
      { id: 'h9', date: '14/07/2025', time: '17h40', type: 'add', points: 680, description: 'Pedido #237 - R$ 48,00' }
    ]
  },
  {
    id: '10',
    name: 'Miguel Torres',
    phone: '(11) 96543-2109',
    points: 420,
    history: [
      { id: 'h10', date: '13/07/2025', time: '11h25', type: 'add', points: 420, description: 'Pedido #230 - R$ 62,00' }
    ]
  },
  {
    id: '11',
    name: 'Carla Mendes',
    phone: '(11) 95678-3456',
    points: 3500,
    history: [
      { id: 'h11', date: '12/07/2025', time: '20h15', type: 'add', points: 3500, description: 'Pedido #228 - R$ 92,50' }
    ]
  },
  {
    id: '12',
    name: 'Rafael Moreira',
    phone: '(11) 94321-6789',
    points: 30,
    history: [
      { id: 'h12', date: '11/07/2025', time: '14h30', type: 'add', points: 30, description: 'Pedido #223 - R$ 30,00' }
    ]
  },
  {
    id: '13',
    name: 'Patricia Reis',
    phone: '(11) 93210-9876',
    points: 810,
    history: [
      { id: 'h13', date: '10/07/2025', time: '16h45', type: 'add', points: 810, description: 'Pedido #218 - R$ 76,00' }
    ]
  }
];

export function FidelidadeProvider({ children }: { children: ReactNode }) {
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);

  const addCustomer = (name: string, phone: string, _email: string) => {
    const maxId = customers.length > 0
      ? Math.max(...customers.map(c => parseInt(c.id)))
      : 0;
    const newCustomer: Customer = {
      id: String(maxId + 1),
      name,
      phone,
      points: 0,
      history: []
    };
    setCustomers(prev => [...prev, newCustomer]);
  };

  const addPoints = (customerId: string, points: number, description: string) => {
    setCustomers(prev =>
      prev.map(customer => {
        if (customer.id === customerId) {
          const now = new Date();
          const time = `${String(now.getHours()).padStart(2, '0')}h${String(now.getMinutes()).padStart(2, '0')}`;
          const newRecord: LoyaltyRecord = {
            id: `h${Date.now()}`,
            date: now.toLocaleDateString('pt-BR'),
            time,
            type: 'add',
            points,
            description
          };
          return {
            ...customer,
            points: customer.points + points,
            history: [newRecord, ...customer.history]
          };
        }
        return customer;
      })
    );
  };

  const redeemPoints = (customerId: string, points: number) => {
    setCustomers(prev =>
      prev.map(customer => {
        if (customer.id === customerId && customer.points >= points) {
          const now = new Date();
          const time = `${String(now.getHours()).padStart(2, '0')}h${String(now.getMinutes()).padStart(2, '0')}`;
          const newRecord: LoyaltyRecord = {
            id: `h${Date.now()}`,
            date: now.toLocaleDateString('pt-BR'),
            time,
            type: 'redeem',
            points: -points,
            description: 'Resgate de pontos'
          };
          return {
            ...customer,
            points: customer.points - points,
            history: [newRecord, ...customer.history]
          };
        }
        return customer;
      })
    );
  };

  const getCustomerById = (id: string) => {
    return customers.find(customer => customer.id === id);
  };

  return (
    <FidelidadeContext.Provider
      value={{
        customers,
        addCustomer,
        addPoints,
        redeemPoints,
        getCustomerById
      }}
    >
      {children}
    </FidelidadeContext.Provider>
  );
}

export function useFidelidade() {
  const context = useContext(FidelidadeContext);
  if (context === undefined) {
    throw new Error('useFidelidade must be used within a FidelidadeProvider');
  }
  return context;
}
