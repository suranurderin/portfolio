document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  // Hamburger menüye tıklanınca aç/kapat
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Her bir menü bağlantısına tıklanınca menüyü kapat
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
});

let isTurkish = true;

function switchLanguage() {
  if (isTurkish) {
    // NAVBAR ENGLISH
    document.getElementById("nav-hakkimda").innerText = "About Me";
    document.getElementById("nav-yeteneklerim").innerText = "Skills";
    document.getElementById("nav-egitimlerim").innerText = "Education";
    document.getElementById("nav-deneyimim").innerText = "Experience";
    document.getElementById("nav-projelerim").innerText = "Projects";
    document.getElementById("nav-sertifikalarim").innerText = "Certificates";
    document.getElementById("nav-iletisim").innerText = "Contact";
    document.getElementById("language-btn").innerText = "Switch to Turkish";

    // ABOUT ENGLISH
    document.getElementById("about-title").innerText = "About Me";
    document.getElementById("about-p1").innerText =
      "I completed my undergraduate education in Management Information Systems at Bilecik Şeyh Edebali University. I am currently pursuing my master's degree at Sakarya University.";
    document.getElementById("about-p2").innerText = 
  "In the 2024 Teknofest Technology for the Benefit of Humanity Competition, in the Disaster Management category, I achieved significant success by reaching the finals as the team leader and idea originator of the Teknokod team. During my university years, I took part in the management teams of the Industry 4.0 and Cyber Security Clubs, which helped me improve my skills in teamwork and leadership.";
    document.getElementById("about-p3").innerText = 
  "In the summer of 2023, I completed a voluntary internship at Ahenk Software, gaining hands-on experience in object-oriented software development using C# and MSSQL. During this time, I also gave private lessons to share knowledge.";
    document.getElementById("about-p4").innerText = 
  "With the skills I acquired in R and Python programming languages, I developed various projects in areas such as web scraping, data mining, text mining, and emoji analysis. I aim to further advance my knowledge and experience in technology and software through innovative projects.";
    document.getElementById("about-p5").innerText = 
  "With a continuous learning mindset, I aspire to take active roles in projects that benefit humanity and contribute value to the technology sector.";

  // SKILLS ENGLISH
  document.getElementById("skills-title").innerText = "My Skills";

    document.getElementById("level-python").innerText = "Advanced";
    document.getElementById("level-excel").innerText = "Advanced";
    document.getElementById("level-html").innerText = "Advanced";
    document.getElementById("level-css").innerText = "Advanced";
    document.getElementById("level-js").innerText = "Intermediate-Advanced";
    document.getElementById("level-unity").innerText = "Intermediate-Advanced";
    document.getElementById("level-csharp").innerText = "Intermediate-Advanced";
    document.getElementById("level-r").innerText = "Intermediate";
    document.getElementById("level-sql").innerText = "Intermediate";
    document.getElementById("level-english").innerText = "Intermediate";
    document.getElementById("level-spss").innerText = "Beginner";
    document.getElementById("level-tableau").innerText = "Beginner";
    
    document.getElementById("skill-english").innerText = "English";
    document.getElementById("skill-r").innerText = "R Programming"
    // EDUCATION ENGLISH 
    document.getElementById("education-title").innerText = "Education";

    document.getElementById("uni1-name").innerText = "🎓 Bilecik Şeyh Edebali University";
    document.getElementById("uni1-date").innerText = "2020 - 2024";
    document.getElementById("uni1-department").innerText = "Management Information Systems (Bachelor's)";

    document.getElementById("uni2-name").innerText = "🎓 Sakarya University";
    document.getElementById("uni2-date").innerText = "2025 - Ongoing";
    document.getElementById("uni2-department").innerText = "Management Information Systems (Master's)";

    //EXPERIENCE ENGLISH
    document.getElementById("experience-title").innerText = "Experience";
    document.getElementById("exp1-role").innerText = "Team Leader | Idea Creator";
    document.getElementById("exp2-role").innerText = "Software Instructor";
    document.getElementById("exp3-role").innerText = "Assistant Software Support Specialist";
    document.getElementById("exp4-role").innerText = "Software Intern";

    document.querySelector(".experience-card:nth-child(1) h3").innerText = "ANKA DIRILIS PROJECT";
    document.querySelector(".experience-card:nth-child(2) h3").innerText = "PRIVATE SOFTWARE LESSON";
    document.querySelector(".experience-card:nth-child(3) h3").innerText = "ALUSOFT SOFTWARE COMPANY";
    document.querySelector(".experience-card:nth-child(4) h3").innerText = "AHENK SOFTWARE COMPANY";


    // PROJECT ENGLISH
    document.getElementById("projects-title").innerText = "Projects";

    document.getElementById("project1-title").innerText = "Anka Resurrection Project";
    document.getElementById("project1-desc").innerText = "A social media project focused on social awareness.";

    document.getElementById("project7-title").innerText = "Data Analysis with SPSS";
    document.getElementById("project7-desc").innerText = "Data analysis project on Likert dataset.";

    document.getElementById("project8-title").innerText = "Digital Maturity Analysis";
    document.getElementById("project8-desc").innerText = "Digital maturity analysis project on a company.";

    document.getElementById("project2-title").innerText = "Text Mining";
    document.getElementById("project2-desc").innerText = "Text mining and natural language processing project.";

    document.getElementById("project3-title").innerText = "Snake Game";
    document.getElementById("project3-desc").innerText = "Classic snake game developed with Python.";

    document.getElementById("project4-title").innerText = "Web Scraping";
    document.getElementById("project4-desc").innerText = "An application for extracting data from websites.";

    document.getElementById("project5-title").innerText = "Word Analysis";
    document.getElementById("project5-desc").innerText = "A project on word frequency and sentiment analysis.";

    document.getElementById("project6-title").innerText = "Image Processing";
    document.getElementById("project6-desc").innerText = "Python app that categorizes images.";

    document.getElementById("project9-title").innerText = "Audio Processing";
    document.getElementById("project9-desc").innerText = "Voice processing automation.";

    document.getElementById("project10-title").innerText = "Video Processing";
    document.getElementById("project10-desc").innerText = "Video frame capturing and processing project.";

    // CERTIFICATE ENGLISH
    document.getElementById("certificates-title").innerText = "My Certificates";

    document.getElementById("cert1-title").innerText = "Digital Youth AI Ecosystem";
    document.getElementById("cert1-link").innerText = "View Certificate";

    document.getElementById("cert2-title").innerText = "Data-Oriented Artificial Intelligence";
    document.getElementById("cert2-link").innerText = "View Certificate";

    document.getElementById("cert3-title").innerText = "A Developer's Roadmap";
    document.getElementById("cert3-link").innerText = "View Certificate";

    document.getElementById("cert4-title").innerText = "Data Visualization";
    document.getElementById("cert4-link").innerText = "View Certificate";

    document.getElementById("cert5-title").innerText = "AI and Big Data Engineering";
    document.getElementById("cert5-link").innerText = "View Certificate";

    document.getElementById("cert6-title").innerText = "Cyber Security";
    document.getElementById("cert6-link").innerText = "View Certificate";

    document.getElementById("cert7-title").innerText = "Is Life a Game?";
    document.getElementById("cert7-link").innerText = "View Certificate";

    document.getElementById("cert8-title").innerText = "CodeSprint";
    document.getElementById("cert8-link").innerText = "View Certificate";

    document.getElementById("cert9-title").innerText = "Web Development with HTML5";
    document.getElementById("cert9-link").innerText = "View Certificate";

    document.getElementById("cert10-title").innerText = "JavaScript";
    document.getElementById("cert10-link").innerText = "View Certificate";

    //CONTACT ENGLISH
    document.getElementById("iletisim-baslik").innerText = "Contact";

    isTurkish = false;

  } else {
    // NAVBAR TÜRKÇE
    document.getElementById("nav-hakkimda").innerText = "Hakkımda";
    document.getElementById("nav-yeteneklerim").innerText = "Yeteneklerim";
    document.getElementById("nav-egitimlerim").innerText = "Eğitimlerim";
    document.getElementById("nav-deneyimim").innerText = "Deneyimim";
    document.getElementById("nav-projelerim").innerText = "Projelerim";
    document.getElementById("nav-sertifikalarim").innerText = "Sertifikalarım";
    document.getElementById("nav-iletisim").innerText = "İletişim";
    document.getElementById("language-btn").innerText = "İngilizceye Çevir";

    // ABOUT TÜRKÇE
    document.getElementById("about-title").innerText = "Hakkımda";
    document.getElementById("about-p1").innerText =
      "Bilecik Şeyh Edebali Üniversitesi İktisadi ve İdari Bilimler Fakültesi'nde Yönetim Bilişim Sistemleri lisans eğitimimi tamamladım. Şu anda Sakarya Üniversitesi'nde yüksek lisans eğitimime devam etmekteyim.";
    document.getElementById("about-p2").innerText = 
  "2024 Teknofest İnsanlık Yararına Teknoloji Yarışması'nın Afet Yönetimi kategorisinde, Teknokod ekibinin takım kaptanı ve fikir lideri olarak finale kalarak önemli bir başarıya imza attım. Üniversite eğitimim süresince Endüstri 4.0 ve Siber Güvenlik Kulübü'nün yönetim kadrosunda yer aldım ve takım çalışması, liderlik gibi yetkinliklerimi geliştirme fırsatı buldum.";
    document.getElementById("about-p3").innerText = 
  "2023 yaz döneminde Ahenk Yazılım'da gönüllü staj yaparak, C# ve MSSQL ile nesne tabanlı yazılım geliştirme üzerine pratik deneyim kazandım. Bu süreçte aynı zamanda özel dersler vererek bilgi paylaşımında bulundum.";
    document.getElementById("about-p4").innerText = 
  "R programlama ve Python dillerinde edindiğim becerilerle; web kazıma, veri madenciliği, metin madenciliği ve emoji analizi gibi alanlarda çeşitli projeler geliştirdim. Teknoloji ve yazılım alanında edindiğim bilgi ve deneyimleri, yenilikçi projeler aracılığıyla daha da ileri taşımayı hedefliyorum.";
    document.getElementById("about-p5").innerText = 
  "Sürekli öğrenmeye açık bir yaklaşımla, insanlığa fayda sağlayan projelerde aktif rol almayı ve teknoloji sektörüne değer katmayı amaçlıyorum.";

    // SKILLS TÜRKÇE
    document.getElementById("skills-title").innerText = "Yeteneklerim";

    document.getElementById("level-python").innerText = "İleri";
    document.getElementById("level-excel").innerText = "İleri";
    document.getElementById("level-html").innerText = "İleri";
    document.getElementById("level-css").innerText = "İleri";
    document.getElementById("level-js").innerText = "Orta-İleri";
    document.getElementById("level-unity").innerText = "Orta-İleri";
    document.getElementById("level-csharp").innerText = "Orta-İleri";
    document.getElementById("level-r").innerText = "Orta";
    document.getElementById("level-sql").innerText = "Orta";
    document.getElementById("level-english").innerText = "Orta";
    document.getElementById("level-spss").innerText = "Başlangıç";
    document.getElementById("level-tableau").innerText = "Başlangıç";
    
    document.getElementById("skill-english").innerText = "İngilizce";
    document.getElementById("skill-r").innerText = "R Programlama";

    // EDUCATION TÜRKÇE
    document.getElementById("education-title").innerText = "Eğitimlerim";

    document.getElementById("uni1-name").innerText = "🎓 Bilecik Şeyh Edebali Üniversitesi";
    document.getElementById("uni1-date").innerText = "2020 - 2024";
    document.getElementById("uni1-department").innerText = "Yönetim Bilişim Sistemleri (Lisans)";

    document.getElementById("uni2-name").innerText = "🎓 Sakarya Üniversitesi";
    document.getElementById("uni2-date").innerText = "2025 - Devam Ediyor";
    document.getElementById("uni2-department").innerText = "Yönetim Bilişim Sistemleri (Yüksek Lisans)";

    //EXPERIENCE TÜRKÇE
    document.getElementById("experience-title").innerText = "Deneyimim";
    document.getElementById("exp1-role").innerText = "Takım Kaptanı | Fikir Üreticisi";
    document.getElementById("exp2-role").innerText = "Yazılım Eğitmeni";
    document.getElementById("exp3-role").innerText = "Yazılım Destek Uzman Yardımcısı";
    document.getElementById("exp4-role").innerText = "Yazılım Stajyeri";

    document.querySelector(".experience-card:nth-child(1) h3").innerText = "ANKA DİRİLİŞ PROJESİ";
    document.querySelector(".experience-card:nth-child(2) h3").innerText = "ÖZEL YAZILIM DERSİ";
    document.querySelector(".experience-card:nth-child(3) h3").innerText = "ALUSOFT YAZILIM ŞİRKETİ";
    document.querySelector(".experience-card:nth-child(4) h3").innerText = "AHENK YAZILIM ŞİRKETİ";

    // PROJECT TÜRKÇE
    document.getElementById("projects-title").innerText = "Projelerim";

  document.getElementById("project1-title").innerText = "Anka Diriliş Projesi";
  document.getElementById("project1-desc").innerText = "Toplumsal farkındalık odaklı sosyal medya projesi.";

  document.getElementById("project7-title").innerText = "SPSS ile Veri Analizi";
  document.getElementById("project7-desc").innerText = "Likert veri setinde veri analizi projesi.";
    
  document.getElementById("project8-title").innerText = "Dijital Olgunluk Analizi";
  document.getElementById("project8-desc").innerText = "Bir şirket üzerine dijital olgunluk analiz projesi.";

  document.getElementById("project2-title").innerText = "Metin Madenciliği";
  document.getElementById("project2-desc").innerText = "Metin madenciliği ve doğal dil işleme projesi.";

  document.getElementById("project3-title").innerText = "Yılan Oyunu";
  document.getElementById("project3-desc").innerText = "Python ile geliştirilmiş klasik yılan oyunu.";

  document.getElementById("project4-title").innerText = "Web Kazıma";
  document.getElementById("project4-desc").innerText = "Web sitelerinden veri çekme uygulaması.";

  document.getElementById("project5-title").innerText = "Kelime Analizi";
  document.getElementById("project5-desc").innerText = "Kelime frekans ve duygu analizi projesi.";

  document.getElementById("project6-title").innerText = "Görüntü İşleme";
  document.getElementById("project6-desc").innerText = "Resimleri kategoriye göre ayıran Python uygulaması.";

  document.getElementById("project9-title").innerText = "Ses İşleme";
  document.getElementById("project9-desc").innerText = "Ses işleme otomasyonu.";

  document.getElementById("project10-title").innerText = "Video İşleme";
  document.getElementById("project10-desc").innerText = "Videodan kare yakalama ve işleme projesi.";
    
  // CERTIFICATE TÜRKÇE
    document.getElementById("certificates-title").innerText = "Sertifikalarım";

    document.getElementById("cert1-title").innerText = "Dijital Genç Yapay Zeka Ekosistemi";
    document.getElementById("cert1-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert2-title").innerText = "Veri Odaklı Yapay Zeka";
    document.getElementById("cert2-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert3-title").innerText = "Bir Yazılımcının Yol Haritası";
    document.getElementById("cert3-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert4-title").innerText = "Veri Görselleştirme";
    document.getElementById("cert4-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert5-title").innerText = "Yapay Zeka ve Büyük Veri Mühendisliği";
    document.getElementById("cert5-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert6-title").innerText = "Siber Güvenlik";
    document.getElementById("cert6-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert7-title").innerText = "Hayat Bir Oyun Mu";
    document.getElementById("cert7-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert8-title").innerText = "CodeSprint";
    document.getElementById("cert8-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert9-title").innerText = "HTML5 ile Web Geliştirme";
    document.getElementById("cert9-link").innerText = "Sertifikayı Gör";

    document.getElementById("cert10-title").innerText = "JavaScript";
    document.getElementById("cert10-link").innerText = "Sertifikayı Gör";

    //CONTACT TÜRKÇE
    document.getElementById("iletisim-baslik").innerText = "İletişim";


  isTurkish = true;
  }
}

