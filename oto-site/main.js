let brandSelect = document.getElementById('brands');
let modelSelect = document.getElementById('models');
let serviceWrapper = document.getElementById('service-list');

let reservationBrand = document.getElementById('reservationBrand');
let reservationModel = document.getElementById('reservationModel');

let cars = [
	{
		'name': 'Seat',
		'models': [
			{
				'name': 'Seat Ateca 5F (2017 -)',
			},
			{
				'name': 'Seat Ibiza 6F (2017 - )',
			},
			{
				'name': 'Seat Ibiza 6J (2009 - 2014 )',
			},
			{
				'name': 'Seat Ibiza 6P(2014 - 2017 )',
			},
			{
				'name': 'Seat Leon 5F (2013 -)',
			},
            {
                'name': 'Seat Leon MK2',
            }
		]
	},
	{
		'name': 'Skoda',
		'models': [
            {
                'name': 'Skoda Fabia 3 6C (2015 -)',
            },
            {
                'name': 'Skoda Karoq (2017 - )',
            },
            {
                'name': 'Skoda Kodiaq (2016 - )',
            },
            {
                'name': 'Skoda Octavia A7 (2013 - )',
            },
            {
                'name': 'Skoda Superb 3 (2016 - )',
            }

		]
	},
	{
		'name': 'Volkswagen',
		'models': [
            {
                'name': 'Volkswagen Arteon 3H (2016 - )',
            },
            {
                'name': 'Volkswagen Caddy 2K (2012 -)',
            },
            {
                'name': 'Volkswagen CC (Passat CC)',
            },
            {
                'name': 'Volkswagen Golf 6',
            },
            {
                'name': 'Volkswagen Golf 7 (2013 - )',
            },
            {
                'name': 'Volkswagen Jetta 5C',
            },
            {
                'name': 'Volkswagen Passat B8 (2015 - )',
            },
            {
                'name': 'Volkswagen Polo 6C (2014 - 2017 )',
            },
            {
                'name': 'Volkswagen Polo 6R (2009 - 2014 )',
            },
            {
                'name': 'Volkswagen Scirocco typ 13 (2008 - 2018)',
            },
            {
                'name': 'Volkswagen Tiguan 2 AD (2016 - )',
            },
            {
                'name': 'Volkswagen Tiguan 5N (2007 - 2016)',
            },
            {
                'name': 'Volkswagen T-Roc (Typ A1 )',
            }
		]
	},
	{
		'name': 'Audi',
		'models': [
            {
                'name': 'Audi A3 (2013 – )',
            },
            {
                'name': 'Audi A4 B8 (2008 - 2016)',
            },
            {
                'name': 'Audi A5 (2007 - 2016)',
            }

		]
	}
];

