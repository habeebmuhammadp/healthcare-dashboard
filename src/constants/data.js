import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from 'lucide-react';

export const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: History, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Clock, label: 'Appointments' },
  { icon: BarChart3, label: 'Statistics' },
  { icon: TestTube, label: 'Tests' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: HelpCircle, label: 'Support' },
  { icon: Settings, label: 'Setting' }
];

export const healthStatusData = [
  { 
    name: 'Lungs', 
    icon: '🫁', 
    status: 'danger', 
    date: 'Check 16 Oct, 2021',
    progress: 65
  },
  { 
    name: 'Teeth', 
    icon: '🦷', 
    status: 'warning', 
    date: 'Check 16 Oct, 2021',
    progress: 80
  },
  { 
    name: 'Bone', 
    icon: '🦴', 
    status: 'warning', 
    date: 'Check 16 Oct, 2021',
    progress: 75
  }
];

export const calendarData = {
  month: 'October 2021',
  days: [
    { day: 25, appointments: ['10:00', '11:00'] },
    { day: 26, appointments: ['08:00', '09:00'] },
    { day: 27, appointments: ['12:00', '13:00'] },
    { day: 28, appointments: ['10:00', '11:00'] },
    { day: 29, appointments: ['14:00', '14:00'] },
    { day: 30, appointments: ['15:00'] },
    { day: 31, appointments: ['09:00', '10:00'] }
  ]
};

export const upcomingAppointments = [
  {
    day: 'Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🏥' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧠' }
    ]
  }
];