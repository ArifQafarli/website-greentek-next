import Container from "@/components/layout/Container";
import PageBanner from "@/components/Pagebanner/PageBanner";

export default function AboutPage() {
  return (
    <Container>
      <div className="relative w-full mb-16 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-5">
        <PageBanner bgImage="/assets/Pagebanner/page-banner.png" />
      </div>
      <section className="py-16">
        <h2 className="max-w-5xl text-2xl font-medium font-poppins text-black leading-snug">
          Əməliyyatların təhlükəsizliyini təmin edir və müştərilərimizə yüksək{" "}
          <br />
          səviyyəli xidmət göstərmək üçün qabaqcıl texnologiyalardan istifadə
          edir.
        </h2>

        <div className="mt-12 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-tl-2xl rounded-bl-2xl shadow p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Təhlükəsiz Və Etibarlı
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Təhlükəsizlik və etibarlılıq bizim üçün prioritetdir. Hər bir
              əməliyyat potensial təhlükələr baxımından hərtərəfli yoxlanılır.
              Siz rahatlıqla bizə etibar edə və əməliyyatlarınızı təhlükəsiz
              şəkildə həyata keçirə bilərsiniz.
            </p>
          </div>

          <div className="bg-white shadow p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Sadə Və Əlçatan
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ödəniş sistemi olaraq sizə təklif etdiyimiz bütün xidmətlərimiz
              asan və istifadəçi dostudur. Müştərilərin tələbatlarına cavab
              vermək üçün interfeysimizi daim təkmilləşdiririk.
            </p>
          </div>

          <div className="bg-white rounded-tr-2xl rounded-br-2xl shadow p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Müştəri Məmnuniyyəti
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Müştərilərimizin ehtiyaclarını dərindən başa düşmək və onlara ən
              optimal həllər təqdim etmək üçün dəstək komandamız gün ərzində
              daim əlçatandır və istənilən sual və ya problemlə bağlı kömək
              etməyə hazırdır.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
