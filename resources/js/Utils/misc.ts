export function genreIdsToNamesForMovies(genreIds: number[]): string {
    const genres: { [id: number]: string } = {
        28: "Aksiyon",
        12: "Macera",
        16: "Animasyon",
        35: "Komedi",
        80: "Suç",
        99: "Belgesel",
        18: "Drama",
        10751: "Aile",
        14: "Fantastik",
        36: "Tarih",
        27: "Korku",
        10402: "Müzik",
        9648: "Gizem",
        10749: "Romantik",
        878: "Bilim Kurgu",
        10770: "TV Filmi",
        53: "Gerilim",
        10752: "Savaş",
        37: "Western",
    };

    const genreNames: string[] = genreIds.map((id) => genres[id]);

    return genreNames.join(", ");
}

export function genreIdsToNamesForTV(genreIds: number[]): string {
    const genres: { [id: number]: string } = {
        10759: "Aksiyon & Macera",
        16: "Animasyon",
        35: "Komedi",
        80: "Suç",
        99: "Belgesel",
        18: "Drama",
        10751: "Aile",
        10762: "Çocuk",
        9648: "Gizem",
        10763: "Haber",
        10764: "Reality",
        10765: "Bilim Kurgu & Fantastik",
        10766: "Pembe Dizi",
        10767: "Sohbet",
        10768: "Savaş & Politika",
        37: "Western",
    };
    const genreNames: string[] = genreIds.map((id) => genres[id]);
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
