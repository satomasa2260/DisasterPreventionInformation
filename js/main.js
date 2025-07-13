// メインJavaScriptファイル
document.addEventListener('DOMContentLoaded', function() {
    // 現在の言語を取得（デフォルトは日本語）
    let currentLang = getCurrentLanguage();
    
    // 初期化
    initializeApp();
    
    // 言語切り替えイベントリスナー
    setupLanguageSwitcher();
    
    // スクロール制御
    setupScrollControls();
    
    // 緊急バナー制御
    // setupEmergencyBanner();
    
    // GPS機能（オプション）
    // setupGPSFeature();
    
    // アンカーリンクのスムーススクロール
    setupSmoothScrolling();
    
    // レスポンシブナビゲーション
    setupResponsiveNavigation();
    
    // パフォーマンス最適化
    setupPerformanceOptimizations();
    
    function initializeApp() {
        // 言語を設定
        setLanguage(currentLang);
        
        // アクセシビリティの設定
        setupAccessibility();
        
        // オフライン対応
        setupOfflineSupport();
        
        console.log('災害時情報アプリが初期化されました');
    }
    
    function getCurrentLanguage() {
        // URLパラメータから言語を取得
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        if (langParam && translations[langParam]) {
            return langParam;
        }
        
        // ブラウザの言語設定を確認
        const browserLang = navigator.language || navigator.userLanguage;
        const shortLang = browserLang.split('-')[0];
        
        if (translations[shortLang]) {
            return shortLang;
        }
        
        // デフォルトは日本語
        return 'ja';
    }
    
    function setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                if (translations[lang]) {
                    setLanguage(lang);
                    updateActiveButton(lang);
                    updateURL(lang);
                }
            });
        });
    }
    
    function setLanguage(lang) {
        currentLang = lang;
        
        // HTMLのlang属性を更新
        document.documentElement.lang = lang;
        
        // 全てのdata-i18n属性を持つ要素を更新
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // ページタイトルを更新
        updatePageTitle(lang);
        
        // ローカルストレージに言語設定を保存
        localStorage.setItem('preferred-language', lang);
        
        console.log(`言語が ${lang} に変更されました`);
    }
    
    function updateActiveButton(lang) {
        // 全ての言語ボタンからactiveクラスを削除
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 選択された言語のボタンにactiveクラスを追加
        const activeButton = document.querySelector(`[data-lang="${lang}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
    
    function updateURL(lang) {
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
    }
    
    function updatePageTitle(lang) {
        const titles = {
            ja: '災害時情報 - Disaster Information for Foreign Tourists',
            en: 'Disaster Information for Foreign Tourists',
            zh: '灾害信息 - 外国游客灾害信息',
            ko: '재해 정보 - 외국인 관광객 재해 정보'
        };
        
        if (titles[lang]) {
            document.title = titles[lang];
        }
    }
    
    function setupScrollControls() {
        const backToTopButton = document.getElementById('backToTop');
        
        // スクロールイベントリスナー
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // トップに戻るボタンのクリックイベント
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    function setupEmergencyBanner() {
        // 削除済み
    }
    
    function checkForEmergencyInfo() {
        // 削除済み
        return false;
    }
    
    function closeEmergencyBanner() {
        const emergencyBanner = document.getElementById('emergencyBanner');
        emergencyBanner.style.display = 'none';
        
        // ローカルストレージに閉じたことを記録
        localStorage.setItem('emergency-banner-closed', Date.now().toString());
    }
    
    // setupGPSFeature, showNearbyShelters 関連のコードを削除
    
    function setupSmoothScrolling() {
        // アンカーリンクのスムーススクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    function setupResponsiveNavigation() {
        // レスポンシブナビゲーションの設定
        const navCards = document.querySelectorAll('.nav-card');
        
        navCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // タッチデバイスでのタップ効果
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
    
    function setupAccessibility() {
        // キーボードナビゲーション
        document.addEventListener('keydown', function(e) {
            // ESCキーで緊急バナーを閉じる
            if (e.key === 'Escape') {
                const emergencyBanner = document.getElementById('emergencyBanner');
                if (emergencyBanner && emergencyBanner.style.display !== 'none') {
                    closeEmergencyBanner();
                }
            }
            
            // 言語切り替えのショートカット
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case '1':
                        e.preventDefault();
                        setLanguage('ja');
                        break;
                    case '2':
                        e.preventDefault();
                        setLanguage('en');
                        break;
                    case '3':
                        e.preventDefault();
                        setLanguage('zh');
                        break;
                    case '4':
                        e.preventDefault();
                        setLanguage('ko');
                        break;
                }
            }
        });
        
        // フォーカス管理
        const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid #007bff';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
            });
        });
    }
    
    function setupOfflineSupport() {
        // Service Workerの登録（オフライン対応）
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('Service Worker登録成功:', registration.scope);
                })
                .catch(function(error) {
                    console.log('Service Worker登録失敗:', error);
                });
        }
        
        // オフライン検出
        window.addEventListener('online', function() {
            console.log('オンラインに復帰しました');
            // 必要に応じてデータを更新
        });
        
        window.addEventListener('offline', function() {
            console.log('オフラインになりました');
            // オフライン時の処理
        });
    }
    
    function setupPerformanceOptimizations() {
        // 画像の遅延読み込み
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // スクロール最適化
        let ticking = false;
        function updateOnScroll() {
            // スクロール時の処理
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        });
    }
});

// グローバル関数（HTMLから直接呼び出し用）
// function closeEmergencyBanner() {
//     const emergencyBanner = document.getElementById('emergencyBanner');
//     if (emergencyBanner) {
//         emergencyBanner.style.display = 'none';
//         localStorage.setItem('emergency-banner-closed', Date.now().toString());
//     }
// }

// オフライン情報モーダル制御
function showOfflineInfo() {
    const modal = document.getElementById('offlineModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // スクロール防止
    }
}

function closeOfflineModal() {
    const modal = document.getElementById('offlineModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // スクロール復活
    }
}

// モーダル外クリックで閉じる
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('offlineModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeOfflineModal();
            }
        });
    }
});

// ユーティリティ関数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('JavaScriptエラー:', e.error);
    // 実際の実装では、エラーをログサービスに送信
});

// パフォーマンス監視
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('ページ読み込み時間:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
} 