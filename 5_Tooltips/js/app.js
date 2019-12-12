function init() {

    const tooltips = document.querySelectorAll('.tooltip');
    
    function showTooltip(event) {
        // Stworzenie elementu:
        // <span class="tooltipText">Text tooltipa</span>
        const tooltipText = document.createElement('span');
        tooltipText.classList.add('tooltipText');
        tooltipText.innerText = this.dataset.text;
        this.appendChild(tooltipText);
    }
    function hideTooltip(event) {
        const tooltipText = this.querySelector('span');
        this.removeChild(tooltipText);
    }
    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', showTooltip);
    });
    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseout', hideTooltip);
    });
}
document.addEventListener('DOMContentLoaded', init);