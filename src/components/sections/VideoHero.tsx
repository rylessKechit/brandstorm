'use client'

import { useEffect, useRef, useState } from 'react'

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setVideoLoaded(true)
      // Multiple attempts to ensure playback
      setTimeout(() => {
        video.play().catch(() => {
          // Retry after a short delay
          setTimeout(() => {
            video.play().catch(console.error)
          }, 100)
        })
      }, 100)
    }

    const handleCanPlay = () => {
      video.play().catch(console.error)
    }

    const handleError = () => {
      console.error('Video failed to load')
      // Retry loading
      setTimeout(() => {
        video.load()
      }, 1000)
    }

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    // Force initial load
    video.load()

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
        loop={false}
        controls={false}
        style={{ display: videoLoaded ? 'block' : 'none' }}
      >
        <source src="/demo-video.mp4" type="video/mp4" />
        <source src="/demo-video.webm" type="video/webm" />
      </video>

      {/* Fallback while loading */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      )}
    </section>
  )
}