<template>
  <section id="schedule" class="schedule">
    <div class="container schedule__inner">
      <div class="schedule__header">
        <p class="section-label">Race Day</p>
        <h2 class="section-title">September 14,<br /><span class="gold">2026</span></h2>
        <p class="schedule__sub">All events start at Kingsport Town Center · 400 Clinchfield St</p>
      </div>

      <ol class="timeline" aria-label="Race day schedule">
        <li
          v-for="(item, i) in schedule"
          :key="i"
          class="timeline__item"
        >
          <div class="timeline__connector" aria-hidden="true">
            <div class="timeline__dot"></div>
            <div class="timeline__line"></div>
          </div>
          <div class="timeline__body">
            <time class="timeline__time">{{ item.time }}</time>
            <h3 class="timeline__title">{{ item.title }}</h3>
            <p class="timeline__desc">{{ item.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const schedule = [
  {
    time:  '5:30 AM',
    title: 'Race Village Opens',
    desc:  'Gear check, bib pickup, warm-up area, and vendors open.',
  },
  {
    time:  '6:30 AM',
    title: '21K Start',
    desc:  'Wave starts for 21K runners — corrals A–C.',
  },
  {
    time:  '7:00 AM',
    title: '10K Start',
    desc:  'Wave starts for 10K runners — corrals A–B.',
  },
  {
    time:  '8:00 AM',
    title: '5K Start',
    desc:  'Open-corral start for all 5K participants.',
  },
  {
    time:  '9:00 AM',
    title: 'Awards Ceremony — 5K & 10K',
    desc:  'Top 3 overall (M/F/NB) and age-group awards presented.',
  },
  {
    time:  '10:30 AM',
    title: 'Awards Ceremony — 21K',
    desc:  'Top 3 overall (M/F/NB) and age-group awards presented.',
  },
  {
    time:  '12:00 PM',
    title: 'Finish Line Festival',
    desc:  'Live music, food trucks, and awards for full marathon through 1:30 PM.',
  },
]
</script>

<style scoped>
.schedule {
  padding-block: var(--section-gap);
}

.schedule__inner {
  display: grid;
  gap: 4rem;
}

@media (min-width: 900px) {
  .schedule__inner {
    grid-template-columns: 1fr 1.6fr;
    align-items: start;
    gap: 6rem;
  }
}

.schedule__sub {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--muted);
  max-width: 30ch;
}

/* Timeline */
.timeline {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.timeline__item {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 0 1rem;
}

.timeline__connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline__dot {
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gold);
  border: 2px solid var(--bg);
  outline: 2px solid var(--gold);
  margin-top: 0.25rem;
}

.timeline__line {
  flex: 1;
  width: 2px;
  background: var(--border);
  margin-top: 4px;
  margin-bottom: 0;
}

.timeline__item:last-child .timeline__line { display: none; }

.timeline__body {
  padding-bottom: 2.5rem;
}

.timeline__time {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.3rem;
}

.timeline__title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
}

.timeline__desc {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.6;
}
</style>
