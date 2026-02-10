'use client'

interface PetCharacterProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

export default function PetCharacter({
  size = 'medium',
}: PetCharacterProps) {
  const sizeStyles = {
    small: 'w-16 h-16 text-5xl',
    medium: 'w-32 h-32 text-8xl',
    large: 'w-48 h-48 text-9xl',
    xlarge: 'w-64 h-64 text-[12rem]',
  }

  return (
    <div className={`flex items-center justify-center ${sizeStyles[size]}`}>
      <div className="relative group">
        {/* Pet Body - Dragon */}
        <div className="transition-transform group-hover:scale-110 duration-300">
          🐉
        </div>
        
        {/* Floating animation */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          .animate-sparkle {
            animation: sparkle 2s ease-in-out infinite;
          }
        `}</style>
        
        {/* Sparkles around pet */}
        <div className="absolute -top-4 -left-4 text-lg animate-sparkle">✨</div>
        <div className="absolute -top-2 -right-4 text-lg animate-sparkle" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute -bottom-2 -left-3 text-lg animate-sparkle" style={{ animationDelay: '1s' }}>💫</div>
      </div>
    </div>
  )
}
