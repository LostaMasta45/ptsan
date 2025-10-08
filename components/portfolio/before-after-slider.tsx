'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider';
import { MoveHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  location?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  location,
}: BeforeAfterSliderProps) {
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [position, setPosition] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Ghost swipe animation on first load
  useEffect(() => {
    if (!hasInteracted) {
      // Start ghost animation after a short delay
      const ghostTimer = setTimeout(() => {
        let progress = 0;
        const duration = 2000; // 2 seconds
        const frameRate = 60;
        const totalFrames = (duration / 1000) * frameRate;
        const increment = 100 / totalFrames;

        const animate = () => {
          progress += increment;
          if (progress <= 100) {
            // Move from 50 to 75 and back to 50
            const offset = Math.sin((progress / 100) * Math.PI) * 25;
            setPosition(50 + offset);
            requestAnimationFrame(animate);
          } else {
            setPosition(50);
          }
        };
        animate();
      }, 500);

      return () => clearTimeout(ghostTimer);
    }
  }, [hasInteracted]);

  // Auto-lock after 5 seconds of inactivity
  useEffect(() => {
    if (isActive) {
      // Clear existing timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }

      // Set new timer
      inactivityTimerRef.current = setTimeout(() => {
        setIsActive(false);
        setShowButton(true);
        setPosition(50);
      }, 5000);
    }

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [isActive, position]);

  const handleActivate = () => {
    setIsActive(true);
    setShowButton(false);
    setHasInteracted(true);
  };

  const handlePositionChange = (newPosition: number) => {
    setPosition(newPosition);
  };

  const handleInteraction = () => {
    // Reset inactivity timer on interaction
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    
    if (isActive) {
      inactivityTimerRef.current = setTimeout(() => {
        setIsActive(false);
        setShowButton(true);
        setPosition(50);
      }, 5000);
    }
  };

  return (
    <div className="space-y-3">
      <div 
        ref={sliderRef}
        className="relative rounded-lg overflow-hidden border border-border aspect-[4/3] group"
      >
        <ReactCompareSlider
          position={position}
          onPositionChange={handlePositionChange}
          itemOne={
            <ReactCompareSliderImage
              src={beforeImage}
              alt={`${title || 'Proyek'} - Sebelum`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterImage}
              alt={`${title || 'Proyek'} - Sesudah`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          }
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: undefined,
                background: 'white',
                border: '2px solid #0ea5e9',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                width: '48px',
                height: '48px',
              }}
            />
          }
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: isActive ? 'auto' : 'none',
          }}
          onMouseMove={handleInteraction}
          onTouchMove={handleInteraction}
        />
        
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: 'none' }}
            >
              <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px]" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleActivate}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleActivate();
                }}
                className="relative bg-white/95 backdrop-blur-sm rounded-full px-6 py-4 shadow-2xl flex flex-col items-center gap-2 cursor-pointer transition-all hover:shadow-3xl z-10"
                style={{ pointerEvents: 'auto' }}
              >
                <MoveHorizontal className="h-8 w-8 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                  ✨ Geser untuk lihat hasil
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Labels - Before & After */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          Sebelum
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          Sesudah
        </div>
      </div>
      
      {(title || location) && (
        <div className="text-sm">
          {title && <p className="font-semibold">{title}</p>}
          {location && <p className="text-muted-foreground">{location}</p>}
        </div>
      )}
    </div>
  );
}
