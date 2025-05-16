# Next.js Alma Project

## 🛠️ Setup Guide

### Prerequisites
- Node.js (v14 or later)
- pnpm (v8 or later)

### Installation

1. Clone this repository
2. Install dependencies:
``` 
pnpm install
```

3. Run the development server:
``` 
pnpm dev
```

4. Open your browser at:
``` 
http://localhost:3000
```

4. For register new Lead, access:
``` 
http://localhost:3000/register
```

4. For Admin panel, access:
``` 
http://localhost:3000/login
user: admin@alma.com
password: 12345678
```

### Decisions

- Styling: Tailwind CSS is used for styling.
- API Layer: API routes (e.g., /api/login, /api/lead) handle server-side logic for authentication and lead management.
- State Management: React’s built-in hooks (useState, useActionState) manage local and form state.

Authentication
- LoginForm handles user login, submitting credentials to /api/login and navigating to /leads on success.
- User logs in via LoginForm > API call to /api/login > On success, navigates to /leads.
- On /leads, LeadsTable fetches and displays leads, allows filtering, and status updates via API.
- Navigation and layout are managed by Sidebar
  
Layout and Routing:
- layout.tsx defines the root layout, applying global fonts and conditionally rendering the Sidebar except on /login and /register routes.
- Routing is handled by Next.js, with pages and components under app.

Sidebar
- Sidebar provides navigation links (e.g., Leads, Settings) and a responsive drawer for mobile.
- It wraps the main content except on authentication pages.

New lead form:
- Built with native HTML elements (form, label, input, etc.).
- Labels on textfields are visually hidden using sr-only but remain accessible to screen readers.
- Server Actions are used to handle form submissions without client side state.
