require 'rails_helper'
require 'spec_helper'
RSpec.describe Users::RegistrationsController, type: :controller do
  let(:user) {FactoryBot.create(:user)}
  controller do
    def after_sign_up_path_for(resource)
      super resource
    end
  end

  describe 'registrations_controller' do
    before do
      @attr = {
          email: FFaker::Internet.email,
          first_name: FFaker::Name.first_name,
          last_name: FFaker::Name.last_name,
          password: '12344566',
          password_confirmation: '12344566'
      }
    end
    it 'should redirect to dashboard index page after signin' do
      path = controller.after_sign_up_path_for user
      expect(path).to eq dashboard_index_path
    end

    it 'should create a user' do
      lambda do
        post :create, user: @attr
        response.should redirect_to(root_path)
      end
    end
  end
end