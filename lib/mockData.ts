export interface Message {
  id: string;
  sender: 'user' | 'agent' | 'bot';
  senderName?: string;
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
  mediaUrl?: string;
  mediaType?: 'image' | 'document' | 'audio' | 'video';
  isNote?: boolean;
  buttons?: string[];
}

export interface Conversation {
  id: string;
  contactName: string;
  phoneNumber: string;
  avatar: string;
  unreadCount: number;
  lastMessage: string;
  lastMessageTime: string;
  status: 'open' | 'pending' | 'resolved';
  assignedTo: string;
  tags: string[];
  attributes: Record<string, string>;
  messages: Message[];
}

export const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    contactName: "Priya Sharma",
    phoneNumber: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    unreadCount: 2,
    lastMessage: "Hi, I wanted to inquire about the luxury villa in Whitefield.",
    lastMessageTime: "2m ago",
    status: "open",
    assignedTo: "Eshan (You)",
    tags: ["High Intent", "Real Estate", "Hot Lead"],
    attributes: {
      City: "Bengaluru",
      Budget: "₹2.5 Cr - ₹3 Cr",
      LeadSource: "Instagram Ad",
      Stage: "Site Visit Scheduled"
    },
    messages: [
      {
        id: "m1",
        sender: "user",
        text: "Hi! I saw your ad on Instagram regarding Emerald Heights.",
        timestamp: "10:14 AM"
      },
      {
        id: "m2",
        sender: "bot",
        text: "Hello Priya! Welcome to Emerald Heights Real Estate. We're excited to help you find your dream home. Which property type are you interested in?",
        timestamp: "10:14 AM",
        buttons: ["3 BHK Villa", "4 BHK Luxury Villa", "Download Brochure"]
      },
      {
        id: "m3",
        sender: "user",
        text: "4 BHK Luxury Villa",
        timestamp: "10:15 AM"
      },
      {
        id: "m4",
        sender: "bot",
        text: "Great choice! Here is the floor plan and virtual tour preview. Would you like to schedule a private site visit this weekend?",
        timestamp: "10:15 AM",
        mediaUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=80",
        mediaType: "image",
        buttons: ["Book Saturday Visit", "Book Sunday Visit", "Talk to Sales Agent"]
      },
      {
        id: "m5",
        sender: "agent",
        senderName: "Eshan",
        text: "Hi Priya, this is Eshan from the sales team. I have reserved slot #3 for Saturday 11:00 AM for your family. Looking forward to hosting you!",
        timestamp: "10:20 AM",
        status: "read"
      },
      {
        id: "m6",
        sender: "user",
        text: "Hi, I wanted to inquire about the luxury villa in Whitefield.",
        timestamp: "10:24 AM"
      }
    ]
  },
  {
    id: "conv-2",
    contactName: "Rahul Verma",
    phoneNumber: "+91 98450 11223",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    unreadCount: 0,
    lastMessage: "Payment received! Your order #9821 is being packed.",
    lastMessageTime: "15m ago",
    status: "resolved",
    assignedTo: "Automated Bot",
    tags: ["E-Commerce", "Paid Customer", "VIP"],
    attributes: {
      City: "Mumbai",
      OrderValue: "₹4,899",
      PaymentStatus: "Captured",
      Courier: "BlueDart"
    },
    messages: [
      {
        id: "m201",
        sender: "user",
        text: "Need to pay for my cart items",
        timestamp: "09:40 AM"
      },
      {
        id: "m202",
        sender: "bot",
        text: "Your order summary for 2 items is ready. Click below to complete your payment securely on WhatsApp via UPI or Card.",
        timestamp: "09:40 AM",
        buttons: ["Pay ₹4,899 via UPI", "Modify Cart", "Help"]
      },
      {
        id: "m203",
        sender: "bot",
        text: "Payment received! Your order #9821 is being packed.",
        timestamp: "09:45 AM",
        status: "read"
      }
    ]
  },
  {
    id: "conv-3",
    contactName: "Dr. Ananya Sen",
    phoneNumber: "+91 97112 33445",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    unreadCount: 1,
    lastMessage: "Can you confirm my appointment with Dr. Mehta for tomorrow?",
    lastMessageTime: "45m ago",
    status: "open",
    assignedTo: "Karthik (Support)",
    tags: ["Healthcare", "Appointment", "Priority"],
    attributes: {
      Clinic: "Apollo Apollo Spectra",
      Doctor: "Dr. R. K. Mehta (Cardiology)",
      TimeSlot: "Tomorrow 4:30 PM",
      Status: "Pending Verification"
    },
    messages: [
      {
        id: "m301",
        sender: "user",
        text: "Can you confirm my appointment with Dr. Mehta for tomorrow?",
        timestamp: "09:15 AM"
      }
    ]
  },
  {
    id: "conv-4",
    contactName: "Vikram Malhotra",
    phoneNumber: "+91 99887 76655",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    unreadCount: 0,
    lastMessage: "Thanks for sending the test drive car details!",
    lastMessageTime: "2h ago",
    status: "pending",
    assignedTo: "Eshan (You)",
    tags: ["Automotive", "Test Drive", "Kia Seltos"],
    attributes: {
      Model: "Kia Seltos GTX+",
      Location: "Indiranagar Showroom",
      TestDriveDate: "Sunday 2:00 PM"
    },
    messages: [
      {
        id: "m401",
        sender: "user",
        text: "Thanks for sending the test drive car details!",
        timestamp: "08:10 AM"
      }
    ]
  }
];

