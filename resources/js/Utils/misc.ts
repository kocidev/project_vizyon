import { iGenre } from "@/types/movie.type";

export const movieGenres: iGenre[] = [
    { id: 28, name: "Aksiyon" },
    { id: 12, name: "Macera" },
    { id: 16, name: "Animasyon" },
    { id: 35, name: "Komedi" },
    { id: 80, name: "Suç" },
    { id: 99, name: "Belgesel" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Aile" },
    { id: 14, name: "Fantastik" },
    { id: 36, name: "Tarih" },
    { id: 27, name: "Korku" },
    { id: 10402, name: "Müzik" },
    { id: 9648, name: "Gizem" },
    { id: 10749, name: "Romantik" },
    { id: 878, name: "Bilim Kurgu" },
    { id: 10770, name: "TV Filmi" },
    { id: 53, name: "Gerilim" },
    { id: 10752, name: "Savaş" },
    { id: 37, name: "Western" },
];

export const tvGenres: iGenre[] = [
    { id: 10759, name: "Aksiyon & Macera" },
    { id: 16, name: "Animasyon" },
    { id: 35, name: "Komedi" },
    { id: 80, name: "Suç" },
    { id: 99, name: "Belgesel" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Aile" },
    { id: 10762, name: "Çocuk" },
    { id: 9648, name: "Gizem" },
    { id: 10763, name: "Haber" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Bilim Kurgu & Fantastik" },
    { id: 10766, name: "Pembe Dizi" },
    { id: 10767, name: "Sohbet" },
    { id: 10768, name: "Savaş & Politika" },
    { id: 37, name: "Western" },
];

export function genreIdsToNamesForMovies(genreIds: number[]): string {
    const genreNames: iGenre[] = genreIds.map((id) => movieGenres[id]);
    return genreNames.join(", ");
}

export function genreIdsToNamesForTV(genreIds: number[]): string {
    const genreNames: iGenre[] = genreIds.map((id) => tvGenres[id]);
    return genreNames.join(", ");
}

export function formatDateToTurkishMonthDay(date: string): string {
    const monthNames = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
    ];

    const [_, month, day] = date.split("-");

    const monthIndex = parseInt(month, 10) - 1;

    const monthName = monthNames[monthIndex];

    return `${day} ${monthName}`;
}
