MenuButton.prototype.open = function () {
    this.button.setAttribute('aria-expanded', true);
    this.menu.hidden = false;
    this.menu.querySelector(':not([disabled])').focus();

    return this;
}
this.button.addEventListener('keydown', function (e) {
    if (e.keyCode === 40) {
        this.open();
    }
}.bind(this));

exampleMenuButton = new MenuButton(document.querySelector('[aria-haspopup]'));
console.log(document.querySelector('[aria-haspopup]'))

exampleMenuButton.open();
