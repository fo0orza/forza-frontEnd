"use client"

import { useEffect, useRef } from "react"

// [top%, left%, widthPx, delayS, durationS]
const PARTICLES_DATA: [number, number, number, number, number][] = [
    [5,  12, 3, 0.0, 2.2],
    [8,  27, 1, 0.4, 2.5],
    [12, 55, 3, 0.6, 1.9],
    [14, 80, 1, 1.0, 2.8],
    [20, 35, 1, 0.2, 2.1],
    [3,  65, 3, 0.9, 1.8],
    [25, 14, 1, 1.5, 3.0],
    [18, 90, 3, 0.5, 2.0],
    [30, 48, 1, 0.7, 1.6],
    [7,  40, 3, 1.3, 2.9],
    [35, 73, 1, 0.1, 2.4],
    [40, 20, 3, 0.6, 2.2],
    [28,  4, 1, 1.7, 1.8],
    [45, 88, 3, 0.3, 2.6],
    [50, 30, 1, 1.0, 2.0],
    [55, 61, 3, 1.6, 1.7],
    [60,  9, 1, 0.4, 2.8],
    [65, 76, 3, 0.7, 2.4],
    [42, 51, 1, 1.4, 3.1],
    [70, 42, 3, 0.1, 1.9],
    [75, 22, 1, 1.8, 2.1],
    [80, 67, 3, 0.8, 2.7],
    [85, 36, 1, 0.2, 1.5],
    [90, 83, 3, 1.1, 2.3],
    [95, 16, 1, 1.9, 2.6],
    [22, 95, 3, 0.5, 2.2],
    [48,  6, 1, 2.1, 1.7],
    [58, 93, 3, 0.0, 2.9],
    [72, 56, 1, 1.2, 2.0],
    [38, 71, 3, 0.6, 2.0],
    [15, 44, 1, 1.8, 2.7],
    [32, 26, 3, 0.0, 2.1],
    [68, 84, 1, 1.4, 3.2],
    [82, 49, 3, 0.8, 1.6],
    [10, 79, 1, 2.0, 2.5],
    [55, 16, 3, 1.1, 2.5],
    [78, 31, 1, 0.3, 1.8],
    [44, 63, 3, 0.9, 2.2],
    [20, 53, 1, 1.5, 2.8],
    [62, 43, 3, 1.3, 1.9],
]

interface Particle {
    topPct: number    // % — vertical origin
    leftPct: number   // % — horizontal origin
    size: number      // radius
    delay: number     // seconds
    duration: number  // seconds
}

const SECONDARY = "#00E676"

const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const rafRef    = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // ── resize ──────────────────────────────────────────────
        const resize = () => {
            canvas.width  = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)

        // ── build particle list ──────────────────────────────────
        const particles: Particle[] = PARTICLES_DATA.map(([top, left, size, delay, duration]) => ({
            topPct:   top,
            leftPct:  left,
            size:     size / 2,   // radius
            delay,
            duration,
        }))

        // ── animation loop ───────────────────────────────────────
        const start = performance.now()

        const draw = (now: number) => {
            // Rebuild originX/Y if canvas was resized
            // (canvas.width/height are always current after resize)
            const elapsed = (now - start) / 1000   // seconds

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (const p of particles) {
                // Normalised position inside one loop cycle (0 → 1)
                const cycleTime = p.duration
                const t = ((elapsed - p.delay) % cycleTime + cycleTime) % cycleTime / cycleTime

                // Replicate keyframe curve:
                // 0 → 0.2 : fade in  (opacity 0 → 0.9)
                // 0.2→ 0.6: hold     (opacity 0.9 → 0.7),  Y: 0 → -14px, scale: 0.6 → 1
                // 0.6→ 1.0: fade out (opacity 0.7 → 0),    Y: -14 → -28px, scale: 1 → 0.5

                let opacity: number
                let yOffset: number
                let scale:   number

                if (t < 0.2) {
                    const f = t / 0.2
                    opacity = f * 0.9
                    yOffset = 0
                    scale   = 0.6
                } else if (t < 0.6) {
                    const f = (t - 0.2) / 0.4
                    opacity = 0.9 - f * 0.2          // 0.9 → 0.7
                    yOffset = -14 * f                 // 0 → -14px
                    scale   = 0.6 + 0.4 * f           // 0.6 → 1
                } else {
                    const f = (t - 0.6) / 0.4
                    opacity = 0.7 * (1 - f)           // 0.7 → 0
                    yOffset = -14 - 14 * f            // -14 → -28px
                    scale   = 1 - 0.5 * f             // 1 → 0.5
                }

                if (opacity <= 0) continue

                // Recalculate origin on every frame in case canvas resized
                const ox = (p.leftPct / 100) * canvas.width
                const oy = (p.topPct  / 100) * canvas.height

                ctx.save()
                ctx.globalAlpha = opacity
                ctx.beginPath()
                ctx.arc(ox, oy + yOffset, p.size * scale, 0, Math.PI * 2)
                ctx.fillStyle = SECONDARY
                ctx.fill()
                ctx.restore()
            }

            rafRef.current = requestAnimationFrame(draw)
        }

        rafRef.current = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(rafRef.current)
            ro.disconnect()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 z-3 pointer-events-none w-full h-full"
            style={{ willChange: "transform" }} 
        />
    )
}

export default Particles
