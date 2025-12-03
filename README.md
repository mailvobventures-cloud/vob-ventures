# VOB Ventures - Your Partner in Business Excellence

VOB Ventures is a comprehensive business consultancy platform designed to empower Kerala's businesses. From company formation to compliance, digital presence to strategic growth, we provide end-to-end solutions to help businesses thrive.

Built with Next.js 14, TypeScript, and Tailwind CSS, this platform offers a modern, responsive, and performant user experience.

## Features

- 🏢 **Comprehensive Services**: Showcase of services including Company Formation, Accounting, Branding, Digital Marketing, and more.
- 🎨 **Modern Design**: Professional UI with dark/light mode support using `next-themes`.
- 📱 **Fully Responsive**: Optimized for all devices, from mobile to desktop.
- 💬 **WhatsApp Integration**: Direct communication channel for clients via WhatsApp.
- ⚡ **High Performance**: Built on Next.js 14 with server-side rendering and optimization.
- 🎭 **Smooth Animations**: Engaging user experience with Framer Motion animations.
- 🧩 **Component-Based**: Modular architecture using Reusable UI components.

## Services Offered

- **Company Formation & Registration**: Pvt Ltd, LLP, Partnership, etc.
- **Accounting & Compliance**: GST, Income Tax, Bookkeeping.
- **Branding & Creative Services**: Logo Design, Brand Identity.
- **Digital Marketing**: SEO, Social Media Marketing.
- **IT & Software Solutions**: Web & App Development.
- **Business Licensing**: FSSAI, Import/Export Code.
- **HR & Recruitment**: Talent Acquisition, Payroll.
- **Business Consulting**: Strategy, Growth Planning.
- **Funding & Investment**: Pitch Decks, Investor Connect.
- **Legal Support**: Contracts, IP Rights.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vob-ventures
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory (Routes & Pages)
├── components/            
│   ├── vob/               # VOB Ventures specific components (Hero, Header, etc.)
│   ├── ui/                # Reusable UI components (Buttons, Inputs, etc.)
│   └── ...
├── public/                 # Static assets (Images, Icons)
├── lib/                    # Utility functions and libraries
├── types/                  # TypeScript type definitions
└── ...
```

## Customization

### Site Content
- **Header/Footer**: Edit `components/vob/header.tsx` and `components/vob/footer.tsx`.
- **Home Page Sections**: Located in `components/vob/home/`.
- **Services**: Service data is managed within individual components or data files.

### Styling
- **Theme**: Colors and theme settings are defined in `tailwind.config.ts` and `app/globals.css`.
- **Brand Colors**: The primary brand color is `#0C6CE8`.

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/).

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and configure the build settings.
4. Deploy!

## License

[MIT License](LICENSE)
