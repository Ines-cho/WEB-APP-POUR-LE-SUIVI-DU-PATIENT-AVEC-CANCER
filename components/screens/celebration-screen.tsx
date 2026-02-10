'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import PetCharacter from '@/components/pet-character'

interface CelebrationScreenProps {
  onClose: () => void
}

export default function CelebrationScreen({ onClose }: CelebrationScreenProps) {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 z-50">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animationDelay: `${Math.random() * 0.5}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            >
              {['🎉', '⭐', '✨', '💪', '🎊', '🏆'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {/* Celebration Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center relative z-10">
        {/* Animation Pet */}
        <div className="mb-8 animate-bounce">
          <PetCharacter size="xlarge" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-green-500 bg-clip-text text-transparent mb-4">
          🌟 HERO! 🌟
        </h1>

        {/* Message */}
        <p className="text-2xl font-bold text-foreground mb-2">
          Session Complete!
        </p>

        {/* Celebration Details */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-6">
          <p className="text-lg text-foreground font-semibold mb-4">
            You are AMAZING! 💫
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl">✨</span>
              <span className="text-base font-semibold text-foreground">
                +50 Experience Points
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl">🏆</span>
              <span className="text-base font-semibold text-foreground">
                Session 8/36 Completed
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl">💝</span>
              <span className="text-base font-semibold text-foreground">
                New Accessory Unlocked!
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">Progress to Silver Fortress</p>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent h-full w-1/3 rounded-full"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">7 more sessions to next milestone!</p>
        </div>

        {/* Quote */}
        <div className="bg-blue-50 rounded-2xl p-4 mb-8 border-2 border-blue-200">
          <p className="text-lg font-bold text-primary italic">
            "You didn't just complete a session.<br />You proved your courage to the world."
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-6 text-lg rounded-2xl hover:shadow-lg"
          >
            ✨ Continue Your Journey
          </Button>
          <Button
            variant="outline"
            className="w-full border-2 border-primary/50 text-primary font-bold py-6 text-base rounded-2xl hover:bg-primary/5 bg-transparent"
          >
            📸 Share Your Victory
          </Button>
        </div>

        {/* Family Notification */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-muted-foreground mb-3">
            Your family will see your achievement! 💝
          </p>
        </div>
      </div>
    </div>
  )
}
