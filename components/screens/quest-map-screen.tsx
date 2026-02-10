'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

interface QuestMapScreenProps {
  onNavigate: (screen: string) => void
}

export default function QuestMapScreen({ onNavigate }: QuestMapScreenProps) {
  const islands = [
    { id: 1, name: 'First Courage', completed: true, milestone: '🏰 Bronze' },
    { id: 2, name: 'Rising Hero', completed: true, milestone: '' },
    { id: 3, name: 'Strength Grows', completed: true, milestone: '' },
    { id: 4, name: 'Unstoppable', completed: true, milestone: '' },
    { id: 5, name: 'Champion Born', completed: true, milestone: '' },
    { id: 6, name: 'Power Surge', completed: false, milestone: '🏯 Silver' },
    { id: 7, name: 'Guardian Path', completed: false, milestone: '' },
    { id: 8, name: 'Legend Quest', completed: false, milestone: '' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-cyan-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-3xl font-bold text-primary">Quest Map</h1>
        <div className="w-10" />
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
        {/* Decorative Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            🌍 Your Journey Through the Healing Realm 🌍
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            Discover the Islands of Healing
          </h2>
        </div>

        {/* Islands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {islands.map((island, index) => (
            <div
              key={island.id}
              className={`rounded-2xl p-4 text-center transition-all transform hover:scale-105 cursor-pointer ${
                island.completed
                  ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50'
                  : 'bg-gray-100 opacity-50 border-2 border-gray-300'
              }`}
            >
              <div className="text-4xl mb-2">
                {island.completed ? '✨' : '🏝️'}
              </div>
              <p className="font-bold text-sm text-foreground mb-1">
                {island.name}
              </p>
              <p className="text-xs text-muted-foreground">
                Session #{island.id}
              </p>
              {island.milestone && (
                <p className="text-lg font-bold mt-2">{island.milestone}</p>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl mb-2">✨</div>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🏝️</div>
              <p className="text-xs text-muted-foreground">Not Yet</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🏰</div>
              <p className="text-xs text-muted-foreground">Milestones</p>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4 text-center">
          <p className="text-sm font-semibold text-foreground">
            ⭐ You've completed 5 sessions!
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            The next milestone is the Silver Fortress at session 15.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <Button
        onClick={() => onNavigate('home')}
        className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-2xl"
      >
        Continue Your Journey
      </Button>
    </div>
  )
}
