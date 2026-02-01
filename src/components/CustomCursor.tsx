import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
  const clickIdRef = useRef(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Direct position update for instant response - no lag
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Add click effect at exact position
      const newEffect = {
        id: clickIdRef.current++,
        x: e.clientX,
        y: e.clientY
      };
      setClickEffects(prev => [...prev, newEffect]);
      // Remove after animation
      setTimeout(() => {
        setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
      }, 600);
    };
    
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive') ||
        target.closest('.interactive') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't show on touch devices or small screens (mobile/tablet)
  if (typeof window !== 'undefined') {
    if ('ontouchstart' in window || window.innerWidth < 1024) {
      return null;
    }
  }

  return (
    <>
      {/* Main cursor dot - direct positioning for instant response */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.5 : isPointer ? 1.4 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ 
            type: "tween",
            duration: 0.1,
            ease: "easeOut"
          }}
        >
          {/* Inner bright dot */}
          <div 
            className="w-3 h-3 rounded-full"
            style={{ 
              background: 'hsl(43 100% 55%)',
              boxShadow: isPointer 
                ? '0 0 15px 3px hsl(43 100% 55% / 0.6), 0 0 30px 6px hsl(43 100% 55% / 0.3)' 
                : '0 0 8px 2px hsl(43 100% 55% / 0.4)'
            }}
          />
        </motion.div>
      </div>

      {/* Outer ring on hover - properly centered */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1 : 0.5,
            opacity: isVisible && isPointer ? 0.5 : 0,
          }}
          transition={{ 
            type: "tween",
            duration: 0.15,
            ease: "easeOut"
          }}
        >
          <div 
            className="w-8 h-8 rounded-full border"
            style={{ 
              borderColor: 'hsl(43 100% 55%)',
              boxShadow: '0 0 10px hsl(43 100% 55% / 0.3)'
            }}
          />
        </motion.div>
      </div>

      {/* Click blast effects */}
      <AnimatePresence>
        {clickEffects.map((effect) => (
          <div
            key={effect.id}
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            style={{
              transform: `translate(${effect.x}px, ${effect.y}px)`,
            }}
          >
            {/* Bright center flash */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div 
                className="w-6 h-6 rounded-full"
                style={{ 
                  background: 'radial-gradient(circle, hsl(43 100% 70%) 0%, hsl(43 100% 55% / 0.5) 50%, transparent 100%)',
                }}
              />
            </motion.div>

            {/* Expanding ring 1 */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.3, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div 
                className="w-8 h-8 rounded-full border-2"
                style={{ 
                  borderColor: 'hsl(43 100% 60%)',
                  boxShadow: '0 0 20px hsl(43 100% 55% / 0.5)'
                }}
              />
            </motion.div>

            {/* Expanding ring 2 - delayed */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.2, opacity: 0.6 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              <div 
                className="w-6 h-6 rounded-full border"
                style={{ 
                  borderColor: 'hsl(43 100% 65%)',
                }}
              />
            </motion.div>

            {/* Particles burst */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 1, 
                  opacity: 1 
                }}
                animate={{ 
                  x: Math.cos((i * 60) * Math.PI / 180) * 40,
                  y: Math.sin((i * 60) * Math.PI / 180) * 40,
                  scale: 0,
                  opacity: 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    background: 'hsl(43 100% 60%)',
                    boxShadow: '0 0 6px hsl(43 100% 55%)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
