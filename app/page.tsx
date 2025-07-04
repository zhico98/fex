"use client"

import { useState } from "react"
import Image from "next/image"
import { Twitter, Send } from "lucide-react"

export default function FatalExceptionInstaller() {
  const [agreed, setAgreed] = useState(false)
  const [showBSOD, setShowBSOD] = useState(false)
  const [showRestart, setShowRestart] = useState(false)
  const [restartProgress, setRestartProgress] = useState(0)
  const [installProgress, setInstallProgress] = useState(0)
  const [isInstalling, setIsInstalling] = useState(false)
  const [showBottomFire, setShowBottomFire] = useState(false)

  const handleInstall = () => {
    if (!agreed) return

    setIsInstalling(true)
    setInstallProgress(0)

    // Progress animation to 100%
    const interval = setInterval(() => {
      setInstallProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Show bottom fire when reaching 100%
          setShowBottomFire(true)

          // Hide fire after 10 seconds
          setTimeout(() => {
            setShowBottomFire(false)
            setIsInstalling(false)
            setInstallProgress(0)
          }, 10000)
          return 100
        }
        return prev + 1
      })
    }, 80)
  }

  const handlePanicSell = () => {
    setShowBSOD(true)
  }

  const handleRestart = () => {
    setShowBSOD(false)
    setShowRestart(true)
    setRestartProgress(0)

    // Progress bar animation
    const interval = setInterval(() => {
      setRestartProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setShowRestart(false)
            setAgreed(false)
            setShowBottomFire(false)
            setIsInstalling(false)
            setInstallProgress(0)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)
  }

  // Social media handlers
  const handleTwitter = () => {
    window.open("https://x.com/fexdotfun", "_blank")
  }

  const handleTelegram = () => {
    window.open("https://t.me/fatalexceptionfun", "_blank")
  }

  const handlePumpFun = () => {
    window.open("https://pump.fun", "_blank")
  }

  // Bottom Fire Effect Component
  const BottomFireEffect = () => (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      {/* Balanced fire GIFs covering entire bottom */}
      <div className="flex w-full h-48" style={{ imageRendering: "pixelated" }}>
        {[...Array(25)].map((_, i) => (
          <img
            key={i}
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-d0d71211c22eeabd0a3c1e930377c4ec-G9Ckw7NaTSpu4aIgEAQsnFLLL9tOa7.gif"
            alt="Screen burning effect"
            className="h-48 object-cover"
            style={{
              imageRendering: "pixelated",
              width: "calc(100vw / 25)",
              minWidth: "48px",
            }}
          />
        ))}
      </div>
    </div>
  )

  // Restart screen
  if (showRestart) {
    return (
      <div className="min-h-screen bg-[#0066CC] flex items-center justify-center">
        <div className="w-[400px] h-[200px] bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-6">
          <div className="text-center mb-6">
            <h2 className="text-[16px] font-black text-black font-mono mb-2">Restarting System...</h2>
            <p className="text-[11px] text-black font-mono font-bold">Please wait while the system recovers</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full h-[20px] bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white relative">
              {/* Progress fill */}
              <div
                className="absolute left-[2px] top-[2px] h-[14px] bg-[#0066CC] transition-all duration-100"
                style={{ width: `${(restartProgress / 100) * (100 - 4)}%` }}
              ></div>
              {/* Percentage */}
              <div className="absolute right-[8px] top-[3px] text-[11px] font-black text-black font-mono">
                {restartProgress}%
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // BSOD screen
  if (showBSOD) {
    return (
      <div className="min-h-screen bg-[#0000AA] text-white font-mono p-8 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-[18px] font-bold">*** STOP: 0xFEX00000 (0xC0DE0001, 0xD15ASTER, 0xBADA55, 0xRUGG3D)</p>

          <div className="my-6"></div>

          <p className="text-[16px]">A fatal exception has occurred.</p>
          <p className="text-[16px]">The token $FEX has encountered an unrecoverable rug.</p>
          <p className="text-[16px]">Your portfolio has been terminated to prevent further damage.</p>

          <div className="my-6"></div>

          <p className="text-[16px]">If this is the first time you've seen this stop error screen,</p>
          <p className="text-[16px]">try holding and praying. If the screen appears again, say goodbye.</p>

          <div className="my-8"></div>

          <p className="text-[16px]">
            <span className="text-yellow-300 font-bold">Press CTRL+ALT+EXIT to scream.</span>
          </p>

          <div className="my-8"></div>

          <div className="flex justify-center">
            <button
              onClick={handleRestart}
              className="bg-[#C0C0C0] text-black px-8 py-3 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] font-mono font-bold text-[14px] hover:bg-[#D0D0D0] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
            >
              RESTART SYSTEM
            </button>
          </div>

          <div className="my-4"></div>

          <p className="text-[14px] text-center opacity-80">
            System will attempt to recover from this catastrophic failure...
          </p>
        </div>
      </div>
    )
  }

  // Main installer screen
  return (
    <div className="min-h-screen bg-[#0066CC] flex items-center justify-center p-4 relative">
      {/* Top left corner - Hammer GIF and Sad Computer Icon */}
      <div className="absolute top-2 left-2 z-50">
        <div className="relative">
          {/* Hammer GIF positioned at top */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2a2bce0f8c0efa1042428363bb4fa3d3-tvP6EH9KGktUQuOJHqmoyV9vx4wlRk.gif"
            alt="Hammer hitting"
            className="w-[120px] h-[80px] z-20"
            style={{ imageRendering: "pixelated" }}
          />
          {/* Sad Computer Icon positioned directly below hammer center */}
          <div className="absolute top-[70px] left-[60px] z-10">
            <Image
              src="/sad-computer.png"
              alt="Sad Computer"
              width={50}
              height={50}
              className="pixelated"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>
      </div>

      {/* Top right corner - Social Media Icons */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        {/* Twitter Button */}
        <button
          onClick={handleTwitter}
          className="w-[32px] h-[32px] bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:bg-[#D0D0D0] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
          title="Twitter"
        >
          <Twitter size={16} className="text-black" />
        </button>

        {/* Telegram Button */}
        <button
          onClick={handleTelegram}
          className="w-[32px] h-[32px] bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:bg-[#D0D0D0] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
          title="Telegram"
        >
          <Send size={16} className="text-black" />
        </button>

        {/* Pump.fun Button */}
        <button
          onClick={handlePumpFun}
          className="h-[32px] px-3 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:bg-[#D0D0D0] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
          title="Pump.fun"
        >
          <span
            className="text-[10px] font-black font-mono text-black whitespace-nowrap font-extrabold"
            style={{ fontWeight: 900 }}
          >
            pump.fun
          </span>
        </button>
      </div>

      {/* Bottom Fire Effect */}
      {showBottomFire && <BottomFireEffect />}

      <div className="w-[520px] h-[460px] relative">
        {/* Outer Window Border */}
        <div
          className={`w-full h-full bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] ${showBottomFire ? "animate-shake" : ""}`}
        >
          {/* Title Bar - Exact match to image */}
          <div className="h-[24px] bg-[#0A246A] flex items-center justify-between px-2">
            <span className="text-white text-[11px] font-black tracking-wide font-mono">
              FATAL.EXCEPTION - Installer
            </span>
            <button className="w-[16px] h-[14px] bg-[#C0C0C0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] flex items-center justify-center text-[8px] font-black font-mono">
              ✕
            </button>
          </div>

          {/* Main Content Area */}
          <div className="h-[434px] bg-[#C0C0C0] p-4">
            {/* Top Section with Icon and Text - Exact match to image */}
            <div className="flex items-start gap-4 mb-4">
              {/* Computer Icon - Exact size and positioning as shown */}
              <div className="relative mt-1">
                <Image
                  src="/fex-icon.png"
                  alt="FEX Token Icon"
                  width={56}
                  height={56}
                  className={`pixelated ${showBottomFire ? "animate-pulse" : ""}`}
                  style={{ imageRendering: "pixelated" }}
                />
              </div>

              {/* Text Section - Exact positioning and styling */}
              <div className="flex-1 mt-1">
                <h2 className="text-[14px] font-black text-black mb-1 font-mono leading-tight">
                  Installing $FEX Token...
                </h2>
                <p className="text-[11px] text-black mb-0 font-mono leading-tight font-bold">
                  Estimated time: <span className="font-black">UNKNOWN</span>
                </p>
                <p className="text-[11px] text-black font-mono leading-tight font-bold">
                  Status:{" "}
                  <span className={`font-black ${showBottomFire ? "text-red-600 animate-pulse" : ""}`}>
                    {showBottomFire
                      ? "SYSTEM OVERHEATING!"
                      : isInstalling
                        ? "Installing..."
                        : "Unexpected Error Occurred"}
                  </span>
                </p>
              </div>
            </div>

            {/* Progress Bar - Windows Style with Segments */}
            <div className="mb-4">
              <div className="w-full h-[20px] bg-[#C0C0C0] border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white relative">
                {/* Segmented progress blocks */}
                <div className="absolute left-[2px] top-[2px] flex gap-[1px]">
                  {[...Array(Math.floor((installProgress / 100) * 50))].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[8px] h-[14px] ${showBottomFire ? "bg-red-600 animate-pulse" : "bg-[#0066CC]"}`}
                    />
                  ))}
                </div>
                {/* Percentage */}
                <div
                  className={`absolute right-[8px] top-[3px] text-[11px] font-black font-mono ${showBottomFire ? "text-red-600" : "text-black"}`}
                >
                  {showBottomFire ? "666%" : `${installProgress}%`}
                </div>
              </div>
            </div>

            {/* Installation Steps */}
            <div className="mb-4 space-y-1">
              <div className="flex items-center text-[11px] text-black font-mono font-bold">
                <span className="mr-2 font-black">▶</span>
                <span>Copying "liquidity.dll" to C:\System32</span>
              </div>
              <div className="flex items-center text-[11px] text-black font-mono font-bold">
                <span className="mr-2 font-black">▶</span>
                <span>Writing to registry...</span>
              </div>
              <div className="flex items-center text-[11px] text-black font-mono font-bold">
                <span className="mr-2 font-black">▶</span>
                <span>Injecting FUD.exe</span>
              </div>
              <div className="flex items-center text-[11px] text-black font-mono font-bold">
                <span className="mr-2 font-black">▶</span>
                <span>Fetching whitepaper.doc... </span>
                <span className="text-red-600 font-black ml-1">❌ Failed</span>
              </div>
              {showBottomFire && (
                <div className="flex items-center text-[11px] text-red-600 font-mono font-bold animate-pulse">
                  <span className="mr-2 font-black">🔥</span>
                  <span>CPU.exe has stopped responding</span>
                </div>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-center mb-4 gap-2">
              <div
                className={`w-[12px] h-[12px] bg-white border border-[#808080] cursor-pointer flex items-center justify-center ${agreed ? "bg-white" : ""}`}
                onClick={() => setAgreed(!agreed)}
              >
                {agreed && <span className="text-[8px] font-black font-mono">✓</span>}
              </div>
              <label
                className="text-[11px] text-black cursor-pointer select-none font-mono font-bold"
                onClick={() => setAgreed(!agreed)}
              >
                I agree to receive future rugs.
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleInstall}
                className={`w-[120px] h-[32px] text-[11px] font-black font-mono border-2 ${
                  agreed
                    ? `${showBottomFire ? "bg-red-200 border-red-400 text-red-800 animate-pulse" : isInstalling ? "bg-[#D0D0D0] border-t-[#808080] border-l-[#808080] border-r-white border-b-white text-black cursor-not-allowed" : "bg-[#C0C0C0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-black hover:bg-[#D0D0D0] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"}`
                    : "bg-[#C0C0C0] border-t-[#A0A0A0] border-l-[#A0A0A0] border-r-[#A0A0A0] border-b-[#A0A0A0] text-[#808080] cursor-not-allowed"
                }`}
                disabled={!agreed || isInstalling}
              >
                {showBottomFire ? "BURNING..." : isInstalling ? "INSTALLING..." : "INSTALL"}
              </button>
              <button
                onClick={handlePanicSell}
                className="w-[120px] h-[32px] bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[11px] font-black font-mono text-black hover:bg-[#D0D0D0] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
              >
                PANIC SELL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
