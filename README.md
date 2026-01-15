#  Animated React Tag Selector

A smooth, interactive tag selector component built with **React**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**.

##  Features
- **Fluid Animations:** Uses Framer Motion's `AnimatePresence` and `layout` props for smooth entry, exit, and automatic repositioning.
- **Modern UI:** Clean "pill" design with hover states and subtle shadows via Tailwind CSS.
- **Type-Safe:** Written in TypeScript for better developer experience.
- **State-Driven:** Logic for easy removal and dynamic rendering.

##  Installation

1. **Install dependencies:**
   ```bash
   npm install motion
   # or
   yarn add motion

2. **Ensure Tailwind CSS is configured in your project.**

#  Components
**Tag.tsx**
The individual animated component that represents a single item.

**TagList.tsx**
The wrapper component that manages the list state.

#  Usage
Import the **TagList** into your main **App.tsx**:
import TagList from './components/TagList'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <TagList />
    </div>
  )
}

export default App


