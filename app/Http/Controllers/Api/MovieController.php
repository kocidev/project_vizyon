<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TmdbService;
use Illuminate\Http\JsonResponse;

class MovieController extends Controller
{
    protected $tmdbService;

    public function __construct(TmdbService $tmdbService)
    {
        $this->tmdbService = $tmdbService;
    }
    
    public function getTheaters(): JsonResponse
    {
        // $movies = $this->tmdbService->getMovieNowPlaying();
        $movies = [
            [
                "adult" => false,
                "backdrop_path" => "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
                "genre_ids" => [
                    878,
                    12,
                    28
                ],
                "id" => 653346,
                "original_language" => "en",
                "original_title" => "Kingdom of the Planet of the Apes",
                "overview" => "Sezar'ın saltanatından yıllar sonra genç bir maymun, kendisine geçmişle ilgili öğretilen her şeyi sorgulamasına ve hem maymunlar hem de insanlar için geleceği tanımlayacak seçimler yapmasına yol açacak bir yolculuğa çıkar.",
                "popularity" => 5081.145,
                "poster_path" => "/oVo3Jq6Do97xf34duQRnexziSof.jpg",
                "release_date" => "2024-05-10",
                "title" => "Maymunlar Cehennemi: Yeni Krallık",
                "video" => false,
                "vote_average" => 7.04,
                "vote_count" => 665
            ],
            [
                "adult" => false,
                "backdrop_path" => "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
                "genre_ids" => [
                    28,
                    35
                ],
                "id" => 746036,
                "original_language" => "en",
                "original_title" => "The Fall Guy",
                "overview" => "Dublör Colt Seavers, fiziksel ve zihinsel sağlığına odaklanmak için bir yıl önce işi bırakmış, ancak eski sevgilisi Jody Moreno tarafından yönetilen yüksek bütçeli bir stüdyo filminin yıldızının kaybolmasıyla tekrar göreve çağrılmıştır. Colt, Jody’yi geri kazanmak için filmin en çılgın aksiyon sahnelerini gerçekleştirir. Ancak kayıp yıldızın etrafındaki gizem derinleştikçe, Colt Seavers kendini çok daha karanlık bir suç komplosunun içinde bulur.",
                "popularity" => 1646.128,
                "poster_path" => "/svF3z06DyGDahLo1t5qW128PmiF.jpg",
                "release_date" => "2024-04-26",
                "title" => "Dublör",
                "video" => false,
                "vote_average" => 7.315,
                "vote_count" => 831
            ],
            [
                "adult" => false,
                "backdrop_path" => "/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg",
                "genre_ids" => [
                    28,
                    12,
                    878
                ],
                "id" => 786892,
                "original_language" => "en",
                "original_title" => "Furiosa: A Mad Max Saga",
                "overview" => "Genç Furiosa, dünya çökerken Nice Annelerin Yeşil Diyarı’ndan kaçırılır ve Savaş Lordu Dementus liderliğindeki büyük bir Motorcu Sürüsü'nün eline düşer. Çorak Topraklar'da ilerlerken, Ölümsüz Joe'nun başkanlık ettiği Kale'ye gelirler. İki diktatör egemenlik için savaşır. Bu sırada Furiosa eve dönüş yolunu bulmak çabalarken birçok sınavdan sağ çıkmak zorunda kalır.",
                "popularity" => 1113.69,
                "poster_path" => "/aCbFH1BfHjW14VxiA0ZmkNJTZKI.jpg",
                "release_date" => "2024-05-24",
                "title" => "Furiosa: Bir Mad Max Destanı",
                "video" => false,
                "vote_average" => 7.681,
                "vote_count" => 453
            ],
            [
                "adult" => false,
                "backdrop_path" => "/1m1rXopfNDVL3UMiv6kriYaJ3yE.jpg",
                "genre_ids" => [
                    28,
                    53,
                    80,
                    878
                ],
                "id" => 882059,
                "original_language" => "en",
                "original_title" => "Boy Kills World",
                "overview" => "Ailesi gözünün önünde katledildikten sonra bir ölüm makinesi olarak yetiştirilen işitme engelli bir genç adam intikam peşine düşer.",
                "popularity" => 1114.141,
                "poster_path" => "/25JskXmchcYwj3jHRmcPm738MpB.jpg",
                "release_date" => "2024-04-26",
                "title" => "Boy Kills World",
                "video" => false,
                "vote_average" => 6.765,
                "vote_count" => 113
            ],
            [
                "adult" => false,
                "backdrop_path" => "/otfoeC96neoOdA4HqsX06OWuzE9.jpg",
                "genre_ids" => [
                    27,
                    53
                ],
                "id" => 719221,
                "original_language" => "en",
                "original_title" => "Tarot",
                "overview" => "Bir grup arkadaş, Tarot fallarının kutsal kuralını pervasızca ihlal ettiğinde, bilmeden, lanetli kartların içinde hapsolmuş, anlatılamaz bir kötülüğü serbest bırakırlar. Birer birer kaderle yüzleşirler ve ölümle yarışırlar.",
                "popularity" => 735.97,
                "poster_path" => "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
                "release_date" => "2024-05-03",
                "title" => "Tarot",
                "video" => false,
                "vote_average" => 5.555,
                "vote_count" => 91
            ],
            [
                "adult" => false,
                "backdrop_path" => "/vWzJDjLPmycnQ42IppEjMpIhrhc.jpg",
                "genre_ids" => [
                    16,
                    35,
                    10751
                ],
                "id" => 748783,
                "original_language" => "en",
                "original_title" => "The Garfield Movie",
                "overview" => "Garfield'ın uzun süredir kayıp olan babası sokak kedisi Vic ile beklenmedik bir buluşma, Garfield ve sadık köpek arkadaşı Odie'yi kusursuz ve şımartılmış hayatlarından uzaklaştırır. Bu olağanüstü kesişme, ikiliyi Vic'in içinde bulunduğu komik ve yüksek riskli bir soygun planına sürükler. Garfield ve Odie, alıştıkları konfor bölgesinden çıkarak, Vic'in renkli ve tehlikeli dünyasına adım atmak zorunda kalır.",
                "popularity" => 617.552,
                "poster_path" => "/pJZLFzcGwu8FsYKPIPiD3dM26Vq.jpg",
                "release_date" => "2024-05-31",
                "title" => "Garfield",
                "video" => false,
                "vote_average" => 6.5,
                "vote_count" => 121
            ],
            [
                "adult" => false,
                "backdrop_path" => "/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
                "genre_ids" => [
                    27,
                    9648,
                    53
                ],
                "id" => 1041613,
                "original_language" => "en",
                "original_title" => "Immaculate",
                "overview" => "Amerikalı rahibe Cecilia, İtalya’daki göz alıcı bir manastırdan davet alır. Cecilia burada çok sıcak karşılanmıştır. Fakat bu kusursuz mekânın bazı karanlık ve korkutucu sırlar barındırdığını çok geçmeden anlar. Yeni evi, uğursuz ve anlatılamaz dehşetler yaşayacağı bir kâbusa dönüşür.",
                "popularity" => 441.672,
                "poster_path" => "/bg7IbhDcbnplBgnFGcTw46DvpIC.jpg",
                "release_date" => "2024-04-26",
                "title" => "Arınma",
                "video" => false,
                "vote_average" => 6.222,
                "vote_count" => 507
            ],
            [
                "adult" => false,
                "backdrop_path" => "/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg",
                "genre_ids" => [
                    10749,
                    18
                ],
                "id" => 937287,
                "original_language" => "en",
                "original_title" => "Challengers",
                "overview" => "Yaşadığı sakatlığın sonrasında tenisi bırakmak zorunda kalan Tashi, kendisini bir aşk üçgeninin içerisinde bulur.",
                "popularity" => 449.172,
                "poster_path" => "/9oOPHDtEzejWf3VKnZwtdPFZw4Y.jpg",
                "release_date" => "2024-04-26",
                "title" => "Rekabet",
                "video" => false,
                "vote_average" => 7.274,
                "vote_count" => 791
            ],
            [
                "adult" => false,
                "backdrop_path" => "/vpWVeIMNi0Np5shuKFE3QkneiTt.jpg",
                "genre_ids" => [
                    35,
                    14,
                    10751
                ],
                "id" => 639720,
                "original_language" => "en",
                "original_title" => "IF",
                "overview" => "Yalnızlıktan muzdarip olan bir adam, hayali arkadaşlar görmenin ve onlarla konuşmanın inanılmaz gücünü keşfeder. Böylece yakınları tarafından unutulmuş birçok insanla arkadaş olur. Ancak içlerinden bazılarının karanlık tarafa geçmesi işlerin karışmasına neden olur.",
                "popularity" => 291.535,
                "poster_path" => "/uu2tiwsg3wDAKhVLjWSqbc6tr3O.jpg",
                "release_date" => "2024-05-17",
                "title" => "Hayali Arkadaşlar",
                "video" => false,
                "vote_average" => 7.072,
                "vote_count" => 90
            ],
            [
                "adult" => false,
                "backdrop_path" => "/aINel9503ompOlGKn4sIVMg09Un.jpg",
                "genre_ids" => [
                    9648,
                    27,
                    53
                ],
                "id" => 838209,
                "original_language" => "ko",
                "original_title" => "파묘",
                "overview" => "Film, paranormal bir takım olaylarla çevrili olan varlıklı bir ailenin çocuklarını kurtarmak için yükselen genç şaman ikilisi Hwa Rim ve Bong Gil'den yardım alması sonrasında gelişen olayları konu almaktadır.",
                "popularity" => 221.604,
                "poster_path" => "/tw0i3kkmOTjDjGFZTLHKhoeXVvA.jpg",
                "release_date" => "2024-05-31",
                "title" => "Exhuma",
                "video" => false,
                "vote_average" => 7.445,
                "vote_count" => 119
            ],
            [
                "adult" => false,
                "backdrop_path" => "/fRIzLAIlhRc1QKe8lpXOcdmmfHJ.jpg",
                "genre_ids" => [
                    10402,
                    18
                ],
                "id" => 998846,
                "original_language" => "en",
                "original_title" => "Back to Black",
                "overview" => "",
                "popularity" => 216.823,
                "poster_path" => "/xHQEeUT3Ac4fTY72UeNrI75xLtE.jpg",
                "release_date" => "2024-05-03",
                "title" => "Back to Black",
                "video" => false,
                "vote_average" => 6.775,
                "vote_count" => 151
            ],
            [
                "adult" => false,
                "backdrop_path" => "/4yrOyO3N55XazHQXXYoqiiPQd40.jpg",
                "genre_ids" => [
                    27
                ],
                "id" => 938614,
                "original_language" => "en",
                "original_title" => "Late Night with the Devil",
                "overview" => "Johnny Carson'ın rakibi Jack Delroy, ülke çapındaki uykusuzluk çekenlerin uzun süredir güvendiği bir arkadaş olan 'Gece Baykuşları' adlı talk showa ev sahipliği yapmaktadır. Ancak programın reytingleri Jack'in karısının trajik ölümünden sonra düşer. Talihini tersine çevirmek için bir yol arayan Jack, 31 Ekim 1977'de eşi benzeri olmayan bir Cadılar Bayramı özel yayını planlar ama kötülüğü Amerika'nın oturma odalarına salmak üzere olduğundan habersizdir.",
                "popularity" => 161.498,
                "poster_path" => "/otner5oHX0jeHWPUmDYevu4eF4Y.jpg",
                "release_date" => "2024-05-31",
                "title" => "Şeytanla Bir Gece",
                "video" => false,
                "vote_average" => 7.297,
                "vote_count" => 411
            ],
            [
                "adult" => false,
                "backdrop_path" => "/6LksoR7reQ45gQRik0zhrHmcpZw.jpg",
                "genre_ids" => [
                    27,
                    53
                ],
                "id" => 1010600,
                "original_language" => "en",
                "original_title" => "The Strangers: Chapter 1",
                "overview" => "Korku üçlemesinin ilk filminde, tatile çıkan genç bir çiftin yolculukları sırasında arabaları bozulur ve geceyi şehirden uzakta bir Airbnb evinde geçirmek zorunda kalırlar. Gayet sakin başlayan geceleri 3 maskeli ziyaretçinin gelmesiyle kabusa döner.",
                "popularity" => 95.022,
                "poster_path" => "/qyT2xw9FBxHlNXQYsuNCu8T7Rbo.jpg",
                "release_date" => "2024-05-17",
                "title" => "Ziyaretçiler: Bölüm 1",
                "video" => false,
                "vote_average" => 5.3,
                "vote_count" => 29
            ],
            [
                "adult" => false,
                "backdrop_path" => "/osnvZffaZymubHiBkOsIFd8Y3Re.jpg",
                "genre_ids" => [
                    28,
                    27,
                    53
                ],
                "id" => 986070,
                "original_language" => "en",
                "original_title" => "The Wrath of Becky",
                "overview" => "Becky, yaşadığı travmatik olaylardan iki yıl sonra, organize bir saldırının arifesinde, bir neo-Nazi örgütünün lideri olan Darryl ile karşı karşıya gelir.",
                "popularity" => 58.813,
                "poster_path" => "/uKNCPaxYZgpsLGSHiasA5IisR3e.jpg",
                "release_date" => "2024-05-17",
                "title" => "Becky'nin Gazabı",
                "video" => false,
                "vote_average" => 6.382,
                "vote_count" => 266
            ],
            [
                "adult" => false,
                "backdrop_path" => "/f5pYm9znYtntwZYNoVG2tIfvpWq.jpg",
                "genre_ids" => [
                    12,
                    28,
                    18,
                    36
                ],
                "id" => 796185,
                "original_language" => "fr",
                "original_title" => "Les Trois Mousquetaires : D'Artagnan",
                "overview" => "Louvre'dan Palais de Buckingham'a, Paris'in göbeğinden La Rochelle'in merkezine kadar... Din savaşlarıyla bölünmüş ve İngiltere'nin istilasıyla tehdit edilmiş bir krallıkta, bir avuç erkek ve kadın kılıçlarını geçecek ve kaderlerini Fransa'nınkine bağlayacaktır.",
                "popularity" => 49.555,
                "poster_path" => "/lm0pfF0HSLsSpFlhGCmR6Bhl8EE.jpg",
                "release_date" => "2024-05-17",
                "title" => "Üç Silahşörler: D'Artagnan",
                "video" => false,
                "vote_average" => 7.023,
                "vote_count" => 1043
            ],
            [
                "adult" => false,
                "backdrop_path" => "/ujAHEr1smB5pzNYUMZpIj1Bm6uq.jpg",
                "genre_ids" => [
                    35,
                    878,
                    10749,
                    14
                ],
                "id" => 723347,
                "original_language" => "en",
                "original_title" => "Robots",
                "overview" => "Charles bir kadın avcısı, Elaine ise bir servet avcısıdır. İkili, birlik olup kendi robot ikizlerinin peşine düşmek zorunda kalınca gerçek aşkın nasıl bir şey olduğunu öğrenmeye başlarlar.",
                "popularity" => 30.88,
                "poster_path" => "/7wyZQPqOQT5tBkm0NMckmuc6yYE.jpg",
                "release_date" => "2024-05-24",
                "title" => "Yapay Sevgilim",
                "video" => false,
                "vote_average" => 5.591,
                "vote_count" => 182
            ],
            [
                "adult" => false,
                "backdrop_path" => "/H8YE8DDrnvr869RgCqLvhfcUFM.jpg",
                "genre_ids" => [
                    18
                ],
                "id" => 970348,
                "original_language" => "en",
                "original_title" => "The Old Oak",
                "overview" => "İngiltere’nin kuzeyinde, madenleri kapatılmış küçük bir kasabanın sakinleri için beklenmedik bir sabah olur. Geçim kaynakları sınırlı bu kasabaya mülteci ailelerin gelmesi bazılarını huzursuz eder. Başlarda zor olsa da zaman içinde aslında birbirlerinden farkları olmadığını gören iki taraf da birbirini kucaklayacaktır.",
                "popularity" => 19.923,
                "poster_path" => "/bcVvqlFXS2lZg2lBISGbT98SFPn.jpg",
                "release_date" => "2024-05-01",
                "title" => "Umudunu Kaybetme",
                "video" => false,
                "vote_average" => 7.216,
                "vote_count" => 245
            ],
            [
                "adult" => false,
                "backdrop_path" => "/rJjMY8ci9gVQBEG8169nfHvzL9o.jpg",
                "genre_ids" => [
                    28,
                    53
                ],
                "id" => 1264962,
                "original_language" => "tr",
                "original_title" => "Turbo",
                "overview" => "Erkan ve Murat, yakın arkadaşları İbo’nun küçük kardeşi Burak’ı ertesi sabah askere uğurlamadan önce biraz eğlendirmek, keyiflendirmek, bir pavyon sefası yaşatmak istemektedir. Gece şehre çökerken dört arkadaş yepyeni modifiye edilmiş, ışıklandırılmış, turbo gaz sistemi takılmış Şahin model arabaya doluşup maceraya doğru yola çıkar. Fakat saatler ilerledikçe aralarındaki problemler giderek su yüzüne çıkacak, agresyon, toksiklik ve tartışma seviyeleri giderek artacaktır. Kenar mahallelerden gelme çoğu genç erkek gibi içlerinde tuttukları öfke, kompleks, travma ve utanç giderek kabararak etrafa yayılacak, çıkacak bir yer bulamadıkça da birbirlerine dönecek, patlamaya hazır tek şeyin turbo motor olmadığı acı gerçeklerle anlaşılacaktır.",
                "popularity" => 27.265,
                "poster_path" => "/cNPUb6bsBgv6dpnQ7PEF74skR2L.jpg",
                "release_date" => "2024-05-31",
                "title" => "Turbo",
                "video" => false,
                "vote_average" => 0,
                "vote_count" => 0
            ],
            [
                "adult" => false,
                "backdrop_path" => null,
                "genre_ids" => [
                    53,
                    9648,
                    80
                ],
                "id" => 1287856,
                "original_language" => "tr",
                "original_title" => "Karanlıktan Kaçış",
                "overview" => "Başarılı gazeteci Anıl, yaşadığı büyük ihanetin ardından derin bir bunalıma sürüklenir ve şehrin karmaşasından uzaklaşarak sakin bir orman evine yerleşir. Ancak beklenmedik bir kaza sonucu tanıştığı Esin, Anıl'ın planlarını alt üst eder. Esin, amnezi hastası olmasıyla birlikte, peşindeki tehlikelerden kaçarken Anıl'ın da hayatını alt üst eder. Anıl, Esin'i saklamak zorunda kalır ve bu kaçış onları beklenmedik bir yolculuğa sürükler.",
                "popularity" => 24.468,
                "poster_path" => "/15sYHwQXSc3iuYju3NZn2vYiRet.jpg",
                "release_date" => "2024-05-31",
                "title" => "Karanlıktan Kaçış",
                "video" => false,
                "vote_average" => 0,
                "vote_count" => 0
            ],
            [
                "adult" => false,
                "backdrop_path" => "/bsvplO2lXmtMuxO9TgpD7mlas8K.jpg",
                "genre_ids" => [
                    27
                ],
                "id" => 943788,
                "original_language" => "en",
                "original_title" => "From Black",
                "overview" => "",
                "popularity" => 15.283,
                "poster_path" => "/9DG2g1Gl1ENAxFONIxxb5FMH99f.jpg",
                "release_date" => "2024-05-31",
                "title" => "Kara Ayin",
                "video" => false,
                "vote_average" => 5.295,
                "vote_count" => 39
            ]
        ];
        return response()->json($movies);
    }
}
