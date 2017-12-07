let expect = require("chai").expect;
let _ = require("lodash");

const input = "yjmbbu (75)\n" +
  "zdhvqrl (40) -> fpbsu, fwpfjjd, viqhfi\n" +
  "dywqvqh (9)\n" +
  "gewgn (31)\n" +
  "xfekjt (67)\n" +
  "zezowe (31)\n" +
  "wgqkdcr (79)\n" +
  "ljhwzvv (258)\n" +
  "vustse (1584) -> ffnabs, qinmi, qhafxnl\n" +
  "idfwjgx (112) -> buoakk, itwbpot\n" +
  "lxesg (71)\n" +
  "qkbnq (99)\n" +
  "jppgd (27)\n" +
  "ztghd (125) -> bcibchp, aaheijb\n" +
  "qcrpdy (29)\n" +
  "fwidkbp (152) -> mnkwo, ehjooz, jvccsp, cyrrjtx, imynb, chnkkj, agywjrs\n" +
  "nymhem (52)\n" +
  "cazid (93)\n" +
  "olspit (121) -> bqtas, fhuiyrl\n" +
  "ayteb (92)\n" +
  "hjucki (58)\n" +
  "wrqtk (305)\n" +
  "jfjemon (217) -> bjhickt, uacjhqx\n" +
  "mcmqliy (925) -> coopirx, ekohgo, ioywk\n" +
  "rsancy (70) -> aeuub, vchuc, heacb\n" +
  "zjwpbzs (23) -> jysaup, pgubexv, lckuoqf, eeguu\n" +
  "qflouyn (90)\n" +
  "nswximo (65478) -> ibjvonk, sdhtguj, dxyifeb\n" +
  "rymkqd (102) -> vgqeyx, zezowe\n" +
  "wlujpl (92) -> sjwhig, wymfopy, ylfsnz\n" +
  "imcczga (95)\n" +
  "xehdglb (52)\n" +
  "twubx (46) -> goimlra, vlimzz, xaoncma, gfzbp, spdhhoe, fhmauag, cyapi\n" +
  "yjhes (72)\n" +
  "ymcuygn (81)\n" +
  "yatbsip (19) -> bkdtinl, nzqcq, tkmed, ysbrui\n" +
  "yipoeia (58)\n" +
  "chophr (27)\n" +
  "tdwtlf (305) -> epuaii, idfwjgx, nwikpdm\n" +
  "emzrj (119) -> aimav, dtscjna\n" +
  "vbxmpc (7)\n" +
  "nrpxx (21)\n" +
  "wgexpa (103) -> paxzd, vgdwm\n" +
  "vnrmx (359) -> knzppj, gkkgkp, ttwfig, vcixs\n" +
  "knltna (677) -> zbhtee, ztzwh\n" +
  "ojvlwm (52)\n" +
  "bgflw (27)\n" +
  "lsdrwz (73)\n" +
  "hswzo (40)\n" +
  "spwgm (351) -> mizab, cyzkk\n" +
  "jlnyr (16)\n" +
  "nwikpdm (36) -> ihwaeuw, wwkeej\n" +
  "qbmtmcs (34)\n" +
  "djirpp (19)\n" +
  "pkfhp (59)\n" +
  "qfypnb (76)\n" +
  "jzequar (272) -> mtcrswx, wkcyd\n" +
  "tttle (71) -> xlskkfi, ayteb\n" +
  "zbhtee (48)\n" +
  "iriun (9)\n" +
  "dwezv (73)\n" +
  "tojyt (58) -> dwezv, nbngkou, wnjtb, rarkunn\n" +
  "bsorz (27)\n" +
  "qvkotfd (337)\n" +
  "azxjd (268) -> exeub, lryzkx, nqvxs\n" +
  "wpxxh (998) -> wrqtk, yosnw, vyxfljc\n" +
  "gwournc (85)\n" +
  "aghdlll (88)\n" +
  "lejgcu (19)\n" +
  "lxlbt (363) -> oiosol, mpchqe, bsorz, jbpjt\n" +
  "nbeagw (94)\n" +
  "vbbgeo (19)\n" +
  "lqfyzo (21) -> tggkm, zdbqs\n" +
  "vqclii (331) -> dmkbnot, omdpc\n" +
  "lhmnd (216) -> onnylx, khaupo\n" +
  "wwkeej (60)\n" +
  "laczal (99)\n" +
  "xrbjn (20)\n" +
  "qvteg (64)\n" +
  "ogbsm (92) -> xpzhy, mhsjkm\n" +
  "ymckwqo (41)\n" +
  "ghsjtj (271) -> hhmwlo, faixe\n" +
  "sjrxs (259) -> mnijdlk, hygfoe\n" +
  "hdvel (197) -> upuxd, dtstgj\n" +
  "lckuoqf (78)\n" +
  "yppydul (91)\n" +
  "frirj (6)\n" +
  "duftj (42)\n" +
  "dnmvzeg (64)\n" +
  "cpazlc (19)\n" +
  "krxyaak (198) -> maqgick, xbnmvd\n" +
  "oyczfgb (395) -> rxcnn, ktpte, qybmgto\n" +
  "oxiuaz (12)\n" +
  "wfphcf (6)\n" +
  "ihtnbb (87)\n" +
  "omsroa (45)\n" +
  "lybkeg (6022) -> oyczfgb, jzequar, yrcgsnx, ujulj\n" +
  "agywjrs (184) -> anpnrdt, hgdbaol, hcjmsd, kzbvrxk\n" +
  "tiujei (34)\n" +
  "lwencl (28) -> ieusgd, mthhq, fsuzqyz, miwoup, isrtfc\n" +
  "wekya (34)\n" +
  "bkdtinl (1167) -> ojsjuts, euoclfs, xbkeua, mykrcq, jjsvfy, aazxafl\n" +
  "qinmi (1896) -> qshbt, ruozmjk\n" +
  "yfmxvay (46)\n" +
  "kgpwo (52)\n" +
  "fgjjwep (14)\n" +
  "odvtiti (76)\n" +
  "ienye (19)\n" +
  "tcvabyz (99)\n" +
  "ycclns (7)\n" +
  "njogewi (30)\n" +
  "bfchbs (87) -> jykbb, qnbfk\n" +
  "dlbzng (99)\n" +
  "xnmvtem (51)\n" +
  "ccciux (94)\n" +
  "xwlmsqy (25)\n" +
  "wekkbw (17)\n" +
  "yipzce (21)\n" +
  "hcjmsd (10)\n" +
  "upvhfmn (68) -> fvlfq, ivmndi, ussmw, ccciux\n" +
  "hacwv (50)\n" +
  "redqvw (269)\n" +
  "dtpexjq (52)\n" +
  "kmlwj (84)\n" +
  "mluykm (19)\n" +
  "ucbbun (114) -> hrqzqqh, ccuarv\n" +
  "kymhbse (155) -> tznudmk, hnlgkv\n" +
  "xomnhw (185)\n" +
  "nsmoh (65) -> ceuygh, acpfsnb, vgubuy, apkwi, yoeau, pdosfg, lfpzff\n" +
  "zvepqr (51)\n" +
  "wnotwt (99)\n" +
  "lcrwbqi (27)\n" +
  "hdlqvlg (27)\n" +
  "iphgmyt (160) -> woolxv, ewyzqg\n" +
  "ujulj (50) -> cazid, npmwcx, yeooycn, dmeee\n" +
  "zjaklmn (52)\n" +
  "bjrpalu (53) -> rhodopg, tcospq, cvrcvgp\n" +
  "azdei (48)\n" +
  "snzfrer (149) -> bhsbd, tgdzl\n" +
  "zsxizw (18)\n" +
  "fwpfjjd (89)\n" +
  "fndxl (36)\n" +
  "uzrnud (14)\n" +
  "igyxt (41)\n" +
  "vxdkej (135) -> diomq, qokscr\n" +
  "gjuekv (5)\n" +
  "uzufet (143) -> fgjjwep, uzrnud\n" +
  "vzuqbye (87) -> eviqjr, cgxsmq, egmfbdq\n" +
  "zirocl (29)\n" +
  "jonshpm (99)\n" +
  "zmlth (154) -> zhxhkgf, cokzlht\n" +
  "bujroda (51)\n" +
  "bdvtvcu (74) -> tvcod, ouamzwh\n" +
  "jdrdxu (36)\n" +
  "troyu (29)\n" +
  "nrczsn (86)\n" +
  "aihow (92)\n" +
  "gaihmf (84)\n" +
  "ehjooz (124) -> hgwsl, mefxonk\n" +
  "omydd (6)\n" +
  "raevpsw (64)\n" +
  "aylmbfh (188) -> ddspu, thdwfw, kxnkbs, rziezq, jfjemon\n" +
  "diomq (65)\n" +
  "jjyjrtr (87) -> fjduphn, yjvgwdl\n" +
  "zsiziaa (38)\n" +
  "lyptirp (8)\n" +
  "lctdjj (56)\n" +
  "pbtks (85)\n" +
  "jxhrar (227) -> barnhza, iqovqp\n" +
  "neqfzm (13)\n" +
  "dhwauy (48)\n" +
  "qvjqfi (80)\n" +
  "ivstcsm (72)\n" +
  "aabrjf (72)\n" +
  "jvccsp (86) -> gukuqw, hpmbkwb\n" +
  "ddspu (113) -> yjmbbu, dzbrgb\n" +
  "zgevpxx (48)\n" +
  "qrrey (588) -> bhvmgw, wgexpa, xiotwdk\n" +
  "ncodn (62)\n" +
  "rbcqgqv (75) -> imcczga, xzurwza\n" +
  "fpxtub (11)\n" +
  "ldfopw (30)\n" +
  "ewyzqg (49)\n" +
  "iuhlc (6)\n" +
  "oqphsw (2722) -> iueejt, ekdqf, btbxk, jdshuob\n" +
  "eysrnaa (71)\n" +
  "ojsjuts (176) -> njxyw, dzasw, rpzaqc\n" +
  "ozyexx (83)\n" +
  "nnldikq (316) -> upwlxnb, vbxmpc, dgwcz\n" +
  "tfmtk (69)\n" +
  "hwctdr (76)\n" +
  "rothisa (66)\n" +
  "qnbfk (91)\n" +
  "qcgxvx (99)\n" +
  "igyiie (237) -> knirl, trbzi, auxvur, rvhxik\n" +
  "cverrt (52)\n" +
  "orrutjs (93)\n" +
  "ffloi (25) -> kflize, icgwppo\n" +
  "phrxnli (21)\n" +
  "eopxpo (41)\n" +
  "vlfouc (62)\n" +
  "fdnom (87)\n" +
  "wuxhvnx (86) -> ikfpktb, zcvipz\n" +
  "flefy (38)\n" +
  "yoeau (206) -> rfwgtb, drmyco\n" +
  "ozatmpe (34)\n" +
  "ydbri (66)\n" +
  "tufds (42)\n" +
  "pprhx (57) -> xitzb, zqyua, dtpexjq, zyradhz\n" +
  "zhxhkgf (29)\n" +
  "qwzmv (52)\n" +
  "paxzd (53)\n" +
  "cyzkk (60)\n" +
  "gyjxkl (37)\n" +
  "pzpjw (54)\n" +
  "svayf (89)\n" +
  "xxxqpkx (7)\n" +
  "imihjj (69) -> yygqky, qlkslp\n" +
  "tkpvf (47)\n" +
  "tljdqy (81) -> sxllorg, yatfpqx, zbznuyf, kymhbse, rfmeug, tetmzw\n" +
  "iphzyj (260) -> omsroa, mxupea\n" +
  "xiotwdk (177) -> jlnyr, nsqqw\n" +
  "eyyzy (274) -> opuaau, qolnvo, jxhrar\n" +
  "baewpe (55) -> svkdyq, hitoud, zvnxfa, emfctr, facrq, vykqcnj, bckuyxm\n" +
  "barnhza (20)\n" +
  "oafnfo (51)\n" +
  "pjcttzo (50)\n" +
  "aooni (205) -> xrvbzya, gvjrx\n" +
  "scchi (48)\n" +
  "zcgrnt (73)\n" +
  "pmsdv (93) -> pyypotx, marzlxh, zvepqr\n" +
  "kngbqid (89)\n" +
  "iwhqlr (949) -> ztkgsyt, ffloi, hzgig\n" +
  "vyxfljc (92) -> pyrlph, wdsiq, eysrnaa\n" +
  "hddzn (69)\n" +
  "cxvqvjz (136) -> kfrti, nslettz\n" +
  "tcospq (96) -> aabrjf, dllgpye\n" +
  "mnmwzz (142)\n" +
  "xfblj (40)\n" +
  "vfwegiu (46)\n" +
  "iphncut (138) -> wslsg, qhnaxuy\n" +
  "algqhtz (37) -> qeojk, sybpano\n" +
  "dmoxr (73)\n" +
  "tozktyo (29)\n" +
  "npjxq (46)\n" +
  "uvfyo (675) -> lxlbt, gnjvf, nfsuzef, spwgm\n" +
  "ollhxuy (821) -> vefzbc, faecnr, geldsqv, xneoi, cxvqvjz, jgkvfa, xtwdx\n" +
  "ksvfdcc (72)\n" +
  "avycyh (180) -> hwosyg, alqim\n" +
  "nsqqw (16)\n" +
  "nsfsj (99)\n" +
  "tpphe (64887) -> yatbsip, syzlt, uttujj\n" +
  "miwoup (40) -> gyjpoco, apgjv, eknui\n" +
  "iljwgzf (92)\n" +
  "bfuywyg (82)\n" +
  "aaqdb (44)\n" +
  "fgbyre (11)\n" +
  "kywfqzv (41) -> lajidkr, gyjxkl, wfhyr, evhsybt\n" +
  "aiovxpk (95) -> yoxvx, pbtks\n" +
  "hrovawq (50)\n" +
  "ajenoz (48)\n" +
  "aeuub (53)\n" +
  "gxjvj (163) -> yiusa, nrczsn\n" +
  "ippzix (9)\n" +
  "ttllx (73)\n" +
  "rorqy (43)\n" +
  "dqash (96)\n" +
  "lwvnbzs (24)\n" +
  "ckheb (34)\n" +
  "rgfndsx (18) -> qkbnq, welll, bkextqn, wnotwt\n" +
  "rsazi (62)\n" +
  "rpfmi (52)\n" +
  "uxslfay (72)\n" +
  "aemgsa (40)\n" +
  "jfmnsqg (85)\n" +
  "ggnsa (114) -> xhmfmo, azdei\n" +
  "lndaa (175) -> qvjqfi, iyuuh\n" +
  "kjdoubx (128) -> eopxpo, igyxt\n" +
  "dzasw (47)\n" +
  "emfctr (9120) -> qzckx, fsaoa, bjrpalu, mdneq, tdwtlf, hswrbpz, knltna\n" +
  "srqntb (137) -> raevpsw, qvteg\n" +
  "wweusm (66)\n" +
  "hawsl (13)\n" +
  "cupsjm (146) -> baiaa, pcqyagx\n" +
  "ppqlc (42)\n" +
  "tadnt (47) -> ufefj, rwxggm, rorqy\n" +
  "rvhxik (11)\n" +
  "vijkx (32)\n" +
  "lqcar (71)\n" +
  "dhkahb (49)\n" +
  "ftuemb (19)\n" +
  "ewdqb (50)\n" +
  "npmwcx (93)\n" +
  "wwezydn (97)\n" +
  "fuvru (98)\n" +
  "cdpwklz (83)\n" +
  "dtscjna (46)\n" +
  "exuusj (7)\n" +
  "ouamzwh (88)\n" +
  "ggvbqrp (145) -> opohwq, yrmgc, gewgn\n" +
  "ekdqf (467) -> ugvqayz, ysgsry, ogbsm\n" +
  "torxqh (90) -> dzwol, lepja\n" +
  "hpmbkwb (69)\n" +
  "ripqyzr (48)\n" +
  "eiklbh (32)\n" +
  "omdlwm (168) -> ihtnbb, hjjkx, bomho\n" +
  "lbwzat (74) -> iivncbz, dmoxr\n" +
  "pyypotx (51)\n" +
  "bjabd (7)\n" +
  "auzbdlz (95)\n" +
  "sxfilp (72) -> livlj, lgenxz\n" +
  "kxvlprg (60)\n" +
  "rfmeug (121) -> apygt, viwns, chtlcwq, wekkbw\n" +
  "xajjyba (164)\n" +
  "kzltfq (94288) -> vnrmx, lrihy, arqoys, nsmoh\n" +
  "mbhld (73)\n" +
  "rwxggm (43)\n" +
  "vapwxei (61)\n" +
  "ufefj (43)\n" +
  "oajawn (34)\n" +
  "dgnjf (335) -> yxseri, nscbsob\n" +
  "xaoncma (296) -> yipzce, nrpxx, rrfbngi\n" +
  "kqlsniq (95) -> qwsxpnc, mqmbcl, gtbbuvb\n" +
  "jrvbacq (49)\n" +
  "oavluo (21)\n" +
  "qpldch (54)\n" +
  "ieusgd (295)\n" +
  "tifgptk (100) -> ddldgex, ggvbqrp, focqhgt, cncak, ksvpnt, weuwc\n" +
  "lhradm (583) -> vusxa, lbwzat, ucbbun\n" +
  "apgjv (85)\n" +
  "cbibo (99)\n" +
  "jxhngrl (48)\n" +
  "qwsxpnc (96)\n" +
  "ysbrui (1293) -> iqggu, upvhfmn, kpqyb, wdeuy\n" +
  "ekvall (209) -> jxhngrl, aplvqql, drwfop\n" +
  "mkwfj (35)\n" +
  "pjiqvd (87)\n" +
  "pgubexv (78)\n" +
  "vbhnmr (2850) -> iftfc, kunzpa, qrrey, tljdqy\n" +
  "sjwhig (93)\n" +
  "zyradhz (52)\n" +
  "wcexum (116) -> eiklbh, vijkx\n" +
  "cdcye (53) -> izppmg, rxvyqsp\n" +
  "bdinafh (10)\n" +
  "rziezq (145) -> taiho, pkfhp\n" +
  "nslettz (10)\n" +
  "svhbd (109) -> xcvxle, fqzsq, jopjvd\n" +
  "limljj (68)\n" +
  "kauphp (231) -> dyxsmz, yzxzo\n" +
  "caryo (7)\n" +
  "nahovfk (109) -> flefy, cfztpc\n" +
  "qolnvo (267)\n" +
  "cmqwplb (9)\n" +
  "cfhuce (71) -> cecsr, josdslh\n" +
  "zwnvqu (88)\n" +
  "mhjtjp (91)\n" +
  "apkwi (222) -> rxragg, zsxizw\n" +
  "ioywk (16) -> ozyexx, eikmns, ktjav\n" +
  "yrmgc (31)\n" +
  "kqzemkv (96)\n" +
  "rxvyqsp (60)\n" +
  "hnlgkv (17)\n" +
  "raryuo (73)\n" +
  "bomho (87)\n" +
  "rixnft (85) -> cpndnx, fpxtub\n" +
  "zoewj (193) -> ohbuhy, ymckwqo\n" +
  "hnyqq (34)\n" +
  "tkmed (1959) -> tuqmup, jwgchxu, sjforw, zmsosb, tqikxkp\n" +
  "wlpyulp (10)\n" +
  "pixjzh (158) -> fgjwz, lsknlg, hlcghe, txhfuoh, hdvel\n" +
  "likvlm (62)\n" +
  "xhmfmo (48)\n" +
  "rgrxpe (69)\n" +
  "weuwc (84) -> xtwdau, muncur\n" +
  "uevcwul (92)\n" +
  "kpxqlr (155) -> nbbyqsa, ilkqp\n" +
  "fqzsq (98) -> tiujei, yhubw\n" +
  "ubovv (6)\n" +
  "knirl (11)\n" +
  "lzvniiz (60)\n" +
  "cwtdf (29)\n" +
  "qeojk (99)\n" +
  "ycxzfkf (131) -> bgflw, chophr\n" +
  "thjulip (20)\n" +
  "vgdwm (53)\n" +
  "myhch (25)\n" +
  "bovno (175)\n" +
  "uqlso (48)\n" +
  "rhnkdt (59) -> rsazi, ncodn, pwizhzr, likvlm\n" +
  "acpfsnb (204) -> nmlcne, vfsttaj\n" +
  "wzfkk (99)\n" +
  "oqlpz (81)\n" +
  "nscbsob (24)\n" +
  "mzmfygf (171) -> jxyoypa, ippzix\n" +
  "rvrlma (211)\n" +
  "pfphng (90)\n" +
  "mdiqsgg (12)\n" +
  "jtzkva (274) -> flomey, ukvvt\n" +
  "tvwxmur (64) -> yodoqn, ksvfdcc, ivstcsm, pvgzz\n" +
  "aplvqql (48)\n" +
  "qybmgto (9)\n" +
  "mtcrswx (75)\n" +
  "aphpzub (29)\n" +
  "vchsdif (105) -> ofisj, zwnvqu\n" +
  "dllgpye (72)\n" +
  "lfzahrm (79)\n" +
  "oiosol (27)\n" +
  "geldsqv (80) -> ienye, eeppf, ftuemb, vbbgeo\n" +
  "vlbba (81) -> ewdqb, vfzby, pjcttzo, abddskq\n" +
  "nfsuzef (75) -> dlbzng, cbibo, wzfkk, jonshpm\n" +
  "lryzkx (71)\n" +
  "mhndszl (190) -> tbrfk, xprzeeb\n" +
  "jbepak (66)\n" +
  "nmlcne (27)\n" +
  "gfffvbp (8)\n" +
  "bqtas (93)\n" +
  "fhmauag (221) -> vantwg, kzwqzqf, vfwegiu\n" +
  "misyfn (82) -> uixlx, oupzsh, bovno\n" +
  "jtauf (13) -> xskehl, bmfhjm, srhirm, kjfmqkt, qzxaqvy\n" +
  "eerktn (85) -> npjxq, kasfuwe, ljbss, theau\n" +
  "ktaet (58)\n" +
  "eeppf (19)\n" +
  "vgqeyx (31)\n" +
  "qhnaxuy (31)\n" +
  "xrvbzya (35)\n" +
  "nzqcq (66) -> vewgrvp, vfngjd, sjrxs, hvjtn, ecokyy, gcaxntb, omdlwm\n" +
  "sybpano (99)\n" +
  "ebsniof (39)\n" +
  "urzul (9)\n" +
  "srmiagk (292) -> dvdgowj, vqpeg, gjuekv\n" +
  "uexdnv (82)\n" +
  "pgspysb (40)\n" +
  "wymfopy (93)\n" +
  "nqhdt (164) -> mkwfj, gjwaqu, sxmbcwp\n" +
  "twzpqip (41)\n" +
  "bniti (66)\n" +
  "yfjenp (295) -> qxfce, zsiziaa\n" +
  "meoeea (60) -> laczal, tcvabyz\n" +
  "heacb (53)\n" +
  "focqhgt (238)\n" +
  "dtstgj (36)\n" +
  "kkmqko (7)\n" +
  "vcjjo (98)\n" +
  "nnnkeh (445) -> gzzpja, bhuyfk, xnukvni, tttle, snzfrer\n" +
  "baesyhf (1013) -> tznkwk, hcjxz\n" +
  "hygfoe (85)\n" +
  "wtxbqe (87)\n" +
  "vwzglf (58)\n" +
  "hswrbpz (254) -> flcqsb, sbguah, cdcye\n" +
  "axtqrx (29)\n" +
  "auxvur (11)\n" +
  "iqggu (444)\n" +
  "kceusl (42)\n" +
  "jykbb (91)\n" +
  "nxzkuj (75)\n" +
  "xzurwza (95)\n" +
  "rrflox (52)\n" +
  "kfmzbvk (10)\n" +
  "mnkwo (212) -> jyskb, wfphcf\n" +
  "dfvhic (82) -> fhmazv, hwctdr\n" +
  "gfzbp (197) -> ymcuygn, mxzbcqn\n" +
  "tlednk (39)\n" +
  "lgenxz (54)\n" +
  "emwbbut (9)\n" +
  "exoft (17)\n" +
  "woolxv (49)\n" +
  "auxqbbc (87)\n" +
  "wvocz (67)\n" +
  "hvjtn (325) -> cverrt, kfxoi\n" +
  "aunhcg (613) -> kjdoubx, ggnsa, acknlp\n" +
  "absdwf (39)\n" +
  "wajnxjj (40) -> imjzf, wwezydn\n" +
  "hgdbaol (10)\n" +
  "cfztpc (38)\n" +
  "chlxm (46)\n" +
  "ljbss (46)\n" +
  "gauumxf (230) -> tkiraal, lyptirp\n" +
  "nhlittn (22)\n" +
  "gcaxntb (405) -> mdiqsgg, oxiuaz\n" +
  "lfxew (66)\n" +
  "bamxg (66)\n" +
  "wdsiq (71)\n" +
  "mykrcq (98) -> zcgrnt, raryuo, okrdziq\n" +
  "erpvue (91)\n" +
  "kmwbbz (93)\n" +
  "vsgaam (7)\n" +
  "hokyk (66)\n" +
  "pjzpmq (38)\n" +
  "iqovqp (20)\n" +
  "mmcychg (65)\n" +
  "guncf (259) -> proshun, wxjka\n" +
  "jatnl (216) -> oavluo, phrxnli\n" +
  "nhkvp (100) -> rgrxpe, nscav, illjvf\n" +
  "hcjxz (31)\n" +
  "mqrroj (243) -> jtjcj, dnmvzeg\n" +
  "lvksghj (18)\n" +
  "mhsjkm (84)\n" +
  "popplum (89)\n" +
  "vusxa (30) -> ieadjz, mzmtuw\n" +
  "dmkbnot (26)\n" +
  "httit (18)\n" +
  "tbrfk (19)\n" +
  "ztzwh (48)\n" +
  "imjzf (97)\n" +
  "rypdxr (105) -> qyoqb, lejgcu, djirpp\n" +
  "qzckx (35) -> qzzkvf, pmsdv, gauumxf\n" +
  "xbnmvd (76)\n" +
  "ouymke (47)\n" +
  "rajtef (365) -> iriun, ezaypy\n" +
  "itngcua (65)\n" +
  "orxoo (66)\n" +
  "tcdwurt (18)\n" +
  "auqoj (99)\n" +
  "sqnvvbg (36)\n" +
  "rxragg (18)\n" +
  "kpqyb (258) -> sqkcdf, iqxwh, vnhvilk\n" +
  "proshun (47)\n" +
  "uscufoy (15)\n" +
  "tpipb (61)\n" +
  "owhjmt (155) -> vsruoi, ifxcrug\n" +
  "bkvle (9)\n" +
  "yosnw (32) -> ilymgq, yppydul, yamclb\n" +
  "iynywq (66)\n" +
  "nxpexoq (92)\n" +
  "eviqjr (25)\n" +
  "trbzi (11)\n" +
  "rfvomn (95)\n" +
  "ohbuhy (41)\n" +
  "vkpltts (73)\n" +
  "ktpte (9)\n" +
  "bbgwzg (79)\n" +
  "bgcigo (8) -> bruzfkf, lxcbjgy, vlmcmcu\n" +
  "ecokyy (357) -> iaphzk, httit, vztnh, owmni\n" +
  "jwgchxu (32) -> rfvomn, auzbdlz\n" +
  "xlskkfi (92)\n" +
  "uxjasn (36)\n" +
  "dcumfo (73)\n" +
  "wpnqet (87)\n" +
  "ilqol (88)\n" +
  "bhsbd (53)\n" +
  "flcqsb (115) -> meypo, aphpzub\n" +
  "yvqtyi (85)\n" +
  "oyvhouc (37) -> cdpgoi, bbgwzg, xoziel, lfzahrm\n" +
  "bjhickt (23)\n" +
  "hmvwl (32) -> nswximo, tpphe, baewpe, hghnmib, kzltfq\n" +
  "oiijtm (20)\n" +
  "ylfsnz (93)\n" +
  "imynb (146) -> absdwf, cikaze\n" +
  "yygqky (82)\n" +
  "yuswp (68)\n" +
  "izppmg (60)\n" +
  "itwbpot (22)\n" +
  "hwosyg (42)\n" +
  "mkrzp (211) -> laxsl, zirocl\n" +
  "vqpeg (5)\n" +
  "gddkqw (244) -> vhtyadn, lvksghj\n" +
  "bhuyfk (79) -> aghdlll, ilqol\n" +
  "yrfqaga (103) -> jqinti, zjaklmn\n" +
  "bnfopv (118) -> cjmxed, zlzers, qrlggma\n" +
  "welll (99)\n" +
  "ehuzoq (77)\n" +
  "nqyok (77)\n" +
  "rrfbngi (21)\n" +
  "yoezrpw (38)\n" +
  "rpzaqc (47)\n" +
  "qxlucvg (84)\n" +
  "tehyhc (13)\n" +
  "gqrfok (231) -> kfhnhm, aituccf, qrkhol\n" +
  "zvnxfa (10022) -> aylmbfh, lwencl, pixjzh\n" +
  "gzzpja (255)\n" +
  "ofrwmq (205) -> iigvpqy, wweusm\n" +
  "qanbo (50)\n" +
  "obslyn (13)\n" +
  "hwovhvw (915) -> qdhrchr, nahovfk, xomnhw, ycxzfkf\n" +
  "smlfbc (1615) -> wnjwnr, pprhx, aiovxpk\n" +
  "xbkeua (157) -> pgspysb, aemgsa, xfblj, hswzo\n" +
  "btklib (51)\n" +
  "owmni (18)\n" +
  "qzzkvf (108) -> aobitc, tsrogy\n" +
  "umtrod (22)\n" +
  "vxajmkg (71)\n" +
  "jmlmzpz (62)\n" +
  "plurwe (228)\n" +
  "jyskb (6)\n" +
  "xnuoujm (16)\n" +
  "nakmo (10)\n" +
  "uzhlers (50)\n" +
  "umlkxqv (20) -> ecimj, wudjf, jfmnsqg\n" +
  "ziqwzzy (204) -> uscufoy, fooyrq\n" +
  "ymrogz (272) -> ebsniof, tlednk\n" +
  "lpuass (28)\n" +
  "qrkhol (9)\n" +
  "hpkpw (38)\n" +
  "gtzcxq (73)\n" +
  "gvjrx (35)\n" +
  "ieadjz (95)\n" +
  "tcukgv (66)\n" +
  "ifxcrug (55)\n" +
  "thxtoc (178) -> trtgn, fdnom\n" +
  "puwvse (414)\n" +
  "pvppi (246) -> qlwxeb, nuqyqh\n" +
  "vcixs (260) -> noipcz, frohei\n" +
  "cichyqw (71)\n" +
  "ugvqayz (126) -> xfekjt, wvocz\n" +
  "hrqzqqh (53)\n" +
  "qedst (18)\n" +
  "wnjtb (73)\n" +
  "kjfmqkt (138) -> pzpjw, qpldch\n" +
  "ussmw (94)\n" +
  "sxmbcwp (35)\n" +
  "dqdfv (73)\n" +
  "ptyxo (13)\n" +
  "upuxd (36)\n" +
  "fppcif (209) -> uxslfay, yjhes\n" +
  "kxykfr (82) -> twzpqip, qymwy\n" +
  "yodoqn (72)\n" +
  "mnzbkuh (28) -> jtouvtb, wdvwub\n" +
  "omdpc (26)\n" +
  "ccrftvw (62)\n" +
  "bmfhjm (222) -> lyvyhkm, sbyxyf, kblshw\n" +
  "fwgqj (1924) -> zmcgfdp, vzuqbye, rypdxr\n" +
  "rlbom (79)\n" +
  "livlj (54)\n" +
  "ybvgki (8)\n" +
  "zcvipz (97)\n" +
  "xyohoxa (928) -> qkkzzlm, lmuyfcw, avycyh\n" +
  "dchts (99) -> lctdjj, oevyknd\n" +
  "ksfok (217) -> gfffvbp, ybvgki\n" +
  "hoomyh (88) -> aaqdb, ljfqvk\n" +
  "qijarlh (58)\n" +
  "tznudmk (17)\n" +
  "cyrrjtx (124) -> oqbdf, xwlmsqy, ulztj, rjsnth\n" +
  "nuqyqh (52)\n" +
  "oblsboq (85)\n" +
  "imnhql (94)\n" +
  "hxswghs (126) -> dwwsu, hdlqvlg, jppgd\n" +
  "ulztj (25)\n" +
  "hgwsl (50)\n" +
  "ksvpnt (96) -> fqlezvk, lqcar\n" +
  "mjpzp (10)\n" +
  "fsaoa (89) -> dbwmq, uzufet, arwmalf, gobrf\n" +
  "iftfc (159) -> thxtoc, jtzkva, tvwxmur\n" +
  "zjpsm (83)\n" +
  "vwfhi (9)\n" +
  "opuaau (75) -> dqash, kqzemkv\n" +
  "mxupea (45)\n" +
  "dmkyzy (15) -> ttllx, horqcc, dcumfo\n" +
  "sxllorg (69) -> kxvlprg, lzvniiz\n" +
  "txhfuoh (219) -> lwdqnj, myhch\n" +
  "chtlcwq (17)\n" +
  "hlcbqu (104) -> ccrftvw, jmlmzpz\n" +
  "ivmndi (94)\n" +
  "lficpr (62)\n" +
  "ortqc (99)\n" +
  "dvzlq (33)\n" +
  "acknlp (56) -> aozoac, ehuzoq\n" +
  "jqxnf (60)\n" +
  "hfftu (52)\n" +
  "ihzvygq (94) -> kmwbbz, orrutjs\n" +
  "rarkunn (73)\n" +
  "hitoud (5511) -> vcktg, rqbjbio, xtyzy, ssdgbnh\n" +
  "sdhtguj (58) -> uklsrym, mcmqliy, nnnkeh, clinrg, fwidkbp, hzmhm, xyohoxa\n" +
  "hrlkgen (99)\n" +
  "vuyzhsh (61)\n" +
  "nzzfer (85) -> qcgxvx, ortqc, auqoj, ilfzi\n" +
  "tuqmup (222)\n" +
  "zbznuyf (137) -> ptyxo, qwtzc, neqfzm, hawsl\n" +
  "qwtzc (13)\n" +
  "vykqcnj (71) -> jitzj, nkhadt, tcsbho, fhxpkd, fwgqj, smlfbc\n" +
  "mjzksjz (7)\n" +
  "yfdtz (36)\n" +
  "faixe (56)\n" +
  "tejnuve (209) -> jgmisxl, dhkahb\n" +
  "opohwq (31)\n" +
  "lsknlg (95) -> vwzglf, hjucki, yrkvb\n" +
  "fhmazv (76)\n" +
  "egmfbdq (25)\n" +
  "rxcnn (9)\n" +
  "tboizos (250)\n" +
  "glwhd (122) -> ceoav, troyu\n" +
  "ykehxw (19)\n" +
  "bruzfkf (91)\n" +
  "rjjlus (87)\n" +
  "ocnna (18)\n" +
  "qshbt (73)\n" +
  "raakduh (85) -> fuvru, vcjjo\n" +
  "wudjf (85)\n" +
  "ihwaeuw (60)\n" +
  "kfxoi (52)\n" +
  "oewzluz (39)\n" +
  "coopirx (251) -> exuusj, rvimq\n" +
  "cokzlht (29)\n" +
  "uacjhqx (23)\n" +
  "tznkwk (31)\n" +
  "mthhq (111) -> uevcwul, nxpexoq\n" +
  "uixlx (7) -> kmlwj, gaihmf\n" +
  "nqvxs (71)\n" +
  "ktjav (83)\n" +
  "eknui (85)\n" +
  "fhuiyrl (93)\n" +
  "fktsu (65)\n" +
  "vugnug (65)\n" +
  "ilymgq (91)\n" +
  "clinrg (1033) -> rsancy, jrqorlo, lvklj\n" +
  "bkextqn (99)\n" +
  "ekohgo (251) -> xxxqpkx, wkphn\n" +
  "alkneau (34)\n" +
  "mnijdlk (85)\n" +
  "dyxsmz (38)\n" +
  "mefxonk (50)\n" +
  "lajidkr (37)\n" +
  "uiuokpq (89)\n" +
  "oupzsh (43) -> bzmade, bamxg\n" +
  "cijptz (18)\n" +
  "khibjj (89)\n" +
  "yamclb (91)\n" +
  "okrdziq (73)\n" +
  "sbyxyf (8)\n" +
  "zknziw (18)\n" +
  "fobzai (75)\n" +
  "rjsnth (25)\n" +
  "iaphzk (18)\n" +
  "lufgosn (10)\n" +
  "rzkcu (34)\n" +
  "xlhfyw (471) -> yuswp, limljj\n" +
  "tcsbho (1842) -> mnmwzz, mnzbkuh, zpidc, cpqti\n" +
  "docln (85)\n" +
  "neeqb (7)\n" +
  "tvcod (88)\n" +
  "uklsrym (40) -> bbhniy, gddkqw, lhmnd, ihzvygq, nhkeb, wuxhvnx\n" +
  "qkkzzlm (76) -> imnhql, nbeagw\n" +
  "qywkuqu (20)\n" +
  "fvgbg (191) -> iwkntdi, jdrdxu, sqnvvbg, yfdtz\n" +
  "qlkslp (82)\n" +
  "iqxwh (62)\n" +
  "mdneq (623) -> uzhlers, qanbo, tedplb\n" +
  "msmgk (173) -> fygmpjn, exoft\n" +
  "euoclfs (241) -> pjzpmq, hpkpw\n" +
  "vlimzz (19) -> yvqtyi, gwournc, docln, oblsboq\n" +
  "zoqni (189) -> chlxm, yfmxvay\n" +
  "oignan (206) -> hdaqxlh, fgbyre\n" +
  "zpidc (40) -> bujroda, btklib\n" +
  "aazxafl (215) -> xnmvtem, oafnfo\n" +
  "yhubw (34)\n" +
  "xneoi (138) -> vwfhi, cmqwplb\n" +
  "vefzbc (138) -> dywqvqh, emwbbut\n" +
  "ruozmjk (73)\n" +
  "jrwfehi (75) -> kcnim, bdvtvcu, tfsoxgb, tboizos\n" +
  "iivncbz (73)\n" +
  "ccuarv (53)\n" +
  "lrihy (185) -> vchsdif, bgcigo, raakduh, vlbba, igyiie, zoqni\n" +
  "vewgrvp (73) -> dntphko, svayf, uiuokpq, popplum\n" +
  "iigvpqy (66)\n" +
  "fjduphn (91)\n" +
  "uttujj (11755) -> glwhd, sxfilp, wcexum\n" +
  "tluap (6)\n" +
  "exeub (71)\n" +
  "dzwol (61)\n" +
  "ilfzi (99)\n" +
  "cdpgoi (79)\n" +
  "hxckb (71)\n" +
  "yoxvx (85)\n" +
  "theau (46)\n" +
  "vwnjh (233) -> jqxnf, qfpwln\n" +
  "jbpjt (27)\n" +
  "zmsosb (14) -> rrflox, ovluts, rpfmi, ojvlwm\n" +
  "yoivja (59)\n" +
  "towlhi (36)\n" +
  "zcrjb (253) -> qhohy, uwaiki\n" +
  "josdslh (59)\n" +
  "xoziel (79)\n" +
  "fsuzqyz (169) -> duftj, ppqlc, kceusl\n" +
  "chwjiub (96)\n" +
  "fpbsu (89)\n" +
  "qyoqb (19)\n" +
  "dfeomzr (38)\n" +
  "kfhnhm (9)\n" +
  "oevyknd (56)\n" +
  "buoakk (22)\n" +
  "wduqgix (77)\n" +
  "qokscr (65)\n" +
  "oqbdf (25)\n" +
  "jjsvfy (199) -> yoivja, gdnsat\n" +
  "ssdgbnh (887) -> qtsjbq, plurwe, mhndszl, hlcbqu, pgskth, oignan\n" +
  "lrsedv (213) -> eaqjcju, cekpxgj\n" +
  "iwkntdi (36)\n" +
  "qfgzmtz (73)\n" +
  "rfwgtb (26)\n" +
  "alcvj (7)\n" +
  "bvdxf (30)\n" +
  "ofisj (88)\n" +
  "mpchqe (27)\n" +
  "pwizhzr (62)\n" +
  "wkcyd (75)\n" +
  "mxzbcqn (81)\n" +
  "npzdqeg (227) -> tufds, msxhvo, pcsucog\n" +
  "illjvf (69)\n" +
  "iyuuh (80)\n" +
  "fygmpjn (17)\n" +
  "dvdgowj (5)\n" +
  "hlcghe (91) -> khibjj, kngbqid\n" +
  "zvurtb (77)\n" +
  "ouspx (46)\n" +
  "dbvxai (76)\n" +
  "facrq (13496) -> fkbla, ffvprc, yrfqaga, msmgk, hxswghs\n" +
  "xbcgipi (66)\n" +
  "wfhyr (37)\n" +
  "ziyata (221) -> oqlpz, jjtrisl\n" +
  "muncur (77)\n" +
  "vlvss (183) -> odvtiti, fazqw\n" +
  "kvdkwy (96)\n" +
  "ddldgex (84) -> nqyok, wduqgix\n" +
  "trtgn (87)\n" +
  "jitzj (65) -> fvgbg, nbfqgr, zjwpbzs, lndaa, vlvss, gxjvj, zcrjb\n" +
  "hkhoyje (95) -> frirj, iuhlc\n" +
  "gtbbuvb (96)\n" +
  "tfsoxgb (250)\n" +
  "rohvy (95)\n" +
  "qhohy (41)\n" +
  "goimlra (227) -> orxoo, lfxew\n" +
  "hubbqbi (95)\n" +
  "vchuc (53)\n" +
  "svkdyq (9559) -> akmgfo, lhradm, jtauf, aunhcg\n" +
  "fazqw (76)\n" +
  "flomey (39)\n" +
  "apygt (17)\n" +
  "wjptb (43)\n" +
  "srhirm (147) -> bicsjoc, dvzlq, olykwbi\n" +
  "wdeuy (254) -> hubbqbi, rohvy\n" +
  "yeooycn (93)\n" +
  "qoyzgsp (28)\n" +
  "sqkcdf (62)\n" +
  "rgbvlc (49)\n" +
  "qinzaf (813) -> aooni, zoewj, ogzrdrk, umlkxqv\n" +
  "kflize (84)\n" +
  "isrtfc (201) -> vmutyru, ouymke\n" +
  "nkhadt (292) -> fppcif, vwnjh, oyvhouc, ekvall, guncf, npzdqeg\n" +
  "nbbyqsa (40)\n" +
  "ikfpktb (97)\n" +
  "maqgick (76)\n" +
  "xtwdx (156)\n" +
  "sbyzsq (10)\n" +
  "vgubuy (74) -> iljwgzf, aihow\n" +
  "taiho (59)\n" +
  "cpndnx (11)\n" +
  "vhtyadn (18)\n" +
  "aaheijb (54)\n" +
  "rykadr (19)\n" +
  "onnylx (32)\n" +
  "gukuqw (69)\n" +
  "fooyrq (15)\n" +
  "zqyua (52)\n" +
  "vsruoi (55)\n" +
  "ikmvhid (2745) -> hwovhvw, arsuc, yzrdupu\n" +
  "vztnh (18)\n" +
  "khaupo (32)\n" +
  "cpqti (142)\n" +
  "qtsjbq (126) -> wekya, rzkcu, alkneau\n" +
  "pcsucog (42)\n" +
  "lepja (61)\n" +
  "ibjvonk (10277) -> xlhfyw, svhbd, misyfn\n" +
  "rqbjbio (29) -> mqrroj, hjeysaa, wlujpl, vooac, rrggg, yfjenp\n" +
  "ceuygh (90) -> aqxsjq, qxlucvg\n" +
  "qzxaqvy (78) -> fwskxtt, jlgvplm\n" +
  "fwskxtt (84)\n" +
  "yrkvb (58)\n" +
  "thdwfw (219) -> umtrod, nhlittn\n" +
  "zpkbe (73) -> cwtdf, tozktyo, qcrpdy, axtqrx\n" +
  "hjjkx (87)\n" +
  "jxyoypa (9)\n" +
  "ilkqp (40)\n" +
  "akwvj (238) -> jatnl, iphgmyt, meoeea, gqrfok, ljhwzvv\n" +
  "lkcddrg (2238) -> lqfyzo, rixnft, hkhoyje\n" +
  "xprzeeb (19)\n" +
  "rhodopg (94) -> qfgzmtz, dqdfv\n" +
  "ttwfig (340) -> rykadr, ykehxw\n" +
  "kueyf (85) -> ulbbc, nzzfer, azxjd\n" +
  "zmcgfdp (136) -> tehyhc, obslyn\n" +
  "ffnabs (20) -> guehoas, nnldikq, ofrwmq, lrsedv, qvkotfd, shfdaba\n" +
  "arwmalf (143) -> vsgaam, bjabd, ycclns, kkmqko\n" +
  "gyjpoco (85)\n" +
  "drmyco (26)\n" +
  "arqoys (1859) -> urzul, bkvle\n" +
  "nscav (69)\n" +
  "tsrogy (69)\n" +
  "qhafxnl (1337) -> xbcskih, kpxqlr, algqhtz\n" +
  "yiusa (86)\n" +
  "zdbqs (43)\n" +
  "xzppxad (58) -> ltxkw, ollhxuy, qinzaf, wpxxh\n" +
  "dxyifeb (1862) -> twubx, lkcddrg, uwqgz, uvfyo\n" +
  "zlzers (49)\n" +
  "gkkgkp (358) -> wlpyulp, nakmo\n" +
  "abddskq (50)\n" +
  "tggkm (43)\n" +
  "dgwcz (7)\n" +
  "bhvmgw (29) -> qflouyn, pfphng\n" +
  "guehoas (283) -> qedst, cijptz, zknziw\n" +
  "marzlxh (51)\n" +
  "mizab (60)\n" +
  "jgkvfa (120) -> ocnna, tcdwurt\n" +
  "jopjvd (80) -> dnouufu, wjptb\n" +
  "lwdqnj (25)\n" +
  "xpzhy (84)\n" +
  "noipcz (59)\n" +
  "bbhniy (20) -> itngcua, mmcychg, vugnug, fktsu\n" +
  "jtjcj (64)\n" +
  "tgdzl (53)\n" +
  "gobrf (25) -> gtzcxq, lsdrwz\n" +
  "arsuc (65) -> rbcqgqv, huwsoc, bnfopv, srqntb, vxdkej, owhjmt\n" +
  "ogzrdrk (101) -> vztbn, wtxbqe\n" +
  "oxbkwyr (91)\n" +
  "yatfpqx (109) -> xrbjn, qywkuqu, thjulip, oiijtm\n" +
  "jlgvplm (84)\n" +
  "bcibchp (54)\n" +
  "glgnecl (16)\n" +
  "tqikxkp (222)\n" +
  "bhcal (7)\n" +
  "vmutyru (47)\n" +
  "kzwqzqf (46)\n" +
  "evhsybt (37)\n" +
  "gdnsat (59)\n" +
  "cikaze (39)\n" +
  "jrqorlo (229)\n" +
  "ovluts (52)\n" +
  "nbfqgr (169) -> cdpwklz, zjpsm\n" +
  "nbngkou (73)\n" +
  "wslsg (31)\n" +
  "aobitc (69)\n" +
  "htgxu (24)\n" +
  "wjolzt (46)\n" +
  "hzgig (95) -> jrvbacq, rgbvlc\n" +
  "ulbbc (217) -> bniti, jbepak, iynywq, xbcgipi\n" +
  "wkphn (7)\n" +
  "fkbla (207)\n" +
  "jqinti (52)\n" +
  "yhiogu (256) -> neusnw, tkpvf\n" +
  "ebjsluk (39)\n" +
  "shfdaba (76) -> wpnqet, rjjlus, pjiqvd\n" +
  "anpnrdt (10)\n" +
  "jdshuob (491) -> kywfqzv, zpkbe, cfhuce, mzmfygf\n" +
  "vooac (341) -> lufgosn, sbyzsq, mjpzp\n" +
  "frohei (59)\n" +
  "baiaa (15)\n" +
  "pyrlph (71)\n" +
  "cgxsmq (25)\n" +
  "ukvvt (39)\n" +
  "gaujsyk (26) -> ktaet, yipoeia, qijarlh\n" +
  "gnjvf (375) -> ajenoz, ripqyzr\n" +
  "hghnmib (47802) -> vbhnmr, vustse, lybkeg, ikmvhid, oqphsw, xzppxad, gvkcsad\n" +
  "yrcgsnx (270) -> qfypnb, dbvxai\n" +
  "kwqrbav (34)\n" +
  "wdvwub (57)\n" +
  "viqhfi (89)\n" +
  "akmgfo (243) -> zhvji, iphncut, oyxbblb, gaujsyk, ybftt\n" +
  "faecnr (80) -> dfeomzr, yoezrpw\n" +
  "xskehl (228) -> ubovv, omydd, tluap\n" +
  "pdosfg (21) -> rlbom, lbjwlov, wgqkdcr\n" +
  "tkiraal (8)\n" +
  "aimav (46)\n" +
  "ecimj (85)\n" +
  "eikmns (83)\n" +
  "fqlezvk (71)\n" +
  "qrlggma (49)\n" +
  "ztkgsyt (29) -> bfuywyg, uexdnv\n" +
  "tedplb (50)\n" +
  "cvrcvgp (86) -> zvurtb, dkcix\n" +
  "bckuyxm (11306) -> eyyzy, jrwfehi, baesyhf\n" +
  "ffvprc (65) -> vxajmkg, cichyqw\n" +
  "jjtrisl (81)\n" +
  "vantwg (46)\n" +
  "vlmcmcu (91)\n" +
  "qdhrchr (89) -> dhwauy, uqlso\n" +
  "ceoav (29)\n" +
  "bhrbod (50) -> oxbkwyr, erpvue, zhrnwk, mhjtjp\n" +
  "yxseri (24)\n" +
  "kzbvrxk (10)\n" +
  "kcnim (76) -> zjoxibi, auxqbbc\n" +
  "ltxkw (30) -> eerktn, nqhdt, jjyjrtr, bfchbs, redqvw, mkrzp, nymguj\n" +
  "rrggg (371)\n" +
  "uwqgz (1923) -> torxqh, zmlth, lnctft\n" +
  "dbwmq (117) -> bmecxwd, lcrwbqi\n" +
  "kasfuwe (46)\n" +
  "btbxk (755) -> xajjyba, kxykfr, rymkqd\n" +
  "njxyw (47)\n" +
  "fvlfq (94)\n" +
  "zhvji (162) -> cpazlc, mluykm\n" +
  "aozoac (77)\n" +
  "chnkkj (86) -> tfmtk, hddzn\n" +
  "dkcix (77)\n" +
  "lxcbjgy (91)\n" +
  "mofks (30)\n" +
  "yzrdupu (719) -> wajnxjj, dfvhic, dmkyzy, ziqwzzy\n" +
  "wxjka (47)\n" +
  "xitzb (52)\n" +
  "rvimq (7)\n" +
  "qddsx (30)\n" +
  "lvklj (97) -> ydbri, tcukgv\n" +
  "sjforw (208) -> alcvj, neeqb\n" +
  "yjvgwdl (91)\n" +
  "fhxpkd (261) -> kauphp, zdhvqrl, rhnkdt, nhkvp, tejnuve, olspit, srmiagk\n" +
  "eaqjcju (62)\n" +
  "ybftt (122) -> oewzluz, ebjsluk\n" +
  "jgmisxl (49)\n" +
  "hdaqxlh (11)\n" +
  "cjmxed (49)\n" +
  "aqxsjq (84)\n" +
  "cekpxgj (62)\n" +
  "tetmzw (121) -> ozatmpe, qbmtmcs\n" +
  "mqmbcl (96)\n" +
  "xtyzy (155) -> yhiogu, iphzyj, pvppi, tojyt, krxyaak, ymrogz\n" +
  "drwfop (48)\n" +
  "pgskth (86) -> hxckb, lxesg\n" +
  "pvgzz (72)\n" +
  "kunzpa (687) -> tadnt, cupsjm, hoomyh\n" +
  "nhkeb (252) -> caryo, bhcal, mjzksjz, ufitse\n" +
  "cncak (182) -> qoyzgsp, lpuass\n" +
  "aituccf (9)\n" +
  "qfpwln (60)\n" +
  "laxsl (29)\n" +
  "yzxzo (38)\n" +
  "lnctft (116) -> zgevpxx, scchi\n" +
  "lyvyhkm (8)\n" +
  "vcktg (1556) -> ztghd, imihjj, ksfok\n" +
  "dzbrgb (75)\n" +
  "xbcskih (85) -> fobzai, nxzkuj\n" +
  "jtouvtb (57)\n" +
  "ufitse (7)\n" +
  "upwlxnb (7)\n" +
  "jysaup (78)\n" +
  "ysgsry (228) -> glgnecl, xnuoujm\n" +
  "horqcc (73)\n" +
  "vfsttaj (27)\n" +
  "gvkcsad (5412) -> ghsjtj, dgnjf, ziyata, rajtef, kqlsniq, vqclii\n" +
  "lbjwlov (79)\n" +
  "vnhvilk (62)\n" +
  "dntphko (89)\n" +
  "syzlt (6183) -> tifgptk, iwhqlr, akwvj, kueyf\n" +
  "hzmhm (1087) -> rvrlma, dchts, emzrj\n" +
  "neusnw (47)\n" +
  "vfzby (50)\n" +
  "cecsr (59)\n" +
  "uwaiki (41)\n" +
  "msxhvo (42)\n" +
  "fgjwz (113) -> qwzmv, xehdglb, kgpwo\n" +
  "lmuyfcw (164) -> hrovawq, hacwv\n" +
  "zjoxibi (87)\n" +
  "viwns (17)\n" +
  "olykwbi (33)\n" +
  "meypo (29)\n" +
  "sbguah (49) -> vlfouc, lficpr\n" +
  "oyxbblb (92) -> towlhi, fndxl, uxjasn\n" +
  "bzmade (66)\n" +
  "lfpzff (238) -> bdinafh, kfmzbvk\n" +
  "epuaii (88) -> ckheb, kwqrbav\n" +
  "dwwsu (27)\n" +
  "xnukvni (207) -> htgxu, lwvnbzs\n" +
  "zhrnwk (91)\n" +
  "vfngjd (325) -> hfftu, nymhem\n" +
  "vztbn (87)\n" +
  "kxnkbs (19) -> tpipb, vuyzhsh, vapwxei, wbxdta\n" +
  "bmecxwd (27)\n" +
  "nymguj (123) -> vkpltts, mbhld\n" +
  "qlwxeb (52)\n" +
  "kfrti (10)\n" +
  "xcvxle (106) -> qddsx, bvdxf\n" +
  "wbesqn (99)\n" +
  "kblshw (8)\n" +
  "qymwy (41)\n" +
  "ezaypy (9)\n" +
  "dnouufu (43)\n" +
  "cyapi (227) -> rothisa, hokyk\n" +
  "itbsk (30)\n" +
  "alqim (42)\n" +
  "hjeysaa (251) -> mofks, itbsk, njogewi, ldfopw\n" +
  "ljfqvk (44)\n" +
  "iueejt (5) -> rgfndsx, bhrbod, puwvse\n" +
  "knzppj (81) -> hrlkgen, nsfsj, wbesqn\n" +
  "wnjwnr (197) -> hnyqq, oajawn\n" +
  "xtwdau (77)\n" +
  "dmeee (93)\n" +
  "qxfce (38)\n" +
  "pcqyagx (15)\n" +
  "bicsjoc (33)\n" +
  "eeguu (78)\n" +
  "wbxdta (61)\n" +
  "gjwaqu (35)\n" +
  "mzmtuw (95)\n" +
  "huwsoc (173) -> ouspx, wjolzt\n" +
  "spdhhoe (167) -> chwjiub, kvdkwy\n" +
  "hhmwlo (56)\n" +
  "icgwppo (84)";

