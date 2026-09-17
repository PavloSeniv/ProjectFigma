/* ============================================================
   Alivio — site scripts (vanilla JS)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ---- Keep the footer year current ---- */
    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- Toast helper ---- */
    var toastEl = document.getElementById('appToast');
    var toastTitle = document.getElementById('toastTitle');
    var toastBody = document.getElementById('toastBody');

    function showToast(message, title) {
        if (!toastEl || typeof bootstrap === 'undefined') return;
        if (toastTitle) toastTitle.textContent = title || 'Alivio';
        if (toastBody) toastBody.textContent = message;
        var toast = bootstrap.Toast.getOrCreateInstance(toastEl);
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

    /* Sign-in form */
    handleForm('signInForm', function () {
        closeModal('signInModal');
        showToast('You are signed in. Welcome back to Alivio! (demo)', 'Signed in');
    });

    /* Start-trial form */
    handleForm('trialForm', function (form) {
        var focus = form.querySelector('#trFocus').value;
        closeModal('trialModal');
        showToast('Your free trial is ready — we tailored it for "' + focus + '". Enjoy!',
            'Trial started');
    });

    /* Newsletter form */
    handleForm('newsletterForm', function () {
        showToast('Thanks for subscribing! We will keep you posted.', 'Subscribed');
    });
});
