var woocommerceCustom = ( function($) {
  return {
    init: function() {
      // All the fields to sync
      var fields = [
        'first_name',
        'last_name',
        'company',
        'address_1',
        'address_2',
        'city',
        'state',
        'postcode',
        'country',
        'email',
        'phone'
      ];
      var billing = '#billing_';
      var shipping = '#shipping_';
      var $checkbox = $('#match-billing-checkbox');

      function syncField(field) {
        if ($checkbox[0].checked) {
          var $field = $(shipping + field);
          var value = $(billing + field).val();
          $field.val(value).trigger('change');

          // Rebind state and zip codes on country change
          if (field == 'country') {
            setTimeout(function () {
              bindField('state');
              bindField('postcode');
            }, 100);
          }
        }
      }

      // Sync values on change
      $checkbox.on('change', function () {
        fields.forEach(function (field) {
          syncField(field);
        });
      });

      fields.forEach(function (field) {
        bindField(field);
      });

      // Bind field
      function bindField(field) {
        // Sync billing fields to shipping
        $(billing + field).on('keyup.rocky change.rocky', function () {
          syncField(field);
        });

        // Disable checkbox on shipping change
        $(shipping + field).on('keyup.rocky mouseup.rocky', function () {
          $checkbox.prop('checked', false);
        });
      }
    }
  };

})(jQuery);
