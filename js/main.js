(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wa = msg => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

  const geral = wa('Olá! Vim pelo site da Generalíssima Viagens e gostaria de informações.');
  $('#cta-topo').href = $('#cta-contato').href = geral;
  const ig = `https://www.instagram.com/${CONTACT.instagram}/`;
  const itens = [
    ['WhatsApp', CONTACT.telefone, geral], ['Telefone', CONTACT.telefone, `tel:+55${CONTACT.whatsapp}`],
    ['Instagram', '@' + CONTACT.instagram, ig],
    CONTACT.email && ['E-mail', CONTACT.email, `mailto:${CONTACT.email}`],
    CONTACT.endereco && ['Endereço', CONTACT.endereco, '']
  ].filter(Boolean);
  $('#contatos').innerHTML = itens.map(([r, t, h]) => `<li><span>${r}</span>${h ? `<a href="${h}" ${h.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${t}</a>` : t}</li>`).join('');
  $('#rodape-contato').innerHTML = `${CONTACT.telefone} · <a href="${ig}" target="_blank" rel="noopener">@${CONTACT.instagram}</a>`;
  $('#ano').textContent = new Date().getFullYear();

  const cartao = p => {
    const li = (p.inclui || []).map(i => `<li>${i}</li>`).join('');
    const msg = `Olá! Tenho interesse no pacote "${p.nome}"${p.data && p.data !== 'A confirmar' ? ' (' + p.data + ')' : ''}. Pode me passar mais informações?`;
    return `<article class="card rv">
      <figure><img src="${p.imagem}" alt="${p.destino}" loading="lazy"><span class="tag">${p.tipo === 'peregrinacao' ? 'Peregrinação' : 'Excursão'}</span></figure>
      <div class="card-c"><h3>${p.nome}</h3>
      <p class="meta"><b>Destino:</b> ${p.destino}<br><b>Data:</b> ${p.data}${p.duracao ? `<br><b>Duração:</b> ${p.duracao}` : ''}</p>
      <p>${p.descricao}</p>
      ${p.preco ? `<p class="preco">${p.preco}<small>por pessoa · ${p.pagamento}</small></p>` : ''}
      ${li ? `<ul>${li}</ul>` : ''}${p.obs ? `<p class="obs">${p.obs}</p>` : ''}
      <a class="btn btn-azul" href="${wa(msg)}" target="_blank" rel="noopener">Quero mais informações</a></div></article>`;
  };
  
  const lista = $('#lista-pacotes');
  const filtros = [['todos', 'Todos'], ['peregrinacao', 'Peregrinações'], ['excursao', 'Excursões']];
  $('#filtros').innerHTML = filtros.map(([v, t], i) => `<button data-f="${v}" aria-pressed="${i === 0}">${t}</button>`).join('');
  
  const mostrar = f => {
    lista.innerHTML = PACOTES.filter(p => f === 'todos' || p.tipo === f).map(cartao).join('');
    revelar(lista);
  };
  
  $('#filtros').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $('#filtros').querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    mostrar(b.dataset.f);
  });

  const lb = $('#lb'), lbImg = $('img', lb), lbCap = $('figcaption', lb);
  let atual = 0;
  
  $('#mosaico').innerHTML = FOTOS.map((f, i) => `<button class="rv ${f.forma}" data-i="${i}" aria-label="Abrir foto: ${f.alt}"><img src="${f.src}" alt="${f.alt}" loading="lazy"></button>`).join('');
  
  const abrir = i => { atual = (i + FOTOS.length) % FOTOS.length; const f = FOTOS[atual]; lbImg.src = f.src; lbImg.alt = f.alt; lbCap.textContent = f.legenda; lb.hidden = false; $('.lb-x').focus(); };
  const fechar = () => { lb.hidden = true; };
  $('#mosaico').addEventListener('click', e => { const b = e.target.closest('button'); if (b && b.querySelector('img')) abrir(+b.dataset.i); });
  $('.lb-x').onclick = fechar; $('.lb-prev').onclick = () => abrir(atual - 1); $('.lb-next').onclick = () => abrir(atual + 1);
  lb.addEventListener('click', e => { if (e.target === lb) fechar(); });
  addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') fechar(); if (e.key === 'ArrowLeft') abrir(atual - 1); if (e.key === 'ArrowRight') abrir(atual + 1); });
  let x0; lb.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) abrir(atual + (d < 0 ? 1 : -1)); });

  if (VIDEOS.length) {
    $('#videos').hidden = false;
    $('#lista-videos').innerHTML = VIDEOS.map(v => `<article class="video rv"><button class="player" data-id="${v.id}" aria-label="Reproduzir: ${v.titulo}"><img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy"><span class="play">▶</span></button><div class="t"><h3>${v.titulo}</h3><p>${v.descricao || ''}</p></div></article>`).join('');
    $('#lista-videos').addEventListener('click', e => { const b = e.target.closest('.player'); if (b) b.outerHTML = `<div class="player"><iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0" title="Vídeo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`; });
  } else document.querySelectorAll('[data-opt=videos]').forEach(a => a.remove());
  if (DEPOIMENTOS.length) { $('#depoimentos').hidden = false; $('#lista-dep').innerHTML = DEPOIMENTOS.map(d => `<blockquote class="dep rv"><p>${d.texto}</p><footer><b>${d.nome}</b></footer></blockquote>`).join(''); }

  const bg = $('.burger'), menu = $('#menu');
  const toggle = a => { menu.classList.toggle('aberto', a); bg.setAttribute('aria-expanded', a); bg.setAttribute('aria-label', a ? 'Fechar menu' : 'Abrir menu'); };
  bg.onclick = () => toggle(!menu.classList.contains('aberto'));
  menu.addEventListener('click', e => { if (e.target.closest('a')) toggle(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { threshold: .12 });
  function revelar(r = document) { r.querySelectorAll('.rv:not(.on)').forEach(el => reduz ? el.classList.add('on') : io.observe(el)); }
  
  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => so.observe(s));

  const bgHero = $('[data-parallax]');
  if (!reduz) { let t; addEventListener('scroll', () => { if (t) return; t = requestAnimationFrame(() => { bgHero.style.transform = `translate3d(0,${Math.min(scrollY, 900) * .15}px,0)`; t = 0; }); }, { passive: true }); }

  mostrar('todos'); revelar();
})();