import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import MemeGeneration from './components/MemeGeneration.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-indigo-400 mb-8 drop-shadow-lg">🎨 Meme Generator</h1>
      
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <div className="flex gap-4 items-center mb-8">
          <UserButton />
          <SignOutButton />
        </div>
        <MemeGeneration />
      </SignedIn>

      <footer className="mt-16 text-gray-500 text-sm tracking-wide">
        🚀 Built by Jigar with Clerk, React, and Tailwind CSS
      </footer>
    </div>
  )
}

export default App
