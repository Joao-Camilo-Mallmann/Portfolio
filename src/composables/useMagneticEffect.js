import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Resolves a template ref to its underlying DOM element.
 * Handles both native elements and Vue component instances (e.g., router-link).
 */
function resolveElement(refValue) {
  if (!refValue) return null
  // Vue component instance (router-link, etc.)
  if (refValue.$el) return refValue.$el
  // Native DOM element
  if (refValue instanceof HTMLElement) return refValue
  return null
}

/**
 * Composable that adds a magnetic hover effect to an element.
 * The element is attracted toward the cursor when it's nearby,
 * and gains an intensifying glow.
 *
 * @param {import('vue').Ref<HTMLElement|null>} elementRef - template ref to the target element
 * @param {Object} [options]
 * @param {number} [options.strength=0.35] - How strongly the element follows the cursor (0-1)
 * @param {number} [options.radius=100] - Activation radius in pixels
 * @param {string} [options.glowColor='77, 145, 234'] - RGB string for glow color
 * @param {number} [options.maxGlowIntensity=0.5] - Maximum glow opacity
 */
export function useMagneticEffect(elementRef, options = {}) {
  const {
    strength = 0.35,
    radius = 100,
    glowColor = '77, 145, 234',
    maxGlowIntensity = 0.5,
  } = options

  const isActive = ref(false)
  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0
  let currentGlow = 0
  let targetGlow = 0
  let animationId = null

  function lerp(start, end, factor) {
    return start + (end - start) * factor
  }

  function animate() {
    // Smooth interpolation toward target position
    currentX = lerp(currentX, targetX, 0.15)
    currentY = lerp(currentY, targetY, 0.15)
    currentGlow = lerp(currentGlow, targetGlow, 0.12)

    const el = resolveElement(elementRef.value)
    if (el) {
      el.style.transform = `translate(${currentX}px, ${currentY}px)`
      el.style.boxShadow = `0 0 ${20 + currentGlow * 30}px ${currentGlow * 15}px rgba(${glowColor}, ${currentGlow * maxGlowIntensity})`
    }

    // Stop animating when settled and not active
    if (
      !isActive.value &&
      Math.abs(currentX) < 0.1 &&
      Math.abs(currentY) < 0.1 &&
      currentGlow < 0.01
    ) {
      if (el) {
        el.style.transform = ''
        el.style.boxShadow = ''
      }
      animationId = null
      return
    }

    animationId = requestAnimationFrame(animate)
  }

  function startAnimation() {
    if (!animationId) {
      animationId = requestAnimationFrame(animate)
    }
  }

  function onMouseMove(e) {
    const el = resolveElement(elementRef.value)
    if (!el) return

    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = e.clientX - centerX
    const dy = e.clientY - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < radius) {
      isActive.value = true
      const factor = 1 - dist / radius
      targetX = dx * strength * factor
      targetY = dy * strength * factor
      targetGlow = factor
      startAnimation()
    } else if (isActive.value) {
      isActive.value = false
      targetX = 0
      targetY = 0
      targetGlow = 0
      startAnimation()
    }
  }

  function onMouseLeave() {
    isActive.value = false
    targetX = 0
    targetY = 0
    targetGlow = 0
    startAnimation()
  }

  onMounted(() => {
    // Listen on document so we detect cursor approaching from outside
    document.addEventListener('mousemove', onMouseMove)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    const el = resolveElement(elementRef.value)
    if (el) {
      el.style.transform = ''
      el.style.boxShadow = ''
    }
  })

  return { isActive }
}
