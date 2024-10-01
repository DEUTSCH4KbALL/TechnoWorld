const state = {
    products: [
        {
            url: 'noutbuk_asus_tuf_gaming_f15_fx507zc4_fx507zc4-hn009~2158~1615.webp',
            text: "Ноутбук",
            desc: "Опис ноутбука: ASUS TUF GAMING F15 ",
            price: "37679"
        },
        {
            url: 'mysh_hator_pulsar_2_pro_wireless_black_htm-530~727~1382.webp',
            text: "Комп'ютерна миша",
            desc: "Опис комп'ютерної миші: Миш Hator Pulsar 2 Pro Wireless Black (HTM-530) ",
            price: "37 679"
        },
        {
            url: 'kovrik_havit_hv-mp860_black_red~665~282.webp',
            text: "Килимок для миші",
            desc: "Опис комп'ютерної миші: Миш Hator Pulsar 2 Pro Wireless Black (HTM-530) ",
            price: "1 200"
        },
        {
            url: 'podstavka_dlya_noutbuka_gamepro_cp485~1332~848.webp',
            text: "Підставка",
            desc: "Опис підставки: GamePro CP485",
            price: "799"
        },
        {
            url: 'videokarta_msi_pci-e_geforce_rtx3060_lhr_12gb_ddr6_rtx_3060_ventus_3x_12g_oc~862~365.webp',
            text: "Відеокарта",
            desc: "Опис відеокарти: Відеокарта MSI PCI-E GeForce RTX3060 LHR 12GB DDR6 (RTX 3060 VENTUS 3X 12G OC)",
            price: "15 399"
        },
        {
            url: 'router_tp-link_archer_a64~762~813.webp',
            text: "Роутер",
            desc: "Опис роутера: Роутер TP-Link Archer A64",
            price: "2 399"
        },
        {
            url: 'protsessor_amd_ryzen_5_5600_s-am4_3_5ghz_32mb_tray_100-000000927~1000~1000.webp',
            text: "Процесор",
            desc: "Опис монітора: Монітор 45\" AOC AGON Pro AG456UCZD",
            price: "60 567"
        },
        {
            url: 'kabel_hdmi_-_dvi_dynamode_1_8_m_dm-cl-hdmi-dvi-1_8m~584~627.webp',
            text: "Кабель HDMI",
            desc: "Опис HDMI: Кабель HDMI -> DVI Dynamode 1.8 м (DM-CL-HDMI-DVI-1.8M)",
            price: "269"
        },
        {
            url: '3469a-17205440614957-1920.avif',
            text: "Intel Core i9",
            desc: "Опис Процесора: Intel Core Ultra 9 185H - це топовий чіп сімейства Meteor Lake, що дебютував у грудні 2023 року. Цей процесор 1-го покоління Core Ultra прийшов на зміну чипам Core 13-го покоління; у його розпорядженні 16 ядер (6 + 8 + 2) та 22 потоки.",
            price: "18 942 + Подарунок 2 процессори"
        },
        {
            url: '1847489_zoom_result.webp',
            text: "Планшет",
            desc: "Опис планшета: Lenovo Tab M11 8/128 LTE (ZADB0330UA) Seafoam Green + Case&Pen ",
            price: "10 999"
        },
        {
            url: 'naushniki_canyon_cnd-gtws2b_gaming_black~999~887.webp',
            text: "Навушниуи",
            desc: "Опис навушників: Canyon CND-GTWS2B Gaming Black ",
            price: "999"
        },
        {
            url: 'kompyuter_artline_gaming_y60_white_y60whitev24~1672~1656.webp',
            text: "Комп'ютер",
            desc: "Опис комп'ютера: Комп'ютер Artline Gaming Y60 White (Y60WHITEv24) ",
            price: "203 849"
        },
        {
            url: 'mobilnyy_telefon_apple_iphone_15_plus_256gb_blue_mu1f3_ua~1494~2000.webp',
            text: "Телефон",
            desc: "Опис iPhone: Мобільний телефон Apple iPhone 15 Plus 256GB Blue (MU1F3) UA ",
            price: "45 999"
        },
        {
            url: 'kvadrokopter_dji_mavic_3t_cp_en_00000415_01~2046~900.webp',
            text: "Квадрокоптер",
            desc: "Опис квадрокоптера: Квадрокоптер DJI Mavic 3T (CP.EN.00000415.01) ",
            price: "103 999"
        },
        {
            url: 'noutbuk_acer_travelmate_spin_p4_tmp414rn-52-50kg_nx_vw8eu_006~1406~864.webp',
            text: "Ноутбук",
            desc: "Опис ноутбука: Ноутбук Acer TravelMate Spin P4 TMP414RN-52-50KG (NX.VW8EU.006) ",
            price: "24 452"
        },
        {
            url: 'naushniki_apple_airpods_pro_2_white_mqd83~2500~2130.webp',
            text: "Навушники Apple",
            desc: "Опис навушників: Навушники Apple AirPods Pro 2 White (MQD83) ",
            price: "10 9999"
        },
        {
            url: 'modul_pamyati_so-dimm_micron_ddr3_8gb_1600mhz_mt16ktf1g64hz-1g6p1~969~437.webp',
            text: "Модульe",
            desc: "Опис модуля пам'яті: Модуль пам'яті SO-DIMM Micron DDR3 8GB 1600MHz (MT16KTF1G64HZ-1G6P1)",
            price: "800"
        },
        {
            url: 'televizor_xiaomi_tv_a_pro_65~1500~1408.webp',
            text: "Телевізор",
            desc: "Опис телевізора: Телевізор Xiaomi TV A Pro 65\"",
            price: "27 999"
        },
        {
            url: 'materinskaya_plata_gigabyte_b550_gaming_x_v2_s-am4_b550~792~981.webp',
            text: "Материнська плата",
            desc: "Опис Материнської плати: Материнська плата Gigabyte B550 Gaming X V2 s-AM4 B550",
            price: "5 599"
        },
        {
            url: 'sistema_vodyanogo_ohlazhdeniya_deepcool_ld240_r-ld240_bkmsn-g-1~2500~1135.webp',
            text: "Система охолодження",
            desc: "Опис системи охолодження: Система водяного охолодження DeepCool LD240 (R-LD240–BKMSN-G-1)",
            price: "5 109"
        },
        {
            url: 'eilik-2-800x800.jpg',
            text: "Робот Ейлік",
            desc: "Опис корпуса: Корпус 1stPlayer R5-3R1 Color LED Black б/БЖ",
            price: "3 399"
        },
        {
            url: 'chehol_dlya_macbook_pro_15_retina_jcpal_matte_gray_jcp2080~972~708.webp',
            text: "Чохол",
            desc: "Опис Чохла: Чохол для MacBook Pro 15\" Retina Jcpal Matte Gray (JCP2080) ",
            price: "409"
        },
        {
            url: 'monitor_24_asus_vg249qm1a~699~651.webp',
            text: "Монітор",
            desc: "Опис Монітора: Монітор 24\" Asus VG249QM1A ",
            price: "11 799"
        },
        {
            url: 'monitor_24_asus_vg249qm1a~699~651.webkompyuternyy_stol_dxracer_gd_003_n~2256~1992.webpp',
            text: "Монітор",
            desc: "Опис Монітора: Монітор 24\" Asus VG249QM1A ",
            price: "11 799"
        },
        {
            url: 'monitor_24_asus_vg249qm1a~699~651.webp',
            text: "Монітор",
            desc: "Опис Монітора: Монітор 24\" Asus VG249QM1A ",
            price: "11 799"
        }
    ],
}
export default state