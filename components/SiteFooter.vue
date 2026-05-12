<template>
  <footer class="footer">
    <div class="container footer__inner">
      <a href="#hero" class="footer__logo" aria-label="Back to top">
        <span class="footer__logo-crown">♛</span>
        <span class="footer__logo-text">Kingsport<span class="gold">Run</span></span>
      </a>

      <nav class="footer__links" aria-label="Footer navigation">
        <a href="#about"      class="footer__link">About</a>
        <a href="#categories" class="footer__link">Categories</a>
        <a href="#schedule"   class="footer__link">Schedule</a>
      </nav>

      <p class="footer__copy">
        &copy; {{ new Date().getFullYear() }} Kingsport Run. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding-block: 3rem;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: 0.04em;
  color: var(--white);
}

.footer__logo-crown {
  color: var(--gold);
  font-size: 1.3rem;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.5rem;
}

.footer__link {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--muted-inv);
  letter-spacing: 0.06em;
  transition: color 0.2s;
}

.footer__link:hover { color: var(--white); }

.footer__copy {
  font-size: 0.75rem;
  color: var(--muted-inv);
  letter-spacing: 0.04em;
}

/* crimson section overrides */
.footer .gold { color: var(--white); }
</style>
