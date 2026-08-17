let data = loadSiteData();

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function val(id) {
  const el = $(id);
  return el ? el.value : "";
}


// =========================
// FORM DOLDUR
// =========================

function fill() {

  if ($("#f-name")) {
    $("#f-name").value = data.name || "";
  }

  if ($("#f-experience")) {
    $("#f-experience").value = data.experience || "";
  }

  if ($("#f-heroTitle")) {
    $("#f-heroTitle").value = data.heroTitle?.az || "";
  }

  if ($("#f-heroText")) {
    $("#f-heroText").value = data.heroText?.az || "";
  }

  if ($("#f-whatsapp")) {
    $("#f-whatsapp").value = data.whatsapp || "";
  }

  if ($("#f-instagram")) {
    $("#f-instagram").value = data.instagram || "";
  }

  if ($("#f-facebook")) {
    $("#f-facebook").value = data.facebook || "";
  }

  if ($("#f-youtube")) {
    $("#f-youtube").value = data.youtube || "";
  }

  if ($("#f-tiktok")) {
    $("#f-tiktok").value = data.tiktok || "";
  }


  // PROFİL ŞƏKLİ
  if ($("#previewImage")) {
    $("#previewImage").src =
      data.heroImage ||
      "assets/images/psychologist.svg";
  }


  // HAQQIMDA ŞƏKLİ
  if ($("#aboutPreviewImage")) {
    $("#aboutPreviewImage").src =
      data.aboutImage ||
      "assets/images/psychologist.svg";
  }


  renderEditors();
}


// =========================
// EDITORLƏR
// =========================

function renderEditors() {

  // XİDMƏTLƏR
  if ($("#serviceEditor")) {

    $("#serviceEditor").innerHTML =
      (data.services || []).map((x, i) => `

        <div class="editor-card">

          <div class="grid">

            <label>
              İkon
              <input
                data-s="${i}"
                data-k="icon"
                value="${x.icon || ""}"
              >
            </label>

            <label>
              AZ başlıq
              <input
                data-s="${i}"
                data-k="title.az"
                value="${x.title?.az || ""}"
              >
            </label>

            <label>
              EN başlıq
              <input
                data-s="${i}"
                data-k="title.en"
                value="${x.title?.en || ""}"
              >
            </label>

            <label>
              RU başlıq
              <input
                data-s="${i}"
                data-k="title.ru"
                value="${x.title?.ru || ""}"
              >
            </label>

            <label>
              AZ mətn
              <textarea
                data-s="${i}"
                data-k="text.az"
              >${x.text?.az || ""}</textarea>
            </label>

            <label>
              EN mətn
              <textarea
                data-s="${i}"
                data-k="text.en"
              >${x.text?.en || ""}</textarea>
            </label>

            <label>
              RU mətn
              <textarea
                data-s="${i}"
                data-k="text.ru"
              >${x.text?.ru || ""}</textarea>
            </label>

          </div>

          <button
            class="remove-btn"
            onclick="removeItem('services', ${i})"
            type="button"
          >
            Sil
          </button>

        </div>

      `).join("");
  }


  // MƏQALƏLƏR
  if ($("#articleEditor")) {

    $("#articleEditor").innerHTML =
      (data.articles || []).map((x, i) => `

        <div class="editor-card">

          <div class="grid">

            <label>
              Şəkil URL
              <input
                data-a="${i}"
                data-k="image"
                value="${x.image || ""}"
              >
            </label>

            <label>
              AZ başlıq
              <input
                data-a="${i}"
                data-k="title.az"
                value="${x.title?.az || ""}"
              >
            </label>

            <label>
              EN başlıq
              <input
                data-a="${i}"
                data-k="title.en"
                value="${x.title?.en || ""}"
              >
            </label>

            <label>
              RU başlıq
              <input
                data-a="${i}"
                data-k="title.ru"
                value="${x.title?.ru || ""}"
              >
            </label>

            <label>
              AZ mətn
              <textarea
                data-a="${i}"
                data-k="text.az"
              >${x.text?.az || ""}</textarea>
            </label>

            <label>
              EN mətn
              <textarea
                data-a="${i}"
                data-k="text.en"
              >${x.text?.en || ""}</textarea>
            </label>

            <label>
              RU mətn
              <textarea
                data-a="${i}"
                data-k="text.ru"
              >${x.text?.ru || ""}</textarea>
            </label>

          </div>

          <button
            class="remove-btn"
            onclick="removeItem('articles', ${i})"
            type="button"
          >
            Sil
          </button>

        </div>

      `).join("");
  }


  // FAQ
  if ($("#faqEditor")) {

    $("#faqEditor").innerHTML =
      (data.faq || []).map((x, i) => `

        <div class="editor-card">

          <div class="grid">

            <label>
              AZ sual
              <input
                data-f="${i}"
                data-k="q.az"
                value="${x.q?.az || ""}"
              >
            </label>

            <label>
              EN sual
              <input
                data-f="${i}"
                data-k="q.en"
                value="${x.q?.en || ""}"
              >
            </label>

            <label>
              RU sual
              <input
                data-f="${i}"
                data-k="q.ru"
                value="${x.q?.ru || ""}"
              >
            </label>

            <label>
              AZ cavab
              <textarea
                data-f="${i}"
                data-k="a.az"
              >${x.a?.az || ""}</textarea>
            </label>

            <label>
              EN cavab
              <textarea
                data-f="${i}"
                data-k="a.en"
              >${x.a?.en || ""}</textarea>
            </label>

            <label>
              RU cavab
              <textarea
                data-f="${i}"
                data-k="a.ru"
              >${x.a?.ru || ""}</textarea>
            </label>

          </div>

          <button
            class="remove-btn"
            onclick="removeItem('faq', ${i})"
            type="button"
          >
            Sil
          </button>

        </div>

      `).join("");
  }
}


