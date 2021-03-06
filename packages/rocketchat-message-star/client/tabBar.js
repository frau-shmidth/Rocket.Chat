import { Meteor } from 'meteor/meteor';
import { RocketChat } from 'meteor/rocketchat:lib';

Meteor.startup(function() {
	RocketChat.TabBar.addButton({
		groups: ['channel', 'group', 'direct'],
		id: 'starred-messages',
		i18nTitle: 'Starred_Messages',
		icon: 'star',
		template: 'starredMessages',
		order: 3,
	});
});
