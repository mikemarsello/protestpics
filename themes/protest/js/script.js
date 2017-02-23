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
      $('.node-add-page h1.page-header').hide();
      $('.node-add-page form').css('margin-top','20px');
      $('.node-add-page form .form-actions button').text('Submit for Review').css('margin-bottom','40px');
    }
  };


})(jQuery, this, Drupal, drupalSettings);
