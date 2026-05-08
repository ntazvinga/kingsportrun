<template>
  <section id="hero" class="hero">
    <!-- Ambient background elements -->
    <div class="hero__grid" aria-hidden="true"></div>
    <div class="hero__glow" aria-hidden="true"></div>

    <div class="container hero__content">
      <p class="hero__eyebrow">
        <span class="eyebrow-dot"></span>
        Kingsport, TN &nbsp;·&nbsp; September 14, 2026
      </p>

      <h1 class="hero__title">
        Run<br /><span class="gold">Kingsport</span>
      </h1>

      <p class="hero__tagline">
        Push your limits through the heart of Kingsport.<br class="br-desktop" />
        Where champions are made and legends are born.
      </p>

      <div class="hero__actions">
        <a href="#categories" class="btn btn--primary">View Categories</a>
        <a href="#schedule" class="btn btn--ghost">Race Schedule &rarr;</a>
      </div>

      <div class="hero__scroll-hint" aria-hidden="true">
        <span></span>
      </div>
    </div>

    <!-- Decorative crown -->
    <div class="hero__crown-deco" aria-hidden="true">♛</div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 5rem;
}

/* Grid texture */
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Gold glow blob */
.hero__glow {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%);
  pointer-events: none;
}

/* Decorative crown */
.hero__crown-deco {
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(14rem, 22vw, 28rem);
  color: rgba(201,168,76,0.05);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

/* Content */
.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
}

.eyebrow-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.4); }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(4.5rem, 12vw, 9rem);
  line-height: 0.92;
  letter-spacing: 0.02em;
  color: var(--white);
}

.hero__tagline {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--muted);
  max-width: 44ch;
  line-height: 1.7;
}

.br-desktop { display: none; }
@media (min-width: 640px) { .br-desktop { display: block; } }

/* Buttons */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 2.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}

.btn--primary {
  background: var(--gold);
  color: #0E0E0E;
}

.btn--primary:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,168,76,0.3);
}

.btn--ghost {
  border: 1.5px solid var(--border);
  color: var(--white);
  background: rgba(255,255,255,0.03);
}

.btn--ghost:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(201,168,76,0.06);
}

/* Scroll hint */
.hero__scroll-hint {
  margin-top: 2rem;
}

.hero__scroll-hint span {
  display: block;
  width: 24px;
  height: 40px;
  border: 2px solid var(--border);
  border-radius: 12px;
  position: relative;
}

.hero__scroll-hint span::after {
  content: '';
  display: block;
  width: 4px;
  height: 8px;
  background: var(--gold);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-bounce 1.6s ease-in-out infinite;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  80%       { transform: translateX(-50%) translateY(10px); opacity: 0; }
}
</style>
