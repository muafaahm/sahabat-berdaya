import './styles.css';

const icons = {
  arrow: '↗',
  heart: '♡',
  check: '✓',
  play: '▶',
  menu: '☰',
  close: '×',
};

type Program = { category: string; title: string; copy: string; amount: string; image: string; accent: string };

const programs: Program[] = [
  { category: 'Pendidikan', title: 'Beasiswa Langkah Pertama', copy: 'Mendampingi anak-anak berprestasi dari keluarga prasejahtera agar terus melangkah.', amount: 'Rp 180 jt', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85', accent: 'lime' },
  { category: 'Ekonomi', title: 'Warung Tumbuh Bersama', copy: 'Modal bergulir dan pendampingan untuk ibu-ibu pelaku usaha mikro di desa.', amount: 'Rp 240 jt', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85', accent: 'yellow' },
  { category: 'Kemanusiaan', title: 'Pangan Hangat Tetangga', copy: 'Menjaga ketahanan pangan keluarga rentan melalui dapur komunitas.', amount: 'Rp 96 jt', image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=900&q=85', accent: 'blue' },
];

const stages = [
  ['01', 'Penghimpunan', 'Target, kanal, dan strategi kampanye kami buka sejak awal.'],
  ['02', 'Penerimaan', 'Setiap donasi menerima bukti dan nomor transaksi.'],
  ['03', 'Pemisahan akad', 'Zakat, infak, sedekah, dan wakaf dicatat terpisah.'],
  ['04', 'Pengelolaan', 'Alokasi jelas dengan hak amil maksimal 12,5%.'],
  ['05', 'Verifikasi penerima', 'Survei dan wawancara memastikan bantuan tepat sasaran.'],
  ['06', 'Perencanaan', 'Jadwal, lokasi, bentuk bantuan, dan PIC ditetapkan.'],
  ['07', 'Penyaluran', 'Bantuan disalurkan bermartabat dan terdokumentasi.'],
  ['08', 'Pelaporan', 'Donatur menerima kabar dana masuk dan tersalurkan.'],
  ['09', 'Pengawasan', 'Bendahara dan pengawas internal memeriksa setiap laporan.'],
  ['10', 'Evaluasi dampak', 'Kami mengukur perubahan dan menyusun langkah berikutnya.'],
];

const renderPrograms = (filter = 'Semua') => programs.filter(p => filter === 'Semua' || p.category === filter).map(p => `
  <article class="program-card">
    <div class="program-image"><img src="${p.image}" alt="${p.title}" /><span class="tag ${p.accent}">${p.category}</span></div>
    <div class="program-body"><h3>${p.title}</h3><p>${p.copy}</p><div class="program-meta"><span><b>${p.amount}</b> tersalurkan</span><a href="#donasi">Ikut berdaya ${icons.arrow}</a></div></div>
  </article>`).join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="simulation"><span>SIMULASI — TUGAS KULIAH</span><span>Website profil lembaga amil · data bersifat contoh</span></div>
  <header class="site-header"><div class="container nav-wrap"><a class="brand" href="#beranda"><span class="brand-mark">SB</span><span>Sahabat<br><i>Berdaya</i></span></a><nav class="desktop-nav"><a class="active" href="#beranda">Beranda</a><a href="#profil">Profil & Pengurus</a><a href="#program">Program 10 Poin</a><a href="#transparansi">Transparansi</a><a href="#kontak">Kontak</a></nav><a class="button small" href="#donasi">Donasi sekarang ${icons.arrow}</a><button class="menu-btn" aria-label="Buka menu">${icons.menu}</button></div></header>
  <main id="beranda">
    <section class="hero"><div class="container hero-grid"><div class="hero-copy"><div class="eyebrow"><span class="dot"></span> Lembaga amil berbasis komunitas</div><h1>Kebaikan yang<br/><em>menumbuhkan.</em></h1><p>Kami percaya, setiap kebaikan punya daya untuk mengubah kehidupan. Mari tumbuhkan harapan, bersama-sama.</p><div class="hero-actions"><a class="button" href="#donasi">Mulai berbagi ${icons.arrow}</a><a class="text-link" href="#tentang"><span class="play">${icons.play}</span> Kenali Sahabat Berdaya</a></div><div class="trust"><div class="avatars"><span>R</span><span>A</span><span>D</span><span>+</span></div><span>Dipercaya oleh <b>1.240+</b> donatur baik</span></div></div><div class="hero-visual"><div class="hero-photo"><img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=90" alt="Relawan Sahabat Berdaya"/><div class="photo-note"><span class="note-icon">${icons.heart}</span><div><b>Kebaikan hari ini</b><small>Selalu punya cerita</small></div></div></div><div class="floating-stat"><b>86%</b><span>dana tersalur<br/>tepat sasaran</span></div><div class="scribble">buat dampak<br/>bersama <span>↘</span></div></div></div></section>
    <section class="impact"><div class="container impact-row"><div class="impact-label"><span class="leaf">✦</span><span>Dampak yang<br/><b>terlihat nyata</b></span></div><div><strong>Rp 1,2<span>M</span></strong><small>total dana terhimpun</small></div><div><strong>3.842</strong><small>penerima manfaat</small></div><div><strong>18</strong><small>program berjalan</small></div><div class="impact-quote">“Kecil bagi kita,<br/><b>berarti bagi mereka.</b>”</div></div></section>
    <section class="section intro" id="profil"><div class="container two-col"><div><div class="eyebrow">02 · PROFIL & PENGURUS</div><h2>Satu niat baik,<br/><em>banyak kehidupan.</em></h2></div><div class="intro-text"><p>Sahabat Berdaya adalah lembaga amil yang lahir dari keyakinan sederhana: kebaikan akan tumbuh lebih jauh ketika dikelola dengan amanah, transparan, dan dekat dengan masyarakat.</p><div class="founder"><div class="founder-photo">MA</div><div><b>Muafa Ahmad</b><small>Pendiri & Ketua Lembaga · NIM 00000000</small></div></div><a class="under-link" href="#transparansi">Kenali cara kami bekerja ${icons.arrow}</a></div></div><div class="container values"><div class="value"><span>01</span><h3>Amanah</h3><p>Menjaga setiap titipan dengan penuh tanggung jawab.</p></div><div class="value"><span>02</span><h3>Terbuka</h3><p>Menyajikan laporan yang mudah dipahami siapa saja.</p></div><div class="value"><span>03</span><h3>Berdaya</h3><p>Menciptakan perubahan yang bertahan, bukan sesaat.</p></div></div></section>
    <section class="section programs-section" id="program"><div class="container"><div class="section-head"><div><div class="eyebrow">03 · PROGRAM (10 POIN)</div><h2>Temukan cara<br/><em>untuk berdaya.</em></h2></div><p>Setiap program dirancang bersama masyarakat, agar bantuan hadir sebagai solusi yang relevan.</p></div><div class="filters"><button class="filter active" data-filter="Semua">Semua</button><button class="filter" data-filter="Pendidikan">Pendidikan</button><button class="filter" data-filter="Ekonomi">Ekonomi</button><button class="filter" data-filter="Kemanusiaan">Kemanusiaan</button></div><div class="program-grid" id="program-grid">${renderPrograms()}</div><div class="center"><a class="under-link" href="#program">Lihat semua program ${icons.arrow}</a></div></div></section>
    <section class="process section"><div class="container"><div class="section-head light"><div><div class="eyebrow">03 · PROGRAM · 10 POIN PROSES</div><h2>Dari niat baik,<br/><em>jadi dampak.</em></h2></div><p>Inilah 10 langkah yang memastikan setiap amanah sampai dan memberi arti.</p></div><div class="stages">${stages.map(([n, t, d]) => `<div class="stage"><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div></div></section>
    <section class="section report" id="transparansi"><div class="container report-grid"><div><div class="eyebrow">05 · LAPORAN & TRANSPARANSI · OKTOBER 2024</div><h2>Kamu berhak tahu<br/><em>ke mana kebaikanmu.</em></h2><p class="report-copy">Karena kepercayaan tumbuh dari keterbukaan. Lihat ringkasan penyaluran dana kami bulan ini.</p><a class="button" href="#transparansi">Baca laporan lengkap ${icons.arrow}</a></div><div class="report-card"><div class="report-top"><span>Total dana terkelola</span><b>Rp 124.850.000</b></div><div class="bar-row"><div><span>Program penerima manfaat</span><b>86%</b></div><div class="bar"><i style="width:86%"></i></div></div><div class="bar-row"><div><span>Operasional & edukasi</span><b>9%</b></div><div class="bar"><i style="width:9%"></i></div></div><div class="bar-row"><div><span>Hak amil</span><b>5%</b></div><div class="bar"><i style="width:5%"></i></div></div><div class="report-foot"><span>Saldo akhir</span><strong>Rp 0</strong><small>Seluruh dana teralokasi</small></div></div></div></section>
    <section class="section gallery" id="galeri"><div class="container"><div class="section-head"><div><div class="eyebrow">06 · GALERI BUKTI</div><h2>Karena setiap angka<br/><em>punya wajah.</em></h2></div><a class="under-link" href="#kontak">Ikuti cerita kami ${icons.arrow}</a></div><div class="gallery-grid"><img class="g1" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85" alt="Anak-anak belajar"/><img class="g2" src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=85" alt="Anak tersenyum"/><img class="g3" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=85" alt="Relawan berdiskusi"/><div class="gallery-caption">“Ketika satu orang<br/><em>tergerak,</em> banyak yang<br/>ikut bergerak.” <span>— Rani, relawan</span></div></div></div></section>
    <section class="donate" id="donasi"><div class="container donate-grid"><div><div class="eyebrow">MARI MULAI HARI INI</div><h2>Kebaikanmu,<br/><em>langkah mereka.</em></h2><p>Tak harus menunggu punya banyak. Karena yang paling berarti adalah niat yang dimulai.</p><div class="mini-proof"><span>${icons.check}</span> Pembayaran aman & transparan</div><div class="mini-proof"><span>${icons.check}</span> Laporan penyaluran berkala</div></div><div class="donate-box"><h3>Pilih nominal kebaikanmu</h3><div class="amounts"><button data-amount="25000">Rp 25rb</button><button class="selected" data-amount="50000">Rp 50rb</button><button data-amount="100000">Rp 100rb</button><button data-amount="0">Lainnya</button></div><div class="custom-amount"><span>Rp</span><input id="amount-input" type="number" value="50000" aria-label="Nominal donasi" /></div><button class="button full" id="donate-btn">Lanjutkan donasi ${icons.arrow}</button><small>Ini adalah simulasi. Tidak ada transaksi sungguhan.</small></div></div></section>
    <section class="contact section" id="kontak"><div class="container contact-inner"><div><div class="eyebrow">PUNYA PERTANYAAN?</div><h2>Mari ngobrol<br/><em>tentang kebaikan.</em></h2></div><div class="contact-info"><p>Kami senang mendengar cerita, ide, dan niat baikmu.</p><a href="mailto:halo@sahabatberdaya.id">halo@sahabatberdaya.id ${icons.arrow}</a><a href="https://wa.me/6281234567890">+62 812 3456 7890 ${icons.arrow}</a></div></div></section>
  </main>
  <footer><div class="container footer-top"><a class="brand" href="#beranda"><span class="brand-mark">SB</span><span>Sahabat<br/><i>Berdaya</i></span></a><p>Lembaga amil yang percaya<br/>pada daya sebuah kebaikan.</p><div class="socials"><a href="#">ig</a><a href="#">in</a><a href="#">wa</a></div></div><div class="container footer-bottom"><span>© 2024 Sahabat Berdaya. Semua kebaikan dijaga.</span><span>AI disclosure: teks dibantu ChatGPT, kode dibantu Claude.</span></div></footer>
  <div class="toast" id="toast">Terima kasih, niat baikmu sudah dicatat ♡</div>
`;

document.querySelector<HTMLElement>('#donasi .eyebrow')!.textContent = '04 · DONASI / KAMPANYE';
document.querySelector<HTMLElement>('#kontak .eyebrow')!.textContent = '07 · KONTAK';

document.querySelectorAll<HTMLButtonElement>('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  document.querySelector<HTMLDivElement>('#program-grid')!.innerHTML = renderPrograms(button.dataset.filter ?? 'Semua');
}));

document.querySelectorAll<HTMLButtonElement>('.amounts button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.amounts button').forEach(b => b.classList.remove('selected'));
  button.classList.add('selected');
  const input = document.querySelector<HTMLInputElement>('#amount-input')!;
  input.value = button.dataset.amount === '0' ? '' : button.dataset.amount ?? '50000';
  if (button.dataset.amount === '0') input.focus();
}));

document.querySelector<HTMLButtonElement>('#donate-btn')!.addEventListener('click', () => {
  const toast = document.querySelector<HTMLDivElement>('#toast')!;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
});

const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn')!;
menuBtn.addEventListener('click', () => document.querySelector('.desktop-nav')?.classList.toggle('open'));
document.querySelectorAll('.desktop-nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.desktop-nav')?.classList.remove('open')));
