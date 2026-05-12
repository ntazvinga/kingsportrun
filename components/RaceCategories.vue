<template>
  <section id="categories" class="categories">
    <div class="container">
      <div class="categories__header">
        <p class="section-label">Race Categories</p>
        <h2 class="section-title">Choose Your<br /><span class="gold">Distance</span></h2>
      </div>

      <div class="categories__grid">
        <article
          v-for="cat in categories"
          :key="cat.name"
          class="cat-card"
          :class="{ 'cat-card--featured': cat.featured }"
        >
          <div v-if="cat.featured" class="cat-card__badge">Most Popular</div>

          <div class="cat-card__distance">
            {{ cat.distance }}<span class="cat-card__unit">{{ cat.unit }}</span>
          </div>
          <h3 class="cat-card__name">{{ cat.name }}</h3>

          <ul class="cat-card__perks">
            <li v-for="perk in cat.perks" :key="perk">
              <span class="perk-check" aria-hidden="true">✓</span>{{ perk }}
            </li>
          </ul>

        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    distance: '5',
    unit:     'km',
    name:     'Starter',
    featured: false,
    perks: [
      'Finisher medal',
      'Race-day shirt',
      'Post-race festival access',
      'Timing chip included',
    ],
  },
  {
    distance: '10',
    unit:     'km',
    name:     'Chase',
    featured: true,
    perks: [
      'Kingsport finisher medal',
      'Race-day shirt',
      'Post-race festival access',
      'Timing chip included',
      'Gear check bag',
    ],
  },
  {
    distance: '21',
    unit:     'km',
    name:     'Half Marathon',
    featured: false,
    perks: [
      'Elite Kingsport finisher medal',
      'Race-day shirt',
      'Post-race festival access',
      'Timing chip included',
      'Gear check bag',
      'Priority corral placement',
    ],
  },
]
</script>

<style scoped>
.categories {
  padding-block: var(--section-gap);
  background: var(--surface);
}

.categories__header {
  text-align: center;
  margin-bottom: 3.5rem;
}

/* Override global defaults — this section sits on crimson */
.categories .section-label { color: var(--muted-inv); }
.categories .section-title { color: var(--white); }
.categories .gold           { color: var(--white); }

.categories__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .categories__grid { grid-template-columns: repeat(3, 1fr); }
}

/* Card */
.cat-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.75rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.25s, transform 0.25s;
}

.cat-card:hover {
  border-color: rgba(201,168,76,0.5);
  transform: translateY(-4px);
}

.cat-card--featured {
  border-color: var(--crimson, #7A0E1C);
  background: linear-gradient(160deg, rgba(122,14,28,0.06) 0%, var(--bg) 60%);
}

.cat-card__badge {
  position: absolute;
  top: -0.85rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  padding: 0.25rem 1rem;
  background: var(--gold);
  color: #0E0E0E;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 99px;
}

.cat-card__distance {
  font-family: var(--font-display);
  font-size: 4rem;
  line-height: 1;
  color: var(--text);
  letter-spacing: 0.02em;
}

.cat-card__unit {
  font-size: 1.8rem;
  letter-spacing: 0.04em;
}

.cat-card__name {
  margin-top: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Perks list */
.cat-card__perks {
  list-style: none;
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  flex: 1;
}

.cat-card__perks li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.87rem;
  color: var(--muted);
}

.perk-check {
  flex-shrink: 0;
  color: var(--gold);
  font-size: 0.75rem;
}

</style>
