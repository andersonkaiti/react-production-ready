// Stale chunks fail to load after a deploy; reload to get the new ones.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()

  window.location.reload()
})
