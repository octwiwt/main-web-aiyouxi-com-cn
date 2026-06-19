(function() {
    'use strict';

    var CONFIG = {
        siteUrl: 'https://main-web-aiyouxiyou.com.cn',
        keywords: ['爱游戏', '娱乐', '棋牌', '电玩', '街机'],
        cardTitle: '平台提示',
        cardMessage: '当前页面为辅助信息展示，所有操作请以主站为准。',
        badgeColor: '#2c3e50',
        accentColor: '#e74c3c'
    };

    function createCard() {
        var card = document.createElement('div');
        card.className = 'site-helper-card';
        card.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;background:#fff;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.15);padding:16px;max-width:300px;font-family:sans-serif;font-size:14px;color:#333;line-height:1.5;';

        var title = document.createElement('h4');
        title.textContent = CONFIG.cardTitle;
        title.style.cssText = 'margin:0 0 8px;color:' + CONFIG.accentColor + ';font-size:16px;';

        var message = document.createElement('p');
        message.textContent = CONFIG.cardMessage;
        message.style.cssText = 'margin:0 0 12px;';

        var link = document.createElement('a');
        link.href = CONFIG.siteUrl;
        link.textContent = '访问主站 →';
        link.target = '_blank';
        link.style.cssText = 'display:inline-block;padding:6px 12px;background:' + CONFIG.accentColor + ';color:#fff;border-radius:4px;text-decoration:none;font-weight:bold;';

        card.appendChild(title);
        card.appendChild(message);
        card.appendChild(link);
        document.body.appendChild(card);
    }

    function createBadges() {
        var badgeContainer = document.createElement('div');
        badgeContainer.className = 'site-helper-badges';
        badgeContainer.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:9999;display:flex;flex-wrap:wrap;gap:6px;max-width:260px;';

        CONFIG.keywords.forEach(function(keyword) {
            var badge = document.createElement('span');
            badge.textContent = keyword;
            badge.style.cssText = 'display:inline-block;padding:4px 10px;background:' + CONFIG.badgeColor + ';color:#fff;border-radius:12px;font-size:12px;font-weight:600;letter-spacing:0.5px;';
            badgeContainer.appendChild(badge);
        });

        document.body.appendChild(badgeContainer);
    }

    function showAccessNotice() {
        var notice = document.createElement('div');
        notice.className = 'site-helper-notice';
        notice.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:9999;background:#f1c40f;color:#333;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:bold;box-shadow:0 2px 8px rgba(0,0,0,0.2);';

        var now = new Date();
        var timeStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0') + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
        notice.textContent = '欢迎访问 ' + CONFIG.siteUrl + ' | 当前时间: ' + timeStr;

        document.body.appendChild(notice);

        setTimeout(function() {
            if (notice.parentNode) {
                notice.parentNode.removeChild(notice);
            }
        }, 8000);
    }

    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                createCard();
                createBadges();
                showAccessNotice();
            });
        } else {
            createCard();
            createBadges();
            showAccessNotice();
        }
    }

    init();
})();