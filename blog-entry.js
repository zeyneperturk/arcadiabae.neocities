(function () {
  function qs(name) {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  }
  function escapeText(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  const container = document.getElementById('entry-article');
  if (!container) return;

  const entries = window.entries || [];
  if (!entries.length) {
    container.innerHTML = '<p>No entries found.</p>';
    return;
  }

  const idParam = qs('id');
  let entryIndex = 0;
  if (idParam) {
    const idx = entries.findIndex(e => String(e.id) === String(idParam));
    if (idx !== -1) entryIndex = idx;
  }
  const entry = entries[entryIndex];

  const older = entries[entryIndex - 1];
  const newer = entries[entryIndex + 1];

  container.innerHTML = `
    <article class="entry-page">
      <header>
        <h2>${escapeText(entry.title)}</h2>
        <time datetime="${escapeText(entry.date || '')}">${escapeText(entry.date || '')}</time>
      </header>

      <section class="entry-content">
        ${entry.content || ''}
      </section>

      <nav class="entry-nav">
        <div class="older">
          ${older ? `<a href="blog-entry.html?id=${encodeURIComponent(older.id)}">← ${escapeText(older.title)}</a>` : ''}
        </div>
        <div class="newer">
          ${newer ? `<a href="blog-entry.html?id=${encodeURIComponent(newer.id)}">${escapeText(newer.title)} →</a>` : ''}
        </div>
      </nav>
    </article>
  `;
})();