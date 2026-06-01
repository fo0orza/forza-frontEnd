// [top%, left%, widthPx, delayS, durationS]
const PARTICLES: [number, number, number, number, number][] = [
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

const Particles = () => {
    return (
        <div className="absolute inset-0 z-3 pointer-events-none max-w-content w-full mx-auto">
            {PARTICLES.map(([top, left, size, delay, duration], i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-secondary"
                    style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        opacity: 0,
                        animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite`,
                    }}
                />
            ))}
        </div>
    )
}

export default Particles
