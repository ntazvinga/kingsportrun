<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="container nav__inner">
      <a href="#hero" class="nav__logo" aria-label="Kingsport Run home">
        <span class="nav__logo-crown">♛</span>
        <span class="nav__logo-text">Kingsport<span class="gold">Run</span></span>
      </a>

      <nav class="nav__links" :class="{ open: menuOpen }" aria-label="Main navigation">
        <a href="#about"      class="nav__link" @click="close">About</a>
        <a href="#categories" class="nav__link" @click="close">Categories</a>
        <a href="#schedule"   class="nav__link" @click="close">Schedule</a>
      </nav>

      <button
        class="nav__hamburger"
        :class="{ active: menuOpen }"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen   = ref(false)

function close() { menuOpen.value = false }

onMounted(() => {
  const handler = () => { isScrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  padding-block: 1.2rem;
  transition: background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s;
}

.nav.scrolled {
  background: rgba(14, 14, 14, 0.92);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Logo */
.nav__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.6rem;
  letter-spacing: 0.04em;
  color: var(--white);
}

.nav__logo-crown {
  color: var(--gold);
  font-size: 1.4rem;
  line-height: 1;
}

/* Links */
.nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.04em;
  transition: color 0.2s;
}

.nav__link:hover { color: var(--white); }

.nav__cta {
  display: inline-block;
  padding: 0.55rem 1.4rem;
  background: var(--gold);
  color: #0E0E0E;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  border-radius: var(--radius-sm);
  transition: background 0.2s, transform 0.15s;
}

.nav__cta:hover {
  background: var(--gold-light);
  transform: translateY(-1px);
}

/* Hamburger */
.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}

.nav__hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__hamburger.active span:nth-child(2) { opacity: 0; }
.nav__hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile ─────────────────────────────────── */
@media (max-width: 768px) {
  .nav__hamburger { display: flex; }

  .nav__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    position: fixed;
    inset: 0;
    background: rgba(14, 14, 14, 0.97);
    backdrop-filter: blur(16px);
    padding-top: 6rem;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.25s, transform 0.25s;
  }

  .nav__links.open {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }

  .nav__link {
    font-size: 1.1rem;
  }
}
</style>
