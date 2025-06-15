// DOM要素がロードされた後に実行
document.addEventListener('DOMContentLoaded', function() {
    // スムーススクロール
    setupSmoothScroll();
    
    // お問い合わせフォーム処理
    setupContactForm();
    
    // CTAボタンのイベント設定
    setupCTAButton();
});

// スムーススクロール機能
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

// お問い合わせフォームの処理
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータの取得
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // バリデーション
            if (!name || !email || !message) {
                alert('すべてのフィールドを入力してください。');
                return;
            }
            
            // フォーム送信のシミュレーション
            console.log('送信されたデータ:', { name, email, message });
            alert('お問い合わせありがとうございます！\n実際のシステムでは、ここでデータが送信されます。');
            
            // フォームのリセット
            contactForm.reset();
        });
    }
}

// CTAボタンのイベント設定
function setupCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // 概要セクションへスクロール
            const aboutSection = document.getElementById('about');
            
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ウィンドウがスクロールされたときのイベント
window.addEventListener('scroll', function() {
    // スクロール位置に応じたアニメーションなどを追加できます
    const scrollPosition = window.scrollY;
    
    // 例: ヘッダーのスタイル変更
    const header = document.querySelector('header');
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
