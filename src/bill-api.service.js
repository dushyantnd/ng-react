export default ['$http', function ($http) {

  this.fetchBill = (billingPeriod) => {

    return $http.get(`/api/bill-${billingPeriod}.json`)
      .then((successResponse) => successResponse.data);

  };

}];