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
                "image" => "https://www.alanyum.com/uploads/filmler/large/MAYMUNLAR_CEHENEMY.jpg",
            ],
            [
                "type" => "Animasyon, Aile, Aksiyon, Fantastik, Komedi",
                "summary" =>
                "Ejderha Savaşçı Po (Jack Black), sıra dışı dövüş yetenekleri ve benzersiz cesaretiyle kötü adamları alt ettiği üç maceradan sonra yeni bir göreve çağrılır... dinlenme görevi. Daha açık söylemek gerekirse, ondan Huzur Vadisi\'nin Ruhani Lideri olmas...",
                "name" => "Kung Fu Panda 4",
                "duration" => "1 saat 34 dakika",
                "rating" => "7.4 / 10",
                "image" => "https://tr.web.img2.acsta.net/pictures/24/02/27/09/16/3323828.jpg",
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
                "type" => "Korku",
                "summary" => "",
                "name" => "MAKKA: Cinn-i Azap",
                "duration" => "1 saat 15 dakika",
                "rating" =>
                "Leyla, inancının gücünden emin olamayan 12 yaşındaki bir kızdır. Cin çağırma ve kara büyü ritüellerinde kullanılan objeler ile temas eden Leyla\'nın başına türlü olaylar gelir.",
                "image" => "https://tr.web.img4.acsta.net/pictures/24/03/21/11/36/5060581.jpg",
            ],
            [
                "type" => "Animasyon",
                "summary" => "",
                "name" => "Süper Ajan Bernard: Görev Mars",
                "duration" => "1 saat 35 dakika",
                "rating" =>
                "Görüp görebileceğiniz en şanssız ajan olan Bernard, itibarını yeniden kazanmak için gizlice Mars görevine girer. Fakat beklenmedik bir şekilde Mars\'taki gizemli dünyaya girer ve yakalanması planlanan Marslı canavarla arkadaş olur. Ajan, onuru ve a...",
                "image" => "https://tr.web.img4.acsta.net/img/df/a3/dfa3d0f684730ffc3afc7dec24cf98be.jpg",
            ],
            [
                "type" => "Komedi",
                "summary" => "",
                "name" => "Beyaz Eşya",
                "duration" =>
                "Aynı apartmanda, aynı gün iki daireye bekledikleri buz dolapları gelecektir. Zeynep ve Nihat çifti, önceki gece hırsızların girdiği spotçudan, ikinci el buzdolabı beğenmiştir. Diğer dairede oturan Sebahattin’ in dairesine de, kaçak yollarla getird...",
                "rating" => "",
                "image" => "https://live.staticflickr.com/65535/53713503724_c97ca848da_k.jpg",
            ],
            [
                "type" => "Animasyon",
                "summary" => "",
                "name" => "Süper Köpekler",
                "duration" =>
                "Birbirinden sevimli köpeklerin başlarına gelenleri konu alan \'Süper Köpekler\' filminde büyük abi Cino, bir bilim insanının gözüne girmek ister. Bu sırada Lisa, bir dans yarışmasını kazanmak için çalışır. Minik Aliş, Aleks ve Tima’nın arasında çıka...",
                "rating" => "",
                "image" => "https://tr.web.img2.acsta.net/img/3e/ed/3eed4c4201b61264a5e8d48b9251fb82.jpg",
            ],
            [
                "type" => "Komedi",
                "summary" => "",
                "name" => "Çingene Kızı",
                "duration" => "1 saat 45 dakika",
                "rating" =>
                "Herkes hevesle Amerika\'dan Gaziantep Zeugma Müzesi\'ne getirilen Çingene Kızı mozaiğini bekler. Müze müdürü Esra ve güvenlik görevlisi Zeki kadar Barbaros ve adamları da heyecanlıdır. Mozaik bir anda ortadan kaybolunca herkes birbirinden şüphelenme...",
                "image" => "https://tr.web.img4.acsta.net/img/93/89/93899cac7a9d64321ee656e6bebd12c7.jpg",
            ],
            [
                "type" => "Gerilim, Korku",
                "summary" => "",
                "name" => "Gece Avı",
                "duration" => "1 saat 30 dakika",
                "rating" =>
                "Takıntılı ve dengesiz kuzeni tarafından ailesinin öldürülmesinden sonra hayatı paramparça olan ve hayatını yeniden inşa etmeye çalışan Moira Cole\'un hikayesi.",
                "image" => "/images/posterler/gece_avi.jpg",
            ],
            [
                "type" => "Dram, Müzikal",
                "summary" =>
                "Film, Amy Winehouse\'un (Marisa Abela) ergenlikten yetişkinliğe yolculuğunu, zamanımızın en çok satan albümlerinden birinin yaratılışı içinde onun hayatını ve müziğini anlatıyor.",
                "name" => "Back To Black",
                "duration" => "2 saat 2 dakika",
                "rating" => "7.8 / 10",
                "image" => "/images/posterler/back_to_black.jpg",
            ],
        ]);
    }
}
