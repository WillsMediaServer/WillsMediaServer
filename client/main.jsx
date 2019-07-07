import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import "/imports/styles/main.scss";

import App from '/imports/ui/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
