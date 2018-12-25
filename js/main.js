window.refreshPersonInfo = null;
window.refreshInfo = null;
window.refreshTime = null;
window.js_currTime = 0;

$(function () {
    $('#jumpToContact').click(function () {
        window.open('https://etherscan.io/address/' + contractAddr + '#code')
    })
    $('.js_jumpToEdu').click(function () {
        if (global_lan === 'zh') {
            window.open('../edu_zh.pdf')
        } else {
            window.open('../edu_en.pdf')
        }
    })
    // 购买、提现、推荐奖励 tab 点击事件  b 点击事件
    $('.team-grid .tabs .tab-title span').click(function () {
        $('.team-grid .tabs .tab-title span').removeClass('active');
        $(this).addClass('active');
        $('.team-grid .tabs .tab-content').removeClass('active');
        $('.team-grid .tabs .tab-content').eq($(this).index()).addClass('active');
    });

    // 回合、团队、统计 tab 点击事件
    $('.list-content .tabs .tab-title span').click(function () {
        $('.list-content .tabs .tab-title span').removeClass('active');
        $(this).addClass('active');
        $('.list-content .tabs .tab-content').removeClass('active');
        $('.list-content .tabs .tab-content').eq($(this).index()).addClass('active');
    });

    function showLoading() {
        $('.buy-loading').show();
        $('html body').addClass('stop');
    }

    function hideLoading() {
        $('.buy-loading').hide();
        $('html body').removeClass('stop');
    }

    // 格式化金额
    function numberComma(source, length) {
        if (!length) {
            length = 3;
        }
        source = String(source).split('.')
        source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), '$1,')
        return source.join('.')
    }

    function formatUSDT(eth) {
        var usd = 472;
        return numberComma(accMul(usd, eth).toFixed(2))
    }

    function getDefaultAdvisor() {
        // 线上的  0xa4b6ce77e56c10f2caf11baae7416612c5ec98b0
        return '0xfd76dB2AF819978d43e07737771c8D9E8bd8cbbF'
    }

    // 关闭创建弹窗
    function closeVanity() {
        $('#vanity').removeClass('show');
    }

    // 渲染时间
    function renderTime(hour, min, second) {
        function formatTime(time) {
            return (parseInt(time, 10)) < 10 ? '0' + time.toString() : time;
        }

        // if (hour === 0 && min === 0 && second < 15 && second !== 0) {
        //     window.refreshTime();
        // }
        if (hour < 0) {
            $('.headtimer').text(_('想开启新的轮回吗？'));
            $('header .lottery_time, .lottery_time p').text(_('本回合已结束'));
            $('.js_buy').addClass('isOver');
            $('.js_buy .js_buy_text').text(_('现在购买1颗金钻，您将激活新一回合的游戏！'));
            clearInterval(xyj._timer);
            xyj._timer = null;
            return;
        } else {
            $('.js_buy').removeClass('isOver');
            $('.js_buy .js_buy_text').text(_('快速购买一颗金钻，赢得超级奖池！'));
        }

        $('.headtimer, header .lottery_time').text(formatTime(hour) + ':' + formatTime(min) + ':' + formatTime(second));
        $('.lottery_time p').text(formatTime(hour) + _(':') + formatTime(min) + _(':') + formatTime(second));
    }

    // 根据time计算小时 分钟 秒数
    function calcTime(time) {
        var hour = Math.floor(time / 3600);
        var min = Math.floor((time - (hour * 3600)) / 60);
        var second = (time - (hour * 3600)) % 60;
        return [hour, min, second]
    }

    // 更新计数器
    function updateInterval(time) {
        if (xyj._timer) {
            clearInterval(xyj._timer);
        }
        xyj._time = time;
        xyj._timer = setInterval(function () {
            var timeTime = calcTime(xyj._time)
            renderTime(timeTime[0], timeTime[1], timeTime[2]);
            xyj._time--;
        }, 1500);
    }

    window.setInterval(function () {
        window.refreshTime();
    }, 10000);

    // 播报弹窗
    function showMsg(msg) {
        if (xyj._msgTimer) {
            // 当前存在播报
        } else {
            // 当前没有播报
            $('.pop-success').text(msg)
            $('.pop-success').addClass('show')
            xyj._msgTimer = setTimeout(function () {
                $('.pop-success').removeClass('show')
            }, 6000)
        }
    }

    // 浮点数乘法
    function accMul(arg1, arg2) {
        var m = 0
        var s1 = arg1.toString()
        var s2 = arg2.toString()
        try {
            m += s1.split('.')[1].length
        } catch (e) {
        }
        try {
            m += s2.split('.')[1].length
        } catch (e) {
        }
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
    }

    function accDiv(arg1, arg2) {
        var t1 = 0
        var t2 = 0
        var r1
        var r2
        try {
            t1 = arg1.toString().split('.')[1].length
        } catch (e) {
        }
        try {
            t2 = arg2.toString().split('.')[1].length
        } catch (e) {
        }
        r1 = Number(arg1.toString().replace('.', ''))
        r2 = Number(arg2.toString().replace('.', ''))
        return (r1 / r2) * Math.pow(10, t2 - t1)
    }

    function formatNum8(num) {
        return accDiv(Math.floor(accMul(Number(num), Math.pow(10, 8))), Math.pow(10, 8));
    }

    function formatNum6(num) {
        return accDiv(Math.floor(accMul(Number(num), Math.pow(10, 6))), Math.pow(10, 6));
    }

    window.formatNum6 = formatNum6;

    function formatNum4(num) {
        return accDiv(Math.floor(accMul(Number(num), Math.pow(10, 4))), Math.pow(10, 4));
    }

    function formatNum3(num) {
        return accDiv(Math.floor(accMul(Number(num), Math.pow(10, 3))), Math.pow(10, 3));
    }

    function formatNum2(num) {
        return accDiv(Math.floor(accMul(Number(num), Math.pow(10, 2))), Math.pow(10, 2));
    }

    // 渲染单价
    function renderPrice() {
        xyj.iWantXKeys(xyj._keyNums, function (error, data) {
            if (error) {
                return;
            }
            xyj._allPrice = Number(data);
            $('#ethCount').text('@ ' + formatNum8(data).toString() + ' ETH');
        });
    }


    // 获取Key单价
    function getBuyPrice(fn) {
        fn && fn();
        renderPrice();
    }


    // 获取邀请者账号
    function getAdviceHash() {
        var str = window.location.pathname.slice(1);
        var type;
        if (str === '') {
            type = 'addr';
            str = getDefaultAdvisor();
        } else if (str.length > 32) {
            // addr
            type = 'addr';
        } else if (!isNaN(Number(str))) {
            // id
            type = 'id';
            str = Number(str);
        } else {
            // name
            type = 'name';
        }
        return {
            type: type,
            str: str
        }
    }

    function getRegisterName() {
        return $.trim($('#nameInput').val());
    }

    function isVerifyName(name) {
        var regaz = /^[a-z0-9\-\s]+$/;
        var regonlyNum = /^[0-9]+$/;
        return name.length <= 32 && regaz.test(name) && !regonlyNum.test(name) && name.indexOf('  ') === -1;
    }

    function getRandomName() {
        var getRandomKey = function (list) {
            return Math.floor(Math.random() * list.length);
        }
        var nouns = ["ninja", "truce", "harj", "finney", "szabo", "gwei", "laser", "justo", "satoshi", "mantso", "3D", "inventor", "theShocker", "aritz", "sumpunk", "cryptoknight", "randazz", "kadaz", "daok", "shenron", "notreally", "thecrypt", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];

        var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "harjd", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];

        return nouns[getRandomKey(nouns)] + ' ' + adjectives[getRandomKey(adjectives)];
    }

