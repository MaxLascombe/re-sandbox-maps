# Property Detail Sandbox

A frontend-only sandbox for rendering the PropertyDetail component from a real estate web app in isolation.

## Quick Start

```bash
npm install
npm run dev
```

The app will start at `http://localhost:5173` and display a mocked sales property detail page.

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Stub UI components (Badge, Button, Card, etc.)
│   ├── PropertyDetail.tsx     # Main component being sandboxed
│   ├── BookmarkButton.tsx     # Stub bookmark functionality
│   ├── TourRequestForm.tsx    # Stub tour request modal
│   └── QuestionForm.tsx       # Stub question modal
├── contexts/
│   └── AuthContext.tsx        # Stub auth context (returns mock user)
├── data/
│   ├── mockProperty.ts        # Mock property data
│   └── neighborhoodData.ts    # Mock neighborhood info
├── stubs/
│   └── react-router-dom.ts    # Stub for useNavigate
├── types/
│   └── database.ts            # Type definitions
├── App.tsx                    # Root app component
├── main.tsx                   # Entry point
└── index.css                  # Tailwind CSS imports
```

## Mock Data

The sandbox renders a **non-rental (sales) property** with:
- 2 bedrooms, 2 bathrooms
- 1,150 sqft in Sutton Place, Manhattan
- Price: $1,250,000
- Grade: A (Score: 94)
- 18% below market value

## Configuration

- **isRental**: Set to `false` (sales property)
- **isRentStabilized**: Not set (standard sales listing)
- **User**: Mock authenticated user with free subscription plan

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Notes

- No backend, Supabase, or API calls
- All external dependencies are stubbed
- Images use Unsplash placeholders
- Bookmark, Tour Request, and Question forms log to console