let features = [
	{
		'model': 'Seat Ateca 5F (2017 -)',
		'features': [
			{
			'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
			'description':  '1. Kadran Selamlama (Hayalet Kadranlarda Çalışmaz)\n' +
                            '2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
                            '3. Tur Zamanlayıcı (Laptimer)\n' +
                            '4. Multimedya Sistemine Optik Park Görseli (Park Sensörünün Ekrana Yansıması)\n' +
                            '5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
                            '6. Emniyet Kemeri İkazı İptali\n' +
                            '7. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (FR,Cupra)\n' +
                            '8. Multimedya Sistemi Açılış Logosu Değiştirme (FR, Cupra)\n' +
                            '9. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
                            '10. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
                            '11. Hayalet Kadran 300 KM/H Son Hız\n' +
                            '12. Hayalet Kadran Cupra Logosu\n' +
                            '13. Hayalet Kadran Cupra Sport Gösterge Teması\n'
		},
			{
                        'name': 'FAR-AYDINLATMA',
                        'description':
                            '1. Amerikan Parklar (LED Farlarda Açılmaz)\n' +
                            '2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
                            '3. Selektörle Sisler\n' +
                            '4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
                            '5. Dönüşe Duyarlı Sis Farı\n' +
                            '6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
                            '7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
                            '8. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
                            '9. Sinyal Verince Ledlerin Kısılması\n' +
                            '10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
                            '11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
                            '12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
                    },
                    {
                        'name': 'KONFOR - AÇMA - KAPAMA',
                        'description':
                            '1. Korna ile Kapı Kilit Onay Sesi\n' +
                            '2. Hırsızlık Önleyici Alarm Kodlaması\n' +
                            '3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
                            '4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
                            '5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
                            '6. Geri Viteste Arka Sileceklerin Çalışması\n' +
                            '7. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
                            '8. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
                            '9. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
                            '10. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n' +
                            '11. Tek Dokunuşla Ayna Katlama\n'
                    },
                    {
                        'name': 'GÜVENLİK - PERFORMANS',
                        'description':
                           '1. Gaz Pedalı Tepkisi Hızlandırma\n' +
                            '2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
                            '3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
                            '4. XDS Kilitli Difransiyel Güçlendirme\n' +
                            '5. TSC Sistemini Devreye Alma\n' +
                            '6. Yokuş Kalkış Desteği Güçlendirme\n'
                    }
		]
	},
	{
		'model': 'Seat Ibiza 6F (2017 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':  '1. Kadran Selamlama\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Tur Zamanlayıcı (Laptimer)\n' +
					'4. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'5. Emniyet Kemeri İkazı İptali\n' +
					'6. Multimedya Sistemi Açılış Logosu Değiştirme (GTI,R Line)\n' +
					'7. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'8. Multimedya Sisteminde Off-Road Menüsü\n' +
					'9. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Coming-Home ve Leaving Home\n' +
					'2. Ayna Sinyallerini Amerikan Park Olarak Ayarlama\n' +
					'3. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'6. Dönüşe Duyarlı Sis Farı\n' +
					'7. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'8. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'9. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'10. Sinyal Verince Ledlerin Kısılması\n' +
					'11. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'12. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'13. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'7. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'8. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Seat Ibiza 6J (2009 - 2014 )',
		'features': [
			{
				'name' : 'GENEL',
				'description': '1Dönüşe Duyarlı Sis Farı\n' +
					'2. Selektörle Sisler\n' +
					'3. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'4. Ek Yakıt (Depodaki boş yakıt rezervini gösterir - 2012 Haziran Sonrası Araçlarda)\n' +
					'5. Korna ile Kapı Kilit Onay Sesi\n' +
					'6. Hırsızlık-Gasp Önleyici Alarm Kodlaması\n' +
					'7. Araç Hızı 15 km/h \'yi Geçince Kapıların Otomatik Kilitlenmesi\n' +
					'8. Anahtarı Kontaktan Çıkarınca Kapı Kilitlerinin Açılması\n' +
					'9. Emniyet Kemeri İkazı İptali\n' +
					'10. Coming-Home Özelliğinin Açılması (Arabadan İnerken 1 Kere Selektör Atınca Işıklar Belirli Bir Süre Açık Kalır)\n' +
					'11. Dokunmatik Sinyalin 3\'ten 5\'e Çıkarılması\n' +
					'12. XDS Kilitli Difransiyel Aktivasyonu (Daha İyi Yol Tutuşu Sağlar - Sadece CUPRA Araçlarda)\n' +
					'13. TSC Sisteminin Açılması (Sert Kalkışta Direksiyon Türbülansını Engeller - Sadece CUPRA Araçlarda) Not: Seat Ibiza 6J\'de Amerikan Park Özelliği Yoktur.\n'
			}
		]
	},
	{
		'model': 'Seat Ibiza 6P(2014 - 2017 )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':  '1. Kadran Selamlama\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Tur Zamanlayıcı (Laptimer)\n' +
					'4. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'5. Emniyet Kemeri İkazı İptali\n' +
					'6. Multimedya Sistemi Açılış Logosu Değiştirme (GTI,R Line)\n' +
					'7. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'8. Multimedya Sisteminde Off-Road Menüsü\n' +
					'9. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (2014 modellerde açılmaz)\n' +
					'2. Ayna Sinyallerini Amerikan Park Olarak Ayarlama\n' +
					'3. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'6. Dönüşe Duyarlı Sis Farı\n' +
					'7. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'8. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'9. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'10. Sinyal Verince Ledlerin Kısılması\n' +
					'11. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (2014 Modellerde Çalışmaz)\n' +
					'12. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'13. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'7. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'8. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Seat Leon 5F (2013 -)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description': '1. Kadran Selamlama\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Tur Zamanlayıcı (Laptimer)\n' +
					'4. Multimedya Sistemine Optik Park Görseli (Park Sensörünün Ekrana Yansıması)\n' +
					'5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'6. Emniyet Kemeri İkazı İptali\n' +
					'7. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (FR,Cupra)\n' +
					'8. Multimedya Sistemi Açılış Logosu Değiştirme (FR, Cupra)\n' +
					'9. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'10. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Ledlerin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n' +
					'12. Tek Dokunuşla Ayna Katlama\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Seat Leon MK2',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (Cupra,FR)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n' +
					'7. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'6. Sinyal Verince Ledlerin Kısılması\n' +
					'7. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'8. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'7. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'10. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'11. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi(Destekleyen Araçlarda)\n' +
					'7. Kumandadan Ayna Katlama\n' +
					'8. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n'
			}
		]
	},
	{
		'model': 'Skoda Fabia 3 6C (2015 -)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Tur Zamanlayıcı (Laptimer)\n' +
					'4. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'5. Emniyet Kemeri İkazı İptali\n' +
					'6. Multimedya Sistemi Açılış Logosu Değiştirme (GTI,R Line)\n' +
					'7. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'8. Destekleyen Multimedya Sistemlerinde Off-Road Menüsü\n' +
					'9. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Ayna Sinyallerini Amerikan Park Olarak Ayarlama\n' +
					'3. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'6. Dönüşe Duyarlı Sis Farı\n' +
					'7. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'8. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'9. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'10. Sinyal Verince Ledlerin Kısılması\n' +
					'11. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'12. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'13. El Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'5. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'6. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'7. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Skoda Karoq (2017 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge vRS Tema (Kırmızı-Karbon Tema)\n' +
					'3. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'4. Tur Zamanlayıcı (Laptimer)\n' +
					'5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'6. Emniyet Kemeri İkazı İptali\n' +
					'7. Renkli Yol Bilgisayarı Karbon Tema (vRS Tema)\n' +
					'8. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (vRS,Laurin Klement)\n' +
					'9. Multimedya Sistemi Açılış Logosu Değiştirme (vRS, Laurin&Klement)\n' +
					'10. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'11. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'12. Columbus Hareket Halinde Video İzleme\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)(Led farlarda açılmaz)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Led Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Gündüz Ledlerinin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'7. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'8. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'9. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'10. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Skoda Kodiaq (2016 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge vRS Teması (Kırmızı-Carbon Tema)\n' +
					'3. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'4. Tur Zamanlayıcı (Laptimer)\n' +
					'5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'6. Emniyet Kemeri İkazı İptali\n' +
					'7. Renkli Yol Bilgisayarı Karbon Tema (vRS Tema)\n' +
					'8. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (vRS,Laurin Klement)\n' +
					'9. Multimedya Sistemi Açılış Logosu Değiştirme (vRS, Laurin&Klement)\n' +
					'10. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'11. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'12. Columbus Hareket Halinde Video İzleme\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)(Makyajlı kasada bulunan Led farlarda açılmaz)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Led Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Gündüz Ledlerinin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'7. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'8. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'9. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'10. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Skoda Octavia A7 (2013 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge VRS Teması (Kırımızı Carbon Tema)\n' +
					'3. Hayalet Gösterge Açılış Animasyonu\n' +
					'4. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'5. Tur Zamanlayıcı (Laptimer)\n' +
					'6. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'7. Emniyet Kemeri İkazı İptali\n' +
					'8. Renkli Yol Bilgisayarı Karbon Tema (vRS Tema)\n' +
					'9. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (vRS,Laurin Klement)\n' +
					'10. Multimedya Sistemi Açılış Logosu Değiştirme (vRS, Laurin&Klement)\n' +
					'11. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'12. Hayalet Gösterge ve Teype 10 Farklı Renk Seçeneği Ekleme\n' +
					'13. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'14. Columbus Hareket Halinde Video İzleme\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)(Makyajlı kasada bulunan Led farlarda açılmaz)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Led Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Gündüz Ledlerinin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Skoda Superb 3 (2016 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
				'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge vRS Teması (Kırmızı-Karbon Tema)\n' +
					'3. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'4. Tur Zamanlayıcı (Laptimer)\n' +
					'5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'6. Emniyet Kemeri İkazı İptali\n' +
					'7. Renkli Yol Bilgisayarı Karbon Tema (vRS Tema)\n' +
					'8. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (vRS,Laurin Klement)\n' +
					'9. Multimedya Sistemi Açılış Logosu Değiştirme (vRS, Laurin&Klement)\n' +
					'10. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'11. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'12. Columbus Hareket Halinde Video İzleme\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Led Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Gündüz Ledlerinin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'7. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'8. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'9. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'10. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Volkswagen Arteon 3H (2016 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge 320 KM/H veya 280 KM/H Son Hız Kodlaması\n' +
					'3. Hayalet Gösterge Teması Değiştirme (Ekstra Animasyonlar)\n' +
					'4. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'5. Tur Zamanlayıcı (Laptimer)\n' +
					'6. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'7. Emniyet Kemeri İkazı İptali\n' +
					'8. Renkli Yol Bilgisayarı Karbon Tema (GTI Tema)\n' +
					'9. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (R, GTI, GTD)\n' +
					'10. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTI,GTD)\n' +
					'11. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'12. Hayalet Gösterge, Teyp ve Ambiyans Aydınlatma için 10 Farklı Renk Seçeneği Ekleme\n' +
					'13. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'14. Discover Pro Hareket Halinde Video İzleme (Ek Ücrete Tabidir)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'2. Selektörle Sisler\n' +
					'3. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'6. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'7. Gündüz Led Parlaklıklarının Arttırılması\n' +
					'8. Sinyal Verince Gündüz Ledlerinin Kısılması\n' +
					'9. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'10. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'11. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n' +
					'Not: Listeye yazmadığımız özellikler olabilir. Geldiğinizde belirtebilirsiniz.\n' +
					'Özellikler Elegance ve R Line donanım seviyelerinde değişiklik gösterir.\n' +
					'Gizli özellikler aracınıza zarar vermez ve garanti dışı bırakmaz.\n' +
					'Bazı özellikler muayeneden geçmeyebilir,Whatsapp\'tan bilgi alınız.\n'
			}
		]
	},
	{
		'model': 'Volkswagen Caddy 2K (2012 -)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTD)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Çamurluk Sinyallerinin Amerikan Park Olarak Ayarlanması\n' +
					'3. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'4. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'5. Selektörle Sisler\n' +
					'6. Dönüşe Duyarlı Sis Farı\n' +
					'7. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'8. Sinyal Verince Ledlerin Kısılması\n' +
					'9. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'10. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'11. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'12. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi(Kapı kilit tuşuna bastığınızda korna ile kapının kilitlendiğini onaylar)\n' +
					'2. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'3. Ayna Katlama Olan Araçlarda Kumandadan Ayna Katlama (Ek Ücrete Tabidir)\n' +
					'4. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'5. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'6. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n'
			}
		]
	},
	{
		'model': 'Volkswagen CC (Passat CC)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTD)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'3. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'7. Sinyal Verince Ledlerin Kısılması\n' +
					'8. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'9. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'10. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'11. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'12. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi(Sadece Alarm Hazırlığı Olan Araçlarda Açılır)\n' +
					'2. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'3. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'4. Ayna Katlama Olan Araçlarda Kumandadan Ayna Katlama (Destekleyen BCM Ünitelerinde)\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi(Destekleyen Araçlarda)\n' +
					'7. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n'
			}
		]
	},
	{
		'model': 'Volkswagen Golf 6',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTD)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'3. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'7. Sinyal Verince Ledlerin Kısılması\n' +
					'8. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'9. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'10. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'11. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'12. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Buzzer ile Kapı Kilit Onay Sesi(Sadece Alarm Hazırlığı Olan Araçlarda Açılır)\n' +
					'2. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'3. Ayna Katlama Olan Araçlarda Kumandadan Ayna Katlama (Ek ücrete tabidir.)\n' +
					'4. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'5. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n'
			}
		]
	},
	{
		'model': 'Volkswagen Golf 7 (2013 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge 320 KM/H veya 280 KM/H Son Hız Kodlaması\n' +
					'3. Hayalet Gösterge Teması Değiştirme (Ekstra Animasyonlar)\n' +
					'4. Hayalet Gösterge R Logosu\n' +
					'5. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'6. Tur Zamanlayıcı (Laptimer)\n' +
					'7. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'8. Emniyet Kemeri İkazı İptali\n' +
					'9. Renkli Yol Bilgisayarı Karbon Tema (GTI Tema)\n' +
					'10. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (R, GTI, GTD)\n' +
					'11. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTI,GTD)\n' +
					'12. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'13. Hayalet Gösterge ve Teype 10 Farklı Renk Seçeneği Ekleme\n' +
					'14. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'15. Discover Pro Hareket Halinde Video İzleme (Ek Ücrete Tabidir)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)\n' +
					'2. Led Stop Olan Araçlarda Arka Sinyallerin Sıralı Yanması\n' +
					'3. Led Stop Olan Araçlarda Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'6. Dönüşe Duyarlı Sis Farı\n' +
					'7. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'8. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'9. Bi-Xenonlu Araçlarda Viraj Farının Selektörde Yanıp Sönmesi\n' +
					'10. U Led Parlaklıklarının Arttırılması\n' +
					'11. Sinyal Verince U Ledlerin Kısılması\n' +
					'12. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'13. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'14. Park Frenini Çekince Gündüz Farlarının Sönmesi\n' +
					'15. Bagaj Üstündeki Park Lambaların Fren Lambası Olarak Kullanılması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Volkswagen Jetta 5C',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTD)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n' +
					'7. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'6. Sinyal Verince Ledlerin Kısılması\n' +
					'7. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'8. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'7. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'10. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'11. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
				'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi(Destekleyen Araçlarda)\n' +
					'7. Kumandadan Ayna Katlama\n' +
					'8. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n'
			}
		]
	},
	{
		'model': 'Volkswagen Passat B8 (2015 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge 320 KM/H veya 280 KM/H Son Hız Kodlaması\n' +
					'3. Hayalet Gösterge Teması Değiştirme (Ekstra Animasyonlar)\n' +
					'4. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'5. Tur Zamanlayıcı (Laptimer)\n' +
					'6. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'7. Emniyet Kemeri İkazı İptali\n' +
					'8. Renkli Yol Bilgisayarı Karbon Tema (GTI Tema)\n' +
					'9. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (R, GTI, GTD)\n' +
					'10. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTI,GTD)\n' +
					'11. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'12. Hayalet Gösterge ve Teype 10 Farklı Renk Seçeneği Ekleme\n' +
					'13. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'14. Discover Pro Hareket Halinde Video İzleme (Ek Ücrete Tabidir)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Led Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Gündüz Ledlerinin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Volkswagen Polo 6C (2014 - 2017 )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Tur Zamanlayıcı (Laptimer)\n' +
					'4. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'5. Emniyet Kemeri İkazı İptali\n' +
					'6. Multimedya Sistemi Açılış Logosu Değiştirme (GTI,R Line)\n' +
					'7. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'8. Destekleyen Multimedya Sistemlerinde Off-Road Menüsü\n' +
					'9. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Ayna Sinyallerini Amerikan Park Olarak Ayarlama\n' +
					'3. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'6. Dönüşe Duyarlı Sis Farı\n' +
					'7. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'8. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'9. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'10. Sinyal Verince Ledlerin Kısılması\n' +
					'11. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'12. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'13. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Alarm olan araçlarda buzzerdan öter)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Volkswagen Polo 6R (2009 - 2014 )',
		'features': [
			{
				'name' : 'GENEL',
				'description':
					'1.\tDönüşe Duyarlı Sis Farı\n' +
					'2. Selektörle Sisler\n' +
					'3. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'4. Ek Yakıt (Depodaki boş yakıt rezervini gösterir - 2012 Haziran Sonrası Araçlarda)\n' +
					'5. Korna ile Kapı Kilit Onay Sesi\n' +
					'6. Hırsızlık-Gasp Önleyici Alarm Kodlaması\n' +
					'7. Araç Hızı 15 km/h \'yi Geçince Kapıların Otomatik Kilitlenmesi\n' +
					'8. Anahtarı Kontaktan Çıkarınca Kapı Kilitlerinin Açılması\n' +
					'9. Emniyet Kemeri İkazı İptali\n' +
					'10. Coming-Home Özelliğinin Açılması (Arabadan İnerken 1 Kere Selektör Atınca Işıklar Belirli Bir Süre Açık Kalır)\n' +
					'11. Dokunmatik Sinyalin 3\'ten 5\'e Çıkarılması\n' +
					'12. XDS Kilitli Difransiyel Aktivasyonu (Daha İyi Yol Tutuşu Sağlar - Sadece GTI Araçlarda)\n' +
					'13. TSC Sisteminin Açılması (Sert Kalkışta Direksiyon Türbülansını Engeller - Sadece GTI Araçlarda)\n'
			}
		]
	},
	{
		'model': 'Volkswagen Scirocco typ 13 (2008 - 2018)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTD)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'3. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'4. Selektörle Sisler\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'7. Sinyal Verince Ledlerin Kısılması\n' +
					'8. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'9. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'10. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'11. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'12. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi(Sadece Alarm Hazırlığı Olan Araçlarda Açılır)\n' +
					'2. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'3. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'4. Ayna Katlama Olan Araçlarda Kumandadan Ayna Katlama (Destekleyen BCM Ünitelerinde)\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi(Destekleyen Araçlarda)\n' +
					'7. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
				'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n' +
					'Not: Listeye yazmadığımız özellikler olabilir. Geldiğinizde belirtebilirsiniz.\n' +
					'Özellikler Midline, Comfortline, Highline ve R Line donanım seviyelerinde değişiklik gösterir.\n'
			}
		]
	},
	{
		'model': 'Volkswagen Tiguan 2 AD (2016 - )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge 320 KM/H veya 280 KM/H Son Hız Kodlaması\n' +
					'3. Hayalet Gösterge Teması Değiştirme (Ekstra Animasyonlar)\n' +
					'4. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'5. Tur Zamanlayıcı (Laptimer)\n' +
					'6. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'7. Emniyet Kemeri İkazı İptali\n' +
					'8. Renkli Yol Bilgisayarı Karbon Tema (GTI Tema)\n' +
					'9. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (R, GTI, GTD)\n' +
					'10. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTI,GTD)\n' +
					'11. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'12. Hayalet Gösterge ve Teype 10 Farklı Renk Seçeneği Ekleme\n' +
					'13. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'14. Discovery Pro Hareket Halinde Video İzleme\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)(Led Farlarda Açılmaz)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Led Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Gündüz Ledlerinin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'olkswagen Tiguan 5N (2007 - 2016)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTD)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n' +
					'7. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
				'1. Amerikan Parklar\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'6. Sinyal Verince Ledlerin Kısılması\n' +
					'7. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'8. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'7. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'10. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'11. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi(Sadece Alarm Hazırlığı Olan Araçlarda)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması(Sadece Alarm Hazırlığı Olan Araçlarda)\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi(Destekleyen Araçlarda)\n' +
					'7. Kumandadan Ayna Katlama (Ayna Katlama Olan Araçlarda)\n' +
					'8. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n'
			}
		]
	},

	{
		'model': 'Volkswagen Tiguan 5N (2007 - 2016)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama (2012 Haziran Sonrası Araçlarda)\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Yol Bilgisayarından Gündüz Farı Açıp Kapama\n' +
					'4. Emniyet Kemeri İkazı İptali\n' +
					'5. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTD)\n' +
					'6. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme - Sadece RCD 310)\n' +
					'7. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'6. Sinyal Verince Ledlerin Kısılması\n' +
					'7. Stop Lambaları ve Sinyallerin Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'8. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'7. Far Sensörü Olmayan Araçlarda Coming-Home Özelliğini Açma (Araçtan İnerken Bir Kere Selektör Yapınca Devreye Girer)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme\n' +
					'10. Coming-Home ve Leaving Home Özelliğini Park ve Sis Farı Üzerinden Yapması\n' +
					'11. Akşamları Geri Vitese Takınca Ön Sislerin Yanması\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi(Sadece Alarm Hazırlığı Olan Araçlarda)\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması(Sadece Alarm Hazırlığı Olan Araçlarda)\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi(Destekleyen Araçlarda)\n' +
					'7. Kumandadan Ayna Katlama (Ayna Katlama Olan Araçlarda)\n' +
					'8. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
				'1. XDS Kilitli Difransiyel Güçlendirme\n' +
					'2. TSC Sistemini Devreye Alma\n' +
					'3. Yokuş Kalkış Desteği Güçlendirme\n' +
					'4. Lastik Basınç İzleme Sistemini Açılması (Olmayan Araçlarda)\n'
			}
		]
	},
	{
		'model': 'Volkswagen T-Roc (Typ A1 )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Hayalet Gösterge 300 KM/H veya 280 KM/H Son Hız Kodlaması\n' +
					'3. Hayalet Gösterge Teması Değiştirme (Ekstra Animasyonlar)\n' +
					'4. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'5. Tur Zamanlayıcı (Laptimer)\n' +
					'6. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'7. Emniyet Kemeri İkazı İptali\n' +
					'8. Multimedya Sistemi Açılış Logosu Değiştirme (R Line, GTI,GTD)\n' +
					'9. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'10. Hayalet Gösterge, Teyp için 10 Farklı Renk Seçeneği Ekleme\n' +
					'11. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n' +
					'12. Discover Pro Hareket Halinde Video İzleme (Ek Ücrete Tabidir)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'2. Selektörle Sisler\n' +
					'3. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'6. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'7. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof\'un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Audi A3 (2013 – )',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Ek Yakıt Özelliği (Almanız Gereken Yakıtı Litre Olarak Yol Bilgisayarında Gösterir)\n' +
					'3. Tur Zamanlayıcı (Laptimer)\n' +
					'4. Multimedya Sistemine Optik Park Görseli (Park Sensörünün Ekrana Yansıması)\n' +
					'5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'6. Emniyet Kemeri İkazı İptali\n' +
					'7. Renkli Yol Bilgisayarı Açılış Logosu Değiştirme (S3, RS3)\n' +
					'8. Multimedya Sistemi Açılış Logosu Değiştirme (S3, RS3)\n' +
					'9. Driving School Özelliği (Multimedia Üzerinde Anlık Hızı ve Sinyali Görme)\n' +
					'10. Yağ Sıcaklığının Bilgi Ekranında Gözükmesi\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar (Açma Kapama ve Parlaklık Ayarlı)\n' +
					'2. Arka Sinyallerin Amerikan Park Olarak Ayarlanması\n' +
					'3. Selektörle Sisler\n' +
					'4. Gündüz Farı ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'5. Dönüşe Duyarlı Sis Farı\n' +
					'6. Selektör Yapınca Gündüz Farlarının Sönmesi\n' +
					'7. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'8. Gündüz Ledi Parlaklıklarının Arttırılması\n' +
					'9. Sinyal Verince Ledlerin Kısılması\n' +
					'10. Stop Lambaları ve Sinyallerin Çakarlı veya Aynı Anda Yanıp Sönmesi (Sinyal Verince)\n' +
					'11. Far Kolu “0” veya “Auto” Konumundayken Stopların Sürekli Yanması\n' +
					'12. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi\n' +
					'2. Hırsızlık Önleyici Alarm Kodlaması\n' +
					'3. Yağmurda Camların ve Sunroof’un Otomatik Kapanması\n' +
					'4. Konfor Sinyal Sayısının 4e veya 5e çıkarılması\n' +
					'5. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'6. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'7. Geri Viteste Arka Sileceklerin Çalışması\n' +
					'8. Kumandadan Sunroofun Tam Açılıp Kapanması (Normalde Sadece Arkası Kalkar)\n' +
					'9. Far Sensörü Olan Araçlarda Coming-Home Özelliğini Otomatiğe Çevirme (Normalde İnerken Selektör Yapmanız Gerekir)\n' +
					'10. Far Sensörü Olmayan Araçlarda Coming-Home ve Leaving Home Özelliğini Açma\n' +
					'11. Klima Auto Moddaylen Fan Hızının da Gözükmesi\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. ESC Spor ve ESC Kapalı (Normalde Sadece ASR Devre Dışı Bırakılır)\n' +
					'3. Direksiyon Sertleştirme (Sürüş Mod Seçimi Olmayan Araçlarda)\n' +
					'4. XDS Kilitli Difransiyel Güçlendirme\n' +
					'5. TSC Sistemini Devreye Alma\n' +
					'6. Yokuş Kalkış Desteği Güçlendirme\n'
			}
		]
	},
	{
		'model': 'Audi A4 B8 (2008 - 2016)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Seyir Halinde Video&DVD İzleme (+100 TL) *Bu özellik aracınıza video izleme özelliği kazandırmaz. Video izlenebilen ünitelerde hareket halinde video izlemeyi aktif eder\n' +
					'3. Tur Zamanlayıcı ve Yağ Sıcaklığı (Laptimer)\n' +
					'4. Multimedya Sistemine Optik Park Görseli (Ünitenizin Desteklemesi Lazım)\n' +
					'5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'6. Emniyet Kemeri İkazı İptali\n' +
					'7. Multimedya Sistemi Açılış Logosu Değiştirme (S4, SLINE Not: Facelift A4 lerde logo seçeneği bulunmamaktadır)\n' +
					'8. Ayrıca Destekleyen Ünitelere Navigasyon Yüklemesi Yapmaktayız (EK ÜCRETE TABİDİR. FİYAT ALMAK İÇİN ARAYINIZ)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Selektörle Sisler\n' +
					'3. Ayak Aydınlatmasının Sürüş Esnasında da Açık Kalması\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Gündüz Ledlerinin Parlaklığının Arttırılması\n' +
					'6. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'7. İç Aydınlatmanın Teyp Üzerinden Parlaklığının Ayarlanması\n' +
					'8. Sinyal Verince Ledlerin Kısılması\n' +
					'9. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'10. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Sadece Orjinal Alarm Olan Araçlarda Çalışır)\n' +
					'2. Gaza Dokununca Park Freninin Otomatik İnmesi (Emniyet Kemeri Takılı Olmasa Bile)\n' +
					'3. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'4. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'5. Geri Viteste Arka Sileceklerin Çalışması (Avant Araçlarda)\n' +
					'\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. Hafızalı Start Stop (Son Tercihinizi Hatırlar)\n' +
					'3. Lastik Basınç İzleme Sisteminin Aktif Edilmesi\n'
			}
		]
	},
	{
		'model': 'Audi A5 (2007 - 2016)',
		'features': [
			{
				'name' : 'GÖSTERGE PANELİ - MULTİMEDİA',
				'description':
					'1. Kadran Selamlama\n' +
					'2. Seyir Halinde Video&DVD İzleme (+100 TL) *Bu özellik aracınıza video izleme özelliği kazandırmaz. Video izlenebilen ünitelerde hareket halinde video izlemeyi aktif eder\n' +
					'3. Tur Zamanlayıcı ve Yağ Sıcaklığı (Laptimer)\n' +
					'4. Multimedya Sistemine Optik Park Görseli (Ünitenizin Desteklemesi Lazım)\n' +
					'5. Teyp Üzerinden Gündüz Farı Açıp Kapama\n' +
					'6. Emniyet Kemeri İkazı İptali\n' +
					'7. Multimedya Sistemi Açılış Logosu Değiştirme (S5, SLINE Not: Facelift A5 lerde logo seçeneği bulunmamaktadır)\n' +
					'8. Ayrıca Destekleyen Ünitelere Navigasyon Yüklemesi Yapmaktayız (EK ÜCRETE TABİDİR. FİYAT ALMAK İÇİN ARAYINIZ)\n'
			},
			{
				'name': 'FAR-AYDINLATMA',
				'description':
					'1. Amerikan Parklar\n' +
					'2. Selektörle Sisler\n' +
					'3. Ayak Aydınlatmasının Sürüş Esnasında da Açık Kalması\n' +
					'4. Dönüşe Duyarlı Sis Farı\n' +
					'5. Gündüz Ledlerinin Parlaklığının Arttırılması\n' +
					'6. Halojen Farlı Araçlarda Selektöre Kısa Farlarında Eklenmesi\n' +
					'7. İç Aydınlatmanın Teyp Üzerinden Parlaklığının Ayarlanması\n' +
					'8. Sinyal Verince Ledlerin Kısılması\n' +
					'9. Far Kolu "0" veya "Auto" Konumundayken Stopların Sürekli Yanması\n' +
					'10. Park Frenini Çekince Gündüz Farlarının Sönmesi\n'
			},
			{
				'name': 'KONFOR - AÇMA - KAPAMA',
				'description':
					'1. Korna ile Kapı Kilit Onay Sesi (Sadece Orjinal Alarm Olan Araçlarda Çalışır)\n' +
					'2. Gaza Dokununca Park Freninin Otomatik İnmesi (Emniyet Kemeri Takılı Olmasa Bile)\n' +
					'3. Ani Frenlerde Fren Lambalarının Flaşör Olması ve 4lülerin Yanması\n' +
					'4. Geri Viteste Sağ Aynanın Aşağı İnmesi\n' +
					'5. Geri Viteste Arka Sileceklerin Çalışması (Avant Araçlarda)\n' +
					'\n'
			},
			{
				'name': 'GÜVENLİK - PERFORMANS',
				'description':
					'1. Gaz Pedalı Tepkisi Hızlandırma\n' +
					'2. Hafızalı Start Stop (Son Tercihinizi Hatırlar)\n' +
					'3. Lastik Basınç İzleme Sisteminin Aktif Edilmesi\n'
			}
		]
	},

];

