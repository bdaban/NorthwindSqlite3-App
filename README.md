# Northwind Veritabanı Yönetim Uygulaması

![Northwind Admin](https://img.shields.io/badge/Northwind-Admin-blue)
![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82)
![Prisma](https://img.shields.io/badge/Prisma-4.x-2D3748)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)

Bu proje, klasik Northwind veritabanı için modern bir yönetim arayüzü sağlayan kapsamlı bir web uygulamasıdır. Nuxt 3, Prisma ORM ve TailwindCSS kullanılarak geliştirilmiştir.

## 📋 Özellikler

- **Tam Northwind Veritabanı Yönetimi**: Ürünler, kategoriler, müşteriler, siparişler, tedarikçiler, çalışanlar, nakliyeciler, bölgeler ve alanlar için CRUD işlemleri.
- **Modern Arayüz**: Material Design ikonları ve TailwindCSS ile kullanıcı dostu, tepkisel tasarım.
- **İstatistikler ve Raporlama**: Ürün satışları, kategori satışları, müşteri satın almaları ve çalışan performansı için analitik gösterge panelleri.
- **Veri Filtreleme ve Arama**: Tüm veri listelerinde gelişmiş filtreleme ve arama özellikleri.
- **Optimum Kullanıcı Deneyimi**: Sezgisel gezinme ve veri yönetimi.

## 🚀 Kurulum

### Gereksinimler

- Node.js 16.x veya üzeri
- NPM veya Yarn
- SQLite (varsayılan veritabanı) veya başka bir veritabanı sistemi

### Adımlar

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullanıcıadınız/northwind-nuxt3-app.git
   cd northwind-nuxt3-app
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

3. `.env` dosyasını oluşturun ve veritabanı bağlantı bilgilerinizi ayarlayın:
   ```
   DATABASE_URL="file:./northwind.db"
   ```

4. Prisma veritabanını hazırlayın:
   ```bash
   npx prisma generate
   ```

5. Uygulamayı geliştirme modunda başlatın:
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

## 🗂️ Proje Yapısı

```
northwind-nuxt3-app/
├── assets/           # Statik varlıklar (CSS, resimler)
├── components/       # Yeniden kullanılabilir Vue bileşenleri
├── composables/      # Yeniden kullanılabilir composition API fonksiyonları
├── layouts/          # Sayfa şablonları
├── middleware/       # Nuxt ara yazılımları
├── pages/            # Uygulama sayfaları ve rotaları
├── plugins/          # Vue eklentileri
├── prisma/           # Prisma şeması ve migrasyonları
├── public/           # Genel dosyalar
├── server/           # API uç noktaları ve sunucu işlevleri
│   └── api/          # API rotaları
├── stores/           # Pinia mağazaları (durum yönetimi)
└── utils/            # Yardımcı işlevler
```

## 📝 Modüller ve Sayfalar

- **Ana Sayfa**: Genel bir bakış ve özet bilgiler.
- **Ürünler**: Ürün listesi, detayları, ekleme ve düzenleme sayfaları.
- **Kategoriler**: Kategori yönetimi.
- **Müşteriler**: Müşteri yönetimi ve müşteri bazlı siparişler.
- **Siparişler**: Sipariş oluşturma, düzenleme ve detay görüntüleme.
- **Tedarikçiler**: Tedarikçi yönetimi.
- **Çalışanlar**: Çalışan yönetimi ve performans takibi.
- **Nakliyeciler**: Nakliye firması yönetimi.
- **Bölgeler ve Alanlar**: Coğrafi konum yönetimi.
- **İstatistikler**: Çeşitli istatistiksel raporlar ve grafikler.

## 🛠️ Teknoloji Yığını

- **[Nuxt 3](https://nuxt.com)**: Vue.js tabanlı modern web çerçevesi.
- **[Prisma](https://prisma.io)**: TypeScript ve Node.js için ORM.
- **[TailwindCSS](https://tailwindcss.com)**: Utility-first CSS çerçevesi.
- **[SQLite](https://sqlite.org)**: Gömülü SQL veritabanı motoru (veya tercih ettiğiniz başka bir veritabanı).
- **[Material Design Icons](https://materialdesignicons.com)**: Yüksek kaliteli ikon kütüphanesi.

## 📊 API Kullanımı

API uç noktaları `/server/api` dizininde tanımlanmıştır ve aşağıdaki genel formatı izler:

- `GET /api/[resource]`: Kaynakların listesini alır
- `GET /api/[resource]/[id]`: Belirli bir kaynağın detaylarını alır
- `POST /api/[resource]/create`: Yeni bir kaynak oluşturur
- `PUT /api/[resource]/update/[id]`: Mevcut bir kaynağı günceller
- `DELETE /api/[resource]/[id]`: Bir kaynağı siler

## 🌐 Canlı Demo

[Canlı demo URL'si](https://projenizin-canlı-url.com) (mevcutsa)

## 🤝 Katkıda Bulunma

1. Bu projeyi forklayın
2. Özellik dalınızı oluşturun: `git checkout -b yeni-ozellik`
3. Değişikliklerinizi commit edin: `git commit -m 'Yeni özellik ekle'`
4. Dalınıza push yapın: `git push origin yeni-ozellik`
5. Bir pull request oluşturun

## 📜 Lisans

MIT Lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

- [Burak Daban](https://github.com/bdaban) - [LinkedIn](https://www.linkedin.com/in/burak-d-b95247170/)
