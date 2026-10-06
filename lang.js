(function () {
  var KEY = "kick-notifier-lang";
  var i18n = {
    tr: {
      "nav.home": "Anasayfa",
      "nav.docs": "Kurulum",
      "intro.badge": "v1.2 · firefox · chrome · edge · brave",
      "intro.h1": "Takip ettiğin Kick yayıncılarını hiç kaçırma.",
      "intro.lead":
        "Favori yayıncıların canlı olup olmadığını, izleyici sayılarını ve profil bilgilerini tek bakışta gösteren açık kaynaklı tarayıcı eklentisi. Gereksiz hiçbir şey yok.",
      "intro.dl.firefox": "Firefox için indir",
      "intro.dl.chromium": "Chromium için indir",
      "intro.pill.light": "⚡ Ultra Hafif",
      "intro.pill.privacy": "🛡️ Sıfır İzleyici & Reklamsız",
      "intro.pill.opensource": "✨ %100 Açık Kaynak",
      "mockup.live_count": "2 CANLI",
      "mockup.search": "Yayıncı ara veya ekle...",
      "mockup.live": "● CANLI",
      "mockup.viewers": "izleyici",
      "mockup.cat1": "Sohbet & Muhabbet",
      "mockup.cat2": "Grand Theft Auto V",
      "mockup.offline": "Çevrimdışı",
      "mockup.ago": "2s önce yayındaydı",
      "docs.h1": "Tarayıcına uygun şekilde indirip yükle.",
      "docs.lead":
        "Firefox için AMO üzerinden tek tıkla, Chromium tabanlı tarayıcılar için zip arşivini GitHub Releases bölümünden indirip kurabilirsin.",
      "docs.firefox": "Firefox — AMO'dan kurulum",
      "docs.ff.desc": "Eklentiyi doğrudan resmi Firefox Eklenti Mağazası'ndan (AMO) güvenle kur.",
      "docs.ff.btn": "Firefox AMO'dan İndir",
      "docs.chromium": "Chromium (Chrome, Edge, Brave) — geliştirici moduyla kurulum",
      "docs.c1": "GitHub releases sayfasından son sürüm .zip dosyasını indir ve bir klasöre çıkart.",
      "docs.c2_prefix": "Tarayıcının adres çubuğuna şunu yazıp Enter'a bas:",
      "docs.c3": "Sağ üst köşedeki <strong>Geliştirici modu</strong> (Developer mode) anahtarını aç.",
      "docs.c4": "Sol üstteki <strong>Paketlenmemiş öğe yükle</strong> (Load unpacked) butonuna tıkla.",
      "docs.c5": "Çıkarttığın <strong>kick-takipci-chromium</strong> klasörünü seç.",
      "docs.copy": "Kopyala",
      "docs.copied": "Kopyalandı!",
      "docs.chr": "Chromium releases sayfası",
      "docs.note":
        "💡 Firefox için AMO sayfasını, Chromium için GitHub Releases bölümünü kullan; böylece eklentinin güncel sürümünü her zaman güvenli şekilde almış olursun.",
      "privacy.badge": "🛡️ %100 Gizlilik Odaklı & Yerel Depolama",
      "privacy.h1": "Gizlilik Politikası",
      "privacy.lead":
        "Kick Notifier gizliliğinize en üst düzeyde önem verir. Bu sayfa, eklentinin hangi verileri kullandığını ve nasıl korunduğunu açıklar.",
      "privacy.collection.title": "Veri Toplama ve Kullanım",
      "privacy.collection.p1":
        "Kick Notifier, takip ettiğiniz yayıncıların canlı yayın durumunu ve izleyici sayılarını çekmek için doğrudan resmi Kick API'sine istek gönderir. Bu istekler yalnızca eklenti penceresi açıkken gerçekleşir.",
      "privacy.collection.p2":
        "Eklenti hiçbir kişisel veri, kimlik bilgisi, tarama geçmişi veya kullanım istatistiği toplamaz ve kaydetmez.",
      "privacy.storage.title": "Veri Saklama (Yerel Depolama)",
      "privacy.storage.p1":
        "Takip listeniz ve dil seçiminiz yalnızca tarayıcınızın kendi yerel depolama alanında (localStorage) saklanır. Bu veriler cihazınızdan asla dışarı çıkmaz ve üçüncü kişilerle paylaşılmaz.",
      "privacy.thirdparty.title": "Üçüncü Taraf Hizmetleri",
      "privacy.thirdparty.p1":
        "Eklenti, Kick API haricinde hiçbir sunucuya veya üçüncü taraf servise bağlanmaz. Reklam, analitik, telemetri veya izleme aracı içermez.",
      "privacy.contact.title": "İletişim & Katkı",
      "privacy.contact.p1":
        'Her türlü soru, öneri veya hata bildirimi için <a class="link-accent" href="https://github.com/akamusti/kick-notifier/issues" target="_blank" rel="noreferrer">GitHub Issues</a> üzerinden iletişime geçebilir veya <a class="link-accent" href="https://akamusti.github.io/" target="_blank" rel="noreferrer">akamusti.github.io</a> adresini ziyaret edebilirsiniz.',
      "privacy.lastupdated": "Son güncelleme: 2026",
      "footer.copy": "© 2026 akamusti",
      "footer.home": "kurulum rehberi",
      "footer.home.index": "anasayfa",
      "footer.privacy": "gizlilik politikası"
    },
    en: {
      "nav.home": "Home",
      "nav.docs": "Setup",
      "intro.badge": "v1.2 · firefox · chrome · edge · brave",
      "intro.h1": "Never miss the Kick streamers you follow.",
      "intro.lead":
        "An open-source browser extension that displays streamer live status, viewer counts, and profiles at a single glance. Zero bloat.",
      "intro.dl.firefox": "Download for Firefox",
      "intro.dl.chromium": "Download for Chromium",
      "intro.pill.light": "⚡ Ultra Lightweight",
      "intro.pill.privacy": "🛡️ Zero Tracking & No Ads",
      "intro.pill.opensource": "✨ 100% Open Source",
      "mockup.live_count": "2 LIVE",
      "mockup.search": "Search or add streamer...",
      "mockup.live": "● LIVE",
      "mockup.viewers": "viewers",
      "mockup.cat1": "Just Chatting",
      "mockup.cat2": "Grand Theft Auto V",
      "mockup.offline": "Offline",
      "mockup.ago": "Streamed 2h ago",
      "docs.h1": "Download and install for your browser.",
      "docs.lead":
        "Install with one click from AMO for Firefox, or download the zip archive from GitHub Releases for Chromium-based browsers.",
      "docs.firefox": "Firefox — Install from AMO",
      "docs.ff.desc": "Install the extension safely and directly from the official Firefox Add-ons store (AMO).",
      "docs.ff.btn": "Download from Firefox AMO",
      "docs.chromium": "Chromium (Chrome, Edge, Brave) — Install via developer mode",
      "docs.c1": "Download the latest release .zip from GitHub releases and extract it to a folder.",
      "docs.c2_prefix": "Enter the following in your browser's address bar and press Enter:",
      "docs.c3": "Enable the <strong>Developer mode</strong> toggle in the top-right corner.",
      "docs.c4": "Click the <strong>Load unpacked</strong> button in the top menu.",
      "docs.c5": "Select the extracted <strong>kick-takipci-chromium</strong> folder.",
      "docs.copy": "Copy",
      "docs.copied": "Copied!",
      "docs.chr": "Chromium releases page",
      "docs.note":
        "💡 Use AMO for Firefox and GitHub Releases for Chromium to ensure you always get the latest and safest release.",
      "privacy.badge": "🛡️ 100% Privacy Focused & Local Storage",
      "privacy.h1": "Privacy Policy",
      "privacy.lead":
        "Kick Notifier takes your privacy very seriously. This page explains what data is accessed and how it is protected.",
      "privacy.collection.title": "Data Collection & Usage",
      "privacy.collection.p1":
        "Kick Notifier queries the official Kick API to fetch live status and viewer numbers for streamers you follow. These requests only run when the extension popup is open.",
      "privacy.collection.p2":
        "The extension does not collect, record, or track any personal data, telemetry, identity, or browsing history.",
      "privacy.storage.title": "Data Storage (Local Storage)",
      "privacy.storage.p1":
        "Your follow list and language preferences are stored strictly in your browser's local storage (localStorage). This data never leaves your device.",
      "privacy.thirdparty.title": "Third-Party Services",
      "privacy.thirdparty.p1":
        "The extension does not communicate with any server other than the Kick API. No ads, trackers, analytics, or third parties are involved.",
      "privacy.contact.title": "Contact & Contributing",
      "privacy.contact.p1":
        'For questions, feedback or issues, feel free to open a ticket on <a class="link-accent" href="https://github.com/akamusti/kick-notifier/issues" target="_blank" rel="noreferrer">GitHub Issues</a> or visit <a class="link-accent" href="https://akamusti.github.io/" target="_blank" rel="noreferrer">akamusti.github.io</a>.',
      "privacy.lastupdated": "Last updated: 2026",
      "footer.copy": "© 2026 akamusti",
      "footer.home": "setup guide",
      "footer.home.index": "home",
      "footer.privacy": "privacy policy"
    }
  };

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {}
  var lang = saved === "en" ? "en" : "tr";

  function apply() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key] != null) {
        nodes[i].innerHTML = i18n[lang][key];
      }
    }
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.innerHTML =
        '<span class="' + (lang === "tr" ? "on" : "") + '">TR</span><i>/</i><span class="' + (lang === "en" ? "on" : "") + '">EN</span>';
    }
    document.documentElement.lang = lang;
  }

  function toggle() {
    lang = lang === "tr" ? "en" : "tr";
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    apply();
  }

  function setupCopyButtons() {
    var copyButtons = document.querySelectorAll("[data-copy]");
    copyButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var text = button.getAttribute("data-copy");
        if (!text) return;
        navigator.clipboard.writeText(text).then(function () {
          var copyTextSpan = button.querySelector(".copy-text");
          if (copyTextSpan) {
            var orig = copyTextSpan.innerHTML;
            copyTextSpan.innerHTML = i18n[lang]["docs.copied"] || "Copied!";
            setTimeout(function () {
              copyTextSpan.innerHTML = orig;
            }, 2000);
          }
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggle);
    apply();
    setupCopyButtons();
  });
})();
