const DUMMY_EVENTS = [
  {
    key: 1,
    id: '580442939',
    subtitle: 'Acraze Feat. Cherish',
    title: 'Do It To It',
    url: 'https://www.shazam.com/track/580442939/do-it-to-it',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/3b/da/58/3bda58c3-4cb9-b30d-b455-035010707df9/21UMGIM70915.rgb.jpg/400x400cc.jpg'                                     
  },
  {
    key: 2,
    id: '579595745',
    subtitle: 'Elton John & Dua Lipa',
    title: 'Cold Heart (PNAU Remix)',
    url: 'https://www.shazam.com/track/579595745/cold-heart-pnau-remix',                                                  
    image: 'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/db/29/07/db290719-0123-4b57-8593-426925c454ba/21UMGIM74865.rgb.jpg/400x400cc.jpg'                                     
  }
];

const global_genres = [
  [
    {
      key: 1,
      id: 'DE',
      listid: 'ip-country-chart-DE',
      name: 'Germany'
    },
    { key: 2, id: 'TW', listid: 'ip-country-chart-TW', name: 'Taiwan' },
    {
      key: 3,
      id: 'PT',
      listid: 'ip-country-chart-PT',
      name: 'Portugal'
    },
    {
      key: 4,
      id: 'DK',
      listid: 'ip-country-chart-DK',
      name: 'Denmark'
    },
    {
      key: 5,
      id: 'HR',
      listid: 'ip-country-chart-HR',
      name: 'Croatia'
    },
    {
      key: 6,
      id: 'UA',
      listid: 'ip-country-chart-UA',
      name: 'Ukraine'
    },
    {
      key: 7,
      id: 'HU',
      listid: 'ip-country-chart-HU',
      name: 'Hungary'
    },
    {
      key: 8,
      id: 'MA',
      listid: 'ip-country-chart-MA',
      name: 'Morocco'
    },
    {
      key: 9,
      id: 'ID',
      listid: 'ip-country-chart-ID',
      name: 'Indonesia'
    },
    {
      key: 10,
      id: 'IE',
      listid: 'ip-country-chart-IE',
      name: 'Ireland'
    },
    {
      key: 11,
      id: 'US',
      listid: 'ip-country-chart-US',
      name: 'United States'
    },
    { key: 12, id: 'EG', listid: 'ip-country-chart-EG', name: 'Egypt' },
    {
      key: 13,
      id: 'IL',
      listid: 'ip-country-chart-IL',
      name: 'Israel'
    },
    {
      key: 14,
      id: 'UY',
      listid: 'ip-country-chart-UY',
      name: 'Uruguay'
    },
    { key: 15, id: 'IN', listid: 'ip-country-chart-IN', name: 'India' },
    {
      key: 16,
      id: 'ZA',
      listid: 'ip-country-chart-ZA',
      name: 'South Africa'
    },
    { key: 17, id: 'IT', listid: 'ip-country-chart-IT', name: 'Italy' },
    {
      key: 18,
      id: 'MX',
      listid: 'ip-country-chart-MX',
      name: 'Mexico'
    },
    {
      key: 19,
      id: 'MY',
      listid: 'ip-country-chart-MY',
      name: 'Malaysia'
    },
    { key: 20, id: 'ES', listid: 'ip-country-chart-ES', name: 'Spain' },
    {
      key: 21,
      id: 'VE',
      listid: 'ip-country-chart-VE',
      name: 'Venezuela'
    },
    {
      key: 22,
      id: 'AR',
      listid: 'ip-country-chart-AR',
      name: 'Argentina'
    },
    {
      key: 23,
      id: 'AT',
      listid: 'ip-country-chart-AT',
      name: 'Austria'
    },
    {
      key: 24,
      id: 'AU',
      listid: 'ip-country-chart-AU',
      name: 'Australia'
    },
    {
      key: 25,
      id: 'RO',
      listid: 'ip-country-chart-RO',
      name: 'Romania'
    },
    {
      key: 26,
      id: 'NL',
      listid: 'ip-country-chart-NL',
      name: 'Netherlands'
    },
    {
      key: 27,
      id: 'NO',
      listid: 'ip-country-chart-NO',
      name: 'Norway'
    },
    {
      key: 28,
      id: 'RU',
      listid: 'ip-country-chart-RU',
      name: 'Russia'
    },
    {
      key: 29,
      id: 'BE',
      listid: 'ip-country-chart-BE',
      name: 'Belgium'
    },
    {
      key: 30,
      id: 'FI',
      listid: 'ip-country-chart-FI',
      name: 'Finland'
    },
    {
      key: 31,
      id: 'BG',
      listid: 'ip-country-chart-BG',
      name: 'Bulgaria'
    },
    { key: 32, id: 'JP', listid: 'ip-country-chart-JP', name: 'Japan' },
    {
      key: 33,
      id: 'FR',
      listid: 'ip-country-chart-FR',
      name: 'France'
    },
    {
      key: 34,
      id: 'NZ',
      listid: 'ip-country-chart-NZ',
      name: 'New Zealand'
    },
    {
      key: 35,
      id: 'SA',
      listid: 'ip-country-chart-SA',
      name: 'Saudi Arabia'
    },
    {
      key: 36,
      id: 'BR',
      listid: 'ip-country-chart-BR',
      name: 'Brazil'
    },
    {
      key: 37,
      id: 'SE',
      listid: 'ip-country-chart-SE',
      name: 'Sweden'
    },
    {
      key: 38,
      id: 'SG',
      listid: 'ip-country-chart-SG',
      name: 'Singapore'
    },
    {
      key: 39,
      id: 'BY',
      listid: 'ip-country-chart-BY',
      name: 'Belarus'
    },
    {
      key: 40,
      id: 'GB',
      listid: 'ip-country-chart-GB',
      name: 'United Kingdom'
    },
    {
      key: 41,
      id: 'CA',
      listid: 'ip-country-chart-CA',
      name: 'Canada'
    },
    {
      key: 42,
      id: 'CH',
      listid: 'ip-country-chart-CH',
      name: 'Switzerland'
    },
    {
      key: 43,
      id: 'KR',
      listid: 'ip-country-chart-KR',
      name: 'South Korea'
    },
    { key: 44, id: 'CL', listid: 'ip-country-chart-CL', name: 'Chile' },
    {
      key: 45,
      id: 'GR',
      listid: 'ip-country-chart-GR',
      name: 'Greece'
    },
    { key: 46, id: 'CN', listid: 'ip-country-chart-CN', name: 'China' },
    {
      key: 47,
      id: 'CO',
      listid: 'ip-country-chart-CO',
      name: 'Colombia'
    },
    {
      key: 48,
      id: 'KZ',
      listid: 'ip-country-chart-KZ',
      name: 'Kazakhstan'
    },
    {
      key: 49,
      id: 'CR',
      listid: 'ip-country-chart-CR',
      name: 'Costa Rica'
    },
    {
      key: 50,
      id: 'TH',
      listid: 'ip-country-chart-TH',
      name: 'Thailand'
    },
    { key: 51, id: 'PE', listid: 'ip-country-chart-PE', name: 'Peru' },
    {
      key: 52,
      id: 'CZ',
      listid: 'ip-country-chart-CZ',
      name: 'Czechia'
    },
    {
      key: 53,
      id: 'PL',
      listid: 'ip-country-chart-PL',
      name: 'Poland'
    },
    {
      key: 54,
      id: 'TR',
      listid: 'ip-country-chart-TR',
      name: 'Turkey'
    }
  ],
  [
    {
      key: 1,
      id: 'global-1',
      listid: 'genre-global-chart-1',
      name: 'Pop'
    },
    {
      key: 2,
      id: 'global-2',
      listid: 'genre-global-chart-2',
      name: 'Hip-Hop/Rap'
    },
    {
      key: 3,
      id: 'global-3',
      listid: 'genre-global-chart-3',
      name: 'Dance'
    },
    {
      key: 4,
      id: 'global-4',
      listid: 'genre-global-chart-4',
      name: 'Electronic'
    },
    {
      key: 5,
      id: 'global-5',
      listid: 'genre-global-chart-5',
      name: 'R&B/Soul'
    },
    {
      key: 6,
      id: 'global-6',
      listid: 'genre-global-chart-6',
      name: 'Alternative'
    },
    {
      key: 7,
      id: 'global-7',
      listid: 'genre-global-chart-7',
      name: 'Rock'
    },
    {
      key: 8,
      id: 'global-8',
      listid: 'genre-global-chart-8',
      name: 'Latin'
    },
    {
      key: 9,
      id: 'global-9',
      listid: 'genre-global-chart-9',
      name: 'Film, TV & Stage'
    },
    {
      key: 10,
      id: 'global-10',
      listid: 'genre-global-chart-10',
      name: 'Country'
    },
    {
      key: 11,
      id: 'global-11',
      listid: 'genre-global-chart-11',
      name: 'AfroBeats'
    },
    {
      key: 12,
      id: 'global-12',
      listid: 'genre-global-chart-12',
      name: 'Worldwide'
    },
    {
      key: 13,
      id: 'global-13',
      listid: 'genre-global-chart-13',
      name: 'Reggae/Dancehall'
    },
    {
      key: 14,
      id: 'global-14',
      listid: 'genre-global-chart-14',
      name: 'House'
    },
    {
      key: 15,
      id: 'global-15',
      listid: 'genre-global-chart-15',
      name: 'K-Pop'
    },
    {
      key: 16,
      id: 'global-16',
      listid: 'genre-global-chart-16',
      name: 'French Pop'
    },
    {
      key: 17,
      id: 'global-17',
      listid: 'genre-global-chart-17',
      name: 'Singer/Songwriter'
    },
    {
      key: 18,
      id: 'global-18',
      listid: 'genre-global-chart-18',
      name: 'Regional Mexicano'
    }
  ]
];
export async function Data(){
	return global_genres;
}


