'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9382e680732a90999bea1fb0ae36cb52",
"index.html": "f60701226c9828c913113b4b31ee7a93",
"/": "f60701226c9828c913113b4b31ee7a93",
"main.dart.js": "13572f0d49f4b939cefa5cf4343255b0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8533be10a85a8a48f7e418d6ab1a8bea",
"assets/AssetManifest.json": "1bac2bcfa2bbdddbddb9af235c483a10",
"assets/NOTICES": "e84e8a4711579fe28368d2b22cd95dc4",
"assets/FontManifest.json": "c0fe098f4c229f586f7e707d76df60a2",
"assets/assets/logos/workflow-logo-pink-500-mark-gray-900-text.svg": "e9607a4b2c5bf19d13417e498e0841e2",
"assets/assets/logos/workflow-mark-pink-500.svg": "025668a6db0e292dae04146fa439d67a",
"assets/assets/icons/solid/hand.svg": "9a38ea4c07484ffd26929c8de17baa00",
"assets/assets/icons/solid/search.svg": "0e235e588657e6507ea53e4a1d61eb65",
"assets/assets/icons/solid/arrow-down.svg": "81281f73d1aff58fa3e14479510878c3",
"assets/assets/icons/solid/volume-off.svg": "1d151cc0ae43de3eed05280cc9e4d52f",
"assets/assets/icons/solid/dots-horizontal.svg": "79a687117808c857c2846d4614bd5b65",
"assets/assets/icons/solid/scissors.svg": "36f1e8a126e22e928def2f901bdf1d79",
"assets/assets/icons/solid/cog.svg": "f41a4c321b6547b5a8cb3f743fdbcc8c",
"assets/assets/icons/solid/currency-pound.svg": "ef403b4522c171eed664946ccafbadb4",
"assets/assets/icons/solid/sort-descending.svg": "63ae8e54f61989f00cfbca74e46ff19b",
"assets/assets/icons/solid/reply.svg": "255ae6ca66f0d6a88786dedc463f7cca",
"assets/assets/icons/solid/thumb-up.svg": "e41618f9560b6180de6161ab52cd5b8e",
"assets/assets/icons/solid/translate.svg": "7d8ad865266e949688d70a45dc2ca5fc",
"assets/assets/icons/solid/adjustments.svg": "186f4238e1d03cb71c87ede1e6f4bea1",
"assets/assets/icons/solid/user.svg": "29c56727c6c5a46c1dc43cf67deeb76b",
"assets/assets/icons/solid/view-grid.svg": "d874ec6f666c11447783901bd77148ce",
"assets/assets/icons/solid/receipt-tax.svg": "a6fa95d63f20b8b1736c33767349297b",
"assets/assets/icons/solid/x-circle.svg": "066cf318e1d163db12e630ef4b69b709",
"assets/assets/icons/solid/view-list.svg": "56dfb12c9d1eda77e79e03be24029364",
"assets/assets/icons/solid/home.svg": "dce6f2944152a8debde2eb053363c0d0",
"assets/assets/icons/solid/globe-alt.svg": "6c2508a6f49459bd13a4defe44426d9f",
"assets/assets/icons/solid/chevron-double-right.svg": "f6905b1882030321532a4f34f8346286",
"assets/assets/icons/solid/library.svg": "17984740fe8ff64d6f5a1c0d7e3ed936",
"assets/assets/icons/solid/chevron-down.svg": "2cab57aa67d0bcd6c5c7d0e18245a666",
"assets/assets/icons/solid/chevron-double-left.svg": "565fc00447b5f0f4d7b97b9bce9982fe",
"assets/assets/icons/solid/logout.svg": "b084d8d33bff2931254430fd0fde9dfb",
"assets/assets/icons/solid/chip.svg": "c0c65c174ef66ba30fe1d57d39ba917b",
"assets/assets/icons/solid/ticket.svg": "ea8cde79781ac800acfc5d9a22daccfa",
"assets/assets/icons/solid/tag.svg": "fd849a82e285d4458b429add4204f4b4",
"assets/assets/icons/solid/briefcase.svg": "cdd4eff8d8f8ae5f893bba18d4cceb12",
"assets/assets/icons/solid/arrow-circle-up.svg": "884f54f9b708a3f2467e055cb2d7f6f5",
"assets/assets/icons/solid/save-as.svg": "6eada9044f13539362d08a53e9aac942",
"assets/assets/icons/solid/document-search.svg": "2f2fa3bd6389857ab9f6da26262d99e7",
"assets/assets/icons/solid/map.svg": "7a99ff7e5c458fd1ee257de73fcc43b7",
"assets/assets/icons/solid/inbox.svg": "aaaf302a44fad303274d0187dd7c6624",
"assets/assets/icons/solid/microphone.svg": "75410ce42342282514c3674d58d492c9",
"assets/assets/icons/solid/database.svg": "794440b27976f8c15975868a1b0520dc",
"assets/assets/icons/solid/puzzle.svg": "5277c900958fcf82ceede43043a93f8b",
"assets/assets/icons/solid/duplicate.svg": "b538c956945d67fa19af9dc90eeab1db",
"assets/assets/icons/solid/folder-remove.svg": "7ac4c20ec493f6622f8bf42ba53d34c7",
"assets/assets/icons/solid/terminal.svg": "e7c5d58a392431291bdff27d03adfb6e",
"assets/assets/icons/solid/sparkles.svg": "64f8368fa3d69c8357970e6e63f79af5",
"assets/assets/icons/solid/chevron-up.svg": "22f19d8529cc1bd56c414d6088767c3d",
"assets/assets/icons/solid/folder-open.svg": "bfd2ba2d1210c05c141b16b16d9ed081",
"assets/assets/icons/solid/document-add.svg": "b0976fa539b66a0ee37216bc19efbf05",
"assets/assets/icons/solid/x.svg": "3129dc82fe272b993c55312b4eaa54ad",
"assets/assets/icons/solid/at-symbol.svg": "7ac78619258e42898093d896a4ce59b9",
"assets/assets/icons/solid/bookmark-alt.svg": "39696083c714decdd1bd50d017d49a2f",
"assets/assets/icons/solid/cloud-upload.svg": "e037446359c1392806f43b7e9807a954",
"assets/assets/icons/solid/fire.svg": "cd773302dec8d674038de3fa276f3dac",
"assets/assets/icons/solid/ban.svg": "cc8c2054777eb77cd031178aaa8f177b",
"assets/assets/icons/solid/shopping-bag.svg": "3e6b830c0d512da5485bc208effc5c3e",
"assets/assets/icons/solid/chat-alt-2.svg": "215600df02ac947c0c99f91299ac8cbf",
"assets/assets/icons/solid/arrow-sm-up.svg": "6818058a5bafe2e7976d9dbfcfb0f2e5",
"assets/assets/icons/solid/chevron-right.svg": "bc7a79116363595f60bec20e6b9b4109",
"assets/assets/icons/solid/clipboard.svg": "d93e1f5277a573a30cf91780717a0b3c",
"assets/assets/icons/solid/link.svg": "fa1492f3da5d98d930b302c42d6aa8bc",
"assets/assets/icons/solid/key.svg": "ed362234c272d7d849066262b4c949c0",
"assets/assets/icons/solid/beaker.svg": "7a11997393f24186296e87888bfcdaa1",
"assets/assets/icons/solid/arrow-right.svg": "90c62e767a03489ec37a7e078d5465cc",
"assets/assets/icons/solid/selector.svg": "1fb27f4d37b692bb6c26ccd9f398b523",
"assets/assets/icons/solid/qrcode.svg": "82f7be09057eb6e2c6730a4411945980",
"assets/assets/icons/solid/currency-rupee.svg": "78fb8c84c4a330023fe533708588b421",
"assets/assets/icons/solid/menu-alt-4.svg": "2bb2f64cc4653d3260cc164200882fd1",
"assets/assets/icons/solid/paper-clip.svg": "89181bb288c501ddb18967485d7ab46e",
"assets/assets/icons/solid/archive.svg": "8979c62ca721a7e3c023d8b61e5258f2",
"assets/assets/icons/solid/phone-outgoing.svg": "a22ba4d47f4927718ad3b2d9bca7d3b5",
"assets/assets/icons/solid/mail.svg": "d4463b945a3cd2ae6454d1dcc3738c45",
"assets/assets/icons/solid/currency-bangladeshi.svg": "8e2c66ddd42fe06d0d1c0d8a8abdc210",
"assets/assets/icons/solid/download.svg": "92ce1d2d10e5ca38bad13b8c66845e41",
"assets/assets/icons/solid/chat-alt.svg": "17b122af21af45a760ec81b49eb057ee",
"assets/assets/icons/solid/book-open.svg": "42eccc6e332471bda244713538b2d8f0",
"assets/assets/icons/solid/location-marker.svg": "791be6605070eb267222c3393d597a57",
"assets/assets/icons/solid/arrow-sm-down.svg": "a080243d54d99420830a8fc745f0e448",
"assets/assets/icons/solid/server.svg": "55f28ac4ffcf53983006e3497a798e05",
"assets/assets/icons/solid/plus-sm.svg": "cf0cfdb4418fe657505fcf7129683d89",
"assets/assets/icons/solid/inbox-in.svg": "7f66427d1f82228fa68c73e097bd34d2",
"assets/assets/icons/solid/arrow-narrow-left.svg": "79ab25cf6d251421686cfb80891c29e1",
"assets/assets/icons/solid/login.svg": "0be6febf108f0a674a66e869670bfa3b",
"assets/assets/icons/solid/variable.svg": "b93d4f6fefb41301223f9b4d3e420fd4",
"assets/assets/icons/solid/menu-alt-1.svg": "58e084d2c3c7404476181977309832bf",
"assets/assets/icons/solid/bell.svg": "83486f28fafe6b1ff52a5e804a89b831",
"assets/assets/icons/solid/code.svg": "04f67d8961e4fa2017b61f5b85cba976",
"assets/assets/icons/solid/cake.svg": "47a36bf2da53c317c0f9f892aa6b2689",
"assets/assets/icons/solid/arrow-narrow-up.svg": "38815ec0c8d21cf5563e8cf6ca79f276",
"assets/assets/icons/solid/flag.svg": "9d896b4e4ce38577f6b9cd000ecff754",
"assets/assets/icons/solid/eye-off.svg": "d3e1b0b5a62fcd63a245dfcb2fc8e875",
"assets/assets/icons/solid/stop.svg": "2a081b6d126cefb3d0f6acbf5edadda3",
"assets/assets/icons/solid/arrow-circle-left.svg": "ff1b1a8196e9a34d3adb1261422d3f5e",
"assets/assets/icons/solid/newspaper.svg": "a927814794cb0f66d26d2690c2533985",
"assets/assets/icons/solid/cube.svg": "1f4598108d7844e0b451549744733bc0",
"assets/assets/icons/solid/emoji-happy.svg": "c566b3797a0f7f03d35f13e81ea3202f",
"assets/assets/icons/solid/minus-sm.svg": "88e9a193da1291ddcb773587e16496e8",
"assets/assets/icons/solid/dots-circle-horizontal.svg": "b40b4337331724d0afd669649ea26050",
"assets/assets/icons/solid/support.svg": "3c6b4b2c0ef534520e8ac3a2123ebf57",
"assets/assets/icons/solid/clipboard-list.svg": "0bc0a37386a75f4328477d12a002678b",
"assets/assets/icons/solid/user-remove.svg": "acc1ddf496eeaba2c93c5b959b883a41",
"assets/assets/icons/solid/plus.svg": "03c6f1c3262357e26064d358db93e4d5",
"assets/assets/icons/solid/document.svg": "927db6c9e84872faef8565c47045b346",
"assets/assets/icons/solid/music-note.svg": "5de49a9d48fde8dc7cef27f77b2b6574",
"assets/assets/icons/solid/check.svg": "554cfae00cf787d48320e57f89f5bd22",
"assets/assets/icons/solid/menu-alt-2.svg": "a102b92071d314aba57b776520239115",
"assets/assets/icons/solid/view-boards.svg": "b21ce76eb18b3fdcb95f1e067456b5d5",
"assets/assets/icons/solid/rss.svg": "e1fb1d5c9172263befd9ce71e23fbad4",
"assets/assets/icons/solid/wifi.svg": "0a8fbe4b8511ec148abc1b585dc4440a",
"assets/assets/icons/solid/menu-alt-3.svg": "f3da39668a7ab1cf8b7259cd6484c4aa",
"assets/assets/icons/solid/scale.svg": "338487cddf4a460bed09aa00bd332ee8",
"assets/assets/icons/solid/arrow-circle-right.svg": "b14f61539f58a1d66f1d1b39d663bb22",
"assets/assets/icons/solid/user-add.svg": "47784c10d0f42fd463260830592bd988",
"assets/assets/icons/solid/arrow-sm-left.svg": "ec6427dbc600fa81d1df5a47395be65c",
"assets/assets/icons/solid/zoom-in.svg": "3b839bf83fc82b7a98d1fc81112e8948",
"assets/assets/icons/solid/arrow-sm-right.svg": "79f52e2834224019ecb27a0f41b584a2",
"assets/assets/icons/solid/cube-transparent.svg": "8f6ad4032ef0e299284a351a5a1a630e",
"assets/assets/icons/solid/refresh.svg": "063713ef53a4af95a405a487b186c1fe",
"assets/assets/icons/solid/check-circle.svg": "8530370b5d3026624695c3a476868ef2",
"assets/assets/icons/solid/thumb-down.svg": "dd35f6e320f329866c27b008d72be8a9",
"assets/assets/icons/solid/device-tablet.svg": "ac1fc3b81a118f0a89130e91830af004",
"assets/assets/icons/solid/save.svg": "4a2ce64b73f1e2fbeef403b4848df5a7",
"assets/assets/icons/solid/status-online.svg": "913ffa327a15642fadcbbff8606b6f40",
"assets/assets/icons/solid/paper-airplane.svg": "6db42ab6d8aa69ec898cf5474105211d",
"assets/assets/icons/solid/shield-exclamation.svg": "38bb9a8238d40ded3959448e1b687b15",
"assets/assets/icons/solid/fast-forward.svg": "b4c6f8e000932552671766a30e5a051d",
"assets/assets/icons/solid/currency-yen.svg": "9fcfd91556e9fc4b0d8d1f2d4acdea65",
"assets/assets/icons/solid/zoom-out.svg": "3ef58b288b5a465e3515b1fe07802324",
"assets/assets/icons/solid/play.svg": "2164b60a1c06495a672d72366653f554",
"assets/assets/icons/solid/chat.svg": "5d233c4213d9e4a16e62690d9b6ed153",
"assets/assets/icons/solid/pencil-alt.svg": "cac7a477c07a03a7390b031fa6d14384",
"assets/assets/icons/solid/cursor-click.svg": "1eeaee1aac146c66df072b44cd90ab71",
"assets/assets/icons/solid/table.svg": "1f724a898de5ee5bc0db00d304f7cf29",
"assets/assets/icons/solid/badge-check.svg": "efa27fa742b9366ea44d45dad005646b",
"assets/assets/icons/solid/document-text.svg": "970f90eab1313c8684119b28c8f328c7",
"assets/assets/icons/solid/camera.svg": "ba043f10be4a4321849b235fc95dadea",
"assets/assets/icons/solid/printer.svg": "f2374bb7327fd0e107728d9c5a5945f3",
"assets/assets/icons/solid/truck.svg": "800e106218cb50116fc8a92aa81f42c7",
"assets/assets/icons/solid/identification.svg": "08a41e147752ea17065c421cc0a36b28",
"assets/assets/icons/solid/device-mobile.svg": "fcdc6a2f6f3330f32d196faccc6ac8c6",
"assets/assets/icons/solid/document-report.svg": "d3b613bd4754b37b0654d0a070e83ad3",
"assets/assets/icons/solid/document-download.svg": "4e69a0bb0885d551c8f26a59d0ae10ea",
"assets/assets/icons/solid/emoji-sad.svg": "f0b52a786cf328355bdb61a77d3e4cb9",
"assets/assets/icons/solid/exclamation-circle.svg": "3533db9097a43e502c2cc352f84070d0",
"assets/assets/icons/solid/currency-euro.svg": "b705f07652c0a2480b14a0a73c319e66",
"assets/assets/icons/solid/arrows-expand.svg": "e0a37a432c1e63aab24089709deb7e69",
"assets/assets/icons/solid/trash.svg": "4bf9dede34ac372ea97e587c8dc61e0f",
"assets/assets/icons/solid/chart-bar.svg": "13e2558167435e055bbea2d2b00ed3da",
"assets/assets/icons/solid/view-grid-add.svg": "b2780c7b5f858b07d1e555953e70b8e8",
"assets/assets/icons/solid/switch-horizontal.svg": "ec731a43833933fdb64fba00b8676182",
"assets/assets/icons/solid/volume-up.svg": "b9355ba9daff10b648b9338c82609324",
"assets/assets/icons/solid/hashtag.svg": "84f02fdb68d835ba5c155d6d561eab3c",
"assets/assets/icons/solid/presentation-chart-line.svg": "0a0738a8f72fe36a991a68e762351a76",
"assets/assets/icons/solid/template.svg": "150f29df544fd915768412b2bca449d3",
"assets/assets/icons/solid/star.svg": "d286195b202176f4371c9b033ff8971f",
"assets/assets/icons/solid/sun.svg": "cfe69ff6843c4c65d914700a5f4cd5cf",
"assets/assets/icons/solid/receipt-refund.svg": "336ac7bb1b96de96063ebc8682c707d9",
"assets/assets/icons/solid/arrow-circle-down.svg": "68d527dba7659010747e19b193344814",
"assets/assets/icons/solid/folder-download.svg": "ef1d1793befc4488cd5f570346ee93ac",
"assets/assets/icons/solid/chart-pie.svg": "bcc5f2325f5b07a09dfce04d9b75efcc",
"assets/assets/icons/solid/cash.svg": "4e2fc379a62b2508f0c62ce854c00de4",
"assets/assets/icons/solid/mail-open.svg": "63afdacecb9739260f81a2ca4e717fdd",
"assets/assets/icons/solid/collection.svg": "594589d4d5862c9637f9e12f798f58e8",
"assets/assets/icons/solid/search-circle.svg": "c0a0e39029988c361d5cf23c57fccd52",
"assets/assets/icons/solid/plus-circle.svg": "b4a719738796df7ef98427b446120ede",
"assets/assets/icons/solid/arrow-narrow-down.svg": "888f823040d64e7e196a49577f907f60",
"assets/assets/icons/solid/information-circle.svg": "aa4d2043c729cdd85cb5dc83d22e64ab",
"assets/assets/icons/solid/credit-card.svg": "007cbcc4d1937ec1a4ce16933c552c04",
"assets/assets/icons/solid/user-circle.svg": "4b79bc55a5582f7cfaa7beb4354fbf12",
"assets/assets/icons/solid/lightning-bolt.svg": "1a3300a769a8f51481f167af4d4251b9",
"assets/assets/icons/solid/office-building.svg": "c76b127602851684842afbc994c43066",
"assets/assets/icons/solid/pencil.svg": "75dd8e177ab46ea7e6600dbd9c0fbff8",
"assets/assets/icons/solid/status-offline.svg": "5265a61e989e989036ec99bb0f6a1517",
"assets/assets/icons/solid/user-group.svg": "05e307f044296837be28eabc63e21cfe",
"assets/assets/icons/solid/document-duplicate.svg": "267c51d422ba316ca5bc73539e92c312",
"assets/assets/icons/solid/clock.svg": "50cd7e4e457d941d8491c438e6cf846a",
"assets/assets/icons/solid/phone.svg": "05d58c5c6363304f13c8c4adf98c7dbb",
"assets/assets/icons/solid/eye.svg": "fad616505309ba989345691548e84a46",
"assets/assets/icons/solid/light-bulb.svg": "45980b3545083eda510c78a7574b58c0",
"assets/assets/icons/solid/phone-missed-call.svg": "83b7a6d90d25e15ff67d48d03df14a23",
"assets/assets/icons/solid/gift.svg": "fa957fe33ee4e5420b60cac6facdf6a0",
"assets/assets/icons/solid/external-link.svg": "9db7c85db71ae24aca4193c536a72fc1",
"assets/assets/icons/solid/question-mark-circle.svg": "b2592b20e92f377aaf2b819e87b8dfb6",
"assets/assets/icons/solid/share.svg": "3166c0854c8fbdd30e0c967e706b31e2",
"assets/assets/icons/solid/arrow-up.svg": "301924297eb702664af1126074914eda",
"assets/assets/icons/solid/folder-add.svg": "85c6d5f988f03eeb3461c273a68815a2",
"assets/assets/icons/solid/filter.svg": "b269ea56db4222e8743752762c938006",
"assets/assets/icons/solid/arrow-narrow-right.svg": "5f00608118ecf1189d9d60cb0be339ea",
"assets/assets/icons/solid/phone-incoming.svg": "448963dc5fa6bcf16f66a33b1aa74743",
"assets/assets/icons/solid/photograph.svg": "da76d654ac42fef4cb9a67e36318369a",
"assets/assets/icons/solid/calendar.svg": "e1c82ffcec37fcce77a785319a1fe0a6",
"assets/assets/icons/solid/video-camera.svg": "b1d0138a70e054b0f60eb39a5acf2f82",
"assets/assets/icons/solid/globe.svg": "9a486e2f7549e8d65dd2380689f212ea",
"assets/assets/icons/solid/arrow-left.svg": "11a3f9f201e14e9572baa5bf804ea32b",
"assets/assets/icons/solid/minus-circle.svg": "c71712086a0b197e5fd29d7ddb3cf7a6",
"assets/assets/icons/solid/desktop-computer.svg": "6cbdf8401bb3b0baab3d24862e4dba47",
"assets/assets/icons/solid/lock-closed.svg": "b92bcf41bae1254e9168cce1a9d0402e",
"assets/assets/icons/solid/finger-print.svg": "c91f1af9339f12577a882859cddc7891",
"assets/assets/icons/solid/cloud.svg": "bde71f063fca426a653fa6732c3b5804",
"assets/assets/icons/solid/document-remove.svg": "b7fbec606ec2cfa901e089a9860ca9fd",
"assets/assets/icons/solid/rewind.svg": "e52ff8ac9d36b17509bb6861be2359a7",
"assets/assets/icons/solid/speakerphone.svg": "0c4db023db81a58dcbb457b796d07cc1",
"assets/assets/icons/solid/upload.svg": "a3c1c5377e2cf044f906b4d6015f6dae",
"assets/assets/icons/solid/trending-down.svg": "b84745071c96da8a1479f98ce1fe60da",
"assets/assets/icons/solid/pause.svg": "4b158e416c596e91544bdebf51b8452e",
"assets/assets/icons/solid/bookmark.svg": "004646d4f95350109d32697910522144",
"assets/assets/icons/solid/switch-vertical.svg": "bbb9eb56f40e192e8f2dffe27385221f",
"assets/assets/icons/solid/currency-dollar.svg": "d77e8c780f06a96fc944d0392c304645",
"assets/assets/icons/solid/cloud-download.svg": "14dbb038f73eca27a3708ce384ec95c5",
"assets/assets/icons/solid/lock-open.svg": "3f061668e9fca0486f2fb223bc195fe2",
"assets/assets/icons/solid/menu.svg": "bef83c251d27f5cc248a116b3fd1f483",
"assets/assets/icons/solid/backspace.svg": "1a7b6382362fd6bc855eab33297adef4",
"assets/assets/icons/solid/shopping-cart.svg": "3a78700320d3e67bae53c666e6051128",
"assets/assets/icons/solid/sort-ascending.svg": "50374e9f032a594d82bd89788e5cb819",
"assets/assets/icons/solid/calculator.svg": "9860e849c6b7342335e9b0ed38d956ec",
"assets/assets/icons/solid/chart-square-bar.svg": "f9b40777f6819147158090ed3e94260b",
"assets/assets/icons/solid/shield-check.svg": "b890077a9d05290cb1eaf5d1e05e1864",
"assets/assets/icons/solid/clipboard-copy.svg": "fcbb37e15a06ebaec13b58d9a41ee3cb",
"assets/assets/icons/solid/presentation-chart-bar.svg": "7459eaf24aa5313a3ea3db4e729bca64",
"assets/assets/icons/solid/folder.svg": "570f760f999537df69a76cc370797cab",
"assets/assets/icons/solid/users.svg": "77b9ceea084616ef4c6ad11bf31c65d1",
"assets/assets/icons/solid/color-swatch.svg": "b52721ead32a558cf873bf4ef4543a0c",
"assets/assets/icons/solid/clipboard-check.svg": "8772777812c9b6f56841e6a9a45787bf",
"assets/assets/icons/solid/minus.svg": "12c84a98604485b4fadc959aa2317f4f",
"assets/assets/icons/solid/chevron-double-down.svg": "cc64798374f9a0d8621d0ecc1c370a15",
"assets/assets/icons/solid/chevron-left.svg": "23a8e28b83cdcba2dc0b6a50e675f808",
"assets/assets/icons/solid/annotation.svg": "39ed112b6dcdb810c8aa1b8748394fa7",
"assets/assets/icons/solid/film.svg": "c33527414b135de8282f197aec7e4276",
"assets/assets/icons/solid/moon.svg": "2324d8610f11f531f346a306098d88d8",
"assets/assets/icons/solid/exclamation.svg": "ac5722c302ce49365737aea86c4d7fb0",
"assets/assets/icons/solid/dots-vertical.svg": "93a15982f0336b33aab111d898b6ae54",
"assets/assets/icons/solid/chevron-double-up.svg": "a775e723289dbb9e690f02739519f66f",
"assets/assets/icons/solid/heart.svg": "3fb2cea8c7cf5381a15822c16f79a8af",
"assets/assets/icons/solid/trending-up.svg": "f9a01ea18d515177b600c1c2782efeb7",
"assets/assets/icons/solid/academic-cap.svg": "73ef67e2b3085506dbb4ec4d73a88312",
"assets/assets/icons/outline/hand.svg": "3a047de920f81209d7da3ea2eb8969aa",
"assets/assets/icons/outline/search.svg": "6b265d76e10f6b9d07f4f12813692915",
"assets/assets/icons/outline/arrow-down.svg": "9863a87268d34684d811f68ddeb89fc0",
"assets/assets/icons/outline/volume-off.svg": "602a444e45bef2408a4940b058d11d62",
"assets/assets/icons/outline/dots-horizontal.svg": "516e680581eed766eb39d5d8c2261302",
"assets/assets/icons/outline/scissors.svg": "c93c96453b35e8f505ffe1ce6bc46323",
"assets/assets/icons/outline/cog.svg": "365a2f70f9795a487906d56eee1b457d",
"assets/assets/icons/outline/currency-pound.svg": "7fb791bb72b6423efcddecd3a5cccfb1",
"assets/assets/icons/outline/sort-descending.svg": "6e4c006b2c6ee60f63a73bcc9c4d2ceb",
"assets/assets/icons/outline/reply.svg": "da5619a1f36e1554b7aa0c481636db57",
"assets/assets/icons/outline/thumb-up.svg": "defde32ea1ded0ca54692df15ed0f50a",
"assets/assets/icons/outline/translate.svg": "82dda44ec1a58c44e420dd989d2a7ba2",
"assets/assets/icons/outline/adjustments.svg": "8d340d1ec73911af99466452cc4d38cf",
"assets/assets/icons/outline/user.svg": "d54a27eb5114350e67a2218b21e21328",
"assets/assets/icons/outline/view-grid.svg": "a4f5e5a1c9f097a6e91f6d9a626b62cc",
"assets/assets/icons/outline/receipt-tax.svg": "25ea009d4f6295d32fa51386b9e6bb33",
"assets/assets/icons/outline/x-circle.svg": "3dc7f4204c3bb4e6336e0662ee0708e9",
"assets/assets/icons/outline/view-list.svg": "ec4923e1156ae5ae6a1bbc607433bfa2",
"assets/assets/icons/outline/home.svg": "e35393a8804c99cf505510f98b8b002b",
"assets/assets/icons/outline/globe-alt.svg": "c35346cfa5c4d444a554190148df34e3",
"assets/assets/icons/outline/chevron-double-right.svg": "3a400f56ad7c798e6732af534f2d87d2",
"assets/assets/icons/outline/library.svg": "9282ca1bec39ea893765cbe1587a1f77",
"assets/assets/icons/outline/chevron-down.svg": "f52d9c60db787aa5785f0bf8af890f84",
"assets/assets/icons/outline/chevron-double-left.svg": "5f7848c9f7caf42da1750d32c89f12e5",
"assets/assets/icons/outline/logout.svg": "7d71d05906bc379605efb6eb757f83c0",
"assets/assets/icons/outline/chip.svg": "bcdafded013da342d5d95d4dad361c27",
"assets/assets/icons/outline/ticket.svg": "9a89ffc7da0e78b37b8be9c181a09b80",
"assets/assets/icons/outline/tag.svg": "ad8a4b05694279888197e7639bad80d6",
"assets/assets/icons/outline/briefcase.svg": "a2487ff39d80b4e202de7a69c102a240",
"assets/assets/icons/outline/arrow-circle-up.svg": "a4125ee5077a33f45a58a752b0f60b41",
"assets/assets/icons/outline/save-as.svg": "bcbe5c62fedf41bf47fb6ae83a240c2b",
"assets/assets/icons/outline/document-search.svg": "478e9e109e2c6d4f169ef213a7b97e85",
"assets/assets/icons/outline/map.svg": "a0adb12f045ee6eb87e550aa01e340db",
"assets/assets/icons/outline/inbox.svg": "b83222d1914a94f4fda2a6c1a371e25c",
"assets/assets/icons/outline/microphone.svg": "25f4f7b815819346b1b1dc4c76345fa4",
"assets/assets/icons/outline/database.svg": "f0e1d138c3a0512abfe738988bce7627",
"assets/assets/icons/outline/puzzle.svg": "9f542598fdeb3dfaa9cf09584424caf3",
"assets/assets/icons/outline/duplicate.svg": "10275e1f4d656e69287838bf6bce6272",
"assets/assets/icons/outline/folder-remove.svg": "518e33815b49592d7fde0ce3fcb1c398",
"assets/assets/icons/outline/terminal.svg": "fb3bb0f1418634c3db6ba9b6fa26924c",
"assets/assets/icons/outline/sparkles.svg": "8ab85c899afcaa54704f7c15848a61c8",
"assets/assets/icons/outline/chevron-up.svg": "abbac02267fac86242679ecdd2a1fe61",
"assets/assets/icons/outline/folder-open.svg": "c82a0439e8d216e226432c824313a98d",
"assets/assets/icons/outline/document-add.svg": "5a089417e8d7c08ce954308ae19c59b3",
"assets/assets/icons/outline/x.svg": "36e36f5e495c687cff9cb3b1ed8ec5d1",
"assets/assets/icons/outline/at-symbol.svg": "4874323187f08fa8486e6047a1db203b",
"assets/assets/icons/outline/bookmark-alt.svg": "a212df8a6f5087e19a2f499423d123ae",
"assets/assets/icons/outline/cloud-upload.svg": "16d5d086029478ca96181b1aa0706358",
"assets/assets/icons/outline/fire.svg": "6ac76b8ee44728449813015c75149079",
"assets/assets/icons/outline/ban.svg": "90d44b5009968bc10dc296573f63ae09",
"assets/assets/icons/outline/shopping-bag.svg": "4774eead58f6779da39dd75facc75fa1",
"assets/assets/icons/outline/chat-alt-2.svg": "e96410d4f0f4601935b79caf137772b4",
"assets/assets/icons/outline/arrow-sm-up.svg": "11080d34ba57c7d8f59429d8285b0fb3",
"assets/assets/icons/outline/chevron-right.svg": "fbb4df4a5cd97902a2bc69fe9d4e0936",
"assets/assets/icons/outline/clipboard.svg": "33fe275fbc1b6af83d5e852a654404bc",
"assets/assets/icons/outline/link.svg": "d7c8e6c7ced055500f106c27fe7186e5",
"assets/assets/icons/outline/key.svg": "c1fd6f6282ba7a5e43abcf752653e0b3",
"assets/assets/icons/outline/beaker.svg": "9b5c6e6f6f2b66770e4011f950cd467d",
"assets/assets/icons/outline/arrow-right.svg": "07b3249fe21dbc889ca668d6ece35be5",
"assets/assets/icons/outline/selector.svg": "f07aa636376fa4fe2d80ae52cdd26843",
"assets/assets/icons/outline/qrcode.svg": "eb23c945153335bfa3653683e0aeb23e",
"assets/assets/icons/outline/currency-rupee.svg": "3de4310964ee4a424b909e6e190acc3e",
"assets/assets/icons/outline/menu-alt-4.svg": "1ddd20a3053a73477c96d983b9834bc0",
"assets/assets/icons/outline/paper-clip.svg": "74017f27c4361ab8677098ee92866431",
"assets/assets/icons/outline/archive.svg": "cd0d1c2711443b44adcbd6ec6d3a72a9",
"assets/assets/icons/outline/phone-outgoing.svg": "c5ff17425f30a12b55a9441cc5145244",
"assets/assets/icons/outline/mail.svg": "c0c2ad76ad386c42379f12682da0440c",
"assets/assets/icons/outline/currency-bangladeshi.svg": "54b7935e3ccdf6765f9d4311fffa097a",
"assets/assets/icons/outline/download.svg": "f7548a03e64448e81a714bdb7bdd91f2",
"assets/assets/icons/outline/chat-alt.svg": "eb2d8319ac3b9084defc82ebd104daf1",
"assets/assets/icons/outline/book-open.svg": "db91bd5cae357d13cac5328b4b7b35b9",
"assets/assets/icons/outline/location-marker.svg": "909934dd180a8904a6322d8d3b81d9db",
"assets/assets/icons/outline/arrow-sm-down.svg": "5d127707382ee41396b9d92c199fada2",
"assets/assets/icons/outline/server.svg": "0b557f690fab2a191bd55248af10a88d",
"assets/assets/icons/outline/plus-sm.svg": "c53617009314ae2354e45da18a63996e",
"assets/assets/icons/outline/inbox-in.svg": "fb146f4f2e0ba0b9f5e49585713bc443",
"assets/assets/icons/outline/arrow-narrow-left.svg": "291de4a25139247816f0d9e290261be8",
"assets/assets/icons/outline/login.svg": "95678febc936121acfebea89f68f7a5e",
"assets/assets/icons/outline/variable.svg": "0c6f583c9afa74871d89c1e051c83453",
"assets/assets/icons/outline/menu-alt-1.svg": "5820a7a848d730e7baf3decf1291e3d2",
"assets/assets/icons/outline/bell.svg": "ccf6d3db1e4806b4260a2aa58c623cd4",
"assets/assets/icons/outline/code.svg": "61e00df807c977bd33d1a0d057033994",
"assets/assets/icons/outline/cake.svg": "c67079602f66d804ccd3e7d3a1bbaca1",
"assets/assets/icons/outline/arrow-narrow-up.svg": "fd2d5f3a6e710f8efd1ff1d9e6869b38",
"assets/assets/icons/outline/flag.svg": "e46a9da234f8a13369d288f7618784f8",
"assets/assets/icons/outline/eye-off.svg": "fedb37c6351fbc63a5074e73c7ddd228",
"assets/assets/icons/outline/stop.svg": "ce20bab109614888493f31efdafb32e6",
"assets/assets/icons/outline/arrow-circle-left.svg": "455f60ed447f70ccd3ea9b70744d5808",
"assets/assets/icons/outline/newspaper.svg": "f2034e3e64e1e4334d2f1fb9e48c9381",
"assets/assets/icons/outline/cube.svg": "db186efdbf2592e320b3fffd0e919db8",
"assets/assets/icons/outline/emoji-happy.svg": "7d38b99272d28c3f95e20753e3b94ec1",
"assets/assets/icons/outline/minus-sm.svg": "075df80649ff25f99d6df5918bcaa39e",
"assets/assets/icons/outline/dots-circle-horizontal.svg": "54a8b8067540c5dee553284e170ccba2",
"assets/assets/icons/outline/support.svg": "8e06a9e826201b653508a9d235e60069",
"assets/assets/icons/outline/clipboard-list.svg": "2f49368f69520d70ac9e5c52c2525c5a",
"assets/assets/icons/outline/user-remove.svg": "684576a8592a79a5cd48ea9d6700c347",
"assets/assets/icons/outline/plus.svg": "1db93d6d4e1b4b03b5a828428eed413a",
"assets/assets/icons/outline/document.svg": "a36a2b57a459155fe06febea298c1931",
"assets/assets/icons/outline/music-note.svg": "e453ccf8e4bc829034cd18334a6745e3",
"assets/assets/icons/outline/check.svg": "b5989e874543da47c13a536595759cdd",
"assets/assets/icons/outline/menu-alt-2.svg": "0c109b622dd9170927bdf00e9ff2ea47",
"assets/assets/icons/outline/view-boards.svg": "0a8878654f406cbcc12f220231ff0e21",
"assets/assets/icons/outline/rss.svg": "ea99a7f53de0c26e08018e515450e0f4",
"assets/assets/icons/outline/wifi.svg": "c03a330bb2066141a4300a0de5f0c2e0",
"assets/assets/icons/outline/menu-alt-3.svg": "bc65c0a54571b8995f8c9490c199c3af",
"assets/assets/icons/outline/scale.svg": "5433634e41af1c7994f87a4ca754bb66",
"assets/assets/icons/outline/arrow-circle-right.svg": "a9166b7e8becd43c0f63d9a6a8b9bc93",
"assets/assets/icons/outline/user-add.svg": "c0af283e8cc6ce78859ff5f47e26cb7f",
"assets/assets/icons/outline/arrow-sm-left.svg": "c2bd36945cd8256e35b922e39cc62bad",
"assets/assets/icons/outline/zoom-in.svg": "edc920224351a4e31c17729bfe714f5f",
"assets/assets/icons/outline/arrow-sm-right.svg": "38f39846656a1ba4ae024f08062e9117",
"assets/assets/icons/outline/cube-transparent.svg": "fca9fa3b60113acb84cd2ce7270c5536",
"assets/assets/icons/outline/refresh.svg": "95add484f1c6fccf24f7c3a1deafb6e3",
"assets/assets/icons/outline/check-circle.svg": "b9c1d7106c2278ea456e8c1aff84e0c7",
"assets/assets/icons/outline/thumb-down.svg": "68c45230452539b1562947db5a7c8178",
"assets/assets/icons/outline/device-tablet.svg": "df7ed7e4fcf466e4c9f66404f6d04ffa",
"assets/assets/icons/outline/save.svg": "57da83335e88f25dc7175d2c44b802e7",
"assets/assets/icons/outline/status-online.svg": "9f21677943ebdcbb1656c35640f5efde",
"assets/assets/icons/outline/paper-airplane.svg": "588effd170efe46a68bb5fdcc8f70b08",
"assets/assets/icons/outline/shield-exclamation.svg": "ac7f202492bc02c619ecfebe82cb831c",
"assets/assets/icons/outline/fast-forward.svg": "c7158b6cdc2ed51d510c0f0efb7a6b33",
"assets/assets/icons/outline/currency-yen.svg": "2d575d95110453ceb72bafb78bfa7017",
"assets/assets/icons/outline/zoom-out.svg": "f33c2ffe4a419af30b4ac8e188ac9ae1",
"assets/assets/icons/outline/play.svg": "010f137b72e271714094953a110634a0",
"assets/assets/icons/outline/chat.svg": "c4c2827ee22111a606b314a731344008",
"assets/assets/icons/outline/pencil-alt.svg": "cad2fffb9baf14e4e56423a2bb64dd87",
"assets/assets/icons/outline/cursor-click.svg": "52c6a2e4ffdd3106c1ae47e3e0b8f147",
"assets/assets/icons/outline/table.svg": "3aec93ddf915f73fe1ff9f7e10fae532",
"assets/assets/icons/outline/badge-check.svg": "f6a5f1172ec53341c6d3e8834b95475d",
"assets/assets/icons/outline/document-text.svg": "83e74dedfd7c90841e241a53fda3967b",
"assets/assets/icons/outline/camera.svg": "e755567ff670ee21bcbbfaed375c9308",
"assets/assets/icons/outline/printer.svg": "73a93fd23fb92cb70233390ac04e9120",
"assets/assets/icons/outline/truck.svg": "0c85a85b02076bf3d99dfbf2343e76c2",
"assets/assets/icons/outline/identification.svg": "1cef6593bd16e0d2fefd06fa1d3578bb",
"assets/assets/icons/outline/device-mobile.svg": "8c1dd1c9145c880fe92b5460b1fc1db1",
"assets/assets/icons/outline/document-report.svg": "0eaddfa372ec663108bc84ec2ef9b05d",
"assets/assets/icons/outline/document-download.svg": "7a7242c7df1d1ad102c5710b15889c28",
"assets/assets/icons/outline/emoji-sad.svg": "fd5b745b42e1a8b449bbb67145194edd",
"assets/assets/icons/outline/exclamation-circle.svg": "108aadab69bf67bbd277e8871c263847",
"assets/assets/icons/outline/currency-euro.svg": "d8faa022767fa25289dc761ea3c9f717",
"assets/assets/icons/outline/arrows-expand.svg": "ffb3730a9a8b7d0f8740370754cfb0e4",
"assets/assets/icons/outline/trash.svg": "15278424848f6901727d38bcde100279",
"assets/assets/icons/outline/chart-bar.svg": "f64fe66b34c00eae1ea577ad6c275a99",
"assets/assets/icons/outline/view-grid-add.svg": "d84b583168209a25cf637dd1b5071a1a",
"assets/assets/icons/outline/switch-horizontal.svg": "73024b22c94cbe85a4c87b64c999d0f1",
"assets/assets/icons/outline/volume-up.svg": "30d4926bb8f4a9e49ea3abc553294a6d",
"assets/assets/icons/outline/hashtag.svg": "c5bc59d1eaa281f2c90c1aef92cd5beb",
"assets/assets/icons/outline/presentation-chart-line.svg": "6d789b937e1feaa187e59ad6cf7cf6ac",
"assets/assets/icons/outline/template.svg": "cb342dbf1298cbc9fcaa7f757787ab98",
"assets/assets/icons/outline/star.svg": "73c5ed55fa9a53de2e3d912a2b690182",
"assets/assets/icons/outline/sun.svg": "c12c3316cd15f90b68df9a585f9f4de7",
"assets/assets/icons/outline/receipt-refund.svg": "c71a84aadd17976976439f8a5bedd61d",
"assets/assets/icons/outline/arrow-circle-down.svg": "cb3adaa8ffe1e4fd5f7e030764862c1c",
"assets/assets/icons/outline/folder-download.svg": "5713c13a27ebef1245bedc4372417227",
"assets/assets/icons/outline/chart-pie.svg": "a943abd025c10250c89232e2d810510d",
"assets/assets/icons/outline/cash.svg": "fcf1bd1934a68b1af3a71e31125f526e",
"assets/assets/icons/outline/mail-open.svg": "eee31e8c4f2ba24e70994b325509a53f",
"assets/assets/icons/outline/collection.svg": "061d617621cf6c0bc054b235fe3d58c7",
"assets/assets/icons/outline/search-circle.svg": "4daa95393a0451e46d4670f6718f7832",
"assets/assets/icons/outline/plus-circle.svg": "a4500a29c0dd51ebc108bb72b2f36298",
"assets/assets/icons/outline/arrow-narrow-down.svg": "075ce49f2a92486f5e86d21777d46910",
"assets/assets/icons/outline/information-circle.svg": "21ee86bd7395e07676a6ce093b3b5411",
"assets/assets/icons/outline/credit-card.svg": "daa633450af953989a1b89227dbb2bc9",
"assets/assets/icons/outline/user-circle.svg": "dec603a9651ef354ef272eea2107853a",
"assets/assets/icons/outline/lightning-bolt.svg": "4da61207214c42258b80ddefb6e71f14",
"assets/assets/icons/outline/office-building.svg": "72114258c565a7b448ebc9a4e455f44d",
"assets/assets/icons/outline/pencil.svg": "289918d011be7f6955c04df7bb359348",
"assets/assets/icons/outline/status-offline.svg": "1468cd946364936c88042e0a15098aa5",
"assets/assets/icons/outline/user-group.svg": "64b290247b9e3cf905721352c7113a03",
"assets/assets/icons/outline/document-duplicate.svg": "bb50099b6a6217f9d4f8c2f81b023da2",
"assets/assets/icons/outline/clock.svg": "ae17265e743ebc00dd49e3379e5c37c2",
"assets/assets/icons/outline/phone.svg": "614d18ed267522cc1dc0805986a46e17",
"assets/assets/icons/outline/eye.svg": "565b81e028e580793c32d34e058551b7",
"assets/assets/icons/outline/light-bulb.svg": "908931b4908dde421ffabb09e8b00c02",
"assets/assets/icons/outline/phone-missed-call.svg": "bb1f450648b750257d51e3ce0f5cf597",
"assets/assets/icons/outline/gift.svg": "4fdf65308730b0364e1e8d4443d80132",
"assets/assets/icons/outline/external-link.svg": "8f2843f70bdbd73fb9845ec933a7ad07",
"assets/assets/icons/outline/question-mark-circle.svg": "5f75661a8ef594dd7ce9e237908e94ea",
"assets/assets/icons/outline/share.svg": "99df81439771fdd9d7aa2a63aa78f18c",
"assets/assets/icons/outline/arrow-up.svg": "1f5604a3d49957fd2c67e34777449100",
"assets/assets/icons/outline/folder-add.svg": "c3b8b5ac2529192ebda8471d57f14b5d",
"assets/assets/icons/outline/filter.svg": "3ce27ee44ceb4f63a74c5220cc53d5f2",
"assets/assets/icons/outline/arrow-narrow-right.svg": "d971d742fef685e0093595180e8ccead",
"assets/assets/icons/outline/phone-incoming.svg": "7f39fb03a9b9d3b1edd852339f7c446f",
"assets/assets/icons/outline/photograph.svg": "d69143562bc8f88d65c9fc182bbb346f",
"assets/assets/icons/outline/calendar.svg": "61f9c59e2412171ddfb0eebaa6317fb3",
"assets/assets/icons/outline/video-camera.svg": "ea3a7467e7e6ce6dd2237bbdec090d19",
"assets/assets/icons/outline/globe.svg": "34a80becd26cb499d94c733134f4bbb7",
"assets/assets/icons/outline/arrow-left.svg": "006b8d27c4e52f279c89622f345465e6",
"assets/assets/icons/outline/minus-circle.svg": "afa245cfc529c6e50436a7417a438a58",
"assets/assets/icons/outline/desktop-computer.svg": "cc72febdbbca79ae17e83b2a895fa84f",
"assets/assets/icons/outline/lock-closed.svg": "22fa8b795d519b402c4b82150971e3e6",
"assets/assets/icons/outline/finger-print.svg": "e59a0481e26a330e764cbdfd38359dca",
"assets/assets/icons/outline/cloud.svg": "aa59fef631567275c6e8851c93869a6d",
"assets/assets/icons/outline/document-remove.svg": "cd930a76bfd6fa027c48a03d03f0b3fd",
"assets/assets/icons/outline/rewind.svg": "b9f2147c64782d798bc77dfa04305d7e",
"assets/assets/icons/outline/speakerphone.svg": "66c06a2f7059c9838302d2df8dbb2a54",
"assets/assets/icons/outline/upload.svg": "e749d13fe4ba3535f256607d7b7bdbe3",
"assets/assets/icons/outline/trending-down.svg": "64b212e65e704a21652fe942324395cd",
"assets/assets/icons/outline/pause.svg": "aaef0f57065dfb2a7a0992fa40538779",
"assets/assets/icons/outline/bookmark.svg": "97032720d7c60c1b963327af85058d4f",
"assets/assets/icons/outline/switch-vertical.svg": "d89818b2212374e85e778f24d3e7408b",
"assets/assets/icons/outline/currency-dollar.svg": "69b1e3615036701af0297569519d5cea",
"assets/assets/icons/outline/cloud-download.svg": "c4991563cbd4d4204994da1290096855",
"assets/assets/icons/outline/lock-open.svg": "4bc93927d5eb92d574dcb70997df32c2",
"assets/assets/icons/outline/menu.svg": "46bc972b6ef1826c47d1327ca721360b",
"assets/assets/icons/outline/backspace.svg": "fb249b135ce52a49d55895714eb9fb29",
"assets/assets/icons/outline/shopping-cart.svg": "bb350ea53b7ee4e1c132813813e1ca3a",
"assets/assets/icons/outline/sort-ascending.svg": "fa326c923a5db0b541556ff05b2462aa",
"assets/assets/icons/outline/calculator.svg": "0518180daac289b66a103f996479f740",
"assets/assets/icons/outline/chart-square-bar.svg": "84419cd1c221e7c7b22ea067e9f050e0",
"assets/assets/icons/outline/shield-check.svg": "a21f98ed1f7a65dca296259652849d75",
"assets/assets/icons/outline/clipboard-copy.svg": "e21a320aa5644edbe3c40c0c65cfe812",
"assets/assets/icons/outline/presentation-chart-bar.svg": "49659fac4017fd03e3a03a960607f4e4",
"assets/assets/icons/outline/folder.svg": "f42cf76e90e28ef61aeb33068c1c8a21",
"assets/assets/icons/outline/users.svg": "f9fe0fe96f8847e35d5ebd3ada99294a",
"assets/assets/icons/outline/color-swatch.svg": "4ed29338bcc30279aad52c001141cdda",
"assets/assets/icons/outline/clipboard-check.svg": "f5df7cc14a87f331b2ad032bc34b71df",
"assets/assets/icons/outline/minus.svg": "baedd667d9cabb3c480cd8ea01f57128",
"assets/assets/icons/outline/chevron-double-down.svg": "663312e7f65016c5663a295293047bb7",
"assets/assets/icons/outline/chevron-left.svg": "eb5a1d567727059da37bb80925253d6b",
"assets/assets/icons/outline/annotation.svg": "33f0ae6064aceb4843338cdec520f81d",
"assets/assets/icons/outline/film.svg": "4c67353565e0551a7c7dbec760a8e238",
"assets/assets/icons/outline/moon.svg": "3930b7a491af2775d7351d2858fe2ee2",
"assets/assets/icons/outline/exclamation.svg": "abcff952561bbedfeb967373b604a00b",
"assets/assets/icons/outline/dots-vertical.svg": "20eda089381a8afcf0b04a8aacb0a8e8",
"assets/assets/icons/outline/chevron-double-up.svg": "fa0be72b116a7303b7f1eafd0e6b7c05",
"assets/assets/icons/outline/heart.svg": "709c89aca22526630aac30ae76e77ca7",
"assets/assets/icons/outline/trending-up.svg": "e98772d678160266cd1cadeda5988cd9",
"assets/assets/icons/outline/academic-cap.svg": "c344b7b235f6e02b862a4ef918d75012",
"assets/assets/fonts/Inter-Bold.otf": "d759e235e88e47f838062c7ab97308b1",
"assets/assets/fonts/Inter-Regular.otf": "76e872bc911c3d908aeaf31b2c16bc63",
"assets/assets/fonts/Inter-Thin.otf": "72869267880104b27bed47fdf7e5c75d",
"assets/assets/fonts/Inter-Light.otf": "d7019947105844db1899d246172f06b4",
"assets/assets/fonts/Inter-Medium.otf": "ef3d193e6a6ad033724c7872aec1cff7",
"assets/assets/fonts/Inter-SemiBold.otf": "ef2dede4404ddb4cb3ed69d196ef2722",
"assets/assets/fonts/Inter-Black.otf": "e6fef702b507237e0033f4244cc4389c",
"assets/assets/fonts/Inter-ExtraBold.otf": "b799b6950c238082c8e314d127842845",
"assets/assets/fonts/Inter-ExtraLight.otf": "97592cd01de5f8e5db834265c3e2a0d4",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
