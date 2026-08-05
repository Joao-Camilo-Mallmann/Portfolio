import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Composable that creates an ambient particle canvas with:
 * - ~20 subtle points with slow, organic movement
 * - Colors that transition dynamically between dev (#4d91ea) and editor (#eaa64d)
 * - Light mouse repulsion effect
 * - Automatic resize handling and cleanup
 *
 * @param {import('vue').Ref<HTMLCanvasElement|null>} canvasRef - template ref to the <canvas>
 * @param {Object} [options]
 * @param {number} [options.count=20] - Number of particles
 * @param {number} [options.mouseRadius=120] - Radius of mouse influence
 * @param {number} [options.mouseForce=0.8] - Strength of mouse repulsion
 */
export function useParticles(canvasRef, options = {}) {
  const { count = 20, mouseRadius = 120, mouseForce = 0.8 } = options

  const mouse = ref({ x: -9999, y: -9999 })
  let animationId = null
  let particles = []
  let ctx = null
  let width = 0
  let height = 0

  // Dev blue → Cyan glow → Editor orange
  const colorStops = [
    { r: 77, g: 145, b: 234 },  // #4d91ea (dev)
    { r: 6, g: 182, b: 212 },   // #06b6d4 (cyan-glow)
    { r: 234, g: 166, b: 77 },  // #eaa64d (editor)
  ]

  function lerpColor(t) {
    // t goes 0→1→0 (ping-pong across 3 stops)
    const clampedT = Math.max(0, Math.min(1, t))
    const segment = clampedT * (colorStops.length - 1)
    const i = Math.floor(segment)
    const f = segment - i
    const c0 = colorStops[Math.min(i, colorStops.length - 1)]
    const c1 = colorStops[Math.min(i + 1, colorStops.length - 1)]
    return {
      r: Math.round(c0.r + (c1.r - c0.r) * f),
      g: Math.round(c0.g + (c1.g - c0.g) * f),
      b: Math.round(c0.b + (c1.b - c0.b) * f),
    }
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.8 + 0.8,
      // Each particle has its own color phase and speed for organic feel
      colorPhase: Math.random() * Math.PI * 2,
      colorSpeed: 0.003 + Math.random() * 0.006,
      baseOpacity: 0.3 + Math.random() * 0.4,
    }
  }

  function resize() {
    const canvas = canvasRef.value
    if (!canvas) return
    const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect()
    width = rect.width
    height = rect.height
    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx = canvas.getContext('2d')
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  }

  function init() {
    resize()
    particles = Array.from({ length: count }, createParticle)
  }

  function animate() {
    if (!ctx) return
    ctx.clearRect(0, 0, width, height)

    for (const p of particles) {
      // Update color phase (ping-pong: sin produces 0→1→0 smoothly)
      p.colorPhase += p.colorSpeed
      const colorT = (Math.sin(p.colorPhase) + 1) / 2

      // Mouse interaction (soft repulsion)
      const dx = p.x - mouse.value.x
      const dy = p.y - mouse.value.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < mouseRadius && dist > 0) {
        const force = ((mouseRadius - dist) / mouseRadius) * mouseForce
        p.vx += (dx / dist) * force * 0.05
        p.vy += (dy / dist) * force * 0.05
      }

      // Apply velocity with gentle friction
      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.995
      p.vy *= 0.995

      // Wrap around edges
      if (p.x < -10) p.x = width + 10
      if (p.x > width + 10) p.x = -10
      if (p.y < -10) p.y = height + 10
      if (p.y > height + 10) p.y = -10

      // Draw particle
      const color = lerpColor(colorT)
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.baseOpacity})`
      ctx.fill()

      // Subtle glow
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.baseOpacity * 0.15})`
      ctx.fill()
    }

    animationId = requestAnimationFrame(animate)
  }

  function onMouseMove(e) {
    const canvas = canvasRef.value
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouse.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  function onMouseLeave() {
    mouse.value = { x: -9999, y: -9999 }
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return

    init()
    animate()

    const parent = canvas.parentElement || canvas
    parent.addEventListener('mousemove', onMouseMove)
    parent.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)

    const canvas = canvasRef.value
    const parent = canvas?.parentElement || canvas
    if (parent) {
      parent.removeEventListener('mousemove', onMouseMove)
      parent.removeEventListener('mouseleave', onMouseLeave)
    }
    window.removeEventListener('resize', resize)
  })
}
