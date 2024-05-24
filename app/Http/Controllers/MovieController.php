<?php

namespace App\Http\Controllers;

class MovieController extends Controller
{
    public function getTheaters()
    {
        return response()->json([
            [
                "type" => "Bilim Kurgu, Aksiyon, Macera",
                "summary" =>
                "Sezar\'ın saltanatından yıllar sonra genç bir maymun, kendisine geçmişle ilgili öğretilen her şeyi sorgulamasına ve hem maymunlar hem de insanlar için geleceği tanımlayacak seçimler yapmasına yol açacak bir yolculuğa çıkar.",
                "name" => "Maymunlar Cehennemi: Yeni Krallık",
                "duration" => "2 saat 25 dakika",
                "rating" => "8.8 / 10",
                "image" => "https://i0.wp.com/www.politikyol.com/wp-content/uploads/maymunlar-cehennemi.jpg",
            ],
            [
                "type" => "Animasyon, Aile, Aksiyon, Fantastik, Komedi",
                "summary" =>
                "Ejderha Savaşçı Po (Jack Black), sıra dışı dövüş yetenekleri ve benzersiz cesaretiyle kötü adamları alt ettiği üç maceradan sonra yeni bir göreve çağrılır... dinlenme görevi. Daha açık söylemek gerekirse, ondan Huzur Vadisi\'nin Ruhani Lideri olmas...",
                "name" => "Kung Fu Panda 4",
                "duration" => "1 saat 34 dakika",
                "rating" => "7.4 / 10",
                "image" => "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2de972f-6742-48a7-a33a-74e43454c10c/dh0esd2-67812dec-7885-4f96-b8dc-9c36f8cc18d0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyZGU5NzJmLTY3NDItNDhhNy1hMzNhLTc0ZTQzNDU0YzEwY1wvZGgwZXNkMi02NzgxMmRlYy03ODg1LTRmOTYtYjhkYy05YzM2ZjhjYzE4ZDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vuCr4Co-aYWwl19AyqOcet78O35f4_ycWtObK3CvTpA",
            ],
            [
                "type" => "Gerilim, Korku",
                "summary" =>
                "Bir grup arkadaş, Tarot falı okurken kutsal kuralı olan \'başkasının desteğini asla kullanma\' kuralını çiğnerler. Farkında olmadan lanetli kartlarda hapsolmuş bir kötülüğü serbest bırakırlar ve birer birer kaderleriyle yüzleşirler. Tarot\'un onlara b...",
                "name" => "Tarot",
                "duration" => "1 saat 32 dakika",
                "rating" => "7 / 10",
                "image" => "https://icdn.ensonhaber.com/crop/703x395/resimler/diger/kok/2024/05/02/663338ed9db06190.jpg",
            ],
            [
                "type" => "Animasyon",
                "summary" => "",
                "name" => "Süper Ajan Bernard: Görev Mars",
                "duration" => "1 saat 35 dakika",
                "rating" =>
                "Görüp görebileceğiniz en şanssız ajan olan Bernard, itibarını yeniden kazanmak için gizlice Mars görevine girer. Fakat beklenmedik bir şekilde Mars\'taki gizemli dünyaya girer ve yakalanması planlanan Marslı canavarla arkadaş olur. Ajan, onuru ve a...",
                "image" => "https://i.ytimg.com/vi/mMB0mb_0wrE/maxresdefault.jpg",
            ],
            [
                "type" => "Komedi",
                "summary" => "",
                "name" => "Beyaz Eşya",
                "duration" =>
                "Aynı apartmanda, aynı gün iki daireye bekledikleri buz dolapları gelecektir. Zeynep ve Nihat çifti, önceki gece hırsızların girdiği spotçudan, ikinci el buzdolabı beğenmiştir. Diğer dairede oturan Sebahattin’ in dairesine de, kaçak yollarla getird...",
                "rating" => "",
                "image" => "https://www.dizidoktoru.com/images/resize/95/637x332/haberler/2024/04/beyaz_esyafilminin_afisi_yayinladi_h43246_c8c9f.jpg",
            ],
            [
                "type" => "Gerilim, Korku",
                "summary" => "",
                "name" => "Gece Avı",
                "duration" => "1 saat 30 dakika",
                "rating" =>
                "Takıntılı ve dengesiz kuzeni tarafından ailesinin öldürülmesinden sonra hayatı paramparça olan ve hayatını yeniden inşa etmeye çalışan Moira Cole\'un hikayesi.",
                "image" => "https://live.staticflickr.com/65535/49078685586_98c0d2eeca_b.jpg",
            ],
            [
                "type" => "Gerilim, Korku",
                "summary" => "",
                "name" => "Gece Avı",
                "duration" => "1 saat 30 dakika",
                "rating" =>
                "Takıntılı ve dengesiz kuzeni tarafından ailesinin öldürülmesinden sonra hayatı paramparça olan ve hayatını yeniden inşa etmeye çalışan Moira Cole\'un hikayesi.",
                "image" => "https://live.staticflickr.com/65535/49078685586_98c0d2eeca_b.jpg",
            ],
            [
                "type" => "Komedi",
                "summary" => "",
                "name" => "Beyaz Eşya",
                "duration" =>
                "Aynı apartmanda, aynı gün iki daireye bekledikleri buz dolapları gelecektir. Zeynep ve Nihat çifti, önceki gece hırsızların girdiği spotçudan, ikinci el buzdolabı beğenmiştir. Diğer dairede oturan Sebahattin’ in dairesine de, kaçak yollarla getird...",
                "rating" => "",
                "image" => "https://www.dizidoktoru.com/images/resize/95/637x332/haberler/2024/04/beyaz_esyafilminin_afisi_yayinladi_h43246_c8c9f.jpg",
            ],
            [
                "type" => "Animasyon",
                "summary" => "",
                "name" => "Süper Ajan Bernard: Görev Mars",
                "duration" => "1 saat 35 dakika",
                "rating" =>
                "Görüp görebileceğiniz en şanssız ajan olan Bernard, itibarını yeniden kazanmak için gizlice Mars görevine girer. Fakat beklenmedik bir şekilde Mars\'taki gizemli dünyaya girer ve yakalanması planlanan Marslı canavarla arkadaş olur. Ajan, onuru ve a...",
                "image" => "https://i.ytimg.com/vi/mMB0mb_0wrE/maxresdefault.jpg",
            ],
            [
                "type" => "Gerilim, Korku",
                "summary" =>
                "Bir grup arkadaş, Tarot falı okurken kutsal kuralı olan \'başkasının desteğini asla kullanma\' kuralını çiğnerler. Farkında olmadan lanetli kartlarda hapsolmuş bir kötülüğü serbest bırakırlar ve birer birer kaderleriyle yüzleşirler. Tarot\'un onlara b...",
                "name" => "Tarot",
                "duration" => "1 saat 32 dakika",
                "rating" => "7 / 10",
                "image" => "https://icdn.ensonhaber.com/crop/703x395/resimler/diger/kok/2024/05/02/663338ed9db06190.jpg",
            ],
            [
                "type" => "Animasyon, Aile, Aksiyon, Fantastik, Komedi",
                "summary" =>
                "Ejderha Savaşçı Po (Jack Black), sıra dışı dövüş yetenekleri ve benzersiz cesaretiyle kötü adamları alt ettiği üç maceradan sonra yeni bir göreve çağrılır... dinlenme görevi. Daha açık söylemek gerekirse, ondan Huzur Vadisi\'nin Ruhani Lideri olmas...",
                "name" => "Kung Fu Panda 4",
                "duration" => "1 saat 34 dakika",
                "rating" => "7.4 / 10",
                "image" => "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2de972f-6742-48a7-a33a-74e43454c10c/dh0esd2-67812dec-7885-4f96-b8dc-9c36f8cc18d0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyZGU5NzJmLTY3NDItNDhhNy1hMzNhLTc0ZTQzNDU0YzEwY1wvZGgwZXNkMi02NzgxMmRlYy03ODg1LTRmOTYtYjhkYy05YzM2ZjhjYzE4ZDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vuCr4Co-aYWwl19AyqOcet78O35f4_ycWtObK3CvTpA",
            ],
            [
                "type" => "Bilim Kurgu, Aksiyon, Macera",
                "summary" =>
                "Sezar\'ın saltanatından yıllar sonra genç bir maymun, kendisine geçmişle ilgili öğretilen her şeyi sorgulamasına ve hem maymunlar hem de insanlar için geleceği tanımlayacak seçimler yapmasına yol açacak bir yolculuğa çıkar.",
                "name" => "Maymunlar Cehennemi: Yeni Krallık",
                "duration" => "2 saat 25 dakika",
                "rating" => "8.8 / 10",
                "image" => "https://i0.wp.com/www.politikyol.com/wp-content/uploads/maymunlar-cehennemi.jpg",
            ],
        ]);
    }
}