// =========================
// OBYEKT YOLU
// =========================

function setPath(obj, path, value) {

  const p = path.split(".");

  let o = obj;

  for (let i = 0; i < p.length - 1; i++) {

    if (!o[p[i]]) {
      o[p[i]] = {};
    }

    o = o[p[i]];
  }

  o[p[p.length - 1]] = value;
}


// =========================
// MƏLUMATLARI TOPLA
// =========================

function collect() {

  data.name = val("#f-name");

  data.experience = val("#f-experience");

  if (data.heroTitle) {
    data.heroTitle.az = val("#f-heroTitle");
  }

  if (data.heroText) {
    data.heroText.az = val("#f-heroText");
  }

  data.whatsapp = val("#f-whatsapp");

  data.instagram = val("#f-instagram");

  data.facebook = val("#f-facebook");

  data.youtube = val("#f-youtube");

  data.tiktok = val("#f-tiktok");


  // XİDMƏTLƏR
  $$("[data-s]").forEach(e => {

    const index = e.dataset.s;

    if (data.services[index]) {

      setPath(
        data.services[index],
        e.dataset.k,
        e.value
      );

    }

  });


  // MƏQALƏLƏR
  $$("[data-a]").forEach(e => {

    const index = e.dataset.a;

    if (data.articles[index]) {

      setPath(
        data.articles[index],
        e.dataset.k,
        e.value
      );

    }

  });


  // FAQ
  $$("[data-f]").forEach(e => {

    const index = e.dataset.f;

    if (data.faq[index]) {

      setPath(
        data.faq[index],
        e.dataset.k,
        e.value
      );

    }

  });


  // =========================
  // VACİB:
  // HAQQIMDA ŞƏKLİ
  // data.aboutImage ARTİQ
  // collect zamanı silinmir.
  // =========================


  saveSiteData(data);

  showSaved();
}


// =========================
// SAXLANILDI MESAJI
// =========================

function showSaved() {

  if (!$("#saveMessage")) return;

  $("#saveMessage").classList.add("show");

  setTimeout(() => {

    $("#saveMessage").classList.remove("show");

  }, 1800);
}


// =========================
// ADMIN TABLAR
// =========================

$$(".side-tab").forEach(button => {

  button.onclick = () => {

    $$(".side-tab").forEach(x =>
      x.classList.remove("active")
    );

    $$(".admin-tab").forEach(x =>
      x.classList.remove("active")
    );

    button.classList.add("active");

    const tab = $("#tab-" + button.dataset.tab);

    if (tab) {
      tab.classList.add("active");
    }

  };

});


