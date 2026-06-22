let originalHtml = ""
let originalBody = ""
let scrollLocked = false

export const lockScroll = () => {
  if (typeof document === "undefined" || scrollLocked) return
  scrollLocked = true
  originalHtml = document.documentElement.style.overflow
  originalBody = document.body.style.overflow
  document.documentElement.style.overflow = "hidden"
  document.body.style.overflow = "hidden"
  window.scrollTo(0, 0)
}

export const unlockScroll = () => {
  if (typeof document === "undefined" || !scrollLocked) return
  scrollLocked = false
  document.documentElement.style.overflow = originalHtml
  document.body.style.overflow = originalBody
}

const TEXTURES_READY = "ro:texturesReady"
let texturesReady = false

export const markTexturesReady = () => {
  if (typeof window === "undefined" || texturesReady) return
  texturesReady = true
  window.dispatchEvent(new Event(TEXTURES_READY))
}

export const onTexturesReady = (cb) => {
  if (typeof window === "undefined") return () => {}
  if (texturesReady) {
    queueMicrotask(cb)
    return () => {}
  }
  window.addEventListener(TEXTURES_READY, cb, { once: true })
  return () => window.removeEventListener(TEXTURES_READY, cb)
}

const INTRO_START = "ro:introStart"
let introStarted = false

export const markIntroStart = () => {
  if (typeof window === "undefined" || introStarted) return
  introStarted = true
  window.dispatchEvent(new Event(INTRO_START))
}

export const onIntroStart = (cb) => {
  if (typeof window === "undefined") return () => {}
  if (introStarted) {
    queueMicrotask(cb)
    return () => {}
  }
  window.addEventListener(INTRO_START, cb, { once: true })
  return () => window.removeEventListener(INTRO_START, cb)
}
