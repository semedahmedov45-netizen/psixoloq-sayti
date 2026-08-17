let data=loadSiteData();const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
function val(id){return $(id).value}
function fill(){
$("#f-name").value=data.name;
$("#f-experience").value=data.experience;
$("#f-heroTitle").value=data.heroTitle.az;
$("#f-heroText").value=data.heroText.az;
$("#f-aboutTitle").value=data.aboutTitle.az;
$("#f-aboutText").value=data.aboutText.az;
$("#f-education").value=data.education;
$("#f-qualification").value=data.qualification;
$("#f-sessionMode").value=data.sessionMode;
$("#f-whatsapp").value=data.whatsapp;
$("#f-instagram").value=data.instagram;
$("#f-facebook").value=data.facebook;
$("#f-youtube").value=data.youtube;
$("#f-tiktok").value=data.tiktok;

$("#previewImage").src=data.heroImage;

if ($("#aboutPreviewImage")) {
  $("#aboutPreviewImage").src =
    data.aboutImage || "assets/images/psychologist.svg";
}

renderEditors()}
function renderEditors(){
$("#serviceEditor").innerHTML=data.services.map((x,i)=>`<div class="editor-card"><div class="grid"><label>İkon<input data-s="${i}" data-k="icon" value="${x.icon}"></label><label>AZ başlıq<input data-s="${i}" data-k="title.az" value="${x.title.az}"></label><label>EN başlıq<input data-s="${i}" data-k="title.en" value="${x.title.en}"></label><label>RU başlıq<input data-s="${i}" data-k="title.ru" value="${x.title.ru}"></label><label>AZ mətn<textarea data-s="${i}" data-k="text.az">${x.text.az}</textarea></label><label>EN mətn<textarea data-s="${i}" data-k="text.en">${x.text.en}</textarea></label><label>RU mətn<textarea data-s="${i}" data-k="text.ru">${x.text.ru}</textarea></label></div><button class="remove-btn" onclick="removeItem('services',${i})">Sil</button></div>`).join("");
$("#articleEditor").innerHTML=data.articles.map((x,i)=>`<div class="editor-card"><div class="grid"><label>Şəkil URL<input data-a="${i}" data-k="image" value="${x.image}"></label><label>AZ başlıq<input data-a="${i}" data-k="title.az" value="${x.title.az}"></label><label>EN başlıq<input data-a="${i}" data-k="title.en" value="${x.title.en}"></label><label>RU başlıq<input data-a="${i}" data-k="title.ru" value="${x.title.ru}"></label><label>AZ mətn<textarea data-a="${i}" data-k="text.az">${x.text.az}</textarea></label><label>EN mətn<textarea data-a="${i}" data-k="text.en">${x.text.en}</textarea></label><label>RU mətn<textarea data-a="${i}" data-k="text.ru">${x.text.ru}</textarea></label></div><button class="remove-btn" onclick="removeItem('articles',${i})">Sil</button></div>`).join("");
$("#faqEditor").innerHTML=data.faq.map((x,i)=>`<div class="editor-card"><div class="grid"><label>AZ sual<input data-f="${i}" data-k="q.az" value="${x.q.az}"></label><label>EN sual<input data-f="${i}" data-k="q.en" value="${x.q.en}"></label><label>RU sual<input data-f="${i}" data-k="q.ru" value="${x.q.ru}"></label><label>AZ cavab<textarea data-f="${i}" data-k="a.az">${x.a.az}</textarea></label><label>EN cavab<textarea data-f="${i}" data-k="a.en">${x.a.en}</textarea></label><label>RU cavab<textarea data-f="${i}" data-k="a.ru">${x.a.ru}</textarea></label></div><button class="remove-btn" onclick="removeItem('faq',${i})">Sil</button></div>`).join("");
}
function setPath(obj,path,value){const p=path.split(".");let o=obj;for(let i=0;i<p.length-1;i++)o=o[p[i]];o[p[p.length-1]]=value}
function collect(){
data.name=val("#f-name");data.experience=val("#f-experience");data.heroTitle.az=val("#f-heroTitle");data.heroText.az=val("#f-heroText");data.aboutTitle.az=val("#f-aboutTitle");data.aboutText.az=val("#f-aboutText");data.education=val("#f-education");data.qualification=val("#f-qualification");data.sessionMode=val("#f-sessionMode");data.whatsapp=val("#f-whatsapp");data.instagram=val("#f-instagram");data.facebook=val("#f-facebook");data.youtube=val("#f-youtube");data.tiktok=val("#f-tiktok");
$$("[data-s]").forEach(e=>setPath(data.services[e.dataset.s],e.dataset.k,e.value));$$("[data-a]").forEach(e=>setPath(data.articles[e.dataset.a],e.dataset.k,e.value));$$("[data-f]").forEach(e=>setPath(data.faq[e.dataset.f],e.dataset.k,e.value));
saveSiteData(data);showSaved()}
function showSaved(){$("#saveMessage").classList.add("show");setTimeout(()=>$("#saveMessage").classList.remove("show"),1800)}
$$(".side-tab").forEach(b=>b.onclick=()=>{$$(".side-tab").forEach(x=>x.classList.remove("active"));$$(".admin-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("#tab-"+b.dataset.tab).classList.add("active")});
$("#saveBtn").onclick=collect;
$("#addService").onclick=()=>{data.services.push({icon:"✦",title:{az:"Yeni xidmət",en:"New service",ru:"Новая услуга"},text:{az:"Məlumat əlavə edin.",en:"Add information.",ru:"Добавьте информацию."}});renderEditors()};
$("#addArticle").onclick=()=>{data.articles.push({image:"assets/images/article.svg",title:{az:"Yeni məqalə",en:"New article",ru:"Новая статья"},text:{az:"Məqalə mətni.",en:"Article text.",ru:"Текст статьи."}});renderEditors()};
$("#addFaq").onclick=()=>{data.faq.push({q:{az:"Yeni sual?",en:"New question?",ru:"Новый вопрос?"},a:{az:"Cavab.",en:"Answer.",ru:"Ответ."}});renderEditors()};
function removeItem(type,i){data[type].splice(i,1);renderEditors()}
$("#resetBtn").onclick=()=>{if(confirm("Bütün demo məlumatları sıfırlansın?")){localStorage.removeItem("psychologistSiteData");location.reload()}}
$("#f-heroImage").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{data.heroImage=r.result;$("#previewImage").src=r.result};r.readAsDataURL(f)}
$("#f-aboutImage").onchange = e => {
  const f = e.target.files[0];

  if (!f) return;

  const r = new FileReader();

  r.onload = () => {
    data.aboutImage = r.result;

    const preview = $("#aboutPreviewImage");

    if (preview) {
      preview.src = r.result;
    }
  };

  r.readAsDataURL(f);
};
// =========================
// ADMIN DARK / LIGHT MODE
// =========================

const adminThemeBtn = document.getElementById("adminThemeBtn");

function setAdminTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("admin-dark");
    adminThemeBtn.textContent = "☀️";
    adminThemeBtn.title = "Gündüz rejimi";
    localStorage.setItem("adminTheme", "dark");
  } else {
    document.body.classList.remove("admin-dark");
    adminThemeBtn.textContent = "🌙";
    adminThemeBtn.title = "Gecə rejimi";
    localStorage.setItem("adminTheme", "light");
  }
}

const savedAdminTheme = localStorage.getItem("adminTheme") || "light";
setAdminTheme(savedAdminTheme);

adminThemeBtn.addEventListener("click", function () {
  const isDark = document.body.classList.contains("admin-dark");

  setAdminTheme(isDark ? "light" : "dark");
});
fill();
