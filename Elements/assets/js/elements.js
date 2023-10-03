let els = document.querySelectorAll(".use-tooltip[title]")
for(const el of els) {
    const tooltip = document.createElement("div")
    tooltip.classList.add("tooltip");
    tooltip.setAttribute("role", "tooltip")
    tooltip.innerHTML = `
    ${el.getAttribute("title")}
    <div class="arrow"></div>
    `

    el.setAttribute("title", "");
    document.body.append(tooltip)
    const popperInstance = Popper.createPopper(el, tooltip, {
        placement: el.getAttribute("placement")?.trim()?.length > 0 ? el.getAttribute("placement") : "left",
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });
    function show() {
        tooltip.setAttribute('data-show', '');


        // We need to tell Popper to update the tooltip position
        // after we show the tooltip, otherwise it will be incorrect
        popperInstance.update();
    }

    function hide() {
        tooltip.removeAttribute('data-show');
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach(event => {
        el.addEventListener(event, show);
    });

    hideEvents.forEach(event => {
        el.addEventListener(event, hide);
    });
}