cars.forEach(function (item, i){
   let brandOption = document.createElement('option');
   brandOption.text = item.name;
   brandOption.value = item.name;

	let brandOption2 = document.createElement('option');
	brandOption2.text = item.name;
	brandOption2.value = item.name;

   brandSelect.appendChild(brandOption);
   reservationBrand.appendChild(brandOption2);
});

reservationBrand.addEventListener('change', function(e){
	let selectedBrand = reservationBrand.value;
	reservationModel.innerHTML = '';

	let modelDefaultOption = document.createElement('option');
	modelDefaultOption.text = 'Model Seçiniz';
	modelDefaultOption.value = '';

	modelSelect.appendChild(modelDefaultOption);

	cars.forEach(function(item, i){
		if(selectedBrand === item.name){
			let models = item.models;
			if(models.length > 0){
				models.forEach(function(item, i){
					let modelOption = document.createElement('option');
					modelOption.text = item.name;
					modelOption.value = item.name;

					reservationModel.appendChild(modelOption);
				});
			}

			return;
		}
	});
});

brandSelect.addEventListener('change', function(e){
   let selectedBrand = brandSelect.value;
	modelSelect.innerHTML = '';
	
	let modelDefaultOption = document.createElement('option');
	modelDefaultOption.text = 'Model Seçiniz';
	modelDefaultOption.value = '';

	modelSelect.appendChild(modelDefaultOption);
	
	cars.forEach(function(item, i){
		if(selectedBrand === item.name){
			let models = item.models;
			if(models.length > 0){
				models.forEach(function(item, i){
					let modelOption = document.createElement('option');
					modelOption.text = item.name;
					modelOption.value = item.name;
					
					modelSelect.appendChild(modelOption);
				});
			}
			
			return;
		}
	});
});

modelSelect.addEventListener('change', function(e){
	let selectedModel = modelSelect.value;
	
	let clonedElements = document.querySelectorAll('.cloned');
	if(clonedElements && clonedElements.length > 0){
		clonedElements.forEach(function(e){
			e.parentNode.removeChild(e);
		});
	}
	
	features.forEach(function(item, i){
		if(selectedModel === item.model){
			let foundFeatures = item.features;
			foundFeatures.forEach(function(feature, j){
				let serviceBox = document.querySelector('.clone-this').cloneNode(true);
				
				serviceBox.getElementsByTagName('span')[0].innerHTML = feature.name;
				serviceBox.getElementsByTagName('p')[0].innerHTML = feature.description.replaceAll('\n', '<br/>');
				
				serviceBox.style.display = "inline-block";
				serviceBox.classList.remove('clone-this');
				serviceBox.classList += ' cloned';
				
				serviceWrapper.appendChild(serviceBox);
			});
			
			return;
		}
	});
});