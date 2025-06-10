document.addEventListener('DOMContentLoaded', function () {
    const datepickerContainer = document.getElementById('datepicker-container');
    const dateRangePicker = new DateRangePicker(datepickerContainer, {
        format: 'dd/mm/yyyy',
        language: 'es',
        minDate: new Date(),
        autohide: true,
        todayBtn: true,
        clearBtn: true,
    });
});