export const mockTemplates = [
  {
    id: "tpl-1",
    name: "festive_sale_discount_20",
    category: "MARKETING",
    language: "en",
    status: "APPROVED",
    header: "🎉 MEGA FESTIVE DIWALI SALE!",
    body: "Hi {{1}}, get ready for the biggest celebration! Enjoy flat {{2}}% OFF across all items. Use code {{3}} at checkout.",
    footer: "Valid till Sunday midnight.",
    buttons: ["Claim Offer Now", "View Catalog", "Unsubscribe"]
  },
  {
    id: "tpl-2",
    name: "order_confirmation_v2",
    category: "UTILITY",
    language: "en",
    status: "APPROVED",
    header: "Order Confirmed #{{1}}",
    body: "Hi {{2}}, thank you for shopping with us! Your order containing {{3}} has been confirmed and is scheduled for dispatch today.",
    footer: "Track anytime using the button below.",
    buttons: ["Track Live Shipment", "Need Support"]
  },
  {
    id: "tpl-3",
    name: "healthcare_appointment_reminder",
    category: "UTILITY",
    language: "en",
    status: "APPROVED",
    header: "Appointment Reminder 🏥",
    body: "Dear {{1}}, your consultation with {{2}} is confirmed for {{3}} at {{4}}. Please arrive 10 minutes early.",
    footer: "Apollo Care Clinic",
    buttons: ["Confirm Arrival", "Reschedule", "Directions to Clinic"]
  }
];

export const mockCampaigns = [
  {
    id: "cmp-1",
    name: "Festive Diwali Flash Sale",
    template: "festive_sale_discount_20",
    audience: "VIP Customers (3,450 contacts)",
    sentAt: "Today, 10:00 AM",
    total: 3450,
    sent: 3450,
    delivered: 3412,
    read: 2890,
    replied: 642,
    status: "Completed"
  },
  {
    id: "cmp-2",
    name: "Abandoned Cart Recovery Flow",
    template: "cart_reminder_discount",
    audience: "Cart Abandoned 24h (820 contacts)",
    sentAt: "Yesterday, 04:30 PM",
    total: 820,
    sent: 820,
    delivered: 815,
    read: 740,
    replied: 231,
    status: "Completed"
  },
  {
    id: "cmp-3",
    name: "Weekend Real Estate Open House",
    template: "property_visit_invite",
    audience: "Bengaluru High Networth Leads (1,200 contacts)",
    sentAt: "Scheduled for Tomorrow 09:00 AM",
    total: 1200,
    sent: 0,
    delivered: 0,
    read: 0,
    replied: 0,
    status: "Scheduled"
  }
];
