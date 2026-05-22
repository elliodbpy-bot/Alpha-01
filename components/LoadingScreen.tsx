'use client'
export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  setTimeout(onFinish, 5000)
  return (
    <div id="loading-screen">
      <div className="loader-modern">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="loading-text-modern">
        <span>C</span><span>a</span><span>r</span><span>g</span><span>a</span><span>n</span><span>d</span><span>o</span>
      </div>
      <div className="loading-sub">Gobernación del estado Monagas</div>
    </div>
  )
}