/**
 * License: MIT
 * Credits: https://stackoverflow.com/a/44384948
 * Repo: https://github.com/swissup/range-slider
 */

class RangeSlider extends HTMLElement {
    connectedCallback() {
        setTimeout(() => this.addMarkup(), 0);
        this.addEventListener('touchstart', this.onMouseDown.bind(this), { passive: true });
        this.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.addEventListener('touchend', this.onMouseUp.bind(this));
        this.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.addEventListener('input', this.onInput.bind(this));
    }

    get value() {
        return [this.min.valueAsNumber, this.max.valueAsNumber].sort((a, b) => a - b);
    }

    set value(value) {
        this.min.value = Math.min(...value);
        this.max.value = Math.max(...value);
    }

    addMarkup() {
        if (!this.querySelector(':nth-child(1)')) {
            this.insertAdjacentHTML('afterbegin', [
                '<input class="range" type="range"/>',
                '<input class="range" type="range"/>',
                '<input class="filler" disabled type="range"/>',
            ].join(''));
        }

        this.initMinMaxElements();

        let mapping = {
            step: this.getAttribute('step') || 1,
            min: this.getAttribute('min') || 0,
            max: this.getAttribute('max') || 100
        };

        for (let [key, value] of Object.entries(mapping)) {
            this.min[key] = value;
            this.max[key] = value;
        };

        let value = (this.getAttribute('value') || '').split('-').filter((val) => val);

        if (value.length) {
            this.min.value = value[0];
            this.max.value = value[1] || this.max.max;
        } else {
            this.min.value = this.min.min;
            this.max.value = this.max.max;
        }
    }

    initMinMaxElements() {
        this.min = this.querySelector(':nth-child(1)');
        this.max = this.querySelector(':nth-child(2)');

        let name = this.getAttribute('name');

        if (name) {
            this.min.name = name + '[min]';
            this.max.name = name + '[max]';
        }
    }

    /**
     * Allow to move min above max and vice versa
     */
    onMouseDown() {
        this.constraint = (this.max.valueAsNumber - this.min.valueAsNumber) > Math.min(this.min.step, 1) * 5;
    }

    /**
     * If min thumb was moved above max (or vice versa) - swap them
     */
    onMouseUp() {
        if (this.constraint) {
            return;
        }

        this.constraint = true;

        if (this.min.valueAsNumber < this.max.valueAsNumber) {
            return;
        }

        this.insertBefore(this.max, this.min);
        this.initMinMaxElements();
    }

    /**
     * Contstrain thumbs inside their min/max values
     */
    onInput(event) {
        if (this.constraint) {
            let el = event.target;

            if (el === this.min) {
                if (el.valueAsNumber > this.max.valueAsNumber) {
                    el.value = this.max.value;
                }
            } else if (el.valueAsNumber < this.min.valueAsNumber) {
                el.value = this.min.value;
            }
        }

        this.dispatchEvent(new Event('range:input', {
            bubbles: true
        }));
    }

    disconnectedCallback() {
        this.removeEventListener('touchstart', this.onMouseDown);
        this.removeEventListener('mousedown', this.onMouseDown);
        this.removeEventListener('touchend', this.onMouseUp);
        this.removeEventListener('mouseup', this.onMouseUp);
        this.removeEventListener('input', this.onInput);
    }
}

customElements.define('range-slider', RangeSlider);
