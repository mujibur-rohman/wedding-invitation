import Couple from "@/components/couple";
import Cover from "@/components/cover";
import Hero from "@/components/hero";
import Quote from "@/components/quote";
import { PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi";
import Gallery from "@/components/gallery";
import Comments from "@/components/comments";
import Gift from "@/components/gift";
import Menu from "@/components/menu";
import Song from "@/components/song";
import { Suspense } from "react";

export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_APP_URL,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: `The Wedding Of Dwi & Said Agil`,
  description: `Minggu, 25 Januari 2026, Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.`,
  authors: `mujay`,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `The Wedding Of Dwi & Said Agil`,
    description: `Minggu, 25 Januari 2026, Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.`,
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: `dwi-and-said-agil`,
    locale: "id_ID",
    type: "article",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/thumbnail-150x150.jpg`,
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

const data = {
  family: [
    {
      full_name: "Dwi Hasti Oktaviani, S.Pd",
      nick_name: "dwi",
      father_name: "Nurhasan",
      mother_name: "Sri Maryati",
      image: "/img/gallery-2.jpeg",
      address:
        "Kp. Karang Tengah RT 03 RW 010, Desa Pusaka Rakyat, Kec. Tarumajaya, Kab. Bekasi, Jawa Barat 17214.",
      type: "female",
      instagram: "https://www.instagram.com/_sayafannyaaa",
    },
    {
      full_name: "Muhammad Said Agil",
      nick_name: "said",
      father_name: "Asmat",
      mother_name: "Almh. Ibu Muharoh",
      image: "/img/gallery-3.jpeg",
      address:
        "Kp. Karang Tengah RT 03 RW 010, Desa Pusaka Rakyat, Kec. Tarumajaya, Kab. Bekasi, Jawa Barat 17214.",
      type: "male",
      instagram: "https://www.instagram.com/anggasyahfutra",
    },
  ],
  cover: "/img/gallery-2.jpeg",
  weddingDate: "25-01-2026 09:00",
  imageList: [
    "/img/gallery-4.jpeg",
    "/img/gallery-5.jpeg",
    "/img/gallery-6.jpeg",
    "/img/gallery-7.jpeg",
    "/img/gallery-8.jpeg",
    "/img/gallery-9.jpeg",
  ],
  galleryList: [
    "/img/gallery-4.jpeg",
    "/img/gallery-5.jpeg",
    "/img/gallery-6.jpeg",
    "/img/gallery-7.jpeg",
    "/img/gallery-8.jpeg",
    "/img/gallery-9.jpeg",
  ],
  event: [
    {
      title: "akad nikah",
      date: "25-01-2026",
      jam: "09.00 - 10.00",
      lokasi: "kediaman mempelai wanita",
      address:
        "Kp. Karang Tengah RT 03 RW 010, Desa Pusaka Rakyat, Kec. Tarumajaya, Kab. Bekasi, Jawa Barat 17214.",
      maps_link: "https://maps.app.goo.gl/yFgC54GGoFUnhy828",
    },
    {
      title: "resepsi",
      date: "25-01-2026",
      jam: "11.00 - selesai",
      lokasi: "kediaman mempelai wanita",
      address:
        "Kp. Rancabelut No.74-82 005/016, Kel. Padasuka Kec. Cimahi Tengah Kota Cimahi - 40526",
      maps_link: "https://maps.app.goo.gl/VQjmdXeA675wLqp17",
    },
  ],
  streaming: {
    status: false,
    links: [
      {
        name: "youtube",
        link: "https://youtube.com/",
        icon: <PiYoutubeLogoThin className="text-xl" />,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/",
        icon: <PiInstagramLogoThin className="text-xl" />,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-wrap flex-1">
        <Suspense>
          <Cover
            shortNameFemale={data.family[0].nick_name}
            shortNameMale={data.family[1].nick_name}
            src={data.cover}
          />
        </Suspense>

        <Hero
          imageList={data.imageList}
          weddingDate={data.weddingDate}
          shortNameFemale={data.family[0].nick_name}
          shortNameMale={data.family[1].nick_name}
        />

        <Quote
          shortNameFemale={data.family[0].nick_name}
          shortNameMale={data.family[1].nick_name}
          quote={`"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."`}
          quoteFrom="QS. Ar-Rum : 21"
        />
        <Couple coupleData={data.family} />
        <section
          className="relative py-16 overflow-hidden bg-gradient-to-b from-white via-stone-50 to-white"
          id="wedding-date"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-5 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 right-5 w-56 h-56 bg-amber-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-stone-400" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-rose-400"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-stone-400" />
              </div>

              <h2 className="font-esthetic text-4xl md:text-5xl text-stone-800 mb-4">
                Moment Bahagia
              </h2>

              <p className="text-stone-600 max-w-md mx-auto leading-relaxed">
                Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala,
                insyaAllah kami akan menyelenggarakan acara:
              </p>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Akad Card */}
              <div
                className="group relative overflow-hidden"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white via-white to-rose-50 rounded-3xl border border-rose-100/50 p-8 hover:-translate-y-1 transition-all duration-500">
                  {/* Decorative patterns */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-100/40 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100/40 to-transparent rounded-tr-full" />
                  <div className="absolute top-4 left-4">
                    <svg
                      className="w-6 h-6 text-rose-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div className="absolute top-8 right-8">
                    <svg
                      className="w-4 h-4 text-rose-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl rotate-3 shadow-rose-500/30 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                    <svg
                      className="w-10 h-10 text-white -rotate-3 group-hover:-rotate-6 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-md">
                      Minggu, 25 Januari 2026
                    </span>

                    <h3 className="font-esthetic text-4xl text-stone-800 mb-4">
                      Akad Nikah
                    </h3>

                    <div className="flex items-center justify-center gap-3 bg-rose-50 rounded-xl py-3 px-4">
                      <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-rose-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-rose-400 font-medium">
                          Waktu
                        </p>
                        <p className="text-stone-700 font-semibold">
                          09.00 - 10.00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resepsi Card */}
              <div
                className="group relative overflow-hidden"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white via-white to-amber-50 rounded-3xl border border-amber-100/50 p-8 hover:-translate-y-1 transition-all duration-500">
                  {/* Decorative patterns */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/40 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-tr-full" />
                  <div className="absolute top-4 left-4">
                    <svg
                      className="w-6 h-6 text-amber-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="absolute top-8 right-8">
                    <svg
                      className="w-4 h-4 text-amber-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl -rotate-3 shadow-amber-500/30 flex items-center justify-center group-hover:-rotate-6 transition-transform duration-500">
                    <svg
                      className="w-10 h-10 text-white rotate-3 group-hover:rotate-6 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-md">
                      Minggu, 25 Januari 2026
                    </span>

                    <h3 className="font-esthetic text-4xl text-stone-800 mb-4">
                      Resepsi
                    </h3>

                    <div className="flex items-center justify-center gap-3 bg-amber-50 rounded-xl py-3 px-4">
                      <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-amber-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-amber-400 font-medium">
                          Waktu
                        </p>
                        <p className="text-stone-700 font-semibold">
                          10.00 WIB - Selesai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="relative overflow-hidden bg-gradient-to-br from-white via-stone-50 to-stone-100 rounded-3xl shadow-xl border border-stone-200/50 p-8 max-w-xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-bl from-rose-100 to-transparent rounded-full opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-amber-100 to-transparent rounded-full opacity-60" />
              <div className="absolute top-4 right-4">
                <svg
                  className="w-5 h-5 text-stone-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-stone-600 to-stone-800 rounded-2xl shadow-stone-500/30 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                <h4 className="font-esthetic text-2xl text-stone-800 mb-3">
                  Lokasi Acara
                </h4>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-5 shadow-sm">
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Kp. Karang Tengah RT 03 RW 010, Desa Pusaka Rakyat, Kec.
                    Tarumajaya, Kab. Bekasi, Jawa Barat 17214
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/yFgC54GGoFUnhy828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-500 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  Buka Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <Gift />
        <Gallery imageList={data.galleryList} />
        <section className="pt-2 pb-4">
          <div className="max-w-3xl mx-auto px-4">
            <div className="rounded-3xl shadow-lg p-4">
              <h2 className="font-esthetic text-center py-2 mb-2 text-4xl">
                Kisah Cinta
              </h2>

              <div className="relative">
                {/* <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/80 dark:bg-stone-800/80 z-10">
                  <button className="px-4 py-2 border border-stone-400 dark:border-stone-500 rounded-2xl shadow-sm text-sm hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors">
                    <i className="fa-solid fa-heart fa-bounce mr-2"></i>
                    Lihat Story
                  </button>
                </div> */}

                <div className="overflow-y-scroll overflow-x-hidden p-2 with-scrollbar h-60">
                  <div className="flex">
                    <div className="flex-none relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 border-l-2 border-stone-400 h-full z-0"></div>
                    </div>
                    <div className="flex-1 mt-1 mb-3 pl-3">
                      <p className="text-sm">
                        &quot;Orang bilang, kalau cari jodoh itu harus usaha
                        sampai ke ujung dunia. Tapi buat kami, Dwi & Said,
                        semesta sepertinya sedang ingin bercanda sambil berhemat
                        ongkos. Capek-capek pasang radar jauh ke luar, eh
                        ternyata jodohnya cuma beda beberapa atap saja.
                        Pertemuan kami bukan dimulai dari tatapan romantis ala
                        drama Korea, melainkan dari sapaan basa-basi
                        antartetangga. Berawal dari status &apos;teman satu
                        lingkungan&apos;, kami pun naik kelas jadi &apos;teman
                        curhat&apos; yang tahu luar dalamnya masalah
                        masing-masing termasuk drama percintaan. Namun, siapa
                        sangka? Dari sekadar berbagi cerita di setiap
                        kesempatan, frekuensi hati kami pelan-pelan mulai
                        sinkron. Kami baru sadar bahwa kenyamanan paling nyata
                        ternyata tidak perlu dicari jauh-jauh ia ada di sekitar
                        rumah yang sering kami lihat setiap hari. Tapi, meski
                        rumah kami cuma sejauh &apos;lemparan batu&apos;, takdir
                        tetap memberi kami bumbu drama. Demi masa depan dan
                        pundi-pundi di Cikarang, kami harus rela menjalani
                        ritual &apos;berpisah dua minggu sekali&apos;. Dua
                        minggu kerja keras bagai kuda, baru setelah itu bisa
                        pulang untuk melepas rindu (dan mungkin menagih janji
                        curhat yang tertunda). Kini, setelah bolak-balik menahan
                        rindu di jalur Cikarang, kami memutuskan untuk mengunci
                        komitmen ini selamanya. Kami siap pindah status dari
                        &apos;teman satu lingkungan&apos; menjadi &apos;pasangan
                        sah&apos; yang akan pulang ke satu atap yang sama. Mari
                        menjadi saksi penyatuan dua tetangga ini dalam satu
                        ikatan suci. Hadir ya, karena kehadiranmu adalah saksi
                        bahwa jodoh memang benar-benar cuma lima langkah!&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Comments />
        <Menu />
        <Song />
      </main>
      <footer className="mb-14 sm:mb-0 bg-stone-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 80"
          className="w-full"
          version="1.1"
        >
          <path
            d="M0 42L75 17L150 21L225 39L300 49L375 16L450 17L525 36L600 19L675 22L750 47L825 35L900 33L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
            fill="#57534e"
          />
          <path
            d="M0 51L75 51L150 42L225 47L300 35L375 39L450 34L525 46L600 37L675 38L750 43L825 50L900 55L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
            fill="#403b38"
          />
          <path
            d="M0 60L75 56L150 68L225 68L300 57L375 61L450 54L525 52L600 49L675 69L750 69L825 50L900 61L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
            fill="#292524"
          />
        </svg>
        <div className="px-4 py-8 -mt-2 font-thin text-center capitalize text-stone-300 bg-stone-800">
          <p>© made with love by Mujay</p>
        </div>
      </footer>
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col flex-wrap flex-1">
//         <Suspense>
//           <Cover
//             shortNameFemale={data.family[0].nick_name}
//             shortNameMale={data.family[1].nick_name}
//             src={data.cover}
//           />
//         </Suspense>
//         <Hero
//           imageList={data.imageList}
//           weddingDate={data.weddingDate}
//           shortNameFemale={data.family[0].nick_name}
//           shortNameMale={data.family[1].nick_name}
//         />
//         <Quote
//           shortNameFemale={data.family[0].nick_name}
//           shortNameMale={data.family[1].nick_name}
//           quote="“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”"
//           quoteFrom="QS. Ar-Rum : 21"
//         />
//         <Couple coupleData={data.family} />
//         <Event listEvent={data.event} streaming={data.streaming} />
//         <Gallery imageList={data.galleryList} />
//         <Comments />
//         <Gift />
//         <Menu />
//         <Song />
//       </main>
//       <footer className="mb-14 sm:mb-0 bg-stone-700">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 900 80"
//           className="w-full"
//           version="1.1"
//         >
//           <path
//             d="M0 42L75 17L150 21L225 39L300 49L375 16L450 17L525 36L600 19L675 22L750 47L825 35L900 33L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
//             fill="#57534e"
//           />
//           <path
//             d="M0 51L75 51L150 42L225 47L300 35L375 39L450 34L525 46L600 37L675 38L750 43L825 50L900 55L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
//             fill="#403b38"
//           />
//           <path
//             d="M0 60L75 56L150 68L225 68L300 57L375 61L450 54L525 52L600 49L675 69L750 69L825 50L900 61L900 81L825 81L750 81L675 81L600 81L525 81L450 81L375 81L300 81L225 81L150 81L75 81L0 81Z"
//             fill="#292524"
//           />
//         </svg>
//         <div className="px-4 py-8 -mt-2 font-thin text-center capitalize text-stone-300 bg-stone-800">
//           <p>© made with love by sukundev</p>
//         </div>
//       </footer>
//     </>
//   );
// }
