import { useCallback, useLayoutEffect, useState } from 'react'

/**
 * Locks a section to the visual viewport width (edge-to-edge inside nested layouts).
 * @param {React.RefObject<HTMLElement | null>} sectionRef
 * @param {boolean} enabled
 */
export function useViewportFullBleed(sectionRef, enabled) {
  const [bleedStyle, setBleedStyle] = useState(() =>
    enabled
      ? {
          width: '100%',
          minWidth: '100%',
          maxWidth: '100%',
          marginLeft: '0px',
          marginRight: '0px',
          flexShrink: 0,
        }
      : {}
  )

  const sync = useCallback(() => {
    if (!enabled) {
      setBleedStyle({})
      return
    }
    const el = sectionRef.current
    if (!el) return
    const vw = document.documentElement.clientWidth
    const left = el.getBoundingClientRect().left
    setBleedStyle({
      width: `${vw}px`,
      minWidth: `${vw}px`,
      maxWidth: `${vw}px`,
      marginLeft: `${-left}px`,
      marginRight: '0px',
      flexShrink: 0,
    })
  }, [enabled])

  useLayoutEffect(() => {
    if (!enabled) return
    sync()
    window.addEventListener('resize', sync)
    window.addEventListener('scroll', sync, { passive: true })
    const ro = new ResizeObserver(sync)
    const el = sectionRef.current
    if (el) ro.observe(el)
    return () => {
      window.removeEventListener('resize', sync)
      window.removeEventListener('scroll', sync)
      ro.disconnect()
    }
  }, [enabled, sync])

  return bleedStyle
}
