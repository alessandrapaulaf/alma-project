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

### Decisions

Form:
- Built with native HTML elements (form, label, input, etc.).
- Labels on textfields are visually hidden using sr-only but remain accessible to screen readers.
- Server Actions are used to handle form submissions without client side state.