// =========================
// SAVE BUTTON
// =========================

if ($("#saveBtn")) {

  $("#saveBtn").onclick = collect;

}


// =========================
// YENİ XİDMƏT
// =========================

if ($("#addService")) {

  $("#addService").onclick = () => {

    data.services.push({

      icon: "✦",

      title: {
        az: "Yeni xidmət",
        en: "New service",
        ru: "Новая услуга"
      },

      text: {
        az: "Məlumat əlavə edin.",
        en: "Add information.",
        ru: "Добавьте информацию."
      }

    });

    renderEditors();

  };

}


// =========================
// YENİ MƏQALƏ
// =========================

if ($("#addArticle")) {

  $("#addArticle").onclick = () => {

    data.articles.push({

      image: "assets/images/article.svg",

      title: {
        az: "Yeni məqalə",
        en: "New article",
        ru: "Новая статья"
      },

      text: {
        az: "Məqalə mətni.",
        en: "Article text.",
        ru: "Текст статьи."
      }

    });

    renderEditors();

  };

}


// =========================
// YENİ FAQ
// =========================

if ($("#addFaq")) {

  $("#addFaq").onclick = () => {

    data.faq.push({

      q: {
        az: "Yeni sual?",
        en: "New question?",
        ru: "Новый вопрос?"
      },

      a: {
        az: "Cavab.",
        en: "Answer.",
        ru: "Ответ."
      }

    });

    renderEditors();

  };

}


// =========================
// SİL
// =========================

function removeItem(type, i) {

  data[type].splice(i, 1);

  renderEditors();

}


// =========================
// RESET
// =========================

if ($("#resetBtn")) {

  $("#resetBtn").onclick = () => {

    if (
      confirm(
        "Bütün demo məlumatları sıfırlansın?"
      )
    ) {

      localStorage.removeItem(
        "psychologistSiteData"
      );

      location.reload();

    }

  };

}


// =========================
// PROFİL ŞƏKLİ
// =========================

if ($("#f-heroImage")) {

  $("#f-heroImage").onchange = e => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      data.heroImage = reader.result;

      if ($("#previewImage")) {
        $("#previewImage").src =
          reader.result;
      }

    };

    reader.readAsDataURL(file);

  };

}


// =========================
// HAQQIMDA ŞƏKLİ
// =========================

if ($("#f-aboutImage")) {

  $("#f-aboutImage").onchange = e => {

    const file = e.target.files[0];

    if (!file) return;


    const reader = new FileReader();


    reader.onload = () => {

      // ƏSAS MƏLUMAT BURADA SAXLANIR
      data.aboutImage = reader.result;


      // ADMIN ÖNİZLƏMƏ
      if ($("#aboutPreviewImage")) {

        $("#aboutPreviewImage").src =
          reader.result;

      }

    };


    reader.readAsDataURL(file);

  };

}


// =========================
// ADMIN DARK / LIGHT MODE
// =========================

const adminThemeBtn =
  document.getElementById("adminThemeBtn");


function setAdminTheme(theme) {

  if (!adminThemeBtn) return;


  if (theme === "dark") {

    document.body.classList.add(
      "admin-dark"
    );

    adminThemeBtn.textContent = "☀️";

    adminThemeBtn.title =
      "Gündüz rejimi";

    localStorage.setItem(
      "adminTheme",
      "dark"
    );

  } else {

    document.body.classList.remove(
      "admin-dark"
    );

    adminThemeBtn.textContent = "🌙";

    adminThemeBtn.title =
      "Gecə rejimi";

    localStorage.setItem(
      "adminTheme",
      "light"
    );

  }

}


const savedAdminTheme =
  localStorage.getItem("adminTheme") ||
  "light";


setAdminTheme(savedAdminTheme);


if (adminThemeBtn) {

  adminThemeBtn.addEventListener(
    "click",
    function () {

      const isDark =
        document.body.classList.contains(
          "admin-dark"
        );

      setAdminTheme(
        isDark ? "light" : "dark"
      );

    }
  );

}


// =========================
// BAŞLAT
// =========================

fill();
