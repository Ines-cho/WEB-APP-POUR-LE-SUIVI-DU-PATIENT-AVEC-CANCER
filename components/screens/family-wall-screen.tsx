'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Send } from 'lucide-react'

interface FamilyWallScreenProps {
  onNavigate: (screen: string) => void
}

export default function FamilyWallScreen({ onNavigate }: FamilyWallScreenProps) {
  const messages = [
    {
      id: 1,
      author: 'Mom (Fatima)',
      message: 'You are so brave, sweetie! I am so proud of you!',
      emoji: '💌',
      time: '2 hours ago',
    },
    {
      id: 2,
      author: 'Dad (Karim)',
      message: 'Champion! You\'re stronger than you know!',
      emoji: '💪',
      time: '1 hour ago',
    },
    {
      id: 3,
      author: 'Sister Amal',
      message: 'You inspire me every day! Keep shining! ✨',
      emoji: '⭐',
      time: '30 minutes ago',
    },
    {
      id: 4,
      author: 'Grandma',
      message: 'My little hero. Sending all my love and strength.',
      emoji: '💝',
      time: '15 minutes ago',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-100 p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-3xl font-bold text-primary">Family Wall</h1>
        <div className="w-10" />
      </div>

      {/* Messages Container */}
      <div className="flex-1 bg-white rounded-3xl shadow-xl p-6 mb-6 overflow-y-auto">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-2">
            💌 Messages of Love and Support 💌
          </p>
          <p className="text-xs text-muted-foreground">
            Your family is cheering you on!
          </p>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 border-2 border-pink-200 transform transition-all hover:scale-102"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="text-3xl">{msg.emoji}</div>
                <div className="flex-1">
                  <p className="font-bold text-foreground">{msg.author}</p>
                  <p className="text-xs text-muted-foreground">{msg.time}</p>
                </div>
              </div>
              <p className="text-base text-foreground ml-12 leading-relaxed">
                {msg.message}
              </p>
            </div>
          ))}
        </div>

        {/* Empty Space for Scrolling */}
        <div className="h-4" />
      </div>

      {/* Send Message Section */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
        <p className="text-sm font-semibold text-foreground mb-4 text-center">
          Send a Message Back 💖
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Say hello to your family..."
            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary outline-none"
          />
          <Button className="bg-primary hover:bg-primary/90 text-white px-4 py-2">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Stickers Section */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
        <p className="text-sm font-semibold text-foreground mb-4 text-center">
          Send a Love Sticker 🎁
        </p>
        <div className="grid grid-cols-4 gap-3">
          {['❤️', '💪', '⭐', '😊', '🎉', '💝', '👏', '🌟'].map((sticker) => (
            <button
              key={sticker}
              className="text-4xl p-3 rounded-xl bg-gray-50 hover:bg-primary/10 transition-all transform hover:scale-110 cursor-pointer"
            >
              {sticker}
            </button>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <Button
        onClick={() => onNavigate('home')}
        className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-2xl"
      >
        Back to Home
      </Button>
    </div>
  )
}
