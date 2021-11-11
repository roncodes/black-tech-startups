import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
    @tracked isMobileMenuOpen = false;

    @action onInsert() {
        this.onAction('onInsert', ...arguments);
    }

    @action onAction(actionName, ...params) {
        if (typeof this.args[actionName] === 'function') {
            this.args[actionName](...params);
        }
    }

    @action toggleMobileMenu(explicit = null) {
		if (explicit !== null && typeof explicit !== 'boolean') {
			return this.toggleMobileMenu();
		}

		this.isMobileMenuOpen =
			explicit === null ? !this.isMobileMenuOpen : explicit;
	}

	@action closeMobileMenu() {
		this.toggleMobileMenu(false);
	}

	@action openMobileMenu() {
		this.toggleMobileMenu(true);
	}
}
