import { Buffer } from 'buffer'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Polyfill Buffer for browser (needed by gray-matter and deps)
if (typeof window !== 'undefined' && !(window as any).Buffer) {
  (window as any).Buffer = Buffer
}

createRoot(document.getElementById("root")!).render(<App />);
