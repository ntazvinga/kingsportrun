<template>
  <section id="about" class="about">
    <div class="container about__inner">
      <div class="about__text">
        <p class="section-label">About the Race</p>
        <h2 class="section-title">More Than a<br /><span class="gold">Marathon</span></h2>
        <p class="about__body">
          The Kingsport Run is Harare's premier road race — a celebration of grit,
          community, and the open road. Winding through tree-lined neighbourhoods, riverside
          greenways, and the historic city centre, every mile tells a story.
        </p>
        <p class="about__body">
          Whether you're chasing a personal record or crossing your very first finish line, the
          Kingsport Run meets you where you are. Thousands of spectators line the course, live bands
          power you through the hills, and every finisher earns their medal.
        </p>
      </div>

      <div class="about__highlights">
        <div v-for="h in highlights" :key="h.title" class="highlight-card">
          <span class="highlight-card__icon" aria-hidden="true">{{ h.icon }}</span>
          <div>
            <p class="highlight-card__title">{{ h.title }}</p>
            <p class="highlight-card__desc">{{ h.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  {
    icon: '✓',
    title: 'USATF Certified Course',
    desc: 'Every distance fully certified and accurately measured.',
  },
  {
    icon: '♪',
    title: 'Live Music Throughout',
    desc: 'Local bands at mile markers 3, 7, 13, and the finish.',
  },
  {
    icon: '⊕',
    title: '12 Aid Stations',
    desc: 'Water, electrolytes, and energy gels every 2–3 miles.',
  },
  {
    icon: '★',
    title: "Finisher's Medal",
    desc: 'Crown-shaped custom medal for every finisher.',
  },
]
</script>

<style scoped>
.about {
  padding-block: var(--section-gap);
}

.about__inner {
  display: grid;
  gap: 4rem;
}

@media (min-width: 900px) {
  .about__inner {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 5rem;
  }
}

.about__body {
  color: var(--muted);
  line-height: 1.8;
  margin-top: 1.25rem;
  max-width: 52ch;
}

/* Highlights grid */
.about__highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 480px) {
  .about__highlights { grid-template-columns: 1fr; }
}

.highlight-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.4rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: border-color 0.2s, transform 0.2s;
}

.highlight-card:hover {
  border-color: var(--gold);
  transform: translateY(-2px);
}

.highlight-card__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(245,237,224,0.18);
  color: var(--white);
  font-size: 1rem;
}

.highlight-card__title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--white);
}

.highlight-card__desc {
  margin-top: 0.2rem;
  font-size: 0.82rem;
  color: var(--muted-inv);
  line-height: 1.5;
}
</style>
