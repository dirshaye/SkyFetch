Anlık Hava Durumu Uygulaması
Proje Açıklaması
Anlık Hava Durumu Uygulaması, 6 katmanlı Servis Odaklı Mimari (SOA) kullanılarak geliştirilmiş bir hava durumu uygulamasıdır. Kullanıcılar bir şehir adı girerek, OpenWeather API'den alınan gerçek zamanlı hava durumu bilgilerini görebilir.

Özellikler
Vue.js ile modern bir kullanıcı arayüzü.
Express.js kullanılarak geliştirilen uygulama katmanı.
OpenWeather API ile gerçek zamanlı hava durumu verisi entegrasyonu.
6 katmanlı SOA mimarisi:
Onyüz Katmanı: Kullanıcı arayüzü.
Uygulama Katmanı: Veri işleme ve yönlendirme.
Servis Katmanı: Veri dönüştürme ve doğrulama.
Dış API Katmanı: OpenWeather API entegrasyonu.
SOAP Katmanı ve gRPC Katmanı: Protokol entegrasyonu.
Kurulum
Gereksinimler
Node.js 16 veya üstü
NPM veya Yarn
OpenWeather API Anahtarı
Kütüphanelerin Yüklenmesi
Backend:

bash
Copy code
npm install express cors axios soap @grpc/grpc-js @grpc/proto-loader
Frontend:

bash
Copy code
cd onyuz_katmani
npm install
Çalıştırma
Backend Başlatma

Uygulama katmanını başlatın:
bash
Copy code
node uygulama_katmani/index.js
SOAP ve gRPC katmanlarını başlatın:
bash
Copy code
node soap_katmani/soap.js
node grpc_katmani/grpcserver.js
Frontend Başlatma

onyuz_katmani klasörüne gidin:
bash
Copy code
npm run serve
Uygulama

Tarayıcınızda http://localhost:8080 adresini açarak uygulamayı görüntüleyin.
Proje Katmanları
Onyüz Katmanı: Kullanıcıların hava durumu sorgulama yaptığı arayüz.
Uygulama Katmanı: Verileri işler ve OpenWeather API'den alınan verileri yönlendirir.
Servis Katmanı: Verileri dönüştürmek ve doğrulamak için kullanılan yardımcı işlevler.
Dış API Katmanı: OpenWeather API'ye bağlanır.
SOAP ve gRPC Katmanları: Protokol entegrasyonu simülasyonu.
Katkıda Bulunma
Katkıda bulunmak için bir fork oluşturun, değişikliklerinizi yapın ve bir pull request gönderin. Her türlü katkıya açığız!
