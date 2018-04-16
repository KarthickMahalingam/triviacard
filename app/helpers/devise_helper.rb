module DeviseHelper
  def devise_error_messages!
    flash_alerts = []
    unless flash.empty?
      flash_alerts.push(flash[:error]) if flash[:error]
      flash_alerts.push(flash[:alert]) if flash[:alert]
      flash_alerts.push(flash[:notice]) if flash[:notice]
    end
    return '' if resource.errors.empty? && flash_alerts.empty?
    errors = resource.errors.empty? ? flash_alerts : resource.errors.full_messages
    messages = errors.map {|msg|
      String.new(" Materialize.toast('" + msg + "' ,4000); ")
    }.join
    messages = "<script> #{messages} </script>".html_safe
  end
end