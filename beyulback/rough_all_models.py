from datetime import datetime, timezone
from django.db import models
from django.contrib.auth.models import User


def aware_utc_now():
    return datetime.now(timezone.utc)

# keep these global varaibes inside constants.py
GENDER = [
    ('', 'Choose..'),
    ('M', 'Male'),
    ('F', 'Female'),
    ('O', 'Other')
]

COUNTRY_CODES = ['0', '1', '20', '211', '212', '213', '216', '218', '220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243', '244', '245', '246', '248', '249', '250', '251', '252', '253', '254', '255', '256', '257', '258', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '27', '290', '291', '297', '298', '299', '30', '31', '32', '33', '34', '350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '36', '370', '371', '372', '373', '374', '375', '376', '377', '378', '379', '380', '381', '382', '385', '386', '387', '389', '39', '40', '41', '420', '421', '423', '43', '44', '45', '46', '47', '48', '49', '500', '501', '502', '503', '504', '505', '506', '507', '508', '509', '51', '52', '53', '54', '55', '56', '57', '58', '590', '591', '592', '593', '594', '595', '596', '597', '598', '599', '60', '61', '62', '63', '64', '65', '66', '670', '672', '673', '674', '675', '676', '677', '678', '679', '680', '681', '682', '683', '685', '686', '687', '688', '689', '690', '691', '692', '7', '81', '82', '84', '850', '852', '853', '855', '856', '86', '880', '886', '90', '91', '92', '93', '94', '95', '960', '961', '962', '963', '964', '965', '966', '967', '968', '970', '971', '972', '973', '974', '975', '976', '977', '98', '992', '993', '994', '995', '996', '998']

COUNTRIES = [
    ('AF', 'AFGHANISTAN'),
    ('AX', 'ÅLAND ISLANDS'),
    ('AL', 'ALBANIA'),
    ('DZ', 'ALGERIA'),
    ('AS', 'AMERICAN SAMOA'),
    ('AD', 'ANDORRA'),
    ('AO', 'ANGOLA'),
    ('AI', 'ANGUILLA'),
    ('AQ', 'ANTARCTICA'),
    ('AG', 'ANTIGUA AND BARBUDA'),
    ('AR', 'ARGENTINA'),
    ('AM', 'ARMENIA'),
    ('AW', 'ARUBA'),
    ('AU', 'AUSTRALIA'),
    ('AT', 'AUSTRIA'),
    ('AZ', 'AZERBAIJAN'),
    ('BS', 'BAHAMAS'),
    ('BH', 'BAHRAIN'),
    ('BD', 'BANGLADESH'),
    ('BB', 'BARBADOS'),
    ('BY', 'BELARUS'),
    ('BE', 'BELGIUM'),
    ('BZ', 'BELIZE'),
    ('BJ', 'BENIN'),
    ('BM', 'BERMUDA'),
    ('BT', 'BHUTAN'),
    ('BO', 'BOLIVIA, PLURINATIONAL STATE OF'),
    ('BQ', 'BONAIRE, SINT EUSTATIUS AND SABA'),
    ('BA', 'BOSNIA AND HERZEGOVINA'),
    ('BW', 'BOTSWANA'),
    ('BV', 'BOUVET ISLAND'),
    ('BR', 'BRAZIL'),
    ('IO', 'BRITISH INDIAN OCEAN TERRITORY'),
    ('BN', 'BRUNEI DARUSSALAM'),
    ('BG', 'BULGARIA'),
    ('BF', 'BURKINA FASO'),
    ('BI', 'BURUNDI'),
    ('KH', 'CAMBODIA'),
    ('CM', 'CAMEROON'),
    ('CA', 'CANADA'),
    ('CV', 'CAPE VERDE'),
    ('KY', 'CAYMAN ISLANDS'),
    ('CF', 'CENTRAL AFRICAN REPUBLIC'),
    ('TD', 'CHAD'),
    ('CL', 'CHILE'),
    ('CN', 'CHINA'),
    ('CX', 'CHRISTMAS ISLAND'),
    ('CC', 'COCOS (KEELING) ISLANDS'),
    ('CO', 'COLOMBIA'),
    ('KM', 'COMOROS'),
    ('CG', 'CONGO'),
    ('CD', 'CONGO, THE DEMOCRATIC REPUBLIC OF THE'),
    ('CK', 'COOK ISLANDS'),
    ('CR', 'COSTA RICA'),
    ('CI', 'CÔTE D\'IVOIRE'),
    ('HR', 'CROATIA'),
    ('CU', 'CUBA'),
    ('CW', 'CURAÇAO'),
    ('CY', 'CYPRUS'),
    ('CZ', 'CZECH REPUBLIC'),
    ('DK', 'DENMARK'),
    ('DJ', 'DJIBOUTI'),
    ('DM', 'DOMINICA'),
    ('DO', 'DOMINICAN REPUBLIC'),
    ('EC', 'ECUADOR'),
    ('EG', 'EGYPT'),
    ('SV', 'EL SALVADOR'),
    ('GQ', 'EQUATORIAL GUINEA'),
    ('ER', 'ERITREA'),
    ('EE', 'ESTONIA'),
    ('ET', 'ETHIOPIA'),
    ('FK', 'FALKLAND ISLANDS (MALVINAS)'),
    ('FO', 'FAROE ISLANDS'),
    ('FJ', 'FIJI'),
    ('FI', 'FINLAND'),
    ('FR', 'FRANCE'),
    ('GF', 'FRENCH GUIANA'),
    ('PF', 'FRENCH POLYNESIA'),
    ('TF', 'FRENCH SOUTHERN TERRITORIES'),
    ('GA', 'GABON'),
    ('GM', 'GAMBIA'),
    ('GE', 'GEORGIA'),
    ('DE', 'GERMANY'),
    ('GH', 'GHANA'),
    ('GI', 'GIBRALTAR'),
    ('GR', 'GREECE'),
    ('GL', 'GREENLAND'),
    ('GD', 'GRENADA'),
    ('GP', 'GUADELOUPE'),
    ('GU', 'GUAM'),
    ('GT', 'GUATEMALA'),
    ('GG', 'GUERNSEY'),
    ('GN', 'GUINEA'),
    ('GW', 'GUINEA-BISSAU'),
    ('GY', 'GUYANA'),
    ('HT', 'HAITI'),
    ('HM', 'HEARD ISLAND AND MCDONALD ISLANDS'),
    ('VA', 'HOLY SEE (VATICAN CITY STATE)'),
    ('HN', 'HONDURAS'),
    ('HK', 'HONG KONG'),
    ('HU', 'HUNGARY'),
    ('IS', 'ICELAND'),
    ('IN', 'INDIA'),
    ('ID', 'INDONESIA'),
    ('IR', 'IRAN, ISLAMIC REPUBLIC OF'),
    ('IQ', 'IRAQ'),
    ('IE', 'IRELAND'),
    ('IM', 'ISLE OF MAN'),
    ('IL', 'ISRAEL'),
    ('IT', 'ITALY'),
    ('JM', 'JAMAICA'),
    ('JP', 'JAPAN'),
    ('JE', 'JERSEY'),
    ('JO', 'JORDAN'),
    ('KZ', 'KAZAKHSTAN'),
    ('KE', 'KENYA'),
    ('KI', 'KIRIBATI'),
    ('KP', 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF'),
    ('KR', 'KOREA, REPUBLIC OF'),
    ('KW', 'KUWAIT'),
    ('KG', 'KYRGYZSTAN'),
    ('LA', 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC'),
    ('LV', 'LATVIA'),
    ('LB', 'LEBANON'),
    ('LS', 'LESOTHO'),
    ('LR', 'LIBERIA'),
    ('LY', 'LIBYA'),
    ('LI', 'LIECHTENSTEIN'),
    ('LT', 'LITHUANIA'),
    ('LU', 'LUXEMBOURG'),
    ('MO', 'MACAO'),
    ('MK', 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF'),
    ('MG', 'MADAGASCAR'),
    ('MW', 'MALAWI'),
    ('MY', 'MALAYSIA'),
    ('MV', 'MALDIVES'),
    ('ML', 'MALI'),
    ('MT', 'MALTA'),
    ('MH', 'MARSHALL ISLANDS'),
    ('MQ', 'MARTINIQUE'),
    ('MR', 'MAURITANIA'),
    ('MU', 'MAURITIUS'),
    ('YT', 'MAYOTTE'),
    ('MX', 'MEXICO'),
    ('FM', 'MICRONESIA, FEDERATED STATES OF'),
    ('MD', 'MOLDOVA, REPUBLIC OF'),
    ('MC', 'MONACO'),
    ('MN', 'MONGOLIA'),
    ('ME', 'MONTENEGRO'),
    ('MS', 'MONTSERRAT'),
    ('MA', 'MOROCCO'),
    ('MZ', 'MOZAMBIQUE'),
    ('MM', 'MYANMAR'),
    ('NA', 'NAMIBIA'),
    ('NR', 'NAURU'),
    ('NP', 'NEPAL'),
    ('NL', 'NETHERLANDS'),
    ('NC', 'NEW CALEDONIA'),
    ('NZ', 'NEW ZEALAND'),
    ('NI', 'NICARAGUA'),
    ('NE', 'NIGER'),
    ('NG', 'NIGERIA'),
    ('NU', 'NIUE'),
    ('NF', 'NORFOLK ISLAND'),
    ('MP', 'NORTHERN MARIANA ISLANDS'),
    ('NO', 'NORWAY'),
    ('OM', 'OMAN'),
    ('PK', 'PAKISTAN'),
    ('PW', 'PALAU'),
    ('PS', 'PALESTINE, STATE OF'),
    ('PA', 'PANAMA'),
    ('PG', 'PAPUA NEW GUINEA'),
    ('PY', 'PARAGUAY'),
    ('PE', 'PERU'),
    ('PH', 'PHILIPPINES'),
    ('PN', 'PITCAIRN'),
    ('PL', 'POLAND'),
    ('PT', 'PORTUGAL'),
    ('PR', 'PUERTO RICO'),
    ('QA', 'QATAR'),
    ('RE', 'RÉUNION'),
    ('RO', 'ROMANIA'),
    ('RU', 'RUSSIAN FEDERATION'),
    ('RW', 'RWANDA'),
    ('BL', 'SAINT BARTHÉLEMY'),
    ('SH', 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA'),
    ('KN', 'SAINT KITTS AND NEVIS'),
    ('LC', 'SAINT LUCIA'),
    ('MF', 'SAINT MARTIN (FRENCH PART)'),
    ('PM', 'SAINT PIERRE AND MIQUELON'),
    ('VC', 'SAINT VINCENT AND THE GRENADINES'),
    ('WS', 'SAMOA'),
    ('SM', 'SAN MARINO'),
    ('ST', 'SAO TOME AND PRINCIPE'),
    ('SA', 'SAUDI ARABIA'),
    ('SN', 'SENEGAL'),
    ('RS', 'SERBIA'),
    ('SC', 'SEYCHELLES'),
    ('SL', 'SIERRA LEONE'),
    ('SG', 'SINGAPORE'),
    ('SX', 'SINT MAARTEN (DUTCH PART)'),
    ('SK', 'SLOVAKIA'),
    ('SI', 'SLOVENIA'),
    ('SB', 'SOLOMON ISLANDS'),
    ('SO', 'SOMALIA'),
    ('ZA', 'SOUTH AFRICA'),
    ('GS', 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS'),
    ('SS', 'SOUTH SUDAN'),
    ('ES', 'SPAIN'),
    ('LK', 'SRI LANKA'),
    ('SD', 'SUDAN'),
    ('SR', 'SURINAME'),
    ('SJ', 'SVALBARD AND JAN MAYEN'),
    ('SZ', 'SWAZILAND'),
    ('SE', 'SWEDEN'),
    ('CH', 'SWITZERLAND'),
    ('SY', 'SYRIAN ARAB REPUBLIC'),
    ('TW', 'TAIWAN, PROVINCE OF CHINA'),
    ('TJ', 'TAJIKISTAN'),
    ('TZ', 'TANZANIA, UNITED REPUBLIC OF'),
    ('TH', 'THAILAND'),
    ('TL', 'TIMOR-LESTE'),
    ('TG', 'TOGO'),
    ('TK', 'TOKELAU'),
    ('TO', 'TONGA'),
    ('TT', 'TRINIDAD AND TOBAGO'),
    ('TN', 'TUNISIA'),
    ('TR', 'TURKEY'),
    ('TM', 'TURKMENISTAN'),
    ('TC', 'TURKS AND CAICOS ISLANDS'),
    ('TV', 'TUVALU'),
    ('UG', 'UGANDA'),
    ('UA', 'UKRAINE'),
    ('AE', 'UNITED ARAB EMIRATES'),
    ('GB', 'UNITED KINGDOM'),
    ('US', 'UNITED STATES'),
    ('UM', 'UNITED STATES MINOR OUTLYING ISLANDS'),
    ('UY', 'URUGUAY'),
    ('UZ', 'UZBEKISTAN'),
    ('VU', 'VANUATU'),
    ('VE', 'VENEZUELA, BOLIVARIAN REPUBLIC OF'),
    ('VN', 'VIET NAM'),
    ('VG', 'VIRGIN ISLANDS, BRITISH'),
    ('VI', 'VIRGIN ISLANDS, U.S.'),
    ('WF', 'WALLIS AND FUTUNA'),
    ('EH', 'WESTERN SAHARA'),
    ('YE', 'YEMEN'),
    ('ZM', 'ZAMBIA'),
    ('ZW', 'ZIMBABWE'),
]

PACKAGES = [
    ('fam', 'Family Package'),
]

class Profile(User):
    gender = models.CharField(max_length=20, choices=GENDER, blank=True, default='', null=False)
    points = models.PositiveIntegerField()


class Climber(User):
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['passport_num', 'country'],
                name='passport_and_country'
        )]

    passport_num = models.PositiveBigIntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=False, choices=COUNTRIES)


class Guide(User):
    pass


class Blog(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    # JSONField is supported on MariaDB 10.2.7+, MySQL 5.7.8+, Oracle,
    # PostgreSQL, and SQLite 3.9.0+ (with the JSON1 extension enabled).
    tags = models.CharField(max_length=100) # use JSON?
    likes = models.PositiveIntegerField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # update below field when publishing. 
    published_at = models.DateTimeField(default=aware_utc_now)
    thumbnail = models.ImageField(
        max_length=200,
        upload_to='blog_thumbs/',
        default='blog_thumbs/default.jpeg',
    )
    author = models.OneToOneField('Staff', on_delete=models.CASCADE)


class Review(Blog):
    visible = models.BooleanField(default=True)
    replies = models.ForeignKey('self', on_delete=models.CASCADE)


class Place(models.Model):
    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(rating__gte=0, name='greater_than_-1')
            ),
            models.CheckConstraint(
                check=models.Q(rating__ste=10, name='smaller_than_11')
            ),
        ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    rating = models.SmallIntegerField()
    latitude = models.DecimalField(max_digits=10, decimal_places=8)
    longitude = models.DecimalField(max_digits=11, decimal_places=8)
    price = models.PositiveBigIntegerField('rate in NPR cents')
    discount = models.PositiveSmallIntegerField('Percentages???')


class Package(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    rating = models.SmallIntegerField()
    package_type = models.CharField(max_length=50, choices=PACKAGES)
    route = models.JSONField()


class Peak(Package):
    name = models.CharField(max_length=100) # choices?
    height = models.PositiveIntegerField('height in cm')


class Booking(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    email = models.EmailField()
    country_code = models.CharField(max_length=3, choices=COUNTRY_CODES)
    phone = models.CharField(max_length=12)
    destination = models.ForeignKey('Place')
    paid = models.PositiveBigIntegerField('paid amount in NPR cents')
    payment_service = models.CharField(max_length=30) # choices??
    discount = models.PositiveSmallIntegerField('Percentages???')
    booked_date = models.DateTimeField(auto_now_add=True)


