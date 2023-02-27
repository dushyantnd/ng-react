const template = `
  <div class="card">
    <div class="card-header">
      Bill for period {{ $ctrl.bill.id }}
    </div>
    <div class="card-body">
      <p>
        Amount due: €{{ $ctrl.bill.amount | number }}
      </p>
      <p>
        Please pay by: {{ $ctrl.bill.dueDate | date }}.
      </p>
    </div>
  </div>
`;

export default {
  template,
  bindings: {
    bill: '<'
  }
};
