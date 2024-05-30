export function genreIdsToNames(genreIds: number[]): string {
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