const input2 = "pbga (66)\n" +
  "xhth (57)\n" +
  "ebii (61)\n" +
  "havc (66)\n" +
  "ktlj (57)\n" +
  "fwft (72) -> ktlj, cntj, xhth\n" +
  "qoyq (66)\n" +
  "padx (45) -> pbga, havc, qoyq\n" +
  "tknk (41) -> ugml, padx, fwft\n" +
  "jptl (61)\n" +
  "ugml (68) -> gyxo, ebii, jptl\n" +
  "gyxo (61)\n" +
  "cntj (57)"

const recursiveCircus = (input) => {
  const programs = input.split('\n').map(program => {
    const [part1, part2] = program.split('->');
    const [name, weight] = part1.split(' ');
    return {
      childs: part2 ? part2.trim().split(', ') : [],
      weight: weight.match(/\(([0-9]+)\)/)[1],
      name
    }
  });
  programs.forEach(program => {
    program.childs.forEach(programName => {
      const x = programs.find(({name}) => name === programName);
      if (x) {
        x.visited = true;
      }
    });
  });

  const notVisited = programs.filter(x => !x.visited);
  if (notVisited.length === 1) {
    return notVisited[0].name
  }
}

describe.only('Recursive circus', () => {
  it('should return tknk', () => {
    expect(recursiveCircus(input2)).to.equal('tknk');
  });

  it('should return hmvwl', () => {
    expect(recursiveCircus(input)).to.equal('hmvwl');
  });
});