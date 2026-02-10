'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, CheckCircle2 } from 'lucide-react'

interface DailyMissionsScreenProps {
  onNavigate: (screen: string) => void
}

export default function DailyMissionsScreen({ onNavigate }: DailyMissionsScreenProps) {
  const [missions, setMissions] = useState([
    {
      id: 1,
      name: 'Drink 3 Glasses of Water',
      emoji: '💧',
      description: 'Stay hydrated, hero!',
      completed: false,
      points: 10,
    },
    {
      id: 2,
      name: 'Eat a Fruit or Vegetable',
      emoji: '🍎',
      description: 'Fuel your healing journey',
      completed: false,
      points: 15,
    },
    {
      id: 3,
      name: '5 Minutes Gentle Stretching',
      emoji: '🧘',
      description: 'Ease your body gently',
      completed: false,
      points: 12,
    },
    {
      id: 4,
      name: 'Share a Moment with Family',
      emoji: '💝',
      description: 'Connection heals',
      completed: false,
      points: 20,
    },
  ])

  const toggleMission = (id: number) => {
    setMissions(
      missions.map((mission) =>
        mission.id === id ? { ...mission, completed: !mission.completed } : mission
      )
    )
  }

  const completedCount = missions.filter((m) => m.completed).length
  const totalPoints = missions.filter((m) => m.completed).reduce((sum, m) => sum + m.points, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-orange-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-3xl font-bold text-primary">Daily Missions</h1>
        <div className="w-10" />
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground mb-1">Today's Progress</p>
          <p className="text-4xl font-bold text-primary">
            {completedCount}/{missions.length}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-secondary to-yellow-400 h-full rounded-full transition-all"
            style={{ width: `${(completedCount / missions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-3">
          🎁 Earn {totalPoints} points today
        </p>
      </div>

      {/* Missions List */}
      <div className="space-y-4 mb-6">
        {missions.map((mission) => (
          <div
            key={mission.id}
            onClick={() => toggleMission(mission.id)}
            className={`rounded-2xl p-4 cursor-pointer transition-all transform hover:scale-102 ${
              mission.completed
                ? 'bg-green-100 border-2 border-green-400'
                : 'bg-white border-2 border-gray-200 hover:border-primary/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl mt-1">{mission.emoji}</div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-bold text-lg ${
                    mission.completed
                      ? 'line-through text-green-700'
                      : 'text-foreground'
                  }`}
                >
                  {mission.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {mission.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    +{mission.points} points
                  </span>
                  {mission.completed && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                </div>
              </div>
              <div className="text-2xl">
                {mission.completed ? '✅' : '⭕'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Motivational Section */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
        <div className="text-center">
          <p className="text-lg font-bold text-primary mb-2">
            💪 No Pressure, Just Progress
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            These missions are just suggestions. Do what feels right for you today.
          </p>
          <p className="text-xs text-muted-foreground italic">
            "Every small step counts. You're doing amazing!"
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <Button
        onClick={() => onNavigate('home')}
        className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-2xl"
      >
        Back to Home
      </Button>
    </div>
  )
}
