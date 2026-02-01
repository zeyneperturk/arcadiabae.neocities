(function () {
  const container = document.getElementById('content');
  if (!container) return;
  const perRow = 2;
  let tr = null;

  const createWindowHtml = (entry) => {
    return `
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">${escapeHtml(entry.title)}</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize" class="maximize" data-id="${entry.id}"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <div class="fieldset">
            ${entry.preview || makePreview(entry.content)}
          </div>
        </div>
      </div>
    `;
  };

  window.entries.forEach((entry, i) => {
    if (i % perRow === 0) {
      tr = document.createElement('tr');
      container.appendChild(tr);
    }
    const td = document.createElement('td');
    td.innerHTML = createWindowHtml(entry);

    // wire maximize button to open the single-entry page
    const maxBtn = td.querySelector('button.maximize');
    if (maxBtn) {
      maxBtn.addEventListener('click', () => {
        const id = entry.id ?? i;
        location.href = `blog-entry.html?id=${encodeURIComponent(id)}`;
      });
    }

    tr.appendChild(td);
  });

  // helper: safe simple escape (keeps simple HTML tags if you prefer remove this)
  function escapeHtml(str){
    if (!str) return '';
    return str.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }

  function makePreview(content){
    if (!content) return '';
    const text = content.replace(/<[^>]+>/g, ''); // strip tags
    return text.length > 180 ? text.slice(0, 177) + '…' : text;
  }
})();