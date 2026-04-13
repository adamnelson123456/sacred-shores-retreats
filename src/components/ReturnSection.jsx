/**
 * Premium brand pause — “return to…” + softly cycling subtitle words.
 *
 * Tweaks: `ROTATING_WORDS`, `WORD_INTERVAL_MS`, float `FLOAT_LOOP`, `wordMotion` enter/exit.
 */
import { useState, useEffect } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'

/** Viewport: how much of the section must be visible before animating (0–1). */
const VIEW_AMOUNT = 0.35

/** Idle drift on the headline — adjust `duration` or `-2.5` (max lift in px). */
const FLOAT_LOOP = { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }

/** Subtitle cycle — add/remove strings anytime. */
const ROTATING_WORDS = [
  'prayer',
  'nature',
  'retreat',
  'community',
  'ocean',
  'song',
  'love',
  'stillness',
  'breath',
]

const WORD_INTERVAL_MS = 1700

function RotatingWords({ prefersReducedMotion, softEase }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return undefined
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length)
    }, WORD_INTERVAL_MS)
    return () => clearInterval(id)
  }, [prefersReducedMotion])

  const sharedClass =
    'font-serif text-[clamp(1.65rem,5.75vw,2.65rem)] font-normal italic tracking-[0.08em] text-[#6B635C] sm:tracking-[0.1em]'

  const wordMotion = {
    initial: { opacity: 0, filter: 'blur(4px)', y: 6 },
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.34, ease: softEase },
    },
    exit: {
      opacity: 0,
      filter: 'blur(0px)',
      y: 10,
      transition: { duration: 0.5, ease: [0.45, 0, 0.75, 1] },
    },
  }

  if (prefersReducedMotion) {
    return (
      <div className="mt-1 w-full text-center sm:mt-0">
        <span className={sharedClass}>{ROTATING_WORDS[0]}</span>
      </div>
    )
  }

  return (
    <div
      className="relative mx-auto mt-1 h-[2.35em] w-full sm:h-[2.55em]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={ROTATING_WORDS[index]}
          variants={wordMotion}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`absolute inset-0 flex items-center justify-center ${sharedClass}`}
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function ReturnSection() {
  const prefersReducedMotion = useReducedMotion()

  const softEase = [0.16, 1, 0.3, 1]

  const atRest = { opacity: 1, y: 0 }
  const headingHidden = prefersReducedMotion ? atRest : { opacity: 0, y: 28 }
  const subHidden = prefersReducedMotion ? atRest : { opacity: 0, y: 14 }

  const headingTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1.15, ease: softEase }

  const subTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.95, ease: softEase, delay: 0.22 }

  return (
    <section
      id="return-statement"
      className="scroll-mt-20 bg-gradient-to-b from-[#F8F5F0] via-[#F5F1EB] to-[#F3EEE8] px-6 py-[clamp(7.5rem,20vw,14rem)] sm:px-8 md:py-[clamp(9rem,24vw,16rem)] lg:px-12 lg:py-[clamp(10rem,22vw,17rem)]"
      aria-labelledby="return-heading"
    >
      <div className="mx-auto max-w-[min(42rem,100%)] text-center">
        <motion.h2
          id="return-heading"
          className="font-serif font-normal text-[clamp(2.75rem,9vw,5.25rem)] leading-[1.05] tracking-[-0.02em] text-black"
          initial={headingHidden}
          whileInView={atRest}
          viewport={{ once: true, amount: VIEW_AMOUNT, margin: '0px 0px -10% 0px' }}
          transition={headingTransition}
        >
          <motion.span
            className="inline-block will-change-transform"
            animate={prefersReducedMotion ? false : { y: [0, -2.5, 0] }}
            transition={prefersReducedMotion ? undefined : FLOAT_LOOP}
          >
            return to…
          </motion.span>
        </motion.h2>

        <motion.div
          className="mt-9 sm:mt-11 md:mt-12"
          initial={subHidden}
          whileInView={atRest}
          viewport={{ once: true, amount: VIEW_AMOUNT, margin: '0px 0px -10% 0px' }}
          transition={subTransition}
        >
          <div className="-translate-x-2 sm:-translate-x-2.5 md:-translate-x-3">
            <RotatingWords prefersReducedMotion={prefersReducedMotion} softEase={softEase} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
