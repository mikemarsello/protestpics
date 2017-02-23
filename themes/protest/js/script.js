/**
 * @file
 * Extends methods from core/misc/form.js.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Behavior for "forms_has_error_value_toggle" theme setting.
   */
  Drupal.behaviors.customBehavior = {
    attach: function (context) {
      // $('#node-protest-picture-form .form-actions button.form-submit').css('background', 'yellow!important');
      $('body').css('background', 'yellow!important!important');
    }
  };


})(jQuery, this, Drupal, drupalSettings);