//-----------------------------------------------------------------------------------------------------------------------------------------------

    xyj._keyNums = 1

    window.refreshTime = function () {
        // 获取合约剩余时间
        xyj.getTimeLeft(function (error, time) {
            if (error) {
                console.log(error);
            } else {
                console.log(time);
                if ((time.toString() !== js_currTime.toString()) || time.toString() === '0') {
                    js_currTime = time
                    updateInterval(time === 0 ? -1 : time);
                }
            }
        });
    };
    window.refreshTime();


    $('#count').on('input', function () {
        var keyNums = Number($(this).val())
        if (keyNums === 0 || isNaN(keyNums)) {
            xyj._keyNums = 1;
        } else {
            xyj._keyNums = keyNums;
        }
        renderPrice();
    })

    // Key输入框事件
    $('#count').keyup(function () {
        var keyNums = Number($(this).val())
        if (keyNums === 0 || isNaN(keyNums)) {
            xyj._keyNums = 1;
        } else {
            xyj._keyNums = keyNums;
        }
        renderPrice();
    });

    // 增加投注Key点击事件
    $('.count-container').on('click', '.count-wrapper', function () {
        var keyNums = Number($(this).attr('data-num'));
        if (!(keyNums === 0 || isNaN(keyNums))) {
            xyj._keyNums = xyj._keyNums + parseInt(keyNums, 10);
            $('#count').val(xyj._keyNums);
            renderPrice();
        }
    });

    getBuyPrice();
    // 实时刷新Key单价
    xyj._keyPriceTimer = setInterval(function () {
        getBuyPrice();
    }, 10000);

    // 选择队伍点击事件
    $('.team-container').on('click', '.team-wrapper', function () {
        $('.team-wrapper').removeClass('team-wrapper--checked');
        $(this).addClass('team-wrapper--checked');
        var team = $(this).attr('data-team');
        var teamId = {
            'shifu': 0,
            'wukong': 2,
            'bajie': 3,
            'shaseng': 1
        }[team];
        xyj._team = teamId;
    });

    // 默认选钟唐僧队
    xyj._team = 2;

    window.refreshPersonInfo = function () {
        // 渲染邀请信息和个人盈利
        getAccounts(function (account) {
            xyj.getPlayerInfoByAddress(account, function (error, data) {
                $('.js_noid, .js_hasid').addClass('hide');
                if (error) {
                    return
                }
                console.log(data)
                if (data && data.inviteName !== '') {
                    // 有推广代号
                    $('.js_hasid').removeClass('hide');
                    $('#mylink').text('http://www.exitedscam.me/' + account);
                    $('#idlink').text('http://www.exitedscam.me/' + (data.id === '0' ? '' : data.id));
                    $('#namelink').text('http://www.exitedscam.me/' + encodeURIComponent(data.inviteName));
                    xyj._inviteName = data.inviteName;
                } else {
                    // 没有推广代号
                    $('.js_noid').removeClass('hide');
                }
                $('.list-content .share-award').text(formatNum6(data.shareEarn).toString() + ' ETH');
                $('.team-grid .share-award').text(formatNum6(data.shareEarn).toString());
                $('.list-content .owner-keys').text(data.keys.toString() + _(' 个'));

                getBuyPrice(function () {
                    $('.team-grid .js_your_key').text(Number(data.keys));
                });

                $('.list-content .total-award').text(formatNum6(data.totalEarn).toString() + ' ETH');
                $('.round-list .total-award-usdt').text('= ' + formatUSDT(data.totalEarn));
                $('.team-grid .total-award-usdt').text('≙ ' + formatUSDT(data.totalEarn) + ' USDT');
                $('.team-grid .total-award').text(formatNum6(data.totalEarn).toString());
            });
        }, true);
    };
    window.refreshPersonInfo();

    $('.btn-buy, .js_buy').click(function () {
        var num = Number($('#count').val());
        var isJSBuy = $(this).hasClass('js_buy');
        if (isNaN(num) || parseInt($('#count').val(), 10) === 0 || num !== parseInt(num, 10) || num < 0) {
            alertify.alert('请输入正确的金钻数量');
            return;
        }
        getAccounts(function (account) {
            if (account) {
                // 购买Key，自己购买传0，通过邀请购买传邀请者账号
                showLoading();
                var data = getAdviceHash();
                var fuc = {
                    id: xyj.buyXid,
                    addr: xyj.buyXaddr,
                    name: xyj.buyXname
                }[data.type]
                fuc(data.str, Number(xyj._team), xyj._allPrice, function (error, data) {
                    // TODO: 购买成功后
                    hideLoading();
                    if (error) {
                        alertify.error(_('已取消购买金钻'));
                    } else {
                        alertify.success(_('下单成功'));
                    }
                });
            }
        });
    });

    $('.js_btn_earn').click(function () {
        var num = Number($('#count').val());
        var isJSBuy = $(this).hasClass('js_buy');
        if (isNaN(num) || parseInt($('#count').val(), 10) === 0 || num !== parseInt(num, 10) || num < 0) {
            alertify.alert('请输入正确的金钻数量');
            return;
        }
        getAccounts(function (account) {
            if (account) {
                xyj.getPlayerInfoByAddress(account, function (err, msg) {
                    if (err) {
                        return false
                    }
                    if (msg && parseFloat(msg.totalEarn) < parseFloat(xyj._allPrice)) {
                        alertify.error(_('你的收益金额不足'));
                        return false
                    }
                    console.log(xyj)  ;
                    // 购买Key，自己购买传0，通过邀请购买传邀请者账号
                    showLoading();
                    var data = getAdviceHash();
                    var fuc = {
                        id: xyj.reLoadXid,
                        addr: xyj.reLoadXaddr,
                        name: xyj.reLoadXname
                    }[data.type]
                    fuc(data.str, Number(xyj._team), xyj._allPrice, function (error, data) {
                        // TODO: 购买成功后
                        hideLoading();
                        if (error) {
                            alertify.error(_('已取消购买金钻'));
                        } else {
                            alertify.success(_('下单成功'));
                        }
                    });
                })

            }
        });
    })


    window.refreshInfo = function () {
        // 奖池和团队数据
        xyj.getCurrentRoundInfo(function (error, data) {
            if (error) {
                return
            }
            getBuyPrice(function () {
                if (formatNum4(data.currPot).toString() === '0') {
                    $('.banner .msg3, .total_prize_pool').html('<p>0.0000</p>');
                } else {
                    $('.banner .msg3, .total_prize_pool').html('<p>' + formatNum4(data.currPot).toString() + '</p>');
                }
                $('.list-content .js_wukong').text(formatNum4(data.sneks_2).toString());
                $('.list-content .js_shifu').text(formatNum4(data.whales_0).toString());
                $('.list-content .js_bajie').text(formatNum4(data.bulls_3).toString());
                $('.list-content .js_shaseng').text(formatNum4(data.bears_1).toString());


                $('.total-usdt').text('= ' + formatUSDT(data.currPot) + ' USDT');
                console.log(data.purchasedTime, formatNum2(data.purchasedTime))
                $('.js_year').text(data.purchasedTime > 1 ? formatNum2(data.purchasedTime).toString() : formatNum4(data.purchasedTime).toString());
                $('.js_second').text(numberComma(data.purchasedSeconds));
                $('.js_round').text(' ' + data.roundNum);
                /* hide lastBuy Name */
                // if (data.lastBuyName && data.lastBuyName !== '') {
                //     $('.round-list .winner').removeClass('hide');
                //     $('.round-list .winner .account').text(data.lastBuyName);
                // }
            })
        });
    };
    window.refreshInfo();


    xyj.getRound(function (error, data) {
        if (error) {
            return;
        }
        $('.js_keys_value').text(formatNum3(data.totalEth));
        $('.js_keys_usdt').text('≙ ' + formatUSDT(data.totalEth));
        $('.js_dis_value').text(formatNum3(data.distributionEth));
        $('.js_dis_usdt').text('≙ ' + formatUSDT(data.distributionEth));
    })


    // 新建名字 按钮点击事件
    $('.js_buyceo').click(function () {
        if (xyj._account && xyj._account !== '') {
            $('#vanity').addClass('show');
            $('#nameInput').val('');
        } else {
            alertify.error(_('请先登陆您的Metamask钱包'));
        }
    });

    // 创建名字弹窗关闭事件
    $('#vanity .col-auto').click(closeVanity);

    // 创建名字点击事件
    $('#namePurchase').click(function () {
        getAccounts(function (account) {
            if (account) {
                var data = getAdviceHash();
                var name = getRegisterName();
                if (isVerifyName(name)) {
                    showLoading();
                    var fuc = {
                        id: xyj.registerNameXID,
                        addr: xyj.registerNameXaddr,
                        name: xyj.registerNameXname
                    }[data.type]
                    fuc(name, data.str, function (error) {
                        // TODO: 购买名字成功后
                        hideLoading();
                        if (error) {
                            alertify.error(_('已取消注册推广代号'));
                        } else {
                            closeVanity();
                            alertify.success(_('下单成功'));
                        }

                    });
                } else {
                    alertify.alert(_('输入的推广代号不符合规则'));
                }
            }
        });
    });

    // 随机数点击事件
    $('#randomName').click(function () {
        $('#nameInput').val(getRandomName());
    });

    // 提现点击事件
    $('.js_withdraw').click(function () {
        if (xyj._account && xyj._account !== '') {
            showLoading();
            xyj.withdraw(function (error, res) {
                if (error) {
                    alertify.error(_('提现已取消'));
                } else {
                    alertify.success(_('下单成功'));
                }
                hideLoading();
                console.log('提现', error, res)
            })
        } else {
            alertify.error(_('请先登陆您的Metamask钱包'));
        }
    });

    $('.js_share').click(function () {
        $('#sharing-rewards span').eq(2).click();
        if (!(xyj._account && xyj._account !== '')) {
            alertify.error(_('请先登陆您的Metamask钱包'));
        }
    })

    var clip = new ClipboardJS('.js_copy_btn');
    clip.on('success', function () {
        alertify.success(_('复制成功'));
    })
    // clip.on('error',function () {
    //     alertify.error(_('复制失败'));
    // })

    var xyjindex = {
        showPop: function (a) {
            $(a).show(200)
        },
        closePop: function (a) {
            $(a).hide(200)
        }
    }

    /* trust 判断 */

    // 获取我的账号
    function getAccounts(fn, isRefresh) {
        xyj.getAccounts(function (error, account) {
            xyj._account = account;
            if ((error || account === '') && isRefresh !== true) {
                // 修改游戏提示  用弹窗形式
                if (!isPC()) {
                    /* mobile 端 */
                    if (!(window.navigator.userAgent.indexOf('Trust') > -1 || window.navigator.userAgent.indexOf('Cipher') > -1 || window.navigator.userAgent.indexOf('Toshi') > -1)) {
                        /* 弹窗 */
                        $('.js_showMobile').removeClass('hide')
                    }
                } else {
                    // pc 端
                    $('.js_showPc').removeClass('hide')
                }
                // alertify.error(_('请先登陆您的Metamask钱包'));
            } else {
                fn(account);
            }
        })
    }

    function isPC() {
        var userAgentInfo = window.navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }


})

