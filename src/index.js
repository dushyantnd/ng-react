import angular from 'angular';
import { react2angular } from 'react2angular';

import billApiService from './bill-api.service.js';
import bill from './bill.component.js';
// import billingPeriodSelect from './billing-period-select.component.js';
import BillingPeriodSelect from './BillingPeriodSelect.jsx';
import homePage from './home-page.component.js';

angular.module('billViewer', [])
  .service('billApiService', billApiService)
  .component('bill', bill)
  .component('billingPeriodSelect', react2angular(BillingPeriodSelect, [
    'billingPeriods',
    'onSelectBillingPeriod'
  ]))
  .component('homePage', homePage);