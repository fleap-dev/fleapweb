// SVG path for the home page figure: a line that starts as a tangle on the
// left and settles into a straight line on the right. It is a point drifting
// left to right while orbiting its own position; the orbit shrinks to nothing
// at `calm` (a fraction of the width), and from there the line runs straight.
// Draw it in a `0 0 width height` viewBox.
export function untanglePath(width = 960, height = 120, calm = 0.62) {
  const steps = 600
  const loops = 13
  const radius = height * 0.33
  const points: string[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const fade = (1 - t) ** 1.3
    const angle = t * loops * 2 * Math.PI
    // Drifting slowly at first piles the early loops into a knot. A second,
    // faster orbit keeps them from looking like a neat spring.
    const x =
      radius * 1.5 +
      (width * calm - radius * 1.5) * t ** 1.5 +
      fade * radius * (Math.cos(angle) + 0.5 * Math.cos(2.3 * angle + 1))
    const y =
      height / 2 +
      fade * radius * (Math.sin(angle) + 0.35 * Math.sin(3.1 * angle))
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`)
  }
  points.push(`${width} ${height / 2}`)
  return `M${points.join("L")}`
}
