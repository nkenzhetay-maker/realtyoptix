import { useRef, useState } from 'react'
import { reels } from '../lib/reelsData'

/**
 * Public reel viewer for shared links (/reel/:id).
 * Lets non-members watch the video and nudges them to get the app.
 */
export default function ReelViewer({ reelId }) {
  const reel = reels[reelId]
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  // When the demo video host is unavailable, fall back to a Ken Burns
  // animation over the poster so the shared link always "plays".
  const [videoFailed, setVideoFailed] = useState(false)

  if (!reel) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center text-center px-6">
        <span className="text-5xl mb-4">🎬</span>
        <h1 className="text-white text-xl font-semibold mb-2">
          This reel is no longer available
        </h1>
        <p className="text-white/50 text-sm mb-8">
          It may have been removed by the agent.
        </p>
        <a href="/" className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-sm">
          Explore Realty Optix →
        </a>
      </div>
    )
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center">
      {/* Top bar */}
      <header className="w-full max-w-md flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
            R
          </div>
          <span className="text-white font-semibold text-sm">
            Realty <span className="text-emerald-400">Optix</span>
          </span>
        </a>
        <a
          href="/"
          className="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold"
        >
          Get the App
        </a>
      </header>

      {/* Video card */}
      <div className="relative w-full max-w-md aspect-[9/16] max-h-[78vh] rounded-2xl overflow-hidden bg-black mx-auto">
        {videoFailed ? (
          <>
            <style>{`
              @keyframes ro-kenburns {
                0% { transform: scale(1) translate(0, 0); }
                100% { transform: scale(1.18) translate(-2%, 2%); }
              }
            `}</style>
            <img
              src={reel.poster}
              alt={reel.address}
              className="w-full h-full object-cover"
              style={{ animation: 'ro-kenburns 16s ease-in-out infinite alternate' }}
            />
          </>
        ) : (
          <video
            ref={videoRef}
            src={reel.video}
            poster={reel.poster}
            autoPlay
            loop
            muted={muted}
            playsInline
            referrerPolicy="no-referrer"
            onClick={togglePlay}
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-cover cursor-pointer"
          />
        )}

        {!videoFailed && !playing && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mute toggle */}
        {!videoFailed && (
        <button
          onClick={() => setMuted(m => !m)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white text-sm"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
        )}

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-9 h-9 rounded-full bg-[#1E293B] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 text-xs font-bold">
              {reel.agentAvatar}
            </div>
            <span className="text-white font-semibold text-sm">{reel.agentName}</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-white text-[9px] font-bold">
              AGENT
            </span>
            <span className="ml-auto text-white/50 text-xs">▶ {reel.views}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#0F172A]/80 border border-emerald-400/40 mb-2">
            <span className="text-emerald-400 font-extrabold text-base">{reel.price}</span>
            <span className="text-white/60 text-xs">🛏 {reel.beds} · 🛁 {reel.baths}</span>
          </div>
          <p className="text-white/60 text-xs mb-1">📍 {reel.address}, {reel.city}</p>
          <p className="text-white/85 text-xs leading-relaxed line-clamp-2">{reel.caption}</p>
          <p className="text-emerald-400 text-[11px] mt-1">
            {reel.tags.map(t => `#${t}`).join(' ')}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-md px-4 py-5 text-center">
        <p className="text-white/60 text-sm mb-3">
          Watch more property reels and get instant AI analysis in the app
        </p>
        <a
          href="/"
          className="inline-block w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-sm"
        >
          Download Realty Optix — Free
        </a>
        <p className="text-white/25 text-[11px] mt-3">
          iOS &amp; Android · 8 languages · Free 3-month trial
        </p>
      </div>
    </div>
  )
}
