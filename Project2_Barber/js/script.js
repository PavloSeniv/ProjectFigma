/* ============================================================
   Barber — site scripts (vanilla JS, no jQuery)
   ============================================================ */

/* ---- WebP support detection ------------------------------
   Adds a `.webp` or `.no-webp` class to <body> so CSS can react
   to it if needed. The <picture>/<source> markup already handles
   image format selection natively; this is just a helper hook. */
(function detectWebP() {
    var img = new Image();
    img.onload = img.onerror = function () {
        document.body.classList.add(img.height === 2 ? 'webp' : 'no-webp');
    };
    img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
})();

document.addEventListener('DOMContentLoaded', function () {

    /* ---- Toast helper ---- */
    var toastEl = document.getElementById('appToast');
    var toastTitle = document.getElementById('toastTitle');
    var toastBody = document.getElementById('toastBody');

    function showToast(message, title) {
        if (!toastEl || typeof bootstrap === 'undefined') return;
        if (toastTitle) toastTitle.textContent = title || 'Barber';
        if (toastBody) toastBody.textContent = message;
        // getOrCreateInstance only exists in Bootstrap >= 5.1, so stay compatible
        var toast = bootstrap.Toast.getInstance(toastEl) || new bootstrap.Toast(toastEl);
        toast.show();
    }

    function closeModal(id) {
        var el = document.getElementById(id);
        if (el && typeof bootstrap !== 'undefined') {
            var m = bootstrap.Modal.getInstance(el);
            if (m) m.hide();
        }
    }

    /* ---- Bootstrap-style validation + submit handling ---- */
    function handleForm(formId, onValid) {
        var form = document.getElementById(formId);
        if (!form) return;
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }
            form.classList.remove('was-validated');
            onValid(form);
            form.reset();
        });
    }

    /* Booking form */
    handleForm('bookingForm', function (form) {
        var service = form.querySelector('#bkService').value;
        var date = form.querySelector('#bkDate').value;
        var time = form.querySelector('#bkTime').value;
        closeModal('bookingModal');
        showToast('Your ' + service + ' is booked for ' + date + ' at ' + time + '. See you soon!',
            'Appointment confirmed');
    });

    /* Sign-in form */
    handleForm('signInForm', function () {
        closeModal('signInModal');
        showToast('You are signed in. (demo)', 'Welcome back');
    });

    /* Newsletter form */
    handleForm('newsletterForm', function () {
        showToast('Thanks for subscribing! Check your inbox for a confirmation.', 'Subscribed');
    });

    /* ---- Preselect service when "Book" is clicked on a card ---- */
    document.querySelectorAll('.book-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var service = btn.getAttribute('data-service');
            var select = document.getElementById('bkService');
            if (select && service) select.value = service;
        });
    });

    /* ---- Notifications button ---- */
    var notifBtn = document.getElementById('notifBtn');
    if (notifBtn) {
        notifBtn.addEventListener('click', function () {
            showToast('You have no new notifications right now.', 'Notifications');
        });
    }

    /* ---- Gallery lightbox ---- */
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxEl = document.getElementById('lightboxModal');
    document.querySelectorAll('.gallery-item').forEach(function (item) {
        item.addEventListener('click', function () {
            if (!lightboxImg || !lightboxEl || typeof bootstrap === 'undefined') return;
            var full = item.getAttribute('data-full');
            var innerImg = item.querySelector('img');
            lightboxImg.src = full;
            lightboxImg.alt = innerImg ? innerImg.alt : 'Gallery photo';
            var lb = bootstrap.Modal.getInstance(lightboxEl) || new bootstrap.Modal(lightboxEl);
            lb.show();
        });
    });

    /* ---- View all ---- */
    var viewAllBtn = document.getElementById('viewAllBtn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function () {
            showToast('Follow us on social media to see our full portfolio!', 'More work');
        });
    }
});
