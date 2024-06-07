export type iFilterSortBy =
    | "popularity.asc"
    | "popularity.desc"
    | "release_date.asc"
    | "release_date.desc"
    | "revenue.asc"
    | "revenue.desc"
    | "primary_release_date.asc"
    | "primary_release_date.desc"
    | "original_title.asc"
    | "original_title.desc"
    | "vote_average.asc"
    | "vote_average.desc"
    | "vote_count.asc"
    | "vote_count.desc";

export type iFilterOriginalLanguage =
    | "en" // English
    | "fr" // French
    | "es" // Spanish
    | "de" // German
    | "it" // Italian
    | "ja" // Japanese
    | "ko" // Korean
    | "zh" // Chinese
    | "pt" // Portuguese
    | "ru" // Russian
    | "hi" // Hindi
    | "ar" // Arabic
    | "bn" // Bengali
    | "cs" // Czech
    | "da" // Danish
    | "el" // Greek
    | "he" // Hebrew
    | "hu" // Hungarian
    | "id" // Indonesian
    | "ms" // Malay
    | "nl" // Dutch
    | "no" // Norwegian
    | "pl" // Polish
    | "ro" // Romanian
    | "sv" // Swedish
    | "ta" // Tamil
    | "th" // Thai
    | "tr" // Turkish
    | "uk" // Ukrainian
    | "vi" // Vietnamese
    | null;

export type iFilterGenres = number;
