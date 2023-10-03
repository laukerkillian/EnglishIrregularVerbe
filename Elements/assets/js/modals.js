const checkbox_modals = document.querySelectorAll(".modal-checkbox")
for(const checkbox_modal of checkbox_modals) {
    checkbox_modal.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.body.classList.add("modal-open")
        } else {
            document.body.classList.remove("modal-open")
        }
    })
}